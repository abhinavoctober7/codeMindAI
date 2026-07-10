import { Link } from "react-router-dom";
import { SiLangchain } from "react-icons/si";
import { langchainLessons, getLangChainLessonHref } from "@/data/langchain-lessons";

export default function LangChainIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SiLangchain size={30} color="#22a06b" />
          <h1 className="text-3xl font-bold text-white">LangChain</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          An LLM does the heavy lifting, but a real application has many moving parts — document loaders,
          text splitters, embedding models, vector databases, retrievers, and the model itself. Wiring
          them together by hand is hard. LangChain is the open-source framework that orchestrates all of
          it for you, so you can focus on your idea instead of the plumbing. This course builds your
          understanding from the ground up before we write a single line of code.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Why LangChain Exists", desc: "The real-world problem — building an LLM-powered app with many moving components — that LangChain was made to solve." },
            { title: "Semantic Search & RAG", desc: "Embeddings, vector databases, and retrieving the right context before asking the LLM." },
            { title: "Chains & Orchestration", desc: "Compose components into pipelines where one component's output becomes the next one's input." },
            { title: "What You Can Build", desc: "Chatbots, knowledge assistants, AI agents, workflow automation, and research helpers." },
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
          {langchainLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              to={getLangChainLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#22a06b]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#22a06b]/10 text-[#22a06b] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#22a06b] transition-colors">
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
