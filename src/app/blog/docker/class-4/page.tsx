import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass4() {
  return (
    <DockerLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 4 — Caching & Multi-Stage Builds</p>
        <h1 className="text-3xl font-bold text-white">Caching &amp; Multi-Stage Builds</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          In Class 2 our image was over 1&nbsp;GB and every rebuild reinstalled all dependencies. Two techniques fix
          that: <span className="text-white font-medium">layer caching</span> makes rebuilds fast, and
          <span className="text-white font-medium"> multi-stage builds</span> make final images small.
        </p>
      </div>

      {/* 4.1 Layers recap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 Every Instruction Is a Layer</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Each Dockerfile instruction produces a <span className="text-white font-medium">layer</span>, and Docker
          caches them. On a rebuild, Docker reuses a cached layer as long as that instruction — and everything before
          it — hasn&apos;t changed. The moment one layer changes, that layer and <em>every layer after it</em> must be
          rebuilt.
        </p>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            The golden rule: <span className="text-white font-medium">order instructions from least-frequently changed
            to most-frequently changed.</span> Dependencies change rarely; your source code changes constantly.
          </p>
        </div>
      </div>

      {/* 4.2 Cache-friendly ordering */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 Cache-Friendly Ordering</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Class 2 Dockerfile copied everything <em>before</em> installing dependencies — so any code edit
          invalidated the pip-install layer and reinstalled every package. Copy the requirements file first:
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Slow — reinstalls on every code change</p>
            <div className="bg-[#0d1117] border border-red-500/20 rounded-xl p-4 overflow-x-auto">
              <pre className="text-xs leading-relaxed text-gray-300"><code>{`FROM python:3.9
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]`}</code></pre>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-[#2496ed] uppercase tracking-widest">Fast — deps cached until requirements.txt changes</p>
            <div className="bg-[#0d1117] border border-[#2496ed]/20 rounded-xl p-4 overflow-x-auto">
              <pre className="text-xs leading-relaxed text-gray-300"><code>{`FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt   # cached unless requirements.txt changes
COPY . /app                           # only this layer rebuilds on code edits
CMD ["python", "app.py"]`}</code></pre>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">.dockerignore</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Add a <code className="text-[#2496ed]">.dockerignore</code> (like <code className="text-[#2496ed]">.gitignore</code>)
            to keep <code className="text-[#2496ed]">node_modules</code>, <code className="text-[#2496ed]">.git</code>,
            <code className="text-[#2496ed]"> __pycache__</code>, and datasets out of the build context — smaller
            context means faster builds and fewer accidental cache busts.
          </p>
        </div>
      </div>

      {/* 4.3 Multi-stage */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 Multi-Stage Builds</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Building an app often needs heavy tools — compilers, build kits, dev dependencies — that the
          <em> running</em> app doesn&apos;t need. A multi-stage build uses one stage to build and a second, clean
          stage that copies out <span className="text-white font-medium">only the finished artifact</span>. The
          final image ships without the build tooling, so it&apos;s dramatically smaller.
        </p>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Example — a Go binary</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# --- stage 1: build ---
FROM golang:1.22 AS builder
WORKDIR /src
COPY . .
RUN go build -o app .          # produces a binary, needs the full Go toolchain

# --- stage 2: runtime ---
FROM alpine:latest
WORKDIR /app
COPY --from=builder /src/app .  # copy ONLY the binary out of the builder stage
CMD ["./app"]`}</code></pre>
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Example — a Python app with a slim runtime</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`FROM python:3.9 AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.9-slim          # smaller base image for the final stage
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["python", "app.py"]`}</code></pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">AS builder</p>
            <p className="text-xs text-gray-400 leading-relaxed">Names a stage so later stages can reference it.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">COPY --from=builder</p>
            <p className="text-xs text-gray-400 leading-relaxed">Pulls a file out of an earlier stage into the current one — the build tools stay behind.</p>
          </div>
        </div>
      </div>

      {/* 4.4 Smaller base images */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.4 Choosing Smaller Base Images</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The base image dominates final size. Prefer <code className="text-[#2496ed]">-slim</code> or
          <code className="text-[#2496ed]"> alpine</code> variants when your app doesn&apos;t need a full OS.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "python:3.9", d: "Full Debian-based image — ~1 GB. Convenient, has everything, but heavy." },
            { t: "python:3.9-slim", d: "Trimmed Debian — a few hundred MB. A good default for most apps." },
            { t: "python:3.9-alpine", d: "Tiny (~50 MB) Alpine Linux base. Smallest, but some packages need extra build steps." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <code className="text-sm font-semibold text-white">{t}</code>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Each instruction is a cached layer; a change invalidates that layer and all layers after it.",
            "Copy requirements first and install before copying source, so dependencies stay cached across code edits.",
            "Use a .dockerignore to shrink the build context and avoid needless cache busts.",
            "Multi-stage builds compile in one stage and copy only the artifact into a clean, small final stage.",
            "Pick slim or alpine base images to keep the final image small.",
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
