import { Link } from "react-router-dom";
import { SiOllama } from "react-icons/si";
import { ollamaLessons, getOllamaLessonHref } from "@/data/ollama-lessons";

export default function OllamaIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SiOllama size={30} color="#14b8a6" />
          <h1 className="text-3xl font-bold text-white">Ollama & Open-Source LLMs</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          Proprietary models like GPT and Gemini are powerful — but they cost money and your data
          leaves your machine. Open-source models are free, but running them is hard. Ollama removes
          that friction: download, run, and manage open-source LLMs on your own computer with a single
          command. This course takes the in-depth route — the full landscape, every way to use Ollama,
          tool calling, custom models, the REST API, LangChain, the cloud, and the desktop app.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Proprietary vs Open-Source", desc: "What separates GPT/Gemini from Llama, Qwen, and DeepSeek — and the friction of running them." },
            { title: "Running Models Locally", desc: "Install Ollama, pull models, and run them from the CLI, Python, and the desktop app." },
            { title: "Tool Calling & Modelfiles", desc: "Give LLMs new abilities with tools, and build customized models with Modelfiles." },
            { title: "REST API, LangChain & Cloud", desc: "How Ollama works under the hood, and how to scale to large models with Ollama Cloud." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Classes */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Course Classes</h2>
        <div className="flex flex-col gap-2">
          {ollamaLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              to={getOllamaLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#14b8a6]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#14b8a6]/10 text-[#14b8a6] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#14b8a6] transition-colors">
                  {lesson.title}
                </p>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
