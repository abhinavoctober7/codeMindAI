import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass21() {
  return (
    <PromptEngineeringLessonLayout slug="class-21">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 21 — Automated Evaluation</p>
        <h1 className="text-3xl font-bold text-white">LLM as a Judge &amp; the DeepEval Framework</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Class 20 introduced two ways to test a prompt: human review and{" "}
          <span className="text-white font-medium">LLM-as-a-Judge</span>. This class goes deep on the automated path —
          how an AI scores another AI&apos;s output, and how the open-source{" "}
          <span className="text-white font-medium">DeepEval</span> framework makes it three steps of code.
        </p>
      </div>

      {/* 21.1 LLM as a judge */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">21.1 What Is &quot;LLM as a Judge&quot;?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Instead of a human, an LLM evaluates the output your AI application generates. You give the judging model the
          context of what a good output looks like — required format, tone, and conditions — and it compares the{" "}
          <span className="text-white font-medium">actual output</span> against the{" "}
          <span className="text-white font-medium">expected output</span>, returning a score out of 100.
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">Model Requirement</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The judge must be a powerful, state-of-the-art <span className="text-white font-medium">reasoning</span>{" "}
            model (e.g. Gemini Pro, advanced GPT, or Claude) — not a lightweight one — or the evaluations won&apos;t be
            accurate.
          </p>
        </div>
      </div>

      {/* 21.2 DeepEval */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">21.2 The DeepEval Framework</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          DeepEval is a popular open-source framework from Confident AI for testing and evaluating LLM-based
          applications — verifying that models are accurate, safe, and reliable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Open Source", v: "Freely available for anyone to use." },
            { k: "Ease of Use", v: "Implemented in just three simple steps." },
            { k: "50+ Built-in Metrics", v: "Pre-built metrics tailored for categories like RAG and AI Agents." },
          ].map(({ k, v }) => (
            <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">Answer Relevancy</p>
            <p className="text-xs text-gray-400 leading-relaxed">How relevant the actual output is to the user&apos;s input.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-sm font-bold text-white">Faithfulness</p>
            <p className="text-xs text-gray-400 leading-relaxed">How relevant the actual output is to the retrieved context (key for RAG — see Class 14).</p>
          </div>
        </div>
      </div>

      {/* 21.3 GEval */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">21.3 Custom Metrics with GEval</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Standard metrics may not cover a specific business need — e.g. forcing the AI to output a JSON object with
          strictly defined keys for sentiment, department, and summary. DeepEval&apos;s{" "}
          <span className="text-white font-medium">GEval</span> lets you create custom metrics in plain natural
          language: define your evaluation criteria in words, and GEval uses them to score outputs.
        </p>
      </div>

      {/* 21.4 Three steps */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">21.4 Implementing DeepEval in 3 Steps</h2>
        {[
          { n: 1, k: "Form Test Cases", v: "Use the LLMTestCase class to tell the judge exactly what to test — pass the user's input and the AI's actual_output (optionally expected output or retrieved context)." },
          { n: 2, k: "Define Metrics", v: "Pick a metric (like GEval), set the evaluating model (defaults to GPT-4; Gemini or Claude also work), and set a threshold — the minimum score (0–1) a case must hit to pass." },
          { n: 3, k: "Evaluate", v: "Call evaluate() with your test cases and metric. It returns a score per case plus detailed reasoning for each pass/fail — invaluable for troubleshooting and prompt tuning." },
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
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`from deepeval import evaluate
from deepeval.test_case import LLMTestCase
from deepeval.metrics import GEval

# 1. Form the test case
test_case = LLMTestCase(
    input="I love this shirt, fits perfectly!",
    actual_output='{"sentiment": "positive",
        "department": "apparel",
        "summary": "Customer is happy with the fit."}',
)

# 2. Define a custom metric in natural language
metric = GEval(
    name="Correctness",
    criteria="Output must be valid JSON with keys "
             "sentiment, department, summary in that order.",
    model="gpt-4",
    threshold=0.8,
)

# 3. Evaluate
evaluate(test_cases=[test_case], metrics=[metric])`}</pre>
        </div>
      </div>

      {/* 21.5 Lifecycle & storage */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">21.5 Lifecycle &amp; Storage</h2>
        <p className="text-gray-400 text-sm leading-relaxed">The standard industry workflow this evaluation slots into:</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Draft -> Test (Human + LLM-as-a-Judge) -> Tune on
feedback -> Create Versions -> Store`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Once a version is finalized, it&apos;s stored in a database. Using simple SQL{" "}
          <span className="font-mono text-gray-200">INSERT</span> commands or internal UI tools, developers log the
          prompt text along with an auto-generated <span className="text-white font-medium">timestamp</span>,{" "}
          <span className="text-white font-medium">user ID</span>, <span className="text-white font-medium">version
          number</span>, and remarks.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LLM-as-a-Judge has one AI score another's output against expected format, tone, and conditions, returning a score out of 100.",
            "The judging model must be a powerful state-of-the-art reasoning model (Gemini Pro, advanced GPT, Claude) — never a lightweight one.",
            "DeepEval (open-source, Confident AI) evaluates LLM apps in three steps and ships 50+ built-in metrics like Answer Relevancy and Faithfulness.",
            "GEval lets you write custom evaluation metrics in plain natural language for business-specific needs like strict JSON schemas.",
            "The 3 steps: form LLMTestCase objects, define a metric + judge model + threshold (0–1), then call evaluate() for scores and pass/fail reasoning.",
            "Evaluation feeds the lifecycle: Draft → Test → Tune → Version → Store, where finalized prompts are logged with timestamp, user ID, version, and remarks.",
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
