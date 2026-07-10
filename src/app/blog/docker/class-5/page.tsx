import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass5() {
  return (
    <DockerLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 5 — Volumes: Concepts</p>
        <h1 className="text-3xl font-bold text-white">Volumes in Docker — Concepts</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Containers are <span className="text-white font-medium">ephemeral</span> — delete one and everything
          written inside it is gone. That&apos;s fine for a stateless web app, but disastrous for a database.
          <span className="text-white font-medium"> Volumes</span> are how Docker persists and shares data
          independently of a container&apos;s lifecycle.
        </p>
      </div>

      {/* 5.1 The problem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 The Problem: Containers Are Disposable</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A container has its own writable layer on top of the read-only image layers. Anything the app writes —
          uploaded files, database rows, logs — lives in that writable layer. When the container is removed, so is
          the layer.
        </p>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Scenario</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            You run a Postgres container, add 10,000 rows, then recreate the container to change a setting. Without a
            volume, all 10,000 rows vanish — the new container starts from the empty image again.
          </p>
        </div>
      </div>

      {/* 5.2 What a volume is */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 What a Volume Is</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A volume is storage that lives <span className="text-white font-medium">outside</span> the container&apos;s
          writable layer, managed on the host. The container mounts it at a path; reads and writes to that path go to
          the volume, which survives the container being stopped, removed, or replaced.
        </p>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Think of it like plugging a <span className="text-white font-medium">USB drive</span> into the container.
            Swap the container (the computer) all you like — the drive and its files stay.
          </p>
        </div>
      </div>

      {/* 5.3 Types */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 Three Ways to Persist Data</h2>
        <div className="flex flex-col gap-2">
          {[
            { t: "Named Volumes", d: "Docker-managed storage in a location Docker controls. The recommended choice for databases and app data — portable, easy to back up, and decoupled from the host's folder layout.", tag: "Recommended" },
            { t: "Bind Mounts", d: "Map a specific folder on your host directly into the container. Great for development — edit code on your machine and see it live inside the container. Tied to the host's exact path.", tag: "Dev" },
            { t: "tmpfs Mounts", d: "Stored in the host's memory only, never written to disk. Useful for sensitive or temporary scratch data that should disappear when the container stops.", tag: "In-memory" },
          ].map(({ t, d, tag }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-white">{t}</p>
                <span className="text-[10px] font-semibold text-[#2496ed] bg-[#2496ed]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{tag}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5.4 Named vs bind */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.4 Named Volumes vs. Bind Mounts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Named Volume</p>
            <ul className="text-xs text-gray-400 leading-relaxed flex flex-col gap-1 list-disc list-inside">
              <li>Managed by Docker</li>
              <li>Not tied to a host path</li>
              <li>Portable across machines</li>
              <li>Best for production data (DBs)</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Bind Mount</p>
            <ul className="text-xs text-gray-400 leading-relaxed flex flex-col gap-1 list-disc list-inside">
              <li>Points to an exact host folder</li>
              <li>Host and container share the files live</li>
              <li>Perfect for local development</li>
              <li>Breaks if the host path differs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Containers are ephemeral — their writable layer is destroyed when the container is removed.",
            "Volumes store data outside the container so it survives restarts and replacements.",
            "Named volumes are Docker-managed and best for persistent app/database data.",
            "Bind mounts map a host folder into the container — ideal for live-editing code in development.",
            "tmpfs mounts keep data in memory only, for temporary or sensitive scratch data.",
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
