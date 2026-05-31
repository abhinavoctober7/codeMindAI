"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SiAnthropic, SiOllama,
  SiJavascript, SiPython, SiHtml5, SiCss,
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiGit, SiMysql, SiDocker, SiRust, SiPhp, SiDart,
} from "react-icons/si";
import { TbNetwork, TbSparkles } from "react-icons/tb";
import { claudeCodeLessons, getLessonHref } from "@/data/claude-code-lessons";
import { javascriptLessons, getJsLessonHref } from "@/data/javascript-lessons";
import { mcpLessons, getMcpLessonHref } from "@/data/mcp-lessons";
import { promptEngineeringLessons, getPromptEngineeringLessonHref } from "@/data/prompt-engineering-lessons";
import { ollamaLessons, getOllamaLessonHref } from "@/data/ollama-lessons";

const topics = [
  { name: "Claude Code", slug: "claude-code/class-1", icon: SiAnthropic,  color: "#cc785c" },
  { name: "MCP",         slug: "mcp/class-1", icon: TbNetwork,    color: "#6366f1" },
  { name: "Prompt Engineering", slug: "prompt-engineering/class-1", icon: TbSparkles, color: "#ec4899" },
  { name: "Ollama",      slug: "ollama/class-1", icon: SiOllama,  color: "#14b8a6" },
  { name: "JavaScript",  slug: "javascript",  icon: SiJavascript, color: "#f7df1e" },
  { name: "Python",      slug: "python",      icon: SiPython,     color: "#3776ab" },
  { name: "HTML",        slug: "html",        icon: SiHtml5,      color: "#e34c26" },
  { name: "CSS",         slug: "css",         icon: SiCss,        color: "#264de4" },
  { name: "TypeScript",  slug: "typescript",  icon: SiTypescript, color: "#3178c6" },
  { name: "React",       slug: "react",       icon: SiReact,      color: "#61dafb" },
  { name: "Next.js",     slug: "nextjs",      icon: SiNextdotjs,  color: "#000000" },
  { name: "Node.js",     slug: "nodejs",      icon: SiNodedotjs,  color: "#68a063" },
  { name: "Git",         slug: "git",         icon: SiGit,        color: "#f05032" },
  { name: "SQL",         slug: "sql",         icon: SiMysql,      color: "#4479a1" },
  { name: "Docker",      slug: "docker",      icon: SiDocker,     color: "#2496ed" },
  { name: "Rust",        slug: "rust",        icon: SiRust,       color: "#ce422b" },
  { name: "PHP",         slug: "php",         icon: SiPhp,        color: "#8892be" },
  { name: "Dart",        slug: "dart",        icon: SiDart,       color: "#0175c2" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const onClaudeCode = pathname.startsWith("/blog/claude-code");
  const onMCP = pathname.startsWith("/blog/mcp");
  const onPromptEngineering = pathname.startsWith("/blog/prompt-engineering");
  const onOllama = pathname.startsWith("/blog/ollama");
  const onJavaScript = pathname.startsWith("/blog/javascript");

  return (
    <aside className="w-56 shrink-0 bg-[#1a2035] border-r border-white/10 flex flex-col overflow-y-auto">
      <div className="px-4 pt-6 pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
          Topics
        </p>
      </div>

      <nav className="flex flex-col gap-0.5 px-2 pb-6">
        {topics.map(({ name, slug, icon: Icon, color }) => {
          const href = `/blog/${slug}`;
          const baseSegment = `/blog/${slug.split("/")[0]}`;
          const isActive = pathname.startsWith(baseSegment);
          const isClaudeCode = slug.startsWith("claude-code");
          const isMCP = slug.startsWith("mcp");
          const isPromptEngineering = slug.startsWith("prompt-engineering");
          const isOllama = slug.startsWith("ollama");
          const isJavaScript = slug === "javascript";

          return (
            <div key={slug}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={17} style={{ color, flexShrink: 0 }} />
                {name}
              </Link>

              {/* Lesson sub-nav — Claude Code */}
              {isClaudeCode && onClaudeCode && (
                <div className="ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {claudeCodeLessons.map((lesson) => {
                    const lessonHref = getLessonHref(lesson.slug);
                    const isCurrentLesson = pathname === lessonHref || pathname.startsWith(lessonHref + "/");
                    return (
                      <Link
                        key={lesson.slug}
                        href={lessonHref}
                        className={`text-xs py-1.5 px-2 rounded-md transition-colors truncate ${
                          isCurrentLesson
                            ? "text-[#cc785c] font-semibold bg-[#cc785c]/10"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {lesson.label}
                        <span className="block text-[10px] font-normal leading-tight truncate opacity-70">
                          {lesson.title.replace(/^Class \d+:\s*/, "")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Lesson sub-nav — MCP */}
              {isMCP && onMCP && (
                <div className="ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {mcpLessons.map((lesson) => {
                    const lessonHref = getMcpLessonHref(lesson.slug);
                    const isCurrentLesson = pathname === lessonHref || pathname.startsWith(lessonHref + "/");
                    return (
                      <Link
                        key={lesson.slug}
                        href={lessonHref}
                        className={`text-xs py-1.5 px-2 rounded-md transition-colors truncate ${
                          isCurrentLesson
                            ? "text-[#6366f1] font-semibold bg-[#6366f1]/10"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {lesson.label}
                        <span className="block text-[10px] font-normal leading-tight truncate opacity-70">
                          {lesson.title.replace(/^Class \d+:\s*/, "")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Lesson sub-nav — Prompt Engineering */}
              {isPromptEngineering && onPromptEngineering && (
                <div className="ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {promptEngineeringLessons.map((lesson) => {
                    const lessonHref = getPromptEngineeringLessonHref(lesson.slug);
                    const isCurrentLesson = pathname === lessonHref || pathname.startsWith(lessonHref + "/");
                    return (
                      <Link
                        key={lesson.slug}
                        href={lessonHref}
                        className={`text-xs py-1.5 px-2 rounded-md transition-colors truncate ${
                          isCurrentLesson
                            ? "text-[#ec4899] font-semibold bg-[#ec4899]/10"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {lesson.label}
                        <span className="block text-[10px] font-normal leading-tight truncate opacity-70">
                          {lesson.title.replace(/^Class \d+:\s*/, "")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Lesson sub-nav — Ollama */}
              {isOllama && onOllama && (
                <div className="ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {ollamaLessons.map((lesson) => {
                    const lessonHref = getOllamaLessonHref(lesson.slug);
                    const isCurrentLesson = pathname === lessonHref || pathname.startsWith(lessonHref + "/");
                    return (
                      <Link
                        key={lesson.slug}
                        href={lessonHref}
                        className={`text-xs py-1.5 px-2 rounded-md transition-colors truncate ${
                          isCurrentLesson
                            ? "text-[#14b8a6] font-semibold bg-[#14b8a6]/10"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {lesson.label}
                        <span className="block text-[10px] font-normal leading-tight truncate opacity-70">
                          {lesson.title.replace(/^Class \d+:\s*/, "")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Lesson sub-nav — JavaScript */}
              {isJavaScript && onJavaScript && (
                <div className="ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {javascriptLessons.map((lesson) => {
                    const lessonHref = getJsLessonHref(lesson.slug);
                    const isCurrentLesson = pathname === lessonHref || pathname.startsWith(lessonHref + "/");
                    return (
                      <Link
                        key={lesson.slug}
                        href={lessonHref}
                        className={`text-xs py-1.5 px-2 rounded-md transition-colors truncate ${
                          isCurrentLesson
                            ? "text-[#f7df1e] font-semibold bg-[#f7df1e]/10"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {lesson.label}
                        <span className="block text-[10px] font-normal leading-tight truncate opacity-70">
                          {lesson.title.replace(/^Class \d+:\s*/, "")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
