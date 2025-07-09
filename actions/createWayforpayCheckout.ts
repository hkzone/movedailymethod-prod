'use server';

import { Wayforpay, TCartElement } from 'wayforpay-ts-integration';
import baseUrl from '@/lib/baseUrl';
import getCourseById from '@/sanity/lib/courses/getCourseById';
import { createStudentIfNotExists } from '@/sanity/lib/student/createStudentIfNotExists';
import { clerkClient } from '@clerk/nextjs/server';
import { createEnrollment } from '@/sanity/lib/student/createEnrollment';

interface WayforpayCheckoutResult {
  type: 'form' | 'redirect';
  data: string | null; // HTML form string for Wayforpay, or redirect path for free course
  error?: string;
}

export async function createWayforpayCheckout(
  courseId: string,
  userId: string
): Promise<WayforpayCheckoutResult> {
  try {
    // Parallelize course and user data fetching
    const [course, clerkUser] = await Promise.all([
      getCourseById(courseId),
      (await clerkClient()).users.getUser(userId),
    ]);

    const { emailAddresses, firstName, lastName, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress;

    if (!emailAddresses || !email) {
      return { type: 'redirect', data: null, error: 'User details not found' };
    }
    if (!course) {
      return { type: 'redirect', data: null, error: 'Course not found' };
    }

    const sanityUser = await createStudentIfNotExists({
      clerkId: userId,
      email: email || '',
      firstName: firstName || email,
      lastName: lastName || '',
      imageUrl: imageUrl || '',
    });

    if (!sanityUser) {
      return {
        type: 'redirect',
        data: null,
        error: 'Sanity user not found or could not be created',
      };
    }

    if (course.price === undefined || course.price === null) {
      return { type: 'redirect', data: null, error: 'Course price is not set' };
    }

    const { title, description, image, slug } = course;
    if (!title || !description || !image || !slug?.current) {
      return {
        type: 'redirect',
        data: null,
        error: 'Course data is incomplete',
      };
    }

    // Free course logic
    if (course.price === 0) {
      await createEnrollment({
        studentId: sanityUser._id,
        courseId: course._id,
        paymentId: `free_wayforpay_${Date.now()}`, // Unique payment ID for free enrollment via Wayforpay path
        paymentProvider: 'wayforpay',
        amount: 0,
      });
      // For free courses, redirect directly to the course page within the dashboard
      return { type: 'redirect', data: `/dashboard/courses/${course._id}` };
    }

    // Paid course logic for WayForPay
    // Pre-validate environment variables
    const requiredEnvVars = {
      merchantLogin: process.env.WAYFORPAY_MERCHANT_LOGIN,
      merchantSecret: process.env.WAYFORPAY_MERCHANT_SECRET_KEY,
      domain: process.env.WAYFORPAY_DOMAIN,
      currency: process.env.WAYFORPAY_CURRENCY,
    };

    if (
      !requiredEnvVars.merchantLogin ||
      !requiredEnvVars.merchantSecret ||
      !requiredEnvVars.domain ||
      !requiredEnvVars.currency
    ) {
      return {
        type: 'redirect',
        data: null,
        error: 'WayForPay environment variables are not properly configured.',
      };
    }

    // Pre-build order data
    const orderReference = `${course._id}--${userId}--${Date.now()}`;
    const cartElements: TCartElement[] = [
      {
        product: {
          name: title,
          price: course.price,
        },
        quantity: 1,
      },
    ];

    // Initialize client and generate form
    const wayforpayClient = new Wayforpay({
      merchantLogin: requiredEnvVars.merchantLogin,
      merchantSecret: requiredEnvVars.merchantSecret,
    });

    const wayforpayFormHtml = await wayforpayClient.purchase(cartElements, {
      domain: requiredEnvVars.domain,
      orderReference,
      currency: requiredEnvVars.currency as 'USD' | 'EUR',
      returnUrl: `${baseUrl}/payment/redirect?provider=wayforpay&type=course&order=${orderReference}`,
      serviceUrl: `${baseUrl}/api/wayforpay/webhook`,
      clientFirstName: firstName || undefined,
      clientLastName: lastName || undefined,
      clientEmail: email || undefined,
    });

    return { type: 'form', data: wayforpayFormHtml };
  } catch (error) {
    console.error('Error in createWayforpayCheckout:', error);
    return {
      type: 'redirect',
      data: null,
      error: `Failed to create WayForPay checkout: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
