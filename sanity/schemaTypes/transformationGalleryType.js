import { defineField, defineType } from 'sanity';
export const transformationGalleryType = defineType({
    name: 'transformationGallery',
    title: 'Transformation Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Section ID',
            type: 'string',
            description: 'ID for the section (used for navigation and anchor links)',
            initialValue: 'transformations',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'Short text above the main title (e.g., "Success Stories")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Main heading text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleMobile',
            title: 'Title Mobile',
            type: 'string',
            description: 'Main heading text for mobile',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Text bellow the title',
        }),
        defineField({
            name: 'subtitleMobile',
            title: 'Subtitle Mobile',
            type: 'string',
            description: 'Text bellow the title for mobile',
        }),
        defineField({
            name: 'ctaButton',
            title: 'CTA Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Button Text',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'link',
                    title: 'Button Link',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'transformations',
            title: 'Transformations',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'age',
                            title: 'Age',
                            type: 'number',
                            validation: (Rule) => Rule.required().min(0).max(120),
                        }),
                        defineField({
                            name: 'duration',
                            title: 'Duration',
                            type: 'string',
                            description: 'e.g., "12 weeks"',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'weightLoss',
                            title: 'Weight Loss',
                            type: 'number',
                            description: 'Enter the weight loss number (unit will be added automatically)',
                            validation: (Rule) => Rule.min(0),
                        }),
                        defineField({
                            name: 'weightUnit',
                            title: 'Weight Unit',
                            type: 'string',
                            description: 'Choose the unit for weight measurements',
                            options: {
                                list: [
                                    { title: 'Pounds (lbs)', value: 'lbs' },
                                    { title: 'Kilograms (kg)', value: 'kg' },
                                ],
                            },
                            initialValue: 'lbs',
                            //only required if weightLoss is not 0
                            validation: (Rule) => Rule.custom((value, context) => {
                                const { parent } = context;
                                if (parent?.weightLoss !== 0 && !value) {
                                    return 'Weight unit is required when weight loss is specified';
                                }
                                return true;
                            }),
                        }),
                        defineField({
                            name: 'testimonial',
                            title: 'Testimonial',
                            type: 'text',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'beforeImage',
                            title: 'Before Image',
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
                            name: 'afterImage',
                            title: 'After Image',
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
                            name: 'rating',
                            title: 'Rating',
                            type: 'number',
                            description: 'Rating out of 5',
                            validation: (Rule) => Rule.required().min(1).max(5),
                            initialValue: 5,
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description: 'Set to true to display this section',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
});
