import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass10() {
  return (
    <DockerLessonLayout slug="class-10">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Extra Concepts — Debugging</p>
        <h1 className="text-3xl font-bold text-white">Debugging in Docker</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Containers fail in a handful of predictable ways: they exit immediately, they can&apos;t be reached, or the
          app inside misbehaves. This class is the toolkit — <span className="text-white font-medium">logs, exec,
          inspect</span> — plus fixes for the errors you&apos;ll actually hit.
        </p>
      </div>

      {/* 10.1 See what's happening */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.1 See What&apos;s Running</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker ps            # running containers
docker ps -a         # ALL containers, including exited ones + exit codes
docker images        # images on this machine`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          A container missing from <code className="text-[#2496ed]">docker ps</code> but present in
          <code className="text-[#2496ed]"> docker ps -a</code> with a non-zero exit code has crashed — start with its
          logs.
        </p>
      </div>

      {/* 10.2 Logs */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.2 Reading Logs</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#2496ed]">docker logs</code> shows whatever the app printed to stdout/stderr — usually
          the actual error and stack trace.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker logs <container>          # all logs
docker logs -f <container>       # follow live (like tail -f)
docker logs --tail 50 <container># last 50 lines`}</code></pre>
        </div>
      </div>

      {/* 10.3 Exec */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.3 Getting a Shell Inside</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#2496ed]">docker exec</code> runs a command in a <em>running</em> container — open a
          shell to poke around: check files, env vars, and network from the inside.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker exec -it <container> sh     # or bash if the image has it
# inside the container:
ls -la /app         # are the files where you expect?
env                 # are the environment variables set?
cat requirements.txt`}</code></pre>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            If the container exits instantly you can&apos;t <code className="text-[#2496ed]">exec</code> into it.
            Override the entrypoint to get a shell on the image instead:
            {" "}<code className="text-[#2496ed]">docker run -it --entrypoint sh myimage</code>.
          </p>
        </div>
      </div>

      {/* 10.4 Inspect */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.4 Inspecting Configuration</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#2496ed]">docker inspect</code> dumps the full config — ports, mounts, networks,
          environment — as JSON. <code className="text-[#2496ed]">docker stats</code> shows live resource usage.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker inspect <container>       # full JSON: mounts, env, network, etc.
docker stats                     # live CPU / memory per container
docker port <container>          # confirm the port mappings`}</code></pre>
        </div>
      </div>

      {/* 10.5 Common issues */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.5 Common Issues &amp; Fixes</h2>
        <div className="flex flex-col gap-2">
          {[
            { p: "Container exits immediately", d: "The main process finished or crashed. Check docker logs; make sure CMD starts a long-running foreground process (not one that exits)." },
            { p: "Can't reach the app in the browser", d: "Missing -p port mapping, or the app binds to 127.0.0.1 instead of 0.0.0.0. Bind to 0.0.0.0 and map the port." },
            { p: "Port is already allocated", d: "Another process (or container) uses that host port. Pick a different host port or stop the conflicting container." },
            { p: "Changes not showing up", d: "You rebuilt but ran the old image, or a cached layer is stale. Rebuild with --no-cache and re-run the new tag." },
            { p: "No space left on device", d: "Old images/containers/volumes piled up. Run docker system prune (add -a --volumes to reclaim more, carefully)." },
            { p: "File not found inside container", d: "It was excluded by .dockerignore or the COPY path is wrong. exec in and ls to verify the layout." },
          ].map(({ p, d }) => (
            <div key={p} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{p}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 10.6 cleanup */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.6 Cleaning Up</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker stop <container>          # stop a running container
docker rm <container>            # remove a stopped container
docker rmi <image>               # remove an image
docker system prune              # remove stopped containers, unused nets/images
docker system prune -a --volumes # aggressive cleanup (frees the most, destructive)`}</code></pre>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "docker ps -a reveals crashed containers and their exit codes.",
            "docker logs is your first stop — it holds the app's actual error output.",
            "docker exec -it <container> sh gives you a shell to inspect files, env, and network live.",
            "docker inspect / stats / port reveal configuration and resource usage.",
            "Most failures are: container exits, app not bound to 0.0.0.0, missing port map, or stale rebuild.",
            "Reclaim disk with docker system prune when images and containers pile up.",
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
