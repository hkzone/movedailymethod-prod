import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "@/components/ui/skeleton";
function Loading() {
    return (_jsx("div", { className: "p-6 max-w-4xl mx-auto", children: _jsxs("div", { className: "flex flex-col gap-y-8", children: [_jsx(Skeleton, { className: "h-8 w-[50%]" }), _jsx("div", { className: "aspect-video w-full", children: _jsx(Skeleton, { className: "h-full w-full rounded-md" }) }), _jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { className: "h-4 w-[80%]" }), _jsx(Skeleton, { className: "h-4 w-[90%]" }), _jsx(Skeleton, { className: "h-4 w-[75%]" }), _jsx(Skeleton, { className: "h-4 w-[85%]" }), _jsx("div", { className: "py-2" }), _jsx(Skeleton, { className: "h-4 w-[70%]" }), _jsx(Skeleton, { className: "h-4 w-[80%]" }), _jsx(Skeleton, { className: "h-4 w-[60%]" })] })] }) }));
}
export default Loading;
