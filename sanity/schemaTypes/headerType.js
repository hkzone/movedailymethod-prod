import { defineField, defineType } from 'sanity';
export const headerType = defineType({
    name: 'header',
    title: 'Header',
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
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description: 'Set to true to display this header',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Header',
            };
        },
    },
});
