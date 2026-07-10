import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass6() {
  return (
    <DockerLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 6 — Volumes: Implementation</p>
        <h1 className="text-3xl font-bold text-white">Volumes in Docker — Implementation</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 5 was the theory. Now the commands: creating and mounting named volumes, using bind mounts for live
          development, and inspecting or cleaning up what you&apos;ve created.
        </p>
      </div>

      {/* 6.1 Named volume */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 Working with Named Volumes</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Create a volume, then mount it into a container with <code className="text-[#2496ed]">-v volume:/path</code>.
          Docker creates the volume automatically if it doesn&apos;t exist.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# create a named volume
docker volume create app-data

# mount it — everything Postgres writes to /var/lib/postgresql/data persists
docker run -d \\
  --name db \\
  -e POSTGRES_PASSWORD=secret \\
  -v app-data:/var/lib/postgresql/data \\
  postgres:16`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now delete and recreate the container — the data is still there because it lives in
          <code className="text-[#2496ed]"> app-data</code>, not in the container.
        </p>
      </div>

      {/* 6.2 Bind mount */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 Bind Mounts for Development</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Mount your project folder into the container so edits on your machine appear instantly inside it — no
          rebuild needed. Use an absolute host path on the left.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# $(pwd) is the current directory on your host
docker run -d \\
  -p 5000:5000 \\
  -v $(pwd):/app \\
  myapp

# read-only bind mount — container can read but not modify host files
docker run -v $(pwd)/config:/app/config:ro myapp`}</code></pre>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            The <code className="text-[#2496ed]">:ro</code> suffix makes a mount read-only. Omit it for the default
            read-write behavior.
          </p>
        </div>
      </div>

      {/* 6.3 -v vs --mount */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 Two Syntaxes: -v and --mount</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Both do the job. <code className="text-[#2496ed]">-v</code> is short; <code className="text-[#2496ed]">--mount</code>
          is explicit and self-documenting (preferred in scripts).
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# short form
docker run -v app-data:/data myapp

# explicit form — same result
docker run --mount type=volume,source=app-data,target=/data myapp

# bind mount, explicit form
docker run --mount type=bind,source=$(pwd),target=/app myapp`}</code></pre>
        </div>
      </div>

      {/* 6.4 Managing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.4 Inspecting &amp; Cleaning Up</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker volume ls                 # list all volumes
docker volume inspect app-data   # see mount point, driver, metadata
docker volume rm app-data        # remove one volume (must be unused)
docker volume prune              # remove ALL unused volumes — frees disk`}</code></pre>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Careful</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <code className="text-[#2496ed]">docker volume prune</code> permanently deletes data in any volume not
            attached to a container. Double-check nothing important is detached before running it.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Mount a named volume with -v name:/container/path; data persists across container recreation.",
            "Bind mounts (-v /host/path:/container/path) sync a host folder into the container for live dev.",
            "Add :ro to make any mount read-only.",
            "--mount is the explicit, script-friendly alternative to the shorthand -v.",
            "Manage volumes with docker volume ls / inspect / rm; prune frees unused ones (destructive).",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2496ed]/20 text-[#2496ed] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </DockerLessonLayout>
  );
}
