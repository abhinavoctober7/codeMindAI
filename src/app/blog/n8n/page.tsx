import { Link } from "react-router-dom";
import { SiN8N } from "react-icons/si";
import { n8nLessons, getN8nLessonHref } from "@/data/n8n-lessons";

export default function N8nIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SiN8N size={30} color="#ea4b71" />
          <h1 className="text-3xl font-bold text-white">n8n — Workflow & AI Automation</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          Businesses run on repetitive tasks — and repetitive tasks can be automated. n8n is a flexible,
          visual workflow-automation tool that lets you wire together 1300+ apps with drag-and-drop nodes,
          and plug in LLMs and AI agents to make those workflows <em>intelligent</em>. This masterclass
          builds your understanding from business automation fundamentals all the way to a full agentic
          personal-assistant project — built from scratch.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Automation Fundamentals", desc: "What business automation is, why it matters, and how AI turns static automations into dynamic ones." },
            { title: "Workflows & the n8n Editor", desc: "Nodes, connections, triggers, and how JSON data flows through a workflow." },
            { title: "Self-Hosting with Docker", desc: "Run n8n free on your own machine — volumes, images, and the docker run command." },
            { title: "AI Agents & Tools", desc: "Build an LLM-powered agent with memory, tools, webhooks, and a custom Streamlit interface." },
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
          {n8nLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              to={getN8nLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#ea4b71]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#ea4b71]/10 text-[#ea4b71] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#ea4b71] transition-colors">
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
