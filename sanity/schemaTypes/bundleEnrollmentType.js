import { defineField, defineType } from 'sanity';
export const bundleEnrollmentType = defineType({
    name: 'bundleEnrollment',
    title: 'Bundle Enrollment',
    type: 'document',
    fields: [
        defineField({
            name: 'student',
            title: 'Student',
            type: 'reference',
            to: [{ type: 'student' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'courseBundle',
            title: 'Course Bundle',
            type: 'reference',
            to: [{ type: 'courseBundle' }],
            validation: (rule) => rule.required(),
        }),
        // Preserve bundle snapshot at time of purchase
        defineField({
            name: 'bundleSnapshot',
            title: 'Bundle Snapshot',
            type: 'object',
            description: 'Snapshot of bundle at time of purchase',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Bundle Title',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                }),
                defineField({
                    name: 'courses',
                    title: 'Courses at Purchase Time',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'courseId',
                                    title: 'Course ID',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'courseTitle',
                                    title: 'Course Title',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'customTitle',
                                    title: 'Custom Title',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'customDescription',
                                    title: 'Custom Description',
                                    type: 'text',
                                }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        defineField({
            name: 'amount',
            title: 'Amount Paid',
            type: 'number',
            validation: (rule) => rule.required().min(0),
            description: 'The amount paid for the bundle enrollment',
        }),
        defineField({
            name: 'paymentProvider',
            title: 'Payment Provider',
            type: 'string',
            options: {
                list: ['none', 'stripe', 'wayforpay'],
            },
            validation: (rule) => rule.required(),
            description: 'The payment provider used for the enrollment',
        }),
        defineField({
            name: 'paymentId',
            title: 'Payment ID',
            type: 'string',
            validation: (rule) => rule.required(),
            description: 'The Stripe/Wayforpay payment/checkout session ID',
        }),
        defineField({
            name: 'enrolledAt',
            title: 'Enrolled At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'individualEnrollments',
            title: 'Individual Course Enrollments',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'enrollment' }],
                },
            ],
            description: 'References to individual course enrollments created for this bundle',
        }),
    ],
    preview: {
        select: {
            title: 'bundleSnapshot.title',
            studentName: 'student.firstName',
            amount: 'amount',
            enrolledAt: 'enrolledAt',
        },
        prepare(selection) {
            const { title, studentName, amount, enrolledAt } = selection;
            return {
                title: `${title} - ${studentName}`,
                subtitle: `$${amount} • ${new Date(enrolledAt).toLocaleDateString()}`,
            };
        },
    },
});
