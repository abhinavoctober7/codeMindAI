import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass5() {
  return (
    <LangChainLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 5 — Structured Output</p>
        <h1 className="text-3xl font-bold text-white">Structured Output — Letting LLMs Talk to Other Machines</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          So far our LLM has talked to <span className="text-white font-medium">humans</span>. Its replies are
          plain text — <span className="text-white font-medium">unstructured</span> — so you can&apos;t feed them
          to a database or an API. <span className="text-white font-medium">Structured output</span> forces the
          model to answer in a well-defined data format (like JSON), which makes the response easy to parse and
          integrate. This is what lets an LLM communicate with <span className="text-white">other systems</span>,
          and it&apos;s the foundation of agents and tools.
        </p>
      </div>

      {/* Unstructured vs structured */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 Unstructured vs Structured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Unstructured (default)</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              &ldquo;Here is a suggested itinerary: morning, visit the Eiffel Tower; afternoon, a museum;
              evening, dinner.&rdquo; — free text, no structure a program can read.
            </p>
          </div>
          <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Structured</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A JSON list of <code className="text-[#22a06b]">{`{time, activity}`}</code> objects — same content,
              now machine-readable and easy to loop over, store, or pass on.
            </p>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 Why You Need It</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Data extraction</p>
            <p className="text-xs text-gray-400 leading-relaxed">A job portal pulls name, last company, and marks out of a résumé as JSON, then inserts each candidate into a database.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Building APIs</p>
            <p className="text-xs text-gray-400 leading-relaxed">Turn long Amazon reviews into topics, pros, cons, and a sentiment — exposed as a clean API via Flask/FastAPI.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Building agents</p>
            <p className="text-xs text-gray-400 leading-relaxed">Agents are chatbots on steroids — they call tools. A calculator needs numbers, not prose; structured output extracts them.</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The Big Idea</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Until now LLMs ↔ humans. Because the output was unstructured text, it couldn&apos;t reach databases or
            APIs. Give it a data format and the LLM can now talk to <span className="text-white">other
            machines</span> — that&apos;s the whole payoff.
          </p>
        </div>
      </div>

      {/* Two ways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 Two Kinds of Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Some models <span className="text-white">can</span> produce structured output natively (OpenAI&apos;s
          GPT models). Others <span className="text-white">cannot</span> (many open-source models). For the
          first kind, LangChain gives you <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">with_structured_output()</code>.
          For the second kind, you use <span className="text-white">output parsers</span> — the topic of the next
          class. This class is all about <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">with_structured_output()</code>.
        </p>
      </div>

      {/* with_structured_output */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.4 The with_structured_output() Function</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The flow is the same as before — you just call <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">with_structured_output(schema)</code> before
          invoking, passing a <span className="text-white">schema</span> that describes the data format you want.
          You can define that schema three ways: <span className="text-white">TypedDict</span>,
          <span className="text-white"> Pydantic</span>, or <span className="text-white">JSON Schema</span>.
        </p>
      </div>

      {/* TypedDict */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.5 Schema via TypedDict</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">TypedDict</code> just declares what
          keys a dict should have and their types — it helps your editor, but performs
          <span className="text-white"> no validation</span> (put a string where an int is declared and it runs
          anyway). Use <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Annotated</code> to add
          descriptions, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Optional</code> for
          maybe-missing fields, and <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">Literal</code> to
          constrain to fixed choices.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from typing import TypedDict, Annotated, Optional, Literal
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
load_dotenv()

model = ChatOpenAI()

class Review(TypedDict):
    key_themes: Annotated[list[str], "Key topics discussed in the review"]
    summary: Annotated[str, "A brief summary of the review"]
    sentiment: Annotated[Literal["pos", "neg"], "Sentiment of the review"]
    pros: Annotated[Optional[list[str]], "All the pros, if any"]
    cons: Annotated[Optional[list[str]], "All the cons, if any"]
    name: Annotated[Optional[str], "Name of the reviewer"]

structured_model = model.with_structured_output(Review)
result = structured_model.invoke("""The hardware is great, but the
software feels bloated... Review by Nitish Singh""")

print(result["summary"], result["sentiment"])`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">What Happens Behind the Scenes</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            You never wrote &ldquo;give me a summary and sentiment&rdquo; in the prompt — yet it works.
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> with_structured_output</code> auto-generates
            a system prompt from your schema (&ldquo;You are an AI that extracts structured insights… return JSON
            with summary and sentiment…&rdquo;) and the model, trained to return JSON, complies. The
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> Annotated</code> descriptions go
            into that prompt, removing ambiguity.
          </p>
        </div>
      </div>

      {/* Pydantic */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.6 Schema via Pydantic</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">TypedDict</code> only
          <em> describes</em>; <span className="text-white font-medium">Pydantic</span> actually
          <span className="text-white"> validates</span>. It enforces types, supports defaults and optional
          fields, does smart <span className="text-white">type coercion</span> (a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">&quot;32&quot;</code> string
          becomes <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">32</code>), and via
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> Field</code> adds descriptions,
          constraints (e.g. CGPA 0&ndash;10), regex, and email validation. This is the recommended choice for
          Python projects.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from pydantic import BaseModel, Field
from typing import Optional, Literal

class Review(BaseModel):
    key_themes: list[str] = Field(description="Key topics in the review")
    summary: str = Field(description="A brief summary of the review")
    sentiment: Literal["pos", "neg"] = Field(description="Review sentiment")
    pros: Optional[list[str]] = Field(default=None, description="All pros")
    cons: Optional[list[str]] = Field(default=None, description="All cons")
    name: Optional[str] = Field(default=None, description="Reviewer name")

structured_model = model.with_structured_output(Review)
result = structured_model.invoke(review_text)

print(result.summary)          # attribute access (it's an object)
print(result.model_dump())     # -> dict   |  result.model_dump_json() -> JSON`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Validation in Action</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Declare <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">name: str</code> and pass an
            int → Pydantic raises &ldquo;input should be a valid string.&rdquo; Add
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> Field(gt=0, lt=10)</code> and a
            CGPA of 12 is rejected. That guarantee is exactly what TypedDict lacks.
          </p>
        </div>
      </div>

      {/* JSON Schema */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.7 Schema via JSON Schema</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Use a raw <span className="text-white font-medium">JSON Schema</span> when your project spans multiple
          languages (e.g. Python backend, JavaScript frontend) and the schema must be shared. JSON is universal —
          any language understands it. The result you get back is a plain Python dict (like TypedDict).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`json_schema = {
    "title": "Review",
    "type": "object",
    "properties": {
        "key_themes": {
            "type": "array",
            "items": {"type": "string"},
            "description": "Key topics in the review",
        },
        "summary": {"type": "string", "description": "Brief summary"},
        "sentiment": {"type": "string", "enum": ["pos", "neg"]},
        "pros": {"type": ["array", "null"], "items": {"type": "string"}},
        "name": {"type": ["string", "null"]},
    },
    "required": ["key_themes", "summary", "sentiment"],
}

structured_model = model.with_structured_output(json_schema)
result = structured_model.invoke(review_text)   # -> dict`}</pre>
        </div>
      </div>

      {/* When to use */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.8 Which One Should You Use?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Format</th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Use when</th>
                <th className="text-left py-2 px-3 text-[#22a06b] font-semibold">Validation</th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Cross-language</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["TypedDict", "Pure-Python, just need type hints", "No", "No"],
                ["Pydantic", "Need validation, defaults, type coercion (go-to)", "Yes", "No"],
                ["JSON Schema", "Schema shared across languages, no extra libs", "Yes", "Yes"],
              ].map(([a, b, c, d]) => (
                <tr key={a} className="border-b border-white/5">
                  <td className="py-2 px-3 font-medium text-white">{a}</td>
                  <td className="py-2 px-3">{b}</td>
                  <td className="py-2 px-3">{c}</td>
                  <td className="py-2 px-3">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* method param */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.9 The method Parameter</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">with_structured_output</code> accepts
          a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">method</code> argument:
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> &quot;json_mode&quot;</code> (you
          just want JSON back — common with Claude/Gemini) or
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> &quot;function_calling&quot;</code> (the
          structured output feeds a tool call — the OpenAI default, used when building agents).
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Heads Up</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Some models (e.g. the open-source TinyLlama) support <span className="text-white">neither</span> mode —
            calling <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">with_structured_output</code> throws
            an error. For those models you reach for <span className="text-white">output parsers</span>, covered
            next.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LLM replies are unstructured text by default; structured output forces a data format like JSON.",
            "Structured output lets an LLM integrate with other systems — databases, APIs, and tools/agents.",
            "with_structured_output(schema) is the one-line way to get structured output from capable models.",
            "TypedDict only describes the shape (editor hints) — no runtime validation.",
            "Pydantic validates: types, constraints, defaults, optional fields, and type coercion — the Python go-to.",
            "JSON Schema is the choice when the schema must be shared across languages.",
            "Use Annotated/Field descriptions and Literal/enum to remove ambiguity and constrain values.",
            "The method param picks json_mode vs function_calling; models that support neither need output parsers.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </LangChainLessonLayout>
  );
}
