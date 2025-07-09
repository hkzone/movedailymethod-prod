'use server';

import stripe from '@/lib/stripe';
import baseUrl from '@/lib/baseUrl';
import { urlFor } from '@/sanity/lib/image';
import getCourseById from '@/sanity/lib/courses/getCourseById';
import { createStudentIfNotExists } from '@/sanity/lib/student/createStudentIfNotExists';
import { clerkClient } from '@clerk/nextjs/server';
import { createEnrollment } from '@/sanity/lib/student/createEnrollment';

interface StripeCheckoutResult {
  type: 'url' | 'redirect';
  data: string | null; // URL for Stripe checkout, or redirect path for free course
  error?: string;
}

export async function createStripeCheckout(
  courseId: string,
  userId: string
): Promise<StripeCheckoutResult> {
  try {
    // 1. Query course details from Sanity
    const course = await getCourseById(courseId);
    const clerkUser = await (await clerkClient()).users.getUser(userId);
    const { emailAddresses, firstName, lastName, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress;

    if (!emailAddresses || !email) {
      return { type: 'redirect', data: null, error: 'User details not found' };
    }
    if (!course) {
      return { type: 'redirect', data: null, error: 'Course not found' };
    }
    // mid step - create a user in sanity if it doesn't exist
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
        paymentId: `free_stripe_${Date.now()}`, // Unique payment ID for free enrollment via Stripe path
        paymentProvider: 'stripe',
        amount: 0,
      });
      // For free courses, redirect directly to the course page within the dashboard
      return { type: 'redirect', data: `/dashboard/courses/${course._id}` };
    }

    // 3. Create and configure Stripe Checkout Session with course details
    const priceInCents = Math.round(course.price * 100); // Assuming course.price is in USD for Stripe
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd', // Assuming Stripe uses USD primarily
            product_data: {
              name: title,
              description: description,
              images: [urlFor(image).url() || ''],
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/payment/success?payment_success=stripe&type=course`, // Indicate success and provider
      cancel_url: `${baseUrl}/payment/failed?provider=stripe&type=course&reason=Payment cancelled by user`,
      metadata: {
        courseId: course._id,
        userId: userId, // Clerk User ID
        sanityStudentId: sanityUser._id, // Sanity Student ID
      },
    });

    if (!session.url) {
      return {
        type: 'url',
        data: null,
        error: 'Could not create Stripe session URL.',
      };
    }
    // 4. Return checkout session URL for client redirect
    return { type: 'url', data: session.url };
  } catch (error) {
    console.error('Error in createStripeCheckout:', error);
    return {
      type: 'redirect',
      data: null,
      error: `Failed to create Stripe checkout session: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
