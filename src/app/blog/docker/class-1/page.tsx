import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass1() {
  return (
    <DockerLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 1 — Introduction to Docker</p>
        <h1 className="text-3xl font-bold text-white">Introduction to Docker</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          <span className="text-white font-medium">Docker</span> is a platform designed to help developers
          <span className="text-white font-medium"> build, share, and run</span> containerized applications.
          Instead of shipping just your code and hoping the target machine has the right runtime and
          dependencies, you ship a self-contained <em>container</em> that carries everything it needs — so it
          runs identically on a laptop, a CI server, or in production.
        </p>
      </div>

      {/* Analogy: Maggi */}
      <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4 flex flex-col gap-2">
        <p className="text-xs font-semibold text-[#2496ed] uppercase tracking-widest">Analogy — the Maggi masala</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          A packet of Maggi ships with a pre-mixed <span className="text-white font-medium">masala sachet</span>,
          not a recipe telling you to grind your own spices. Because the exact mix is sealed in and standardized,
          the noodles taste the same whether you cook them in a hostel or on a mountain trek. Imagine the
          alternative — Maggi handing you a recipe book instead: everyone&apos;s spice quality differs, so
          everyone&apos;s Maggi tastes different.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Software has the same problem. Shipping just your <em>code</em> is like shipping the recipe — it breaks
          when the next machine has a different OS or library version. A Docker container is the
          <span className="text-white font-medium"> sealed sachet</span>: your app plus everything it needs, so it
          behaves identically everywhere.
        </p>
      </div>

      {/* 1.1 Why Docker */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 Why Do We Need Docker?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Docker solves three recurring pain points in software delivery. Each is a common
          <span className="text-white font-medium"> problem</span> paired with the
          <span className="text-white font-medium"> solution</span> containers provide.
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              t: "Consistency Across Environments",
              p: "Applications behave differently in development, testing, and production because of variations in configuration, dependencies, and infrastructure.",
              s: "A container encapsulates every component the app needs, so it runs consistently across all environments.",
            },
            {
              t: "Isolation",
              p: "Running multiple applications on one host causes conflicts — dependency clashes and resource contention.",
              s: "Docker gives each application its own isolated environment, preventing interference and keeping performance stable.",
            },
            {
              t: "Scalability",
              p: "Scaling an application to handle more load is challenging, often requiring manual configuration.",
              s: "Docker makes it easy to scale horizontally by running many container instances — quick, repeatable, and efficient.",
            },
          ].map(({ t, p, s }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <p className="text-sm font-bold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-red-400 font-semibold">Problem:</span> {p}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-[#2496ed] font-semibold">Solution:</span> {s}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">A concrete scenario</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A data scientist builds a <span className="text-white font-medium">laptop-price predictor</span> with a
            Streamlit UI. It runs perfectly on their machine, so they push the code to GitHub for a tester to try.
            The tester clones it, runs <code className="text-[#2496ed]">streamlit run app.py</code>, and the app
            crashes with <code className="text-[#2496ed]">ColumnTransformer object has no attribute _name_to_fitted_passthrough</code>.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The cause: the developer used one version of <span className="text-white font-medium">scikit-learn</span>,
            the tester has a different one. Fixing that one library exposes the next mismatch, and the next — the
            same pain reappears at deployment on the server. Multiply this across a team and it&apos;s hours lost to
            environment drift. Docker removes it: ship the whole environment in a box, and it runs the same everywhere.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Containers vs. Virtual Machines</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Virtual machines also isolate applications, but each VM bundles a <span className="text-white font-medium">
            full guest operating system</span> — so they are heavy, slow to start, stop, and restart, and expensive to
            run many of. Containers share the host&apos;s kernel and package only the app and its dependencies, making
            them <span className="text-white font-medium">lightweight</span> and near-instant to launch. That&apos;s
            what makes isolation <em>and</em> scaling practical at the same time.
          </p>
        </div>
      </div>

      {/* 1.2 Docker Engine */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 The Docker Engine</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The <span className="text-white font-medium">Docker Engine</span> is the core of the platform — the
          runtime responsible for creating, running, and managing containers. It has three components that
          work together.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Docker Daemon (dockerd)", d: "A background service on the host that manages Docker objects — images, containers, networks, and volumes. It listens for API requests and handles the container lifecycle: start, stop, restart." },
            { t: "Docker CLI (docker)", d: "The command-line tool you interact with. You run commands here to build images, run containers, and manage resources — the CLI relays them to the daemon." },
            { t: "REST API", d: "The interface that lets the CLI talk to the daemon, and lets developers automate Docker or integrate it programmatically into their own applications." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#2496ed] uppercase tracking-widest mb-1">The flow in one line</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            You type a command in the <span className="text-white font-medium">CLI</span> → it travels over the
            <span className="text-white font-medium"> REST API</span> → the <span className="text-white font-medium">
            daemon</span> does the actual work.
          </p>
        </div>
      </div>

      {/* 1.3 Docker Image */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 Docker Image</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">Docker image</span> is a lightweight, standalone,
          executable package that includes everything needed to run software: the code, runtime, libraries,
          environment variables, and configuration. Containers are <em>instances</em> created from images.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Base Image", d: "The starting point — a minimal OS like alpine, a full OS like ubuntu, or an app image like python or node." },
            { t: "Application Code", d: "The actual code and files your application needs to run." },
            { t: "Dependencies", d: "Libraries, frameworks, and packages the application relies on." },
            { t: "Metadata", d: "Information about the image — environment variables, labels, and exposed ports." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">Image Lifecycle</p>
        <div className="flex flex-col gap-2">
          {[
            { n: "1", t: "Creation", d: "Built with docker build, which processes a Dockerfile's instructions into image layers." },
            { n: "2", t: "Storage", d: "Stored locally on the host, and can be pushed to or pulled from registries like Docker Hub, AWS ECR, or GCR." },
            { n: "3", t: "Distribution", d: "Shared by pushing to a registry so others can pull and use the same image." },
            { n: "4", t: "Execution", d: "Run as containers — the live instances of the image." },
          ].map(({ n, t, d }) => (
            <div key={n} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-7 h-7 rounded-full bg-[#2496ed]/15 text-[#2496ed] text-sm flex items-center justify-center font-bold shrink-0">
                {n}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{t}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1.4 Dockerfile */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 Dockerfile</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">Dockerfile</span> is a text file containing a series of
          instructions used to build an image. Each instruction creates a <span className="text-white font-medium">
          layer</span>, which allows efficient builds and reuse. Dockerfiles automate image creation, ensuring
          consistency and reproducibility.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`FROM ubuntu:20.04
LABEL version="1.0" description="My application"
RUN apt-get update && apt-get install -y python3
WORKDIR /app
COPY . /app
ENV PATH /app/bin:$PATH
EXPOSE 8080
VOLUME ["/data"]
CMD ["python", "app.py"]`}</code></pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { k: "FROM", d: "Specifies the base image to start from." },
            { k: "LABEL", d: "Adds metadata — version, description, or maintainer." },
            { k: "RUN", d: "Executes commands during the build, typically to install packages." },
            { k: "COPY", d: "Copies files or directories from the host into the image." },
            { k: "ENV", d: "Sets environment variables inside the image." },
            { k: "WORKDIR", d: "Sets the working directory for the instructions that follow." },
            { k: "EXPOSE", d: "Declares which network ports the container listens on." },
            { k: "CMD", d: "Provides the default command to run when the container starts." },
            { k: "VOLUME", d: "Creates a mount point for externally mounted volumes." },
            { k: "ARG", d: "Defines build-time variables, e.g. ARG VERSION=1.0." },
          ].map(({ k, d }) => (
            <div key={k} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <code className="text-xs font-bold text-[#2496ed] bg-[#2496ed]/10 px-2 py-1 rounded shrink-0 min-w-[76px] text-center">
                {k}
              </code>
              <p className="text-xs text-gray-400 leading-relaxed self-center">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.5 Docker Container */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 Docker Container</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">Docker container</span> is a lightweight, portable, and
          isolated environment that packages an application and its dependencies so it runs consistently across
          different computing environments. Containers are created from images, which are
          <span className="text-white font-medium"> immutable</span> and hold everything the application needs.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Image vs. Container</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            An <span className="text-white font-medium">image</span> is the immutable blueprint; a
            <span className="text-white font-medium"> container</span> is a running instance of it. One image
            can spawn many containers — which is exactly what makes horizontal scaling so easy.
          </p>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-[#2496ed] uppercase tracking-widest">Analogy — a movie DVD</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The <span className="text-white font-medium">image</span> is the DVD of a movie. Play it on your TV and
            you get one running instance; play the same DVD on a school projector and you get another. Each playing
            copy is a <span className="text-white font-medium">container</span> — the DVD (image) never changes.
          </p>
        </div>
      </div>

      {/* 1.6 Registry */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.6 Docker Registry</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">Docker registry</span> is a service that stores and
          distributes images — a repository where you push, pull, and manage them.
          <span className="text-white font-medium"> Docker Hub</span> is the best-known public registry, but
          organizations can also run private registries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">Repositories</p>
            <p className="text-xs text-gray-400 leading-relaxed">A collection of related images — typically different versions of the same application.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">Tags</p>
            <p className="text-xs text-gray-400 leading-relaxed">Version labels within a repository, e.g. myapp:1.0, myapp:2.0, myapp:latest.</p>
          </div>
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-1">Types of Registries</p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Docker Hub", d: "The default public registry (hub.docker.com). Hosts a vast number of public images and also supports private repositories." },
            { t: "Private Registries", d: "Custom registries set up by organizations to securely store and control distribution of their own images." },
            { t: "Third-Party Registries", d: "Cloud-integrated options like Amazon ECR, Google GCR, and Azure ACR for seamless deployment within cloud infrastructure." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#2496ed] uppercase tracking-widest mb-1">Why registries matter</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Centralized image management, version control via tags, easy collaboration, secure private storage,
            and seamless integration with CI/CD pipelines.
          </p>
        </div>
      </div>

      {/* 1.7 End-to-end workflow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.7 The End-to-End Docker Workflow</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Here is how all the pieces come together — from a developer&apos;s laptop to a teammate&apos;s machine.
          Every participant just needs the <span className="text-white font-medium">Docker Engine</span> installed.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { n: "1", t: "Write a Dockerfile", d: "The developer adds a Dockerfile to the project, listing every instruction needed to package the app." },
            { n: "2", t: "Build the image", d: "docker build turns the Dockerfile into an image, layer by layer." },
            { n: "3", t: "Run & verify locally", d: "The developer runs the image as a container on their own machine to confirm it works." },
            { n: "4", t: "Push to a registry", d: "docker push uploads the image to a registry (Docker Hub, private, or cloud)." },
            { n: "5", t: "Pull on another machine", d: "A tester (with Docker installed) runs docker pull to download the exact same image." },
            { n: "6", t: "Run the container", d: "The tester runs it — it behaves identically, because the image carries its whole environment." },
            { n: "7", t: "Iterate with tags", d: "Code changed? Rebuild, push a new tag (v2 replacing v1), and others pull the update." },
          ].map(({ n, t, d }) => (
            <div key={n} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-7 h-7 rounded-full bg-[#2496ed]/15 text-[#2496ed] text-sm flex items-center justify-center font-bold shrink-0">
                {n}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{t}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Keep this loop in your head — <span className="text-white font-medium">build → run → push → pull → run</span>
            {" "}— and Docker never feels confusing. We&apos;ll do every step hands-on in the next class.
          </p>
        </div>
      </div>

      {/* 1.8 Use cases */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.8 Common Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Microservices Architecture", d: "Break an app into small, independent services, each in its own container — developed, updated, and deployed independently." },
            { t: "CI/CD Pipelines", d: "A consistent environment from development to production streamlines the pipeline and speeds up testing and deployment." },
            { t: "Cloud Migration", d: "Containerize apps to move them to the cloud and run them consistently across different providers." },
            { t: "Scalable Web Apps", d: "Deploy in containers to scale up or down with traffic while keeping deployment consistent." },
            { t: "Testing & QA", d: "Spin up environments identical to production so tests are reliable and setup is fast." },
            { t: "Machine Learning & AI", d: "Deploy models with a consistent runtime, simplify scaling of training and inference, and aid reproducibility." },
            { t: "API Development", d: "Build and deploy APIs in containers for consistent behavior, easy scaling, and faster releases." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
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
            "Docker is a platform to build, share, and run applications inside portable containers.",
            "It solves three problems: environment consistency, isolation between apps, and easy horizontal scaling.",
            "The Docker Engine is the runtime — made of the daemon (dockerd), the CLI, and the REST API.",
            "An image is an immutable, executable package (base image + code + dependencies + metadata).",
            "A Dockerfile is a set of instructions (FROM, RUN, COPY, CMD…) that builds an image layer by layer.",
            "A container is a running, isolated instance of an image — one image can spawn many containers.",
            "A registry (Docker Hub, private, or cloud) stores, versions, and distributes images.",
            "The whole workflow is a loop: build → run → push → pull → run.",
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
