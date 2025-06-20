import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import getCourseById from "@/sanity/lib/courses/getCourseById";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { getCourseProgress } from "@/sanity/lib/lessons/getCourseProgress";
import { checkCourseAccess } from "@/lib/auth";
export default async function CourseLayout({ children, params, }) {
    const user = await currentUser();
    const { courseId } = await params;
    if (!user?.id) {
        return redirect("/");
    }
    const authResult = await checkCourseAccess(user?.id || null, courseId);
    if (!authResult.isAuthorized || !user?.id) {
        return redirect(authResult.redirect);
    }
    const [course, progress] = await Promise.all([
        getCourseById(courseId),
        getCourseProgress(user.id, courseId),
    ]);
    if (!course) {
        return redirect("/my-courses");
    }
    return (_jsxs("div", { className: "h-full", children: [_jsx(Sidebar, { course: course, completedLessons: progress.completedLessons }), _jsx("main", { className: "h-full lg:pt-[64px] pl-20 lg:pl-96", children: children })] }));
}
