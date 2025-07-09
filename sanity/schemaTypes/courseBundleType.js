import { defineField, defineType } from 'sanity';
export const courseBundleType = defineType({
    name: 'courseBundle',
    title: 'Course Bundle',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Bundle Navigation ID',
            type: 'string',
            description: 'Unique identifier for the bundle navigation',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Bundle Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Optional subtitle for the bundle',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Main description of the bundle',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Bundle Price (USD)',
            type: 'number',
            description: 'Total price for the bundle',
            validation: (Rule) => Rule.min(0).required(),
        }),
        defineField({
            name: 'originalPrice',
            title: 'Original Price (USD)',
            type: 'number',
            description: 'Original price to show savings',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'courses',
            title: 'Courses in Bundle',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'course',
                            title: 'Course',
                            type: 'reference',
                            to: [{ type: 'course' }],
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'customTitle',
                            title: 'Custom Title',
                            type: 'string',
                            description: 'Override the course title for this bundle',
                        }),
                        defineField({
                            name: 'customDescription',
                            title: 'Custom Description',
                            type: 'text',
                            description: 'Custom description for this course in the bundle',
                        }),
                        defineField({
                            name: 'customImage',
                            title: 'Custom Image',
                            type: 'image',
                            description: 'Custom image for this course in the bundle',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'course.title',
                            customTitle: 'customTitle',
                            media: 'course.image',
                        },
                        prepare(selection) {
                            const { title, customTitle, media } = selection;
                            return {
                                title: customTitle || title || 'Untitled Course',
                                media,
                            };
                        },
                    },
                },
            ],
            validation: (Rule) => Rule.min(2).max(6),
        }),
        defineField({
            name: 'whatsIncluded',
            title: "What's Included",
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'item',
                            title: 'Item',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                },
            ],
            description: 'List of items included in the bundle',
        }),
        defineField({
            name: 'featuredPrograms',
            title: 'Featured Programs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Program Title',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Program Description',
                            type: 'text',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                },
            ],
            description: 'Numbered list of featured programs',
            validation: (Rule) => Rule.max(6),
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            initialValue: 'ACCESS ALL PROGRAMS NOW',
        }),
        defineField({
            name: 'ctaLink',
            title: 'CTA Button Link',
            type: 'string',
            description: 'Where the CTA button should link to',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the image',
                }),
            ],
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description: 'Set to true to display this bundle',
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which to display bundles (lower numbers first)',
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'displayOrder',
            by: [{ field: 'displayOrder', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'backgroundImage',
            price: 'price',
            isActive: 'isActive',
        },
        prepare(selection) {
            const { title, subtitle, media, price, isActive } = selection;
            return {
                title: title || 'Untitled Bundle',
                subtitle: `${subtitle || ''} ${price ? `$${price}` : ''} ${isActive ? '' : '(Inactive)'}`,
                media,
            };
        },
    },
});
