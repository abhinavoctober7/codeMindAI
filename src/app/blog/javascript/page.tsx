import Link from "next/link";
import { SiJavascript } from "react-icons/si";
import { javascriptLessons, getJsLessonHref } from "@/data/javascript-lessons";

export default function JavaScriptIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SiJavascript size={32} color="#f7df1e" />
          <h1 className="text-3xl font-bold text-white">JavaScript</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          From absolute zero to advanced — learning JavaScript the right way, through first principles thinking.
          No rote memorisation. Build real understanding of how and why JavaScript works the way it does.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Why JavaScript Exists", desc: "Understand the problem JavaScript was built to solve." },
            { title: "How the Browser Works", desc: "Client-server model, HTML/CSS/JS roles, V8 engine internals." },
            { title: "Core Language Fundamentals", desc: "Variables, data types, functions, scope, closures, and more." },
            { title: "Advanced Concepts", desc: "Async/Await, Promises, Prototypes, Event Loop, and beyond." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Classes */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Course Classes</h2>
        <div className="flex flex-col gap-2">
          {javascriptLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              href={getJsLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#f7df1e]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#f7df1e]/10 text-[#f7df1e] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#f7df1e] transition-colors">
                  {lesson.title}
                </p>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
