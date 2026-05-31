import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass6() {
  return (
    <OllamaLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 6 — Customization</p>
        <h1 className="text-3xl font-bold text-white">Custom Models with Modelfiles</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          LLMs are general-purpose — they know everything from Shakespeare to Python. But in the real
          world you often need <span className="text-white font-medium">specialized behavior</span>: a
          polite support bot, a brutally honest code reviewer, a casual Gen-Z chat bot. A Modelfile is the
          simple way to get there without training from scratch.
        </p>
      </div>

      {/* 6.1 The idea */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 The Core Idea</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          One way to build a specialized model is to code and train one from scratch. The simpler way:
          take an existing general-purpose model and wrap it in an
          <span className="text-white font-medium"> instruction file</span> describing exactly how it
          should respond and behave. You don&apos;t touch the model&apos;s learning at all — you only change
          how that learning is used.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Analogy</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A brilliant student already solves integrals the traditional way. You teach them a
            <span className="text-white font-medium"> shortcut</span>. Their underlying knowledge is
            untouched — you&apos;ve only changed the <span className="text-white font-medium">way</span> they
            arrive at the answer. That&apos;s what a Modelfile does to an LLM.
          </p>
        </div>
      </div>

      {/* 6.2 What is a Modelfile */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 What Is a Modelfile?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A Modelfile is a <span className="text-white font-medium">configuration / text file</span> — it
          contains no AI model itself, only instructions (a blueprint) that guide an existing LLM. Inside
          it you specify:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "FROM", v: "The base model to build on (an existing LLM)." },
            { k: "PARAMETER", v: "Parameter values like temperature, top_p, etc." },
            { k: "SYSTEM", v: "The system instruction defining behavior." },
            { k: "TEMPLATE / examples", v: "How input reaches the model and example outputs." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <code className="text-xs text-[#14b8a6] font-mono">{k}</code>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          You pass the Modelfile to Ollama; it reads the file, takes the base model, layers your
          instructions on top, and produces a brand-new <span className="text-white font-medium">customized
          model</span>.
        </p>
      </div>

      {/* 6.3 Example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 Example: A Sentiment-Analysis Model</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          We want a model that reads text and outputs <span className="text-white font-medium">only
          JSON</span> — a sentiment (positive / negative / neutral) and a score — nothing else.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Modelfile</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`FROM llama3.2:1b

PARAMETER temperature 0.2
PARAMETER top_p 0.9

SYSTEM """
You are a sentiment analysis API. You ONLY output JSON in this schema:
{ "sentiment": "<positive|negative|neutral>", "score": <0.0-1.0> }
Do not output anything else.
"""`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Create &amp; run the customized model</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# build it from the Modelfile
ollama create sentiment:latest -f Modelfile

ollama ls                       # sentiment:latest now appears

ollama run sentiment:latest "I love the course"
# → { "sentiment": "positive", "score": 0.97 }

ollama run sentiment:latest "I love the course but it's expensive"
# → { "sentiment": "negative", "score": 0.62 }`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          A single text file gave you a customized LLM that behaves exactly to your spec. You can also
          build it in code via the library&apos;s <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">create</code> method —
          though the command line is usually simpler.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Real-world apps usually need specialized behavior, not a general-purpose model.",
            "A Modelfile is a text/config file with instructions — it contains no model, just a blueprint guiding an existing LLM.",
            "It changes HOW the model uses its learning, never the learning itself (the 'shortcut for a brilliant student' analogy).",
            "Key directives: FROM (base model), PARAMETER, SYSTEM, and TEMPLATE/examples.",
            "Build a custom model with: ollama create <name> -f Modelfile — or via the library's create method in code.",
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
