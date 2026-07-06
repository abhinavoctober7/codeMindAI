import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass10() {
  return (
    <PromptEngineeringLessonLayout slug="class-10">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 10 — Denoise, Then Answer</p>
        <h1 className="text-3xl font-bold text-white">System 2 Attention — Cleaning the Prompt Before Answering</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Users rarely write clean prompts — they leak emotions, irrelevant backstory, and stated
          preferences. <span className="text-white font-medium">System 2 Attention (S2A)</span> tackles this by
          first rewriting the input to strip out the noise, then answering the distilled task. This class
          covers the flaws S2A fixes, the two-step process, model routing, and the related
          <span className="text-white font-medium"> Rephrase &amp; Respond</span> technique.
        </p>
      </div>

      {/* 10.1 The problem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.1 The Problem — Flawed User Prompts</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Most low-quality outputs trace back to low-quality inputs. User mistakes fall into three buckets:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Emotional Prompting", v: "Injecting feelings or fears — \"I'm afraid AI will take my job\" or \"this is critical for my career.\"" },
            { k: "Irrelevant Information", v: "Adding unnecessary backstory — what the user's boss prefers, personal asides about the audience." },
            { k: "Biased Opinions", v: "Stating a preference while asking for a decision — \"choose between Tableau and Power BI, but I prefer Tableau.\"" },
          ].map(({ k, v }) => (
            <div key={k} className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-red-400">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest">Consequences</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Distraction — irrelevant or biased content pulls the model off-task.",
              "Degraded output — the model pacifies emotions (acts like a therapist) instead of doing the job.",
              "People-pleasing bias — trained to be helpful, it agrees with the user's stated preference rather than giving objective advice.",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 10.2 The solution */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.2 The Solution — System 2 Attention</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          S2A explicitly instructs an LLM to <span className="text-white font-medium">rewrite and filter</span> the
          input — stripping irrelevant information, subjective opinions, and biases — before it ever attempts
          the final answer. It runs in two steps:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">1</span>
              <p className="text-sm font-bold text-white">Clean the Prompt (Distillation)</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pl-9">
              The raw input goes to an LLM acting as a filter. It &quot;denoises&quot; — removing conversational
              fillers, emotions, and biases — and isolates only the core task.
            </p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">2</span>
              <p className="text-sm font-bold text-white">Achieve the Task</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pl-9">
              The clean, distilled prompt is passed to an LLM to do the actual work — producing a highly
              accurate, objective output.
            </p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Raw input ─▶ [ S2A filter ] ─▶ distilled task ─▶ [ solver ] ─▶ answer
  (messy,         strips             (core            (objective,
 emotional,    noise/bias/          intent only)      fact-based)
  biased)        emotion)`}</pre>
        </div>
      </div>

      {/* 10.3 Benefits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.3 Key Benefits</h2>
        <div className="flex flex-col gap-2">
          {[
            { k: "Filters distractions", v: "Removes noise so the model focuses purely on the objective." },
            { k: "Improves factual & math accuracy", v: "Especially for reasoning/math questions buried in verbose or irrelevant text." },
            { k: "Reduces bias", v: "Outputs rest on factual reasoning instead of echoing the user's stated preference." },
            { k: "Handles attention dilution", v: "An LLM's total attention sums to 1; removing noise puts ~100% of it on the core task." },
            { k: "Improves multi-turn chats", v: "Running chat history through S2A drops contradictory or impure context so the next reply stays on-task." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-green-400/5 border border-green-400/30 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-green-400 flex items-start gap-2"><span className="mt-0.5 shrink-0">✓</span>{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 10.4 Use cases */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.4 Real-World Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Chatbots", v: "Customer service and math apps filter out anger/frustration to solve the real problem. Commercial bots (ChatGPT, Gemini) already use a mitigated S2A internally." },
            { k: "Storing Data", v: "Strip jokes, casual chat, and irrelevant complaints from meeting transcripts and email threads before summarizing and storing." },
            { k: "Day-to-Day", v: "Draft objective email replies to highly emotional or angry clients." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 10.5 Model routing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.5 Implementation — Model Routing</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          You don&apos;t need the same model for both steps. Match model power to the difficulty of each step:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Step 1 — Extraction</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Use a <span className="text-white font-medium">large, highly capable model</span> (e.g. ~120B
              params). Extracting core intent and dependencies from messy text needs strong reasoning.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Step 2 — Execution</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Once the prompt is clean, a <span className="text-white font-medium">smaller, faster, cheaper
              model</span> (e.g. an 8B model like Llama 3) can solve the task easily.
            </p>
          </div>
        </div>
      </div>

      {/* 10.6 Rephrase and Respond */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">10.6 Bonus — &quot;Rephrase and Respond&quot;</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Sometimes a prompt has no noise — it&apos;s just <span className="text-white font-medium">too brief and
          generic</span> (e.g. &quot;How can a retail company use AI?&quot;), producing generic bullet points.
          Classic <span className="text-white font-medium">garbage in, garbage out</span>. The fix: let the LLM
          write the prompt for you.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">The instruction</p>
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Rephrase and expand the following request so that it is
clear, more specific, and easier for an AI to answer
optimally:

"How can a retail company use AI?"`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The model returns a detailed, professional prompt with specific use cases, constraints, and
          requirements. Feed <span className="text-white font-medium">that</span> back in, and the final output
          is vastly superior — practical examples, implementation considerations, and deeper insight.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Bad prompts share three flaws: leaked emotions, irrelevant information, and stated biases — all of which distract the model.",
            "Because LLMs are trained to please, a stated preference often makes them agree with the user instead of giving objective advice.",
            "System 2 Attention runs in two steps: clean/distill the input to isolate the core task, then answer the distilled prompt.",
            "S2A filters distractions, boosts factual and math accuracy, reduces bias, beats attention dilution, and stabilizes multi-turn chats.",
            "Route models by step: a large model for the hard extraction step, a small/cheap model for the now-easy execution step.",
            "Rephrase and Respond is the inverse fix: when a prompt is too generic, have the LLM expand it first, then answer the richer version.",
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
