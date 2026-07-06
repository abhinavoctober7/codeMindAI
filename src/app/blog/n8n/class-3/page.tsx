import N8nLessonLayout from "@/components/N8nLessonLayout";

export default function N8nClass3() {
  return (
    <N8nLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ea4b71] font-semibold uppercase tracking-widest">Class 3 — Setup</p>
        <h1 className="text-3xl font-bold text-white">Installing n8n — Cloud, Hostinger &amp; Docker</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          There are three ways to run n8n. This class covers all of them, then walks through self-hosting on
          your own machine with Docker — the free route — step by step.
        </p>
      </div>

      {/* 3.1 Three ways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 Three Ways to Run n8n</h2>
        <div className="flex flex-col gap-2">
          {[
            { t: "n8n Cloud", d: "Hosted on the n8n platform — nothing to install, fastest to start. Paid (~€20/mo starter) but with a 14-day free trial. Best for beginners; you can export workflows and import them elsewhere later.", tag: "Easiest" },
            { t: "Hostinger (hosted self-host)", d: "A cloud server with n8n pre-installed. You pay for the machine (e.g. KVM1: 1 CPU / 4GB RAM, or KVM2: 2 CPU / 8GB RAM). Good if your own hardware is weak.", tag: "Managed" },
            { t: "Self-host with Docker", d: "Completely free, runs on your own system. Slightly technical — you run a few commands in the terminal. This is what we'll do.", tag: "Free" },
          ].map(({ t, d, tag }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-white">{t}</p>
                <span className="text-[10px] font-bold text-[#ea4b71] bg-[#ea4b71]/10 px-2 py-0.5 rounded-full">{tag}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Recommendation</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            As a beginner, start on the <span className="text-white">n8n Cloud 14-day free trial</span> to get
            comfortable, then move to Docker self-hosting once the trial ends.
          </p>
        </div>
      </div>

      {/* 3.2 Prereqs */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 Docker Prerequisites</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          n8n recommends Docker for self-hosting — it gives a clean, isolated environment. You need
          <span className="text-white font-medium"> Docker Desktop</span> installed and
          <span className="text-white font-medium"> running</span> (look for the whale icon in your taskbar),
          plus reasonably capable hardware (8&ndash;16GB RAM). Inside Docker Desktop you&apos;ll watch three
          tabs: <span className="text-white">Images</span>, <span className="text-white">Volumes</span>, and
          <span className="text-white"> Containers</span>.
        </p>
      </div>

      {/* 3.3 Volume */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 Step 1 — Create a Volume</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A volume is a persistent storage location. Without it, your workflows and credentials vanish when
          the container restarts. With it, everything you create persists.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`docker volume create n8n_data`}</pre>
        </div>
      </div>

      {/* 3.4 Pull image */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Step 2 — Pull the Image</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The image is your &ldquo;setup file&rdquo; — it contains n8n. Pulling downloads the latest version
          (~1.6GB) to your machine; you&apos;ll see it appear in the Images tab.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`docker pull docker.n8n.io/n8nio/n8n`}</pre>
        </div>
      </div>

      {/* 3.5 Run */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.5 Step 3 — Run the Container</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This single (multi-line) command starts n8n: it names the container, maps port
          <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> 5678</code>, sets your
          timezone and a few env vars, and mounts the volume so data persists across restarts.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -e GENERIC_TIMEZONE="Asia/Kolkata" \\
  -e TZ="Asia/Kolkata" \\
  -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \\
  -e N8N_RUNNERS_ENABLED=true \\
  -v n8n_data:/home/node/.n8n \\
  docker.n8n.io/n8nio/n8n`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Windows PowerShell Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">\</code> line-breaks work
            on macOS/Linux. In Windows PowerShell, use backticks
            <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> `</code> for line
            continuation instead (backslashes mean paths there). Replace the timezone with your own from the
            tz database (e.g. <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">Asia/Kolkata</code>),
            keeping the exact casing.
          </p>
        </div>
      </div>

      {/* 3.6 Access */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.6 Step 4 — Open n8n</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Once the logs say the editor is accessible, open it in your browser:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`http://localhost:5678`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Set up your account (email + password), optionally grab the free community license key for advanced
          features, and you&apos;re running n8n on your own machine — for free. Just keep Docker Desktop open
          and the container started whenever you use n8n.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Three ways to run n8n: n8n Cloud (easiest, paid + 14-day trial), Hostinger (managed self-host), and Docker (free, local).",
            "Docker self-hosting needs Docker Desktop running and ~8–16GB RAM.",
            "Create a volume first (n8n_data) so workflows and credentials persist across restarts.",
            "Pull the image, then run the container with port 5678, your timezone, env vars, and the mounted volume.",
            "Open n8n at http://localhost:5678 and keep Docker Desktop running while you use it.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ea4b71]/20 text-[#ea4b71] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </N8nLessonLayout>
  );
}
