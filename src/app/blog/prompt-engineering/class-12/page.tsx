
import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass12() {
  return (
    <PromptEngineeringLessonLayout slug="class-12">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 12 — Let the Model Manage the Team</p>
        <h1 className="text-3xl font-bold text-white">Meta Prompting — The LLM as Its Own Project Manager</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          No one knows an LLM better than itself. <span className="text-white font-medium">Meta Prompting</span> asks
          the model to write its own prompts; the <span className="text-white font-medium">Task-Agnostic
          Scaffolding</span> framework takes it further — one model instance becomes a Project Manager that
          spins up, coordinates, and verifies a team of expert instances to solve complex problems.
        </p>
      </div>

      {/* 12.1 The analogy */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.1 The Project Manager Analogy</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When a client has a requirement, they hire an experienced Project Manager — who analyzes the need
          and assembles a specialized team (market researcher, technical designer, marketing expert). The
          manager doesn&apos;t do the ground-level work; they <span className="text-white font-medium">orchestrate</span>:
          guiding each expert differently, facilitating communication, and combining outputs into the final
          deliverable.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            In AI terms: <span className="text-white font-medium">you are the client</span>, and the
            <span className="text-white font-medium"> LLM is the experienced Project Manager</span>.
          </p>
        </div>
      </div>

      {/* 12.2 What is meta prompting */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.2 What Is Meta Prompting?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Core philosophy: <span className="text-white font-medium">no one knows an LLM better than
          itself</span> — GPT-5.1 knows how to prompt GPT-5.1 better than any human. Meta Prompting means
          asking the LLM to <span className="text-white font-medium">write its own prompt</span> for a task:
          you provide the high-level goal, and the LLM acts as the prompt engineer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "Solves prompt drifting", v: "A prompt that works in one model but fails in another — the model tailors its own." },
            { k: "Reduces friction", v: "Cuts the manual effort of human prompt engineering." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 12.3 The scaffolding framework */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.3 Task-Agnostic Scaffolding</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This advanced framework turns a single LLM into a central conductor managing a team of independent
          experts. It uses <span className="text-white font-medium">two instances of the same model</span>: one
          acts as the overarching <span className="text-white font-medium">Project Manager (Meta model)</span>,
          the other plays various <span className="text-white font-medium">Domain Experts</span>. Rather than
          solving everything in one output, the Meta model decomposes the problem and calls experts for each
          sub-task, coordinating their outputs into a final, highly accurate solution.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`                    ┌─────────────────────┐
        Task ───────▶│   META MODEL (PM)   │◀──── verifies
                     │  decompose · route  │      synthesizes
                     └──┬───────┬───────┬──┘
                        │       │       │   (isolated calls)
                     ┌──▼─┐  ┌──▼─┐  ┌──▼─┐
                     │Exp1│  │Exp2│  │Exp3│   experts never
                     └────┘  └────┘  └────┘   talk to each other`}</pre>
        </div>
      </div>

      {/* 12.4 Core mechanics */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.4 Four Core Mechanics</h2>
        {[
          { n: 1, k: "Task Decomposition", v: "The Meta model breaks a complex task into smaller, manageable sub-tasks." },
          { n: 2, k: "Expert Assignment", v: "For each sub-task it dynamically creates a tailored persona and detailed instructions for a specific expert." },
          { n: 3, k: "Isolation", v: "Every expert runs in strict isolation — unaware of previous experts or broader context unless the Meta model provides it. Fresh eyes, no inherited bias or derailed context." },
          { n: 4, k: "Verification & Synthesis", v: "Experts never speak directly; the Meta model routes all communication, verifies accuracy, and synthesizes outputs — looping until the task is complete." },
        ].map(({ n, k, v }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{n}</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 12.5 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.5 Key Features &amp; Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "Zero-shot & task agnostic", v: "No examples needed — just provide the task and context." },
            { k: "Dynamic persona generation", v: "Experts aren't pre-written; personas are generated per problem." },
            { k: "Shallow hierarchy", v: "All comms route through the PM, avoiding informal-communication errors." },
            { k: "Rigorous verification", v: "Multiple experts filter and verify, sharply lowering the error margin." },
            { k: "Navigates 'no-solution' cases", v: "Step-by-step verification makes it less likely to hallucinate a fake solution." },
            { k: "External tool integration", v: "Easily plugs in tools like a Python code-execution expert." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-green-400/5 border border-green-400/30 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-green-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✓</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 12.6 Limitations */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.6 Limitations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { k: "High cost", v: "Many LLM calls (manager loops + multiple expert generations), and it's best run on advanced reasoning models — driving cost up further." },
            { k: "Large context window required", v: "The PM must hold the original prompt, system instructions, and every expert's output continuously." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-red-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✗</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 12.7 Use cases */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.7 Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { k: "High-level strategy", v: "Market-expansion decisions, pivoting an EdTech curriculum." },
            { k: "Math & scientific research", v: "One expert forms physics hypotheses, another verifies the math." },
            { k: "Creative production", v: "Writers, designers, researchers, and critics working in tandem." },
            { k: "Game execution", v: "One agent suggests a chess move, another critiques it." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 12.8 The meta-expert prompt */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">12.8 The Meta-Expert System Prompt</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The framework is driven by a system prompt that casts the model as the conductor. The essentials:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`You are Meta-Expert, able to collaborate with multiple
experts (Expert Problem Solver, Expert Mathematician,
Expert Essayist, ...) to solve any complex problem.

To call an expert, type its name, a colon, then a detailed
instruction in triple quotes:

Expert Mathematician:
"""
You are a mathematics expert in geometry and algebra.
Compute the Euclidean distance between (-2, 5) and (3, 7).
"""

Rules:
- Interact with ONE expert at a time.
- Every call is isolated — experts have NO memory, so
  include all relevant details each time.
- If a mistake is found, ask a new expert to compare
  solutions and give feedback.
- Verify the final solution with two independent experts.
- Aim for <= 15 rounds; don't repeat identical questions.

Present the result as:
>> FINAL ANSWER:
"""
[final answer]
"""`}</pre>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          Note the deliberate constraints — one expert at a time, no expert memory, two-expert verification,
          and a round cap — which together enforce the isolation and rigorous verification described above.
        </p>
      </div>


      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Meta Prompting asks the LLM to write its own prompt — the model is the best prompt engineer for itself, solving prompt drift and reducing manual effort.",
            "Task-Agnostic Scaffolding uses two instances of one model: a Project Manager (Meta) and dynamically-created Domain Experts.",
            "Four mechanics drive it: task decomposition, dynamic expert assignment, strict isolation, and verification & synthesis by the manager.",
            "Benefits include zero-shot operation, dynamic personas, a shallow hierarchy that avoids cross-talk errors, and strong verification that resists hallucination.",
            "Limitations are real: high cost from many LLM calls on reasoning models, and a need for a very large context window in the manager.",
            "A purpose-built Meta-Expert system prompt enforces one-expert-at-a-time calls, memoryless isolated experts, two-expert verification, and a round cap.",
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
