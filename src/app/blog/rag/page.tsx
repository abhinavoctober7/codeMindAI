import { Link } from "react-router-dom";
import { TbDatabaseSearch } from "react-icons/tb";
import { ragLessons, getRagLessonHref } from "@/data/rag-lessons";

export default function RagIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <TbDatabaseSearch size={30} color="#8b5cf6" />
          <h1 className="text-3xl font-bold text-white">RAG</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          An LLM only knows what it learned during training — it goes stale, it hallucinates, it can&apos;t
          cite its sources, and it can&apos;t read your private documents. <span className="text-white font-medium">
          Retrieval-Augmented Generation (RAG)</span> fixes all four by fetching the right external
          knowledge at query time and handing it to the model as context. This short course builds RAG from
          the ground up: first <em>why</em> it&apos;s needed, then <em>what</em> it actually is, and finally
          <em> how</em> the full pipeline works end to end.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "The Four LLM Problems", desc: "Knowledge cutoff, hallucinations, no source attribution, and no access to private data — and why prompting alone can't fix them." },
            { title: "What RAG Really Means", desc: "Retrieval + Augmented + Generation: combining parametric knowledge with fetched external knowledge." },
            { title: "The RAG Components", desc: "Knowledge source, chunking, embeddings, vector store, retriever, augmentation, and generation." },
            { title: "The End-to-End Flow", desc: "How a query travels from embedding to similarity search to a grounded, cited answer." },
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
          {ragLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              to={getRagLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#8b5cf6]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#8b5cf6] transition-colors">
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
