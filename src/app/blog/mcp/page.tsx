import Link from "next/link";
import { TbNetwork } from "react-icons/tb";
import { mcpLessons, getMcpLessonHref } from "@/data/mcp-lessons";

export default function MCPIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <TbNetwork size={32} color="#6366f1" />
          <h1 className="text-3xl font-bold text-white">Model Context Protocol</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          MCP is the open standard that lets AI models connect to external tools, data sources, and
          services. Learn how it works, why it exists, and how to build with it — from first principles.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Why MCP Exists", desc: "The problem with one-off integrations and how MCP solves it universally." },
            { title: "MCP Architecture", desc: "Hosts, clients, servers — how the three-layer model fits together." },
            { title: "Tools, Resources & Prompts", desc: "The three primitives MCP exposes and when to use each." },
            { title: "Building MCP Servers", desc: "Write your own MCP server in Node.js and connect it to Claude Code." },
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
          {mcpLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              href={getMcpLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#6366f1]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#6366f1] transition-colors">
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
