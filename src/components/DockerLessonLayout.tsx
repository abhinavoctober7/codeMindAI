import { Link } from "react-router-dom";
import { dockerLessons, getDockerLessonHref } from "@/data/docker-lessons";

interface Props {
  slug: string;
  children: React.ReactNode;
}

export default function DockerLessonLayout({ slug, children }: Props) {
  const index = dockerLessons.findIndex((l) => l.slug === slug);
  const prev = index > 0 ? dockerLessons[index - 1] : null;
  const next = index < dockerLessons.length - 1 ? dockerLessons[index + 1] : null;

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      <p className="text-xs text-gray-500 uppercase tracking-widest">
        Docker &rsaquo; {dockerLessons[index].label}
      </p>

      <div className="flex flex-col gap-8">{children}</div>

      <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-2">
        {prev ? (
          <Link
            to={getDockerLessonHref(prev.slug)}
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
            to={getDockerLessonHref(next.slug)}
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
