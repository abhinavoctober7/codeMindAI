import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass1() {
  return (
    <OllamaLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 1 — Foundations</p>
        <h1 className="text-3xl font-bold text-white">LLMs: Proprietary vs Open-Source</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before touching Ollama, you need the lay of the land. What is an LLM at a low level? And on the
          basis of accessibility and control, how do we split LLMs into two camps — proprietary and
          open-source? This class sets up the exact problem that Ollama was built to solve.
        </p>
      </div>

      {/* 1.1 What is an LLM */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 What Is an LLM?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          At a high level, an LLM is a <span className="text-white font-medium">complex neural network</span> with
          many layers and a huge number of connections. At a low level, an LLM is really just a
          <span className="text-white font-medium"> collection of numbers</span> — and those numbers are the
          model&apos;s weights and biases.
        </p>
        <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#14b8a6] uppercase tracking-widest mb-1">The Key Idea</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Everything an LLM learned during training is stored inside these weights and biases. When the
            model was trained, all of its &quot;knowledge&quot; was baked into those numbers. That is, in short,
            what an LLM is.
          </p>
        </div>
      </div>

      {/* 1.2 The split */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 Classifying LLMs by Access &amp; Control</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          On the basis of how much access and control you have over the model, every LLM falls into one
          of two categories:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Proprietary Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">Owned and controlled by a company. You only get the right to use them.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Open-Source Models</p>
            <p className="text-xs text-gray-400 leading-relaxed">Released publicly. You can download, run, and modify the raw model.</p>
          </div>
        </div>
      </div>

      {/* 1.3 Proprietary */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 Proprietary Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Proprietary models are owned and controlled entirely by a company. The company keeps the
          architecture, the weights and biases, and the training data private — none of it is public.
          You are only given the <span className="text-white font-medium">right to use</span> the model,
          generally through an API or a controlled platform (a chatbot or app), almost always via a paid
          subscription.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "Gemini", by: "Developed by Google" },
            { name: "ChatGPT (GPT)", by: "Developed & managed by OpenAI" },
          ].map(({ name, by }) => (
            <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-gray-400">{by}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">In Short</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            With proprietary models you have <span className="text-white">only the right to use</span> the
            model. The raw internals — architecture, weights, biases, training data — are never in your
            hands.
          </p>
        </div>
      </div>

      {/* 1.4 Open-source */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 Open-Source Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Open-source models are the opposite. A company develops and trains a model, then makes it
          public — the architecture, weights, biases, and training data are all released. Anyone around
          the globe can download those raw components (commonly from a platform like
          <span className="text-white font-medium"> Hugging Face</span>) and run the model on their own
          system. The only cost is electricity and hardware.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {["Meta Llama", "Mistral", "DeepSeek / Qwen / GLM"].map((m) => (
            <div key={m} className="bg-[#14b8a6]/5 border border-[#14b8a6]/30 rounded-xl p-3 text-center">
              <p className="text-sm font-semibold text-[#14b8a6]">{m}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#14b8a6] uppercase tracking-widest mb-1">The Superpower</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Because you hold all the raw files, you can <span className="text-white font-medium">fine-tune
            and customize</span> the model. Think of it like a full length of cloth — you can cut it into
            any shape and stitch your own dress. That freedom is what open-source gives you.
          </p>
        </div>
      </div>

      {/* 1.5 Why open-source is hard */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 The Catch: Open-Source Is Hard to Use</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          So if open-source models are free and fully yours, why do people still pay for ChatGPT and
          Gemini? Because <span className="text-white font-medium">using an open-source model is the
          biggest pain point of all</span>. When a company releases a model, it ships as raw model weights
          — numbers and an architecture. Getting that to actually run on your PC is a huge friction.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { issue: "Storage & optimization", detail: "How do you store these raw weights locally and optimize them so the LLM runs well on your machine?" },
            { issue: "Working memory config", detail: "Weights and biases need calculations in working memory — how do you configure your RAM / VRAM to load and run the model?" },
            { issue: "Compatibility", detail: "Raw weights are often not directly compatible with your local system — you can't just use them as-is." },
          ].map(({ issue, detail }) => (
            <div key={issue} className="bg-red-950/20 border border-red-500/20 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-red-400">{issue}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The list goes on. The result: open-source models are <span className="text-white font-medium">theoretically
          free, but practically hard to use</span> — which is exactly the friction Ollama exists to remove.
          That&apos;s where the next class begins.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "An LLM is a complex neural network — at a low level, just a collection of numbers (weights and biases) where all its learning is stored.",
            "By access and control, LLMs split into proprietary and open-source models.",
            "Proprietary (GPT, Gemini): owned by a company, used via API/platform, usually paid — you never get the raw internals.",
            "Open-source (Llama, Mistral, DeepSeek, Qwen): publicly released; download, run locally, and even fine-tune them.",
            "Open-source is free in theory but hard in practice — storage, memory configuration, and compatibility all get in the way.",
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
