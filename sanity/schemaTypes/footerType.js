import { defineField, defineType } from 'sanity';
export const footerType = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the logo image',
                }),
            ],
        }),
        defineField({
            name: 'logoSvg',
            title: 'Logo SVG',
            type: 'text',
            description: 'SVG markup for the logo (will be used instead of image if provided)',
        }),
        defineField({
            name: 'logoLink',
            title: 'Logo Link',
            type: 'string',
            description: 'URL the logo links to',
            initialValue: '/',
        }),
        defineField({
            name: 'navigationItems',
            title: 'Navigation Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'YouTube', value: 'youtube' },
                                    { title: 'Telegram', value: 'telegram' },
                                    { title: 'Discord', value: 'discord' },
                                    { title: 'Twitter', value: 'twitter' },
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            description: 'Copyright notice displayed at the bottom',
            initialValue: 'DailyMoveMethod. All rights reserved.',
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description: 'Set to true to display this footer',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo',
        },
        prepare() {
            return {
                title: 'Footer',
            };
        },
    },
});
