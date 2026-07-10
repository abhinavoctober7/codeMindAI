import { Link } from "react-router-dom";
import { SiDocker } from "react-icons/si";
import { dockerLessons, getDockerLessonHref } from "@/data/docker-lessons";

export default function DockerIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SiDocker size={30} color="#2496ed" />
          <h1 className="text-3xl font-bold text-white">Docker</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          &ldquo;It works on my machine&rdquo; is the oldest bug in software. <span className="text-white font-medium">
          Docker</span> makes that phrase meaningless by packaging an application together with everything it
          needs — code, runtime, libraries, and configuration — into a portable <em>container</em> that runs
          the same way everywhere. This course starts from the ground up: <em>what</em> Docker is, <em>why</em>
          it exists, and <em>how</em> its core pieces — the Engine, images, Dockerfiles, containers, and
          registries — fit together.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Why Docker Exists", desc: "Consistency across environments, isolation between apps, and effortless horizontal scaling." },
            { title: "The Docker Engine", desc: "The daemon, the CLI, and the REST API that power containerization." },
            { title: "Images & Dockerfiles", desc: "How images are built layer by layer from a Dockerfile's instructions." },
            { title: "Containers & Registries", desc: "Running isolated containers and storing, versioning, and sharing images via registries." },
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
          {dockerLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              to={getDockerLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#2496ed]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#2496ed]/10 text-[#2496ed] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#2496ed] transition-colors">
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
