import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading text for the FAQ section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description text below the title',
    }),
    defineField({
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      description: 'Text for the contact button',
      initialValue: 'Contact',
    }),
    defineField({
      name: 'contactButtonLink',
      title: 'Contact Button Link',
      type: 'string',
      description: 'Link for the contact button',
      initialValue: '#contact',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule) => Rule.required(),
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
