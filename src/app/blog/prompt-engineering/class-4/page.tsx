import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass4() {
  return (
    <PromptEngineeringLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 4 — The AI&apos;s Company Policy</p>
        <h1 className="text-3xl font-bold text-white">System Instructions — Rules That Shape the AI</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          A prompt tells the AI <span className="text-white font-medium">what to do right now</span>. System
          instructions tell it <span className="text-white font-medium">how to behave always</span>. This
          class covers what system instructions are, the four layers used to build them, when they matter
          most, and the practical framework for writing them well.
        </p>
      </div>

      {/* 4.1 What are system instructions */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 What Are System Instructions?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          System instructions are <span className="text-white font-medium">persistent rules and directives</span>
          {" "}given to an AI model before it interacts with a user. They define how the AI should behave
          throughout the entire conversation, regardless of the user&apos;s individual requests.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "Applied before user input", v: "Loaded ahead of the first message" },
            { k: "Active for the whole session", v: "They don't expire mid-conversation" },
            { k: "Not overridden by prompts", v: "User requests can't cancel them" },
            { k: "Control the AI's behavior", v: "Identity, tone, rules, and limits" },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            If a prompt is a <span className="text-white font-medium">task</span>, then system instructions
            are the <span className="text-white font-medium">company policy</span> the AI must follow while
            doing that task.
          </p>
        </div>
      </div>

      {/* 4.2 Building system instructions */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 Building System Instructions — The Four Layers</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A strong system instruction is built from four stacked layers. Each answers a different question
          about how the AI should operate.
        </p>

        {/* Layer 1 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">1</span>
            <p className="text-sm font-bold text-white">Identity / Persona &amp; Task <span className="text-gray-500 font-normal">(The &quot;Who&quot;)</span></p>
          </div>
          <ul className="flex flex-col gap-1.5 pl-9">
            {[
              "Role / job title — who the AI is (Senior Architect, Harsh Critic, Friendly Tutor)",
              "Experience level — depth of knowledge or 'years of experience'",
              "Communication style — academic, casual, or minimalist 'vibe'",
              "Key values — what the persona cares about (efficiency, empathy)",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
            ))}
          </ul>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`You are a Senior Curriculum Architect with 15 years of
experience in EdTech. You are knowledgeable and encouraging.
You specialize in breaking complex topics into digestible,
project-based modules. You value "learning by doing" over
pure theory.`}</pre>
        </div>

        {/* Layer 2 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">2</span>
            <p className="text-sm font-bold text-white">Task Constraints &amp; Boundaries <span className="text-gray-500 font-normal">(The &quot;No-Go Zone&quot;)</span></p>
          </div>
          <ul className="flex flex-col gap-1.5 pl-9">
            {[
              "Restricted topics or content the AI must avoid",
              "Disallowed actions — no guessing, no fabricating, no legal/medical advice",
              "Scope boundaries — stay on task, don't add extra features or opinions",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
            ))}
          </ul>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`Avoid illegal, harmful, or sensitive content. Do not
include personal or confidential information. Do not guess,
fabricate facts, or hallucinate. Do not give legal, medical,
or professional advice. Stay strictly within the assigned
task — don't go off-topic or add personal opinions.`}</pre>
        </div>

        {/* Layer 3 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">3</span>
            <p className="text-sm font-bold text-white">Communication Style &amp; Format <span className="text-gray-500 font-normal">(The &quot;How&quot;)</span></p>
          </div>
          <ul className="flex flex-col gap-1.5 pl-9">
            {[
              "Tone & style — formal / casual / technical / beginner-friendly; concise vs detailed",
              "Language rules — simple vs advanced vocabulary; explain jargon; bullets vs paragraphs",
              "Formatting — JSON, table, list, markdown; specific headings; one-liner vs step-by-step",
              "Constraints — max length, code-only or no-code",
              "Fallback policy — what to do 'when unsure' (state the limitation, don't assume)",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
            ))}
          </ul>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`Use a clear, concise, professional tone — friendly but not
informal. Explain concepts in simple language, avoiding
jargon. Structure responses with bullet points and short
paragraphs. Follow strict output formats when specified
(JSON-only, character limits, templates).`}</pre>
        </div>

        {/* Layer 4 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">4</span>
            <p className="text-sm font-bold text-white">Context / Audience <span className="text-gray-500 font-normal">(The &quot;For Whom&quot;)</span></p>
          </div>
          <ul className="flex flex-col gap-1.5 pl-9">
            {[
              "Who the audience is — target group, demographic",
              "Their knowledge level — beginner, intermediate, expert",
              "What they need — tailor depth and examples accordingly",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
            ))}
          </ul>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`The audience is undergraduate students and early-career
professionals — basic familiarity with technology, but
limited exposure to advanced concepts.`}</pre>
        </div>
      </div>

      {/* 4.3 Full assembled example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 The Four Layers Assembled</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Stacking all four layers produces a complete, production-ready system instruction:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Full system instruction — a technical instructor persona</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`You are a Senior Technical Instructor with 10+ years
teaching software and data concepts. You communicate
calmly, clearly, and supportively while staying
professional. You prioritize conceptual clarity, practical
understanding, and learner confidence, reducing cognitive
overload.

Avoid illegal, harmful, or sensitive topics. Do not include
personal or confidential information. Do not guess,
fabricate, or hallucinate. Do not give legal, medical, or
professional advice. Stay within the user's request — no
off-topic additions, extra features, or personal opinions.

Use clear, beginner-friendly language. Prefer simple wording
and explain technical terms. Structure responses with bullet
points, short paragraphs, or step-by-step explanations.
Follow specified formats exactly (JSON, tables, word limits).
When information is missing or uncertain, state the
limitation instead of assuming.

Assume the audience is students and early-career
professionals with basic foundational knowledge and limited
hands-on experience.`}</pre>
        </div>
      </div>

      {/* 4.4 When system instructions are used */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.4 When Are System Instructions Used?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          System instructions are mostly used for <span className="text-white font-medium">development
          purposes</span> — when building applications, assistants, or products on top of an LLM, where
          behavior must stay consistent across thousands of users.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Problems Without Them</p>
            <ul className="flex flex-col gap-1.5">
              {["Tone changes randomly", "Inconsistent explanations", "Hallucinated or fabricated answers", "Unsafe or out-of-scope responses", "Lack of professionalism"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">Benefits of Using Them</p>
            <ul className="flex flex-col gap-1.5">
              {["Consistent behavior", "Predictable outputs", "Safety and compliance", "Better user trust", "Easier application control"].map((i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4.5 Tips */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.5 Tips for Writing System Instructions</h2>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#ec4899]">1. Use the Context–Task–Constraint framework</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Context — give the 'why': who is the audience and what's the goal.",
              "Task — be explicit about the output; use action verbs (Analyze, Draft, Summarize, Format).",
              "Constraint — say what NOT to do. The most underrated part of prompting.",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#ec4899]">2. Provide examples (few-shot prompting)</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            To lock in a specific style, show it instead of describing it.
          </p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`Follow this style for product descriptions:
  Item: Coffee Mug   → Start your morning with a ceramic hug.
  Item: Running Shoes → Your feet's new best friends for
                        the pavement.`}</pre>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#ec4899]">3. Be detailed about persona &amp; role</p>
            <p className="text-xs text-gray-400 leading-relaxed">The more precisely you define who the AI is, the more consistent its voice becomes.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#ec4899]">4. Handle missing / ambiguous data</p>
            <p className="text-xs text-gray-400 leading-relaxed">Always specify what to do when information is lacking or unclear — state the limitation, don&apos;t fabricate.</p>
          </div>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "System instructions are persistent rules applied before user input and active for the entire session — user prompts can't override them.",
            "A prompt is the task; system instructions are the company policy the AI follows while doing it.",
            "Build them in four layers: Identity/Persona, Constraints & Boundaries, Communication Style & Format, and Audience/Context.",
            "They're mostly used in development — to keep behavior consistent, predictable, safe, and trustworthy across users.",
            "Without them you get random tone, inconsistency, hallucinations, and out-of-scope answers.",
            "Write with the Context–Task–Constraint framework, show examples (few-shot), be specific about the persona, and always define the 'when unsure' fallback.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </PromptEngineeringLessonLayout>
  );
}
