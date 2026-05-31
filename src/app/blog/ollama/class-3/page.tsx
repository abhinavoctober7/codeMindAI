import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass3() {
  return (
    <OllamaLessonLayout slug="class-3">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 3 — Hands-on CLI</p>
        <h1 className="text-3xl font-bold text-white">Installing Ollama &amp; the CLI</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Time to get practical. We&apos;ll install Ollama, then drive it from the command line — pulling
          models, listing them, running them, passing images, and inspecting and tuning a model. Ollama
          does exactly three things: <span className="text-white font-medium">download</span>,
          <span className="text-white font-medium"> run</span>, and <span className="text-white font-medium">manage</span> models.
        </p>
      </div>

      {/* 3.1 Install */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.1 Installing Ollama</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Go to Google, search <span className="text-white">ollama</span>, open the first link, and click
          Download. Run the setup file, click Install — done. Ollama is now on your system. To confirm:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`ollama --version
# prints the installed version → Ollama is ready`}</pre>
        </div>
      </div>

      {/* 3.2 Core commands */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.2 Core CLI Commands</h2>
        <div className="flex flex-col gap-2">
          {[
            { cmd: "ollama pull <model>", desc: "Download a model from Ollama's repository to your local system." },
            { cmd: "ollama ls", desc: "List all models currently installed on your machine (alias: ollama list)." },
            { cmd: "ollama run <model>", desc: "Load a model from storage into working memory (RAM/VRAM) and start chatting." },
            { cmd: "ollama rm <model>", desc: "Delete a model and all its files from your local system." },
          ].map(({ cmd, desc }) => (
            <div key={cmd} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <code className="text-sm text-[#14b8a6] font-mono">{cmd}</code>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`ollama pull mistral:8b          # download a model
ollama ls                        # see what you have
ollama run llama3.2:1b           # load into memory & chat
>>> What is photosynthesis?      # ask anything
>>> /bye                         # exit the model`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">What ollama run does</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            It lifts the model&apos;s files from <span className="text-white">storage</span> into your
            <span className="text-white"> working memory</span> (RAM/VRAM). Once loaded, you can ask it
            anything — and since the model is local, it keeps working even with the internet disconnected.
          </p>
        </div>
      </div>

      {/* 3.3 Vision / images */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.3 Passing Images (Vision Models)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          You can pass an image to a model by giving the path in your prompt — but only models with
          <span className="text-white font-medium"> vision capability</span> can read it. For example,
          <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> llama3.2</code> has tool
          calling but <span className="text-white">not</span> vision, so it can&apos;t summarize an image.
          A vision-capable model like <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">gemma3</code> can.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`ollama run gemma3:4b
>>> Summarize the image for me  /path/to/image.png
# vision-capable model reads and describes the image`}</pre>
        </div>
        <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Capability matters: vision, tool calling, embeddings, thinking — a model can only do what it
            was built for. Ollama just runs the model; the quality and abilities of the output depend
            entirely on the <span className="text-white font-medium">model</span> you chose.
          </p>
        </div>
      </div>

      {/* 3.4 Inspect & tune */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.4 Inspecting &amp; Tuning a Model</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Inside a running model you can inspect it with <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">/show</code> and
          change its behavior with <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">/set</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`>>> /show info         # architecture, context length, capabilities
>>> /show parameters   # the model's default parameters
>>> /show system       # the system instruction (if any)

>>> /set parameter top_p 0.9       # override a parameter
>>> /set system "You are a helpful assistant."   # set a system instruction`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          A parameter you set (like <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">top_p</code>) overrides the
          model&apos;s default, and any new system instruction shapes every following response.
        </p>
      </div>

      {/* 3.5 CLI is for testing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">3.5 The CLI Is for Experimentation</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            CLI commands are mostly used for <span className="text-white font-medium">testing and
            experimentation</span>. Developers tweak prompts, system instructions, and parameters here
            until they&apos;re satisfied — then they integrate that exact configuration into a real
            application using Python or JavaScript. That&apos;s the subject of the next class.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Install Ollama in one click; verify with ollama --version.",
            "Core commands: pull (download), ls (list), run (load & chat), rm (delete).",
            "ollama run loads a model from storage into working memory; once loaded it works even offline.",
            "You can pass images, but only vision-capable models (e.g. gemma3) can read them — capability depends on the model.",
            "Use /show to inspect a model and /set to change parameters or system instructions.",
            "The CLI is mainly for testing and experimentation; final configs get integrated into real apps via code.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </OllamaLessonLayout>
  );
}
