import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass5() {
  return (
    <PromptEngineeringLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 5 — Giving Your Prompt a Skeleton</p>
        <h1 className="text-3xl font-bold text-white">Delimiters &amp; XML Tags — Structuring the Wall of Text</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Industry prompts are long — personas, guardrails, multi-step reasoning, and 20-line examples.
          Written as one continuous paragraph, they become a <span className="text-white font-medium">Wall of
          Text</span> that quietly degrades the model. This class covers <span className="text-white font-medium">why</span> long
          unstructured prompts fail and how <span className="text-white font-medium">delimiters and XML tags</span> fix it
          without forcing you to cut detail.
        </p>
      </div>

      {/* 5.1 Industry context */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 The Context — Industry-Level Prompting</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In production systems, system instructions are far longer than a simple query. They span many
          lines — sometimes pages — for three recurring reasons:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { k: "Complex Chains", v: "One module's output becomes another's input (e.g. LangChain pipelines)." },
            { k: "Detailed Constraints", v: "Personas, guardrails, and multi-step reasoning to stop hallucination." },
            { k: "Few-Shot Examples", v: "Multiple input/output pairs, often 20+ lines each, balloon the length." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5.2 The problem */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 The Problem — The &quot;Wall of Text&quot;</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When lengthy instructions are written as one continuous, unstructured block, you get a
          <span className="text-white font-medium"> Wall of Text</span>. The code won&apos;t error out — but the
          model&apos;s performance silently degrades.
        </p>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Consequences</p>
          <ul className="flex flex-col gap-1.5">
            {["Forgets instructions buried in the prompt", "Hallucinates details", "Ignores specific constraints", "Fails to follow multi-step reasoning"].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5.3 Why LLMs fail */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 Why LLMs Fail with Unstructured Text</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          There are two technical reasons a Wall of Text breaks down.
        </p>

        {/* A. Attention Dilution */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-bold text-white">A. Attention Dilution</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            As input length grows, the model&apos;s ability to focus weakens. LLMs use a
            <span className="text-white font-medium"> self-attention mechanism</span>: every word scores its
            relevance to every other word, and those scores sum to 1 (100%). Filler words — &quot;please&quot;,
            &quot;kindly&quot;, &quot;effectively&quot;, &quot;is&quot;, &quot;the&quot; — consume part of that
            budget, leaving less for critical keywords like <span className="text-white font-medium">STOP</span>.
            Push it far enough and the model treats the important word as noise.
          </p>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-lg p-3">
            <p className="text-xs text-gray-300 leading-relaxed">
              <span className="text-white font-medium">Pizza analogy:</span> one pizza feeds one hungry cousin
              fine. Invite 10 friends and the cousin gets a tiny slice and stays hungry. Filler words
              &quot;eat up&quot; the attention meant for your key instructions.
            </p>
          </div>
        </div>

        {/* B. Lost in the Middle */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-bold text-white">B. The &quot;Lost in the Middle&quot; Phenomenon</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Research shows LLMs recall information at the <span className="text-white font-medium">beginning</span> and
            <span className="text-white font-medium"> end</span> of a long input very well — a U-shaped
            performance curve — but often forget or ignore what sits in the
            <span className="text-white font-medium"> middle</span>. Bury a critical instruction in the center of
            a massive block and the model will likely miss it.
          </p>
          <pre className="text-xs text-gray-400 font-mono leading-relaxed whitespace-pre-wrap bg-[#0d1117] rounded-lg p-3 mt-1">{`Recall
 high │█                               █
      │ █                             █
      │  █                           █
      │    █                       █
  low │       █ █ █ █ █ █ █ █ █ █ █
      └──────────────────────────────────
       start          middle          end`}</pre>
        </div>
      </div>

      {/* 5.4 The solution: delimiters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.4 The Solution — Structuring with Delimiters</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The fix is <span className="text-white font-medium">not</span> to shorten the prompt and sacrifice
          detail. It&apos;s to organize the text using <span className="text-white font-medium">delimiters</span> —
          characters or sequences that mark boundaries and create distinct logical blocks (containers).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#ec4899]">1. Markdown / Symbolic</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Headings <span className="font-mono text-yellow-300">#</span>, bold
              <span className="font-mono text-yellow-300"> **</span>, italics
              <span className="font-mono text-yellow-300"> *</span>, lines
              <span className="font-mono text-yellow-300"> ---</span>. Act as visual separators.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Great for human readability — but less effective for LLMs when used alone.
            </p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[#ec4899]">2. XML Tags</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-mono text-yellow-300">&lt;purpose&gt;…&lt;/purpose&gt;</span>,
              <span className="font-mono text-yellow-300"> &lt;instructions&gt;…&lt;/instructions&gt;</span>.
              Create clear containers with a defined start and end.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              <span className="text-white font-medium">Highly effective</span> — preferred by Claude, Gemini, and OpenAI.
            </p>
          </div>
        </div>
      </div>

      {/* 5.5 Before / after example */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.5 Before &amp; After — Same Content, Different Structure</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-[#0d1117] rounded-xl p-4 border border-red-500/20">
            <p className="text-xs text-red-400 mb-2 font-semibold uppercase tracking-widest">Without Delimiters</p>
            <pre className="text-xs text-gray-400 font-mono leading-relaxed whitespace-pre-wrap">{`You are a Visual AI Tutor with over 12 years of
experience in processing images.

Identity & Persona:
- Job Title: Visual AI Tutor
- Experience Level: 12+ years
- Communication Style: Professional, educator-focused
- Key Values: accuracy, transparency, teaching

Task Constraints & Boundaries:
- Do NOT guess, fabricate, or hallucinate.
- Do NOT infer sensitive attributes.
- Do NOT give legal or medical advice.
- If something cannot be determined, say so.

Communication Style & Format:
- Clear, professional, beginner-friendly
- Simple language, minimal jargon
- No emojis, no slang, no casual tone
- Always tell a joke at the end.

Context (Audience):
- Undergraduate students, early-career pros
- Basic technical familiarity`}</pre>
          </div>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-green-400/30">
            <p className="text-xs text-green-400 mb-2 font-semibold uppercase tracking-widest">With Delimiters</p>
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`<identity_persona>
# Visual AI Tutor
* **Experience:** 12+ years in computer vision.
* **Style:** Professional, educator-focused.
* **Values:** Accuracy, transparency, teaching.
</identity_persona>

<audience_context>
## Target Audience
* Undergraduate students & early-career pros.
* Basic technical familiarity.
</audience_context>

<task_constraints>
## Operational Boundaries
* **Accuracy:** Do NOT fabricate or hallucinate.
* **Privacy:** Do NOT infer sensitive attributes.
* **Limits:** No legal or medical advice.
* **Transparency:** If unknown, say so.
</task_constraints>

<communication_style>
## Output Requirements
* **Language:** Clear, beginner-friendly.
* **Tone:** No emojis, slang, or casual tone.
* **Closing:** Always end with one joke.
</communication_style>`}</pre>
          </div>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          The content is identical — but the second version gives the model labelled containers it can jump
          to on demand instead of one undifferentiated stream.
        </p>
      </div>

      {/* 5.6 Nesting examples */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.6 Nesting Tags for Few-Shot Examples</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          For complex logic, build hierarchies — an <span className="font-mono text-yellow-300">&lt;examples&gt;</span> container
          holding multiple <span className="font-mono text-yellow-300">&lt;example&gt;</span> blocks. This keeps a long
          few-shot list from collapsing into the middle of the prompt.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`<examples>
  <example_1>
    **Input:** Explain Pixel Normalization.
    **Output:** Pixel normalization scales pixel
    intensity values to a standard range (0 to 1)
    so the model treats all features equally.
    Why did the pixel feel lonely? It was always
    in isolation.
  </example_1>

  <example_2>
    **Input:** Can you diagnose this X-ray?
    **Output:** I cannot provide medical diagnoses.
    My expertise is limited to technical image
    processing. Why don't skeletons fight? They
    don't have the guts.
  </example_2>
</examples>`}</pre>
        </div>
      </div>

      {/* 5.7 Why it works */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.7 Why Delimiters Work</h2>
        <div className="flex flex-col gap-2">
          {[
            { k: "Training Data", v: "LLMs trained on massive web data — HTML, Python, XML — learned that special characters and tags signal structure and carry meaning." },
            { k: "Anchoring Attention", v: "Tags act as anchors. The model treats them as important and focuses on the content inside them — mitigating Attention Dilution." },
            { k: "Reference by Need", v: "When generating, the model can 'jump' to a specific tag (e.g. <table_format> only when building a table) instead of re-reading linearly — beating Lost in the Middle." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5.8 Hybrid approach */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.8 The Hybrid Approach (Recommended)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The strongest strategy combines both delimiter types: <span className="text-white font-medium">XML
          tags</span> for the high-level containers, and <span className="text-white font-medium">Markdown</span>
          {" "}(bold, lists) inside them to emphasize specific points.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`<identity_persona>
  **Role:** You are an expert AI Tutor.
  **Tone:** Professional and encouraging.
</identity_persona>

<task_constraints>
  # Operational Boundaries
  * **Accuracy:** Ensure all facts are verified.
  * **Privacy:** Do not reveal user data.
</task_constraints>

<examples>
  <example_1>
    Input:  ...
    Output: ...
  </example_1>
</examples>`}</pre>
        </div>
      </div>

      {/* 5.9 Best practices */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.9 Best Practices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { k: "Use meaningful tags", v: "The tag name should match the content's semantic meaning — <persona>, not <tag1>. The model understands the name itself." },
            { k: "Separate data from instructions", v: "Put the task in one tag and the source text in another, e.g. <document>…text…</document>." },
            { k: "Nest for complexity", v: "Build hierarchies — <examples> containing multiple <example> tags — for layered logic." },
            { k: "Adopt it as a habit", v: "Even at 50–60 lines, XML tags are good practice — they ensure consistency and quality." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-[#ec4899]">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Industry prompts are long by necessity — chains, constraints, and few-shot examples — and written as one block they become a performance-degrading Wall of Text.",
            "Long unstructured prompts fail for two reasons: Attention Dilution (filler words steal focus from key instructions) and Lost in the Middle (the model recalls the start and end, not the center).",
            "The fix is structure, not brevity — use delimiters to create logical containers without cutting detail.",
            "Markdown is great for human readability; XML tags are far more effective for LLMs and are preferred by Claude, Gemini, and OpenAI.",
            "Tags work because models learned structure from code, they anchor attention, and they let the model reference a block by need instead of re-reading linearly.",
            "Use the hybrid approach: XML tags for containers, Markdown inside them. Use meaningful tag names, separate data from instructions, and nest for complex logic.",
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
