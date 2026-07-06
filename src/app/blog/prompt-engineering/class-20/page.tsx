import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass20() {
  return (
    <PromptEngineeringLessonLayout slug="class-20">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 20 — From Draft to Done</p>
        <h1 className="text-3xl font-bold text-white">Prompt Development — Testing, Datasets &amp; Versioning</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 19 produced a blueprint and a first draft. Now comes the hard part: a prompt is{" "}
          <span className="text-white font-medium">never</span> ready after one good input/output. Version 1 must be
          rigorously tested, tuned, versioned, and stored through a systematic evaluation process.
        </p>
      </div>

      {/* 20.1 Robust dataset */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">20.1 Building a Robust Test Dataset</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Testing needs a carefully curated, versatile dataset covering all possible input types. For a review-analysis
          LLM, that means positive, negative, and neutral reviews across many different departments.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest">Edge Cases &amp; Sarcasm</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The dataset must include confusing inputs — like sarcasm, where positive words carry negative sentiment:
          </p>
          <p className="text-xs text-gray-300 font-mono leading-relaxed bg-[#0d1117] rounded-lg p-3 border border-white/10">
            &quot;I want to personally thank whoever designed this shirt for making me look like a stuffed sausage.&quot;
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-sm font-bold text-white">Cross-Team Collaboration</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            A comprehensive dataset is rarely built solo — it&apos;s developed with product, legal, market, and research
            teams.
          </p>
        </div>
      </div>

      {/* 20.2 Testing methods */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">20.2 Testing Methods</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Testing compares the <span className="text-white font-medium">expected output</span> with the{" "}
          <span className="text-white font-medium">actual output</span> the model generates. Two primary approaches:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Human Testing</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A person manually reads outputs to verify they meet exact needs — e.g. correct JSON format with the exact
              number of required keys.
            </p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">LLM-as-a-Judge</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Using another AI model to evaluate the output automatically — scales far beyond manual review.
            </p>
          </div>
        </div>
      </div>

      {/* 20.3 Structuring & security */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">20.3 Structuring Prompts &amp; Security Protocols</h2>
        {[
          { k: "Separation of Prompts", v: "Split inputs into a system prompt (instructions, rules, persona) and a user prompt (the actual data or query)." },
          { k: "Prefixes & Suffixes", v: "Tools like Promptheus can auto-apply a prefix (e.g. a <User Input> tag) and suffix to every test case, so you don't add them by hand." },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{k}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
          </div>
        ))}
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">Security Protocol</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Add a security section to the system rules for adversarial attacks and unknown commands. On a threat, the
            LLM should output a specific predefined response (e.g. <span className="font-mono text-gray-200">&quot;Summary
            Request Denied&quot;</span>) instead of breaking the application&apos;s downstream data pipeline. (Recall the
            constitution pattern from Class 17.)
          </p>
        </div>
      </div>

      {/* 20.4 Versioning & iteration */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">20.4 Versioning &amp; Iteration</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          After testing V1 against the dataset, you might find the persona and security rules work well, but the model
          generates unnecessary or unwanted content. Fix it by isolating and adjusting specific blocks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Version 1</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Asked for reasoning, sentiment, department, and summary — but the <span className="text-red-400">reasoning</span>{" "}
              caused formatting issues.
            </p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Version 2</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Strictly requests only sentiment, department, and summary — and rules now dictate the exact sequence of
              JSON keys for perfect formatting.
            </p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-sm font-bold text-white">Update Examples &amp; Rules Together</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            When versioning, also update the few-shot examples and rules to match the new objective — otherwise stale
            examples fight the new instructions.
          </p>
        </div>
      </div>

      {/* 20.5 Storing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">20.5 Storing Prompts</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Prompt-engineering platforms only <span className="text-white font-medium">temporarily</span> save your
          iterations. Industry best practice is to store finalized prompts in a{" "}
          <span className="text-white font-medium">dedicated database</span> with clear, proper versioning — the safety
          net introduced in Class 18.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A prompt is never ready after one good input/output — Version 1 must be rigorously tested, tuned, versioned, and stored.",
            "Build a versatile dataset covering all input types plus edge cases like sarcasm, ideally with product, legal, market, and research teams.",
            "Testing compares expected vs. actual output, via human testing (manual format/key checks) or LLM-as-a-judge (automated, scalable).",
            "Separate system and user prompts, auto-apply prefixes/suffixes (e.g. <User Input> tags), and bake in a security protocol with a predefined denial response.",
            "Iterate by isolating problem blocks: V2 might drop reasoning that broke formatting and pin the exact JSON key order — updating few-shot examples and rules to match.",
            "Platforms only save iterations temporarily; finalized prompts belong in a dedicated, properly versioned database.",
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
