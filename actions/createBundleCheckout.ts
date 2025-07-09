'use server';

import stripe from '@/lib/stripe';
import baseUrl from '@/lib/baseUrl';
import { urlFor } from '@/sanity/lib/image';
import { getBundleById } from '@/sanity/lib/courses/getBundleById';
import { createStudentIfNotExists } from '@/sanity/lib/student/createStudentIfNotExists';
import { clerkClient } from '@clerk/nextjs/server';
import { createBundleEnrollment } from '@/sanity/lib/student/createBundleEnrollment';

interface BundleCheckoutResult {
  type: 'url' | 'redirect';
  data: string | null; // URL for Stripe checkout, or redirect path for free bundle
  error?: string;
}

export async function createBundleCheckout(
  bundleId: string,
  userId: string
): Promise<BundleCheckoutResult> {
  try {
    // 1. Query bundle details from Sanity
    const bundle = await getBundleById(bundleId);
    const clerkUser = await (await clerkClient()).users.getUser(userId);
    const { emailAddresses, firstName, lastName, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress;

    if (!emailAddresses || !email) {
      return { type: 'redirect', data: null, error: 'User details not found' };
    }
    if (!bundle) {
      return { type: 'redirect', data: null, error: 'Bundle not found' };
    }

    // Create a user in sanity if it doesn't exist
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

    if (!bundle.price === undefined || bundle.price === null) {
      return { type: 'redirect', data: null, error: 'Bundle price is not set' };
    }

    const { title, description, backgroundImage, slug } = bundle;

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
        paymentId: `free_stripe_bundle_${Date.now()}`,
        paymentProvider: 'stripe',
        amount: 0,
        bundleData: bundle,
      });
      // For free bundles, redirect to my-courses page
      return { type: 'redirect', data: `/my-courses` };
    }

    // 3. Create and configure Stripe Checkout Session with bundle details
    const priceInCents = Math.round(bundle.price! * 100);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${title} - Course Bundle`,
              description: description,
              images: backgroundImage
                ? [urlFor(backgroundImage).url() || '']
                : [],
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/payment/success?payment_success=stripe&type=bundle`,
      cancel_url: `${baseUrl}/payment/failed?provider=stripe&type=bundle&reason=Payment cancelled by user`,
      metadata: {
        bundleId: bundle._id,
        userId: userId, // Clerk User ID
        sanityStudentId: sanityUser._id, // Sanity Student ID
        type: 'bundle', // Distinguish from regular course purchases
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
    console.error('Error in createBundleCheckout:', error);
    return {
      type: 'redirect',
      data: null,
      error: `Failed to create Stripe checkout session: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
