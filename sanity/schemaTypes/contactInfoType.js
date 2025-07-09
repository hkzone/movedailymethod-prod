import { defineField, defineType } from 'sanity';
export const contactInfoType = defineType({
    name: 'contactInfo',
    title: 'Contact Information',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { title: 'English', value: 'en' },
                    { title: 'Ukrainian', value: 'uk' },
                ],
            },
            initialValue: 'en',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            description: 'Full legal company name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'taxId',
            title: 'Tax ID / ІПН',
            type: 'string',
            description: 'Individual Tax Number (ІПН) or Company Tax ID',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'legalAddress',
            title: 'Legal Address',
            type: 'object',
            fields: [
                defineField({
                    name: 'street',
                    title: 'Street Address',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'city',
                    title: 'City',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'region',
                    title: 'Region/State',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'postalCode',
                    title: 'Postal Code',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'physicalAddress',
            title: 'Physical Address',
            type: 'object',
            description: 'If different from legal address',
            fields: [
                defineField({
                    name: 'street',
                    title: 'Street Address',
                    type: 'string',
                }),
                defineField({
                    name: 'city',
                    title: 'City',
                    type: 'string',
                }),
                defineField({
                    name: 'region',
                    title: 'Region/State',
                    type: 'string',
                }),
                defineField({
                    name: 'postalCode',
                    title: 'Postal Code',
                    type: 'string',
                }),
                defineField({
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'supportEmail',
            title: 'Support Email',
            type: 'string',
            description: 'Customer support email (if different from main email)',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'website',
            title: 'Website',
            type: 'url',
        }),
        defineField({
            name: 'businessHours',
            title: 'Business Hours',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'day',
                            title: 'Day',
                            type: 'string',
                            options: {
                                list: [
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday',
                                    'Sunday',
                                ],
                            },
                        }),
                        defineField({
                            name: 'hours',
                            title: 'Hours',
                            type: 'string',
                            description: 'e.g., "9:00 AM - 6:00 PM" or "Closed"',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'additionalInfo',
            title: 'Additional Information',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H3', value: 'h3' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url',
                                        validation: (Rule) => Rule.uri({
                                            allowRelative: true,
                                            scheme: ['http', 'https', 'mailto', 'tel'],
                                        }),
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            companyName: 'companyName',
            language: 'language',
            lastUpdated: 'lastUpdated',
        },
        prepare(selection) {
            const { title, companyName, language, lastUpdated } = selection;
            return {
                title: title,
                subtitle: `${companyName} • ${language?.toUpperCase()} • Updated: ${lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'N/A'}`,
            };
        },
    },
});
