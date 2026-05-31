import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass9() {
  return (
    <OllamaLessonLayout slug="class-9">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 9 — Cloud &amp; App</p>
        <h1 className="text-3xl font-bold text-white">Ollama Cloud &amp; the Desktop App</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          We finish with two things: <span className="text-white font-medium">Ollama Cloud</span> — for
          running models too large for your hardware — and the <span className="text-white font-medium">Ollama
          desktop app</span>, the easiest way of all to interact with models.
        </p>
      </div>

      {/* 9.1 The hardware wall */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.1 The Hardware Wall</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The same model often comes in many sizes — Qwen3-VL ships as 2B, 4B, 8B, 30B, 32B, 235B
          parameters. More parameters generally means better output. But large models won&apos;t run
          locally — not because Ollama stops you, but because of your
          <span className="text-white font-medium"> hardware constraint</span>.
        </p>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            A model&apos;s computation runs in your working memory (RAM/VRAM), which is limited. Try to run a
            100B-parameter model and your memory can&apos;t handle the computation — the whole system
            crashes. That&apos;s why large models can&apos;t run on most local machines.
          </p>
        </div>
      </div>

      {/* 9.2 Ollama Cloud */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.2 Ollama Cloud</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Launched around September 2025, Ollama Cloud is a cloud-based extension that lets you run large
          language models <span className="text-white font-medium">without powerful local hardware</span>.
          The computation that would have happened on your machine instead runs on Ollama&apos;s
          data-center-grade hardware. Only models with <span className="text-white font-medium">cloud
          capability</span> can run there.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Sign in, then run a cloud model</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`ollama signin          # opens a URL → connect in the browser

# run a huge model that could never fit locally
ollama run deepseek-v3.1:671b-cloud
>>> What are the colors of a rainbow?

# works from Python too — just stay signed in
import ollama
ollama.generate(model="deepseek-v3.1:671b-cloud", prompt="Why do stars twinkle?")`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Sign out and the same call returns an <span className="text-white">unauthorized</span> error.
          Whether you use the CLI, the Python library, or the REST API, you must be signed in to your
          Ollama account.
        </p>
      </div>

      {/* 9.3 Free tier + trade-off */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.3 Pricing &amp; the Privacy Trade-off</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#14b8a6]/5 border border-[#14b8a6]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#14b8a6]">Free for now</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Free to use with a limit on the number of requests (not on models). For commercial,
              high-volume apps you can upgrade to Pro or Max.
            </p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-red-400">The trade-off</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your data now leaves your machine. Ollama claims it processes and deletes requests without
              retaining them — but the infrastructure between you and the server is still a risk. You gain
              large-model quality and lose some safety/privacy.
            </p>
          </div>
        </div>
      </div>

      {/* 9.4 Desktop app */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.4 The Ollama Desktop App</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When you installed Ollama, a desktop app came with it — the easiest way to interact with models.
          Open it and you get a clean chat interface: pick a model, type, and get a response. You can
          start new chats, open settings, sign in (to access cloud models), pass images to vision models,
          and download new models on the fly.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">When to use it</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The app is perfect for <span className="text-white font-medium">general-purpose
            interaction</span> — using Ollama like a chatbot without touching commands. But for effective
            customization, parameter changes, and system instructions, you&apos;ll still want the CLI or
            code. (Under the hood, the app also uses the REST API.)
          </p>
        </div>
      </div>

      {/* Course wrap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Course Wrap-Up</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          That&apos;s the full picture of Ollama and open-source models — from the proprietary-vs-open-source
          landscape, to running models locally via the CLI, Python, the REST API, and LangChain, to tool
          calling, custom Modelfiles, the cloud, and the desktop app. You now have everything you need to
          absorb open-source LLMs and build projects with them.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Models come in many sizes; bigger usually means better output, but large models won't run locally due to hardware limits.",
            "Ollama Cloud runs large models on Ollama's data-center hardware — only cloud-capable models qualify.",
            "Use ollama signin, then run cloud models via CLI, Python, or REST — you must stay signed in.",
            "Cloud is free for now (request-limited; Pro/Max for scale) but trades away some data privacy.",
            "The desktop app is the easiest way to chat with models; for deep customization, use the CLI or code. It also runs on the REST API underneath.",
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
