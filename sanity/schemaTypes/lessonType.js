// sanity/schemaTypes/lessonType.ts
import { defineField, defineType } from 'sanity';
export const lessonType = defineType({
    name: 'lesson',
    title: 'Lesson',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
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
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'The URL for the video player (e.g. YouTube, Vimeo)',
        }),
        defineField({
            name: 'loomUrl',
            title: 'Loom Share URL',
            type: 'url',
            description: 'The full Loom share URL (e.g., https://www.loom.com/share/...)',
            validation: (rule) => rule.custom((value) => {
                if (!value)
                    return true; // Allow empty value
                try {
                    const url = new URL(value);
                    if (!url.hostname.endsWith('loom.com')) {
                        return 'URL must be from loom.com';
                    }
                    if (!url.pathname.startsWith('/share/')) {
                        return 'Must be a Loom share URL';
                    }
                    const videoId = url.pathname.split('/share/')[1];
                    if (!/^[a-f0-9-]{32,36}/.test(videoId)) {
                        return 'Invalid Loom video ID in URL';
                    }
                    return true;
                }
                catch {
                    return 'Please enter a valid URL';
                }
            }),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'materials',
            title: 'Lesson Materials (PDFs)',
            type: 'array',
            of: [
                {
                    type: 'file',
                    title: 'Material File',
                    options: {
                        accept: 'application/pdf', // Restrict to PDF files
                    },
                    fields: [
                        defineField({
                            name: 'title', // User-defined title for the material
                            title: 'Title / Display Name',
                            type: 'string',
                            description: 'Optional: A descriptive title for this material (e.g., "Chapter 1 Worksheet"). If empty, filename will be used.',
                        }),
                        // Sanity automatically provides originalFilename, size, etc. for file assets
                    ],
                },
            ],
            description: 'Upload PDF files relevant to this lesson.',
        }),
    ],
});
