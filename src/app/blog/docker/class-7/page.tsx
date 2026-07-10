import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass7() {
  return (
    <DockerLessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 7 — Docker Compose</p>
        <h1 className="text-3xl font-bold text-white">Docker Compose</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Real apps are rarely one container — a web app, a database, and a cache all need to run together.
          Starting each with a long <code className="text-[#2496ed]">docker run</code> command and wiring them by hand
          is painful. <span className="text-white font-medium">Docker Compose</span> defines the whole stack in one
          YAML file and runs it with a single command.
        </p>
      </div>

      {/* 7.1 Why */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 The Problem Compose Solves</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Without Compose you&apos;d manually create a network, start the database, start the cache, then start the
          web app with the right ports, volumes, and environment — every time. Compose captures all of that
          <span className="text-white font-medium"> declaratively</span> so any teammate can bring the stack up with
          one line.
        </p>
      </div>

      {/* 7.2 compose file */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.2 The compose.yaml File</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A Compose file lists <span className="text-white font-medium">services</span> (containers), plus any
          <span className="text-white font-medium"> volumes</span> and <span className="text-white font-medium">
          networks</span> they share.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`services:
  web:
    build: .                 # build from the Dockerfile in this folder
    ports:
      - "5000:5000"
    environment:
      - APP_ENV=production
    depends_on:
      - db                   # start db before web
    volumes:
      - .:/app

  db:
    image: postgres:16       # pull a prebuilt image
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:                   # named volume, managed by Docker`}</code></pre>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { k: "services", d: "Each entry is a container. Use build to build from a Dockerfile, or image to pull one." },
            { k: "ports", d: "Host:container port mapping, same as docker run -p." },
            { k: "environment", d: "Environment variables for the service (or use env_file)." },
            { k: "depends_on", d: "Controls start order — here web waits for db to start." },
            { k: "volumes", d: "Bind mounts or named volumes for persistence." },
          ].map(({ k, d }) => (
            <div key={k} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <code className="text-xs font-bold text-[#2496ed] bg-[#2496ed]/10 px-2 py-1 rounded shrink-0 min-w-[96px] text-center">
                {k}
              </code>
              <p className="text-xs text-gray-400 leading-relaxed self-center">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7.3 networking */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.3 Automatic Networking</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Compose puts every service on a shared network and lets them reach each other
          <span className="text-white font-medium"> by service name</span>. In the app above, the web container
          connects to the database at the hostname <code className="text-[#2496ed]">db</code> — no IP addresses, no
          manual links.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# inside the web app, the connection string is simply:
DATABASE_URL=postgres://postgres:secret@db:5432/app
#                                        ▲
#                              the service name "db"`}</code></pre>
        </div>
      </div>

      {/* 7.4 commands */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.4 Core Commands</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker compose up            # build (if needed) and start everything
docker compose up -d         # same, detached (in the background)
docker compose up --build    # force a rebuild of images first

docker compose ps            # list running services
docker compose logs -f web   # follow logs for one service
docker compose exec web sh   # open a shell inside the web container

docker compose down          # stop and remove containers + network
docker compose down -v       # also remove named volumes (deletes data)`}</code></pre>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Compose defines a multi-container app declaratively in one compose.yaml file.",
            "Each service is a container — built from a Dockerfile (build) or pulled (image).",
            "Services share a network and reach each other by service name, not IP.",
            "depends_on controls start order; volumes and environment configure each service.",
            "docker compose up starts the whole stack; down tears it down (add -v to drop volumes).",
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
