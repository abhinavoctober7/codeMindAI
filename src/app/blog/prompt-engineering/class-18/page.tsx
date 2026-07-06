import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass18() {
  return (
    <PromptEngineeringLessonLayout slug="class-18">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 18 — Prompts in Production</p>
        <h1 className="text-3xl font-bold text-white">Prompt Management — The Prompt Lifecycle &amp; Versioning</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Every previous class made you better at <span className="text-white font-medium">writing</span> a prompt. This
          one is about <span className="text-white font-medium">running</span> prompts in a real application — where a
          prompt controls quality, tone, security, and persona, and is therefore treated as a{" "}
          <span className="text-white font-medium">first-class citizen</span> of the codebase.
        </p>
      </div>

      {/* 18.1 Why prompts are first-class citizens */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.1 Why Prompts Are First-Class Citizens</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In an AI application, the prompt dictates the quality, tone, and behavior of the AI. Because it has such a high
          level of control over performance, consistency, security, and persona, a prompt deserves the same care as
          source code — not a throwaway line in a text file.
        </p>
      </div>

      {/* 18.2 Why management is needed */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.2 Why Management Is Needed</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Production prompts aren&apos;t a solo job — multiple stakeholders shape them:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Product Teams</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Define the persona and output constraints — e.g. a kids&apos; English-learning app must stay playful and
              avoid complex vocabulary.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Legal Teams</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Monitor and set safety boundaries on what the AI should and should not say.
            </p>
          </div>
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">The Chaos Without It</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Edit a prompt to fix a minor issue and you can unintentionally break other working functionality. If the
            change lives in a plain text doc with no tracking, the original working prompt is{" "}
            <span className="text-white font-medium">lost</span> — and the new one doesn&apos;t meet requirements either.
          </p>
        </div>
      </div>

      {/* 18.3 What is prompt management */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.3 What Is Prompt Management?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A systematic process to <span className="text-white font-medium">organize, design, test, version, and
          store</span> prompts. Rather than relying on a single draft, it&apos;s an ongoing cycle that prevents the loss
          of functional prompts and keeps the application running smoothly.
        </p>
      </div>

      {/* 18.4 Lifecycle */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.4 The Prompt Management Lifecycle</h2>
        <p className="text-gray-400 text-sm leading-relaxed">A continuous, structured loop — not a one-way street.</p>
        {[
          { n: 1, k: "Planning", v: "Define the prompt's purpose, target audience, desired output, and constraints before writing begins." },
          { n: 2, k: "Drafting", v: "Create the initial prompt (first draft) and safely store it as the baseline version." },
          { n: 3, k: "Testing", v: "Rigorously test the draft across many cases and scenarios to find strengths, weaknesses, and loopholes." },
          { n: 4, k: "Refining & Versioning", v: "Keep what works, modify the weak areas, and save every change as a new version (1.1, 1.2, ...) in dedicated storage so nothing is lost. If it performs poorly, rewrite from scratch." },
          { n: 5, k: "Deployment", v: "Once a version passes all test cases and requirements (often dozens of iterations), DevOps deploys it to the live production environment." },
          { n: 6, k: "Monitoring", v: "Live prompts can weaken or drift as the underlying LLM updates. Catch misbehaviour through monitoring, then restart the refine → test → version cycle." },
        ].map(({ n, k, v }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{n}</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          </div>
        ))}
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Plan -> Draft -> Test -> Refine & Version -> Deploy ->
Monitor -> (back to Refine & Version)`}</pre>
        </div>
      </div>

      {/* 18.5 Why versioning matters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.5 Why Versioning Matters</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Versioning is the safety net of the whole lifecycle. Every modification is saved (Version 1.1, 1.2, …) in a
          dedicated storage system, so a previously working prompt is <span className="text-white font-medium">never
          lost</span>. If a new version regresses, you can roll straight back to the last good one.
        </p>
      </div>

      {/* 18.6 Role of a prompt engineer */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.6 The Role of a Prompt Engineer</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Your specific responsibilities inside this lifecycle:</p>
        <ul className="flex flex-col gap-1.5">
          {[
            "Plan the prompt's strategy and constraints.",
            "Draft the initial prompt.",
            "Test the prompt rigorously across various scenarios.",
            "Refine the prompt based on the testing evaluations.",
            "Create and store versions of every modification in your organization's dedicated storage system.",
          ].map((i) => (
            <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
          ))}
        </ul>
        <p className="text-gray-500 text-xs leading-relaxed">
          Deployment and monitoring are typically owned by DevOps, but they feed evaluations straight back to you to
          restart the cycle.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Prompts control quality, tone, security, and persona, so in production they're treated as first-class citizens — managed like code, not stored in a loose text file.",
            "Production prompts involve multiple stakeholders: product teams set persona and constraints, legal teams set safety boundaries.",
            "Without management, fixing one prompt can silently break other functionality and the original working version gets lost forever.",
            "Prompt management is a systematic cycle to organize, design, test, version, and store prompts.",
            "The lifecycle is a loop: Plan → Draft → Test → Refine & Version → Deploy → Monitor → back to refining.",
            "Versioning (1.1, 1.2, ...) in dedicated storage is the safety net — it guarantees a working prompt is never lost and enables instant rollback.",
            "A prompt engineer owns plan, draft, test, refine, and version; DevOps handles deployment and monitoring but feeds results back into the loop.",
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
