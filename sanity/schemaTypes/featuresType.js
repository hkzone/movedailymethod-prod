import { defineField, defineType } from 'sanity';
export const featuresType = defineType({
    name: 'features',
    title: 'Features',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Section ID',
            type: 'string',
            description: 'ID for the section (used for navigation and anchor links)',
            initialValue: 'features',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'header',
            title: 'Header Section',
            type: 'object',
            fields: [
                defineField({
                    name: 'tagline',
                    title: 'Tagline',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'titleMobile',
                    title: 'Title Mobile',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                }),
                defineField({
                    name: 'descriptionMobile',
                    title: 'Description Mobile',
                    type: 'text',
                }),
            ],
        }),
        defineField({
            name: 'leftColumn',
            title: 'Left Column',
            type: 'object',
            fields: [
                defineField({
                    name: 'mainSection',
                    title: 'Main Section',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'tagline',
                            title: 'Tagline',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'primaryButtonText',
                            title: 'Primary Button Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'primaryButtonLink',
                            title: 'Primary Button Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'secondaryButtonText',
                            title: 'Secondary Button Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'secondaryButtonLink',
                            title: 'Secondary Button Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                    ],
                }),
                defineField({
                    name: 'featureBoxes',
                    title: 'Feature Boxes',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'icon',
                                    title: 'Icon',
                                    type: 'image',
                                }),
                                defineField({
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                    validation: (Rule) => Rule.required(),
                                }),
                                defineField({
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                }),
                                defineField({
                                    name: 'buttonText',
                                    title: 'Button Text',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'buttonLink',
                                    title: 'Button Link',
                                    type: 'string',
                                }),
                            ],
                        },
                    ],
                    validation: (Rule) => Rule.max(2),
                }),
            ],
        }),
        defineField({
            name: 'rightColumn',
            title: 'Right Column',
            type: 'object',
            fields: [
                defineField({
                    name: 'imageSection',
                    title: 'Image Section',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                        defineField({
                            name: 'tagline',
                            title: 'Tagline',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'buttonText',
                            title: 'Button Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'buttonLink',
                            title: 'Button Link',
                            type: 'string',
                        }),
                    ],
                }),
                defineField({
                    name: 'programsSection',
                    title: 'Programs Section',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'tagline',
                            title: 'Tagline',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'primaryButtonText',
                            title: 'Primary Button Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'primaryButtonLink',
                            title: 'Primary Button Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'secondaryButtonText',
                            title: 'Secondary Button Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'secondaryButtonLink',
                            title: 'Secondary Button Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description: 'Set to true to display this layout section',
        }),
    ],
    preview: {
        select: {
            title: 'header.title',
            subtitle: 'header.tagline',
        },
    },
});
