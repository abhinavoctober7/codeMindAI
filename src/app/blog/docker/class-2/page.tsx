import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass2() {
  return (
    <DockerLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 2 — Docker in Practice</p>
        <h1 className="text-3xl font-bold text-white">Docker in Practice</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 1 built the theory. Now we run the full loop for real —
          <span className="text-white font-medium"> build → run → push → pull → run</span>. You&apos;ll set up the
          tools, verify the install, run your first container, build your own image from a Dockerfile, understand
          port mapping, and publish to Docker Hub.
        </p>
      </div>

      {/* 2.1 Setup */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 The Two Tools You Need</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The entire Docker workflow can be handled with just two things.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">Docker Desktop</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A desktop application (Windows, macOS, Linux) you install and run like any other app. Download it from
              <span className="text-[#2496ed]"> docker.com</span> for your OS. It&apos;s a fairly heavy program, so
              give it a moment to start.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">Docker Hub</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The public registry, a website at <span className="text-[#2496ed]">hub.docker.com</span> — a
              marketplace of images (TensorFlow, PyTorch, LangChain…) that you can search, pull, and publish to.
              Create a free account here.
            </p>
          </div>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">Tip:</span> log in to Docker Desktop with the
            <em> same</em> account you use on Docker Hub. You&apos;ll need that authentication later when you push
            your own images.
          </p>
        </div>
      </div>

      {/* 2.2 What Docker Desktop installs */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 What Docker Desktop Installs</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Installing Docker Desktop puts <span className="text-white font-medium">two</span> things on your machine.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "The Docker Engine", d: "The daemon + CLI + REST API from Class 1 — the actual runtime that builds and runs every image and container." },
            { t: "A Graphical User Interface (GUI)", d: "A visual dashboard that lists your images and containers, lets you start/stop them, search Docker Hub, and open a built-in terminal. It reads its data by talking to the Engine's REST API." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          In the GUI you&apos;ll mostly live in two tabs: <span className="text-white font-medium">Images</span>
          {" "}(what&apos;s on your machine) and <span className="text-white font-medium">Containers</span> (what&apos;s
          running or stopped). Volumes, Builds, and Scout come later.
        </p>
      </div>

      {/* 2.3 Verify installation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 Verify the Installation</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Open a terminal and type a single word. If the help text prints, the CLI and daemon are talking.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker`}</code></pre>
        </div>
      </div>

      {/* 2.4 First container */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 Your First Container: hello-world</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Docker publishes an official <code className="text-[#2496ed]">hello-world</code> image just to confirm your
          setup works. <span className="text-white font-medium">Pull</span> it, then <span className="text-white font-medium">run</span> it.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker pull hello-world     # downloads the latest tag from Docker Hub
docker run hello-world      # runs it as a container`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          You&apos;ll see <span className="text-white font-medium">&quot;Hello from Docker! This message shows your
          installation appears to be working correctly.&quot;</span> The container prints and exits immediately —
          it wasn&apos;t a long-running app, so it shows up in the Containers tab as <em>stopped</em>. Container names
          like <code className="text-[#2496ed]">gracious_shamir</code> are auto-generated.
        </p>
      </div>

      {/* 2.5 Pull & run an existing app */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.5 Pulling &amp; Running a Real App</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Recall the laptop-price predictor that crashed for the tester in Class 1. If the developer had shipped an
          <span className="text-white font-medium"> image</span> instead of raw code, the tester would just pull and
          run it — dependencies and all.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker pull twister24/lappy                    # username/image-name
docker run -p 8501:8501 twister24/lappy         # then open http://localhost:8501`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The app now runs on the tester&apos;s machine exactly as it did for the developer — no version conflicts,
          no setup. The <code className="text-[#2496ed]">-p</code> flag is <span className="text-white font-medium">port
          mapping</span>, explained next.
        </p>
      </div>

      {/* 2.6 Build your own image */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.6 Building Your Own Image</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Let&apos;s dockerize a tiny <span className="text-white font-medium">Flask</span> app that prints a number&apos;s
          multiplication table. Two files turn it into an image: a <code className="text-[#2496ed]">requirements.txt</code>
          and a <code className="text-[#2496ed]">Dockerfile</code>.
        </p>

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">requirements.txt</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`flask`}</code></pre>
        </div>

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Dockerfile</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`FROM python:3.9
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "./app.py"]`}</code></pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { k: "FROM", d: "Base image — python:3.9. This also pulls in a small Debian/Linux OS, which is why images are often 1 GB+." },
            { k: "WORKDIR", d: "Sets /app as the working directory inside the image." },
            { k: "COPY", d: "Copies your project files (the . on the left) into /app." },
            { k: "RUN", d: "Installs your dependencies from requirements.txt at build time." },
            { k: "EXPOSE", d: "Declares the port the app listens on inside the container (Flask defaults to 5000)." },
            { k: "CMD", d: "The command that launches the app when a container starts." },
          ].map(({ k, d }) => (
            <div key={k} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <code className="text-xs font-bold text-[#2496ed] bg-[#2496ed]/10 px-2 py-1 rounded shrink-0 min-w-[76px] text-center">
                {k}
              </code>
              <p className="text-xs text-gray-400 leading-relaxed self-center">{d}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">One easy-to-miss detail</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            In your Flask code, run the app on <code className="text-[#2496ed]">host=&quot;0.0.0.0&quot;</code>. By
            default Flask binds only to the container&apos;s internal loopback, so it can&apos;t be reached from
            outside the container. Binding to <code className="text-[#2496ed]">0.0.0.0</code> lets your host machine
            (and therefore your browser) reach it. Skip this and the image builds fine but the app is unreachable.
          </p>
        </div>

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Build the image</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker build -t twister24/table .`}</code></pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { k: "-t", d: "Tags (names) the image. Prefix with your Docker Hub username so it's unique and push-ready: username/name." },
            { k: ".", d: "The build context — the directory Docker sends to the daemon. The . means 'this project folder'." },
          ].map(({ k, d }) => (
            <div key={k} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <code className="text-xs font-bold text-[#2496ed] bg-[#2496ed]/10 px-2 py-1 rounded shrink-0 min-w-[76px] text-center">
                {k}
              </code>
              <p className="text-xs text-gray-400 leading-relaxed self-center">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Watch it build <span className="text-white font-medium">layer by layer</span> — each Dockerfile instruction
          becomes a layer. When it finishes, the image appears in Docker Desktop&apos;s Images tab.
        </p>

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Run it as a container</p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker run -p 8888:5000 twister24/table   # open http://localhost:8888`}</code></pre>
        </div>
      </div>

      {/* 2.7 Port mapping */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.7 Port Mapping Explained</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A container is isolated — the port your app listens on <em>inside</em> it isn&apos;t automatically reachable
          from your machine. The <code className="text-[#2496ed]">-p</code> flag bridges the two:
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker run -p 8888:5000 twister24/table
#              ▲     ▲
#              │     └── container port  (where Flask runs, from EXPOSE 5000)
#              └──────── host port       (what you open in the browser)`}</code></pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">Host port (left)</p>
            <p className="text-xs text-gray-400 leading-relaxed">The port on your own machine. Pick any free one — here 8888 — and that&apos;s what you visit at localhost:8888.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">Container port (right)</p>
            <p className="text-xs text-gray-400 leading-relaxed">The port the app actually listens on inside the container — 5000 for Flask, 8501 for Streamlit.</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#2496ed]">-p 8888:5000</code> means &quot;traffic hitting host port 8888 goes to
          container port 5000.&quot; This is why <code className="text-[#2496ed]">host=&quot;0.0.0.0&quot;</code> from
          §2.6 matters — without it, there&apos;s nothing on 5000 for the host to reach.
        </p>
      </div>

      {/* 2.8 Push to Docker Hub */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.8 Pushing to Docker Hub</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Once the image works locally, publish it so anyone can pull it. Two commands:
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker login                    # authenticate with your Docker Hub account
docker push twister24/laptop    # upload the image, layer by layer`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          With no explicit tag, Docker uses <code className="text-[#2496ed]">latest</code>. After the push, the image
          shows up under <span className="text-white font-medium">Repositories</span> on Docker Hub. Because it&apos;s
          public, anyone can search and pull it with <code className="text-[#2496ed]">docker pull twister24/laptop</code>.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Versioning with tags</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Improved the model? Rebuild and push under a new tag so both versions coexist:
            {" "}<code className="text-[#2496ed]">docker build -t twister24/laptop:v2 .</code> then
            {" "}<code className="text-[#2496ed]">docker push twister24/laptop:v2</code>. Teammates pull whichever tag
            they need.
          </p>
        </div>
      </div>

      {/* 2.9 Full loop recap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.9 The Full Loop, End to End</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Putting it all together for a real ML project (e.g. a Streamlit predictor on port 8501):
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# --- developer ---
docker build -t twister24/laptop .              # build
docker run -p 8501:8501 twister24/laptop        # run & verify locally
docker login
docker push twister24/laptop                    # push to registry

# --- tester (different machine) ---
docker pull twister24/laptop                    # pull the exact image
docker run -p 8501:8501 twister24/laptop        # run — works identically`}</code></pre>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            That&apos;s the whole game: <span className="text-white font-medium">build → run → push → pull → run</span>.
            The tester never fights a dependency again — the image carries the entire environment.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Two tools cover the whole workflow: Docker Desktop (Engine + GUI) and Docker Hub (the registry).",
            "Docker Desktop installs the Engine and a GUI; the GUI talks to the Engine's REST API to list images and containers.",
            "Verify the install by running `docker`; smoke-test the runtime with `docker pull/run hello-world`.",
            "Build an image from a Dockerfile with `docker build -t user/name .` — it builds layer by layer.",
            "Run an image as a container with `docker run -p host:container image` — this is port mapping.",
            "Bind web apps to host=0.0.0.0 so they're reachable from outside the container.",
            "Publish with `docker login` then `docker push user/name`; use tags (v1, v2, latest) for versioning.",
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
