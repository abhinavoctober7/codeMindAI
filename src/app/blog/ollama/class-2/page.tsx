import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass2() {
  return (
    <OllamaLessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 2 — The What &amp; Why</p>
        <h1 className="text-3xl font-bold text-white">Meet Ollama — What, Why &amp; Benefits</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Open-source models are free but painful to run. Ollama is the tool that removes that pain. In
          this class we define what Ollama is, use a simple analogy to make it stick, walk through its
          benefits, and cover the hardware you need to run it well.
        </p>
      </div>

      {/* 2.1 What is Ollama */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 What Is Ollama?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ollama is a tool that helps you run large language models on your own computer. More precisely:
        </p>
        <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Ollama is a tool with which you can <span className="text-white font-medium">download</span>,
            <span className="text-white font-medium"> run</span>, and <span className="text-white font-medium">manage</span> open-source
            models — all on your local PC.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every pain point from the last class — storage, optimization, working-memory configuration,
          compatibility — Ollama handles for you. You focus only on <span className="text-white font-medium">using</span> the
          model. How to download it, where to store it, which memory to load it into, how requests and
          responses flow — none of that is your concern anymore.
        </p>
      </div>

      {/* 2.2 The WhatsApp analogy */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 The WhatsApp Analogy</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Think of Ollama like WhatsApp. When you use WhatsApp, you only focus on
          <span className="text-white font-medium"> sending and receiving</span> — text, images, audio,
          video. How those messages actually travel, how your privacy is maintained, how the media is
          transferred — all of that is handled by WhatsApp behind the scenes.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            In the same way, <span className="text-[#14b8a6] font-semibold">Ollama is WhatsApp for
            open-source models</span>. You focus on using the model; Ollama handles every technical detail
            underneath — efficiently.
          </p>
        </div>
      </div>

      {/* 2.3 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 Benefits of Using Ollama</h2>
        <div className="flex flex-col gap-2">
          {[
            { title: "Privacy & Data Control", desc: "The model runs on your local PC, so any data you pass to it never leaves your computer." },
            { title: "Low Latency & Offline Access", desc: "After the one-time download, you can use the model any number of times with no internet connection and no latency issues." },
            { title: "Cost Predictability & Savings", desc: "The model lives on your machine — you don't pay per request like you do with cloud-hosted proprietary models." },
            { title: "Simple Install & Setup", desc: "One click installs Ollama; simple commands download and run models. You don't need to be an ML engineer." },
            { title: "Prebuilt Model Library", desc: "Ollama maintains a huge repository of ready-to-use models, already converted into a format that downloads and runs easily." },
            { title: "Customization & No Lock-In", desc: "Fine-tune models, change parameters, and use them however you like — no vendor lock-in or usage rules." },
            { title: "Easy Run & Manage", desc: "Pull, run, and remove models with simple commands like ollama pull and ollama rm — Ollama does the rest on your behalf." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#14b8a6]">{title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">One More Analogy</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Ollama is like a <span className="text-white font-medium">consultant</span> working on your
            behalf — it handles every technical aspect of working with models so you can focus on the
            actual task.
          </p>
        </div>
      </div>

      {/* 2.4 Requirements */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 System Requirements</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Because you&apos;re running models locally, hardware matters. Ollama runs on macOS, Windows, and
          Linux. Here&apos;s what&apos;s recommended for a smooth experience:
        </p>
        <div className="flex flex-col gap-2">
          {[
            { req: "RAM", detail: "At least 8 GB recommended — more RAM, smoother performance." },
            { req: "Processor", detail: "An i5 13th-gen (or higher) class processor runs models very smoothly. Lower configs still work." },
            { req: "Storage", detail: "Space for model files. e.g. Qwen3-VL 2B ≈ 2 GB; the 8B variant ≈ 6.2 GB on disk." },
            { req: "Internet", detail: "Needed only the first time — to install Ollama and download models. After that, fully offline." },
            { req: "Basic CLI knowledge", detail: "A little familiarity with command-line commands helps, but isn't strictly required." },
            { req: "GPU (optional)", detail: "Not required, but a GPU is the cherry on top for a much smoother experience." },
          ].map(({ req, detail }) => (
            <div key={req} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-sm font-semibold text-white w-36 shrink-0">{req}</p>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Ollama is a tool to download, run, and manage open-source LLMs entirely on your local PC.",
            "It removes the friction of open-source models — storage, memory, and compatibility are all handled for you.",
            "Mental model: Ollama is 'WhatsApp for open-source models' — you focus on use, it handles the plumbing.",
            "Benefits: privacy, offline access, cost savings, one-click setup, a prebuilt model library, customization, and easy management.",
            "Recommended hardware: 8 GB+ RAM, a modern processor, enough storage for model files; internet only for first download; GPU optional.",
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
