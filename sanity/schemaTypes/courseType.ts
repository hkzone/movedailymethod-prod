import { defineField, defineType } from 'sanity';

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'price',
      title: 'Price (USD)', // Assuming primary currency is USD, adjust if needed
      type: 'number',
      description: 'Price in USD. For free courses, set to 0.',
      validation: (Rule) => Rule.min(0),
    },
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
    }),
    defineField({
      name: 'image',
      title: 'Course Image',
      type: 'image',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'module' } }],
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: { type: 'instructor' },
    }),
    defineField({
      // New field for course-level materials
      name: 'courseMaterials',
      title: 'General Course Materials (PDFs)',
      type: 'array',
      of: [
        {
          type: 'file',
          title: 'Material File',
          options: {
            accept: 'application/pdf',
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Title / Display Name',
              type: 'string',
              description:
                'Optional: A descriptive title for this material (e.g., "Course Syllabus"). If empty, filename will be used.',
            }),
          ],
        },
      ],
      description:
        'Upload general PDF files for the entire course (e.g., syllabus, welcome packet).',
    }),
  ],
});
