import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import getCourseById from "@/sanity/lib/courses/getCourseById";
import { redirect } from "next/navigation";
export default async function CoursePage({ params }) {
    const { courseId } = await params;
    const course = await getCourseById(courseId);
    if (!course) {
        return redirect("/");
    }
    // Redirect to the first lesson of the first module if available
    if (course.modules?.[0]?.lessons?.[0]?._id) {
        return redirect(`/dashboard/courses/${courseId}/lessons/${course.modules[0].lessons[0]._id}`);
    }
    return (_jsx("div", { className: "h-full flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsxs("h2", { className: "text-2xl font-bold", children: ["Welcome to ", course.title] }), _jsx("p", { className: "text-muted-foreground", children: "This course has no content yet. Please check back later." })] }) }));
}
