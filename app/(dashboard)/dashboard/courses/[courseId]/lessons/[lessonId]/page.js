import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getLessonById } from '@/sanity/lib/lessons/getLessonById';
import { PortableText } from '@portabletext/react';
import { LoomEmbed } from '@/components/LoomEmbed';
import { VideoPlayer } from '@/components/VideoPlayer';
import { LessonCompleteButton } from '@/components/LessonCompleteButton';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';
import { formatFileSize } from '@/lib/utils';
export default async function LessonPage({ params }) {
    const user = await currentUser();
    const { courseId, lessonId } = await params;
    const lesson = await getLessonById(lessonId);
    if (!lesson) {
        return redirect(`/dashboard/courses/${courseId}`);
    }
    return (_jsxs("div", { className: 'h-full flex flex-col overflow-hidden relative', children: [_jsx("div", { className: 'flex-1 overflow-y-auto pb-40 md:pb-24', children: _jsxs("div", { className: 'max-w-4xl mx-auto pt-12 px-4', children: [_jsx("h1", { className: 'text-2xl font-bold mb-4', children: lesson.title }), lesson.description && (_jsx("p", { className: 'text-muted-foreground mb-8', children: lesson.description })), _jsxs("div", { className: 'space-y-8', children: [lesson.videoUrl && _jsx(VideoPlayer, { url: lesson.videoUrl }), lesson.loomUrl && _jsx(LoomEmbed, { shareUrl: lesson.loomUrl }), lesson.content && (_jsxs("div", { children: [_jsx("h2", { className: 'text-xl font-semibold mb-4', children: "Lesson Notes" }), _jsx("div", { className: 'prose prose-blue dark:prose-invert max-w-none', children: _jsx(PortableText, { value: lesson.content }) })] })), lesson.materials && lesson.materials.length > 0 && (_jsxs("div", { className: 'mt-8 pt-6 border-t', children: [_jsx("h2", { className: 'text-xl font-semibold mb-4', children: "Lesson Materials" }), _jsx("ul", { className: 'space-y-3', children: lesson.materials.map((material) => material?.asset?.url ? (_jsxs("li", { className: 'flex items-center justify-between p-3 bg-card border rounded-lg hover:shadow-sm transition-shadow', children: [_jsxs("div", { className: 'flex items-center gap-3 overflow-hidden', children: [_jsx(FileText, { className: 'h-6 w-6 text-primary flex-shrink-0' }), _jsxs("div", { className: 'flex flex-col overflow-hidden', children: [_jsx("span", { className: 'font-medium truncate', title: material.title ||
                                                                            material.asset.originalFilename ||
                                                                            'Downloadable File', children: material.title ||
                                                                            material.asset.originalFilename ||
                                                                            'Downloadable File' }), (material.asset.size ||
                                                                        material.asset.extension) && (_jsxs("span", { className: 'text-xs text-muted-foreground', children: [material.asset.size
                                                                                ? formatFileSize(material.asset.size)
                                                                                : '', material.asset.extension &&
                                                                                ` (${material.asset.extension.toUpperCase()})`] }))] })] }), _jsxs(Link, { href: material.asset.url, target: '_blank', rel: 'noopener noreferrer', download: material.asset.originalFilename || true, className: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 shrink-0 ml-2', children: [_jsx(Download, { className: 'h-4 w-4 md:mr-2' }), _jsx("span", { className: 'hidden md:inline', children: "Download" })] })] }, material._key)) : null) })] }))] })] }) }), _jsx("div", { className: 'fixed bottom-0 left-20 lg:left-96 right-0 bg-background/95 backdrop-blur-sm border-t p-4', children: _jsx("div", { className: 'max-w-4xl mx-auto flex justify-end', children: _jsx(LessonCompleteButton, { lessonId: lesson._id, clerkId: user.id }) }) })] }));
}
