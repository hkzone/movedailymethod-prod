import { defineField, defineType } from 'sanity';
export const coursesSectionType = defineType({
    name: 'coursesSection',
    title: 'Courses Section',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Section ID',
            type: 'string',
            description: 'ID for the section (used for navigation and anchor links)',
            initialValue: 'courses',
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
                    description: 'The label displayed above the section title (e.g., "Courses")',
                    initialValue: 'Courses',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'The main title of the courses section',
                    initialValue: 'Courses',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'A brief description of the courses section',
                    initialValue: 'Explore our comprehensive fitness courses today!',
                    validation: (Rule) => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: 'sectionLabel',
            title: 'Section Label',
            type: 'string',
            description: 'The label displayed above the section title (e.g., "Courses")',
            initialValue: 'Courses',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'Text displayed on the "View all" button',
            initialValue: 'View all',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
            description: 'URL for the "View all" button',
            initialValue: '/courses',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            return {
                title: `Courses Section: ${selection.title}`,
            };
        },
    },
});
