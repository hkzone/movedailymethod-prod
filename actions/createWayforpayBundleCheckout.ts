'use server';

import { Wayforpay, TCartElement } from 'wayforpay-ts-integration';
import baseUrl from '@/lib/baseUrl';
import { getBundleById } from '@/sanity/lib/courses/getBundleById';
import { createStudentIfNotExists } from '@/sanity/lib/student/createStudentIfNotExists';
import { clerkClient } from '@clerk/nextjs/server';
import { createBundleEnrollment } from '@/sanity/lib/student/createBundleEnrollment';

interface WayforpayBundleCheckoutResult {
  type: 'form' | 'redirect';
  data: string | null; // HTML form string for Wayforpay, or redirect path for free bundle
  error?: string;
}

export async function createWayforpayBundleCheckout(
  bundleId: string,
  userId: string
): Promise<WayforpayBundleCheckoutResult> {
  try {
    // Parallelize bundle and user data fetching
    const [bundle, clerkUser] = await Promise.all([
      getBundleById(bundleId),
      (await clerkClient()).users.getUser(userId),
    ]);

    const { emailAddresses, firstName, lastName, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress;

    if (!emailAddresses || !email) {
      return { type: 'redirect', data: null, error: 'User details not found' };
    }
    if (!bundle) {
      return { type: 'redirect', data: null, error: 'Bundle not found' };
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

    if (bundle.price === undefined || bundle.price === null) {
      return { type: 'redirect', data: null, error: 'Bundle price is not set' };
    }

    const { title, description, slug } = bundle;
    if (!title || !description || !slug) {
      return {
        type: 'redirect',
        data: null,
        error: 'Bundle data is incomplete',
      };
    }

    // Free bundle logic
    if (bundle.price === 0) {
      await createBundleEnrollment({
        studentId: sanityUser._id,
        bundleId: bundle._id,
        paymentId: `free_wayforpay_bundle_${Date.now()}`,
        paymentProvider: 'wayforpay',
        amount: 0,
        bundleData: bundle,
      });
      // For free bundles, redirect to my-courses page
      return { type: 'redirect', data: `/my-courses` };
    }

    // Paid bundle logic for WayForPay
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
    const orderReference = `bundle--${bundle._id}--${userId}--${Date.now()}`;
    const cartElements: TCartElement[] = [
      {
        product: {
          name: `${title} - Course Bundle`,
          price: bundle.price,
        },
        quantity: 1,
      },
    ];

    // Initialize client and generate form in parallel (though form generation will wait for client)
    const wayforpayClient = new Wayforpay({
      merchantLogin: requiredEnvVars.merchantLogin,
      merchantSecret: requiredEnvVars.merchantSecret,
    });

    const wayforpayFormHtml = await wayforpayClient.purchase(cartElements, {
      domain: requiredEnvVars.domain,
      orderReference,
      currency: requiredEnvVars.currency as 'USD' | 'EUR',
      returnUrl: `${baseUrl}/payment/redirect?provider=wayforpay&type=bundle&order=${orderReference}`,
      serviceUrl: `${baseUrl}/api/wayforpay-checout/webhook`,
      clientFirstName: firstName || undefined,
      clientLastName: lastName || undefined,
      clientEmail: email || undefined,
    });

    return { type: 'form', data: wayforpayFormHtml };
  } catch (error) {
    console.error('Error in createWayforpayBundleCheckout:', error);
    return {
      type: 'redirect',
      data: null,
      error: `Failed to create WayForPay bundle checkout: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
