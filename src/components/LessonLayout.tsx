import Link from "next/link";
import { claudeCodeLessons, getLessonHref } from "@/data/claude-code-lessons";

interface Props {
  slug: string;
  children: React.ReactNode;
}

export default function LessonLayout({ slug, children }: Props) {
  const index = claudeCodeLessons.findIndex((l) => l.slug === slug);
  const prev = index > 0 ? claudeCodeLessons[index - 1] : null;
  const next = index < claudeCodeLessons.length - 1 ? claudeCodeLessons[index + 1] : null;

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* breadcrumb */}
      <p className="text-xs text-gray-500 uppercase tracking-widest">
        Claude Code &rsaquo; {claudeCodeLessons[index].label}
      </p>

      {/* page content */}
      <div className="flex flex-col gap-8">{children}</div>

      {/* prev / next navigation */}
      <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-2">
        {prev ? (
          <Link
            href={getLessonHref(prev.slug)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            <span>{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={getLessonHref(next.slug)}
            className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg transition-colors group"
          >
            <span>{next.title}</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        ) : (
          <span className="text-xs text-gray-500 italic">You&apos;ve reached the end 🎉</span>
        )}
      </div>
    </div>
  );
}
