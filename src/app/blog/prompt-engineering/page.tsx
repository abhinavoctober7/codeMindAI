import Link from "next/link";
import { TbSparkles } from "react-icons/tb";
import { promptEngineeringLessons, getPromptEngineeringLessonHref } from "@/data/prompt-engineering-lessons";

export default function PromptEngineeringIndex() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <TbSparkles size={32} color="#ec4899" />
          <h1 className="text-3xl font-bold text-white">Prompt Engineering</h1>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">
          Prompt engineering is the art and science of crafting effective instructions that guide
          generative AI models to produce exactly the output you want. Before you can write great
          prompts, you need to understand how LLMs actually think — so this course starts from first
          principles and builds up to practical, repeatable prompting techniques.
        </p>
      </div>

      {/* What you'll learn */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "How LLMs Work", desc: "Neural networks, weights, and why modern models are so good at language." },
            { title: "Transformers & Attention", desc: "The architecture and the self-attention mechanism that powers it." },
            { title: "Next-Token Prediction", desc: "Why LLMs are probabilistic engines, not reasoning machines." },
            { title: "Writing Effective Prompts", desc: "How prompts steer token probabilities to get the output you want." },
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
          {promptEngineeringLessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              href={getPromptEngineeringLessonHref(lesson.slug)}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#ec4899]/30 transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-[#ec4899]/10 text-[#ec4899] text-sm flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white group-hover:text-[#ec4899] transition-colors">
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
