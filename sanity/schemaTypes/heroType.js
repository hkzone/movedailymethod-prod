import { defineField, defineType } from 'sanity';
export const heroType = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Section ID',
            type: 'string',
            description: 'ID for the section (used for navigation and anchor links)',
            initialValue: 'hero',
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
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitleMobile',
            title: 'Subtitle Mobile',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'primaryButton',
            title: 'Primary Button',
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
            name: 'secondaryButton',
            title: 'Secondary Button',
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
                defineField({
                    name: 'showIcon',
                    title: 'Show Icon',
                    type: 'boolean',
                    description: 'Show right arrow icon next to text',
                    initialValue: true,
                }),
            ],
        }),
        defineField({
            name: 'image',
            title: 'Image',
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
            description: 'Set to true to display this hero section',
        }),
        defineField({
            name: 'contentAlignment',
            title: 'Content Alignment',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
            },
            initialValue: 'left',
            description: 'Choose the alignment of the hero content',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
        },
    },
});
