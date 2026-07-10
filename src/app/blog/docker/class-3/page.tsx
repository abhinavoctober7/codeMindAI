import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass3() {
  return (
    <DockerLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 3 — Environment Variables</p>
        <h1 className="text-3xl font-bold text-white">Environment Variables in Docker</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Hard-coding values like database URLs, API keys, or ports into your image is a mistake — the same image
          should run in dev, staging, and production without a rebuild. <span className="text-white font-medium">
          Environment variables</span> are how you inject that configuration from the outside.
        </p>
      </div>

      {/* 3.1 Why */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 Why Externalize Configuration?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A good image is <span className="text-white font-medium">build once, run anywhere</span>. If a secret or a
          setting is baked in, you need a different image per environment — defeating the point of containers. Config
          that changes between environments belongs <em>outside</em> the image, passed in at run time.
        </p>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Security note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Never bake real secrets (API keys, passwords) into the image with <code className="text-[#2496ed]">ENV</code>
            {" "}— they get stored in the image layers and travel with it. Pass secrets at run time instead, and keep
            <code className="text-[#2496ed]"> .env</code> files out of version control.
          </p>
        </div>
      </div>

      {/* 3.2 ENV vs ARG */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 ENV vs. ARG</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Docker has two variable instructions, and the difference is <span className="text-white font-medium">when</span>
          {" "}they exist.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <code className="text-xs font-bold text-[#2496ed] bg-[#2496ed]/10 px-2 py-1 rounded self-start">ARG</code>
            <p className="text-xs text-gray-400 leading-relaxed">
              A <span className="text-white font-medium">build-time</span> variable. Available only while the image is
              being built, never inside the running container. Set its value with
              <code className="text-[#2496ed]"> --build-arg</code>.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <code className="text-xs font-bold text-[#2496ed] bg-[#2496ed]/10 px-2 py-1 rounded self-start">ENV</code>
            <p className="text-xs text-gray-400 leading-relaxed">
              A <span className="text-white font-medium">run-time</span> variable baked into the image and present in
              every container it spawns. Override it at run time with <code className="text-[#2496ed]">-e</code>.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# Dockerfile
ARG PYTHON_VERSION=3.9        # build-time only
FROM python:\${PYTHON_VERSION}

ENV APP_ENV=production        # run-time default, lives in the image
ENV PORT=5000

WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "./app.py"]`}</code></pre>
        </div>
      </div>

      {/* 3.3 Passing at run time */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 Passing Variables at Run Time</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The <code className="text-[#2496ed]">ENV</code> line only sets a <em>default</em>. Override or add variables
          when you run the container — this is the value that changes per environment.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# single variable
docker run -e APP_ENV=staging -p 5000:5000 myapp

# multiple variables
docker run -e APP_ENV=staging -e DEBUG=true myapp

# build-time argument
docker build --build-arg PYTHON_VERSION=3.11 -t myapp .`}</code></pre>
        </div>
      </div>

      {/* 3.4 env-file */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Using an --env-file</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Long lists of <code className="text-[#2496ed]">-e</code> flags get unwieldy. Put them in a file and pass it
          with <code className="text-[#2496ed]">--env-file</code>. This keeps secrets out of your shell history and out
          of the Dockerfile.
        </p>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">.env</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`APP_ENV=production
PORT=5000
DATABASE_URL=postgres://user:pass@db:5432/app
SECRET_KEY=super-secret-value`}</code></pre>
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Run with it</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker run --env-file .env -p 5000:5000 myapp`}</code></pre>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Add <code className="text-[#2496ed]">.env</code> to your <code className="text-[#2496ed]">.gitignore</code>
            {" "}and <code className="text-[#2496ed]">.dockerignore</code> so secrets never get committed or copied into
            the image.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Config that varies per environment belongs outside the image, injected at run time.",
            "ARG is build-time only; ENV is baked into the image and present at run time.",
            "Set build args with --build-arg; override ENV values with -e at run time.",
            "Group many variables in a file and pass it with --env-file.",
            "Never bake real secrets into the image; keep .env out of Git and the build context.",
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
