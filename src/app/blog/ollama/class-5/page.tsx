import OllamaLessonLayout from "@/components/OllamaLessonLayout";

export default function OllamaClass5() {
  return (
    <OllamaLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#14b8a6] font-semibold uppercase tracking-widest">Class 5 — Extending LLMs</p>
        <h1 className="text-3xl font-bold text-white">Tool Calling</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          LLMs are great at generation and language, but there are tasks they simply cannot do on their
          own. Tool calling is the method that lets an LLM perform those tasks — by giving it new
          abilities through tools. In this class we cover what tool calling is, the full flow, and a
          working demo.
        </p>
      </div>

      {/* 5.1 What */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 What Is Tool Calling?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Tool calling is a way to make an LLM perform work it initially can&apos;t do. LLMs have real
          limitations — a <span className="text-white font-medium">knowledge cut-off date</span>, and an
          inability to <span className="text-white font-medium">interact with the outside world</span>.
          So tasks like these fail out of the box:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            "Fetch data from my database",
            "Give me the current temperature of Chandigarh",
            "Give me today's news",
          ].map((t) => (
            <div key={t} className="bg-red-950/20 border border-red-500/20 rounded-xl p-3 text-xs text-gray-300 leading-relaxed">
              {t}
            </div>
          ))}
        </div>
        <div className="bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            You increase an LLM&apos;s capabilities by <span className="text-white font-medium">passing it
            tools</span>. And these tools are nothing but <span className="text-white font-medium">Python
            functions</span> containing the code to perform a particular task. The LLM sees it can&apos;t do
            the task, finds a matching tool, and <span className="text-white font-medium">calls</span> it —
            hence the name &quot;tool calling.&quot;
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Note: in Ollama, only models with <span className="text-white font-medium">tool capability</span> can
          do tool calling effectively (e.g. <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">qwen3</code>,
          <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> functionary/gemma</code>) — not every model qualifies.
        </p>
      </div>

      {/* 5.2 The flow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 The Tool-Calling Flow</h2>
        <div className="flex flex-col gap-2">
          {[
            { step: "1", title: "Create the tools", desc: "Write Python functions that contain the code to execute each task." },
            { step: "2", title: "Define the tool schema", desc: "A JSON object describing each tool: its name, what it does, its parameters, their data types, and which are required. The LLM can't read raw functions — it reads the schema." },
            { step: "3", title: "Call the LLM with prompt + schema", desc: "Pass your prompt and the tool schema. If the task needs a tool, the LLM reads the schema, decides which tool to use, and extracts the parameter values from your prompt." },
            { step: "4", title: "LLM returns a JSON object", desc: "An LLM can't run functions itself. It returns a JSON object naming the function to call and the argument values." },
            { step: "5", title: "You execute the function", desc: "Manually run the named function with those arguments and capture the result." },
            { step: "6", title: "Call the LLM again with full history", desc: "Send the original prompt + the LLM's tool-call request + the tool's result. The LLM combines everything into a final, natural answer." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{step}</span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Important: tool calling requires the <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">chat</code> method,
            not <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">generate</code> — only
            <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> chat</code> has a
            <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> tools</code> parameter.
          </p>
        </div>
      </div>

      {/* 5.3 Demo */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 Demo: An Electronics Shop</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The goal: let the LLM check an inventory database and calculate a loyalty discount — two things
          it can&apos;t do on its own. We use <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs">qwen3:8b</code> (tool-capable).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Step 1 — define the tools</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`inventory = {
    "laptop":   {"quantity": 5,  "base_price": 1200},
    "monitor":  {"quantity": 0,  "base_price": 300},
    "keyboard": {"quantity": 25, "base_price": 80},
}

def check_inventory(product_name):
    item = inventory.get(product_name.lower())
    return item or {"error": "not found"}

def calculate_loyalty_discount(base_price, years_as_customer):
    discount = min(years_as_customer * 5, 30)   # max 30%
    return base_price * (1 - discount / 100)`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Step 2 — define the tool schema</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`tools = [
  {
    "type": "function",
    "function": {
      "name": "check_inventory",
      "description": "Check stock & price of a product in inventory",
      "parameters": {
        "type": "object",
        "properties": {
          "product_name": {"type": "string", "description": "Product to look up"}
        },
        "required": ["product_name"],
      },
    },
  },
  {
    "type": "function",
    "function": {
      "name": "calculate_loyalty_discount",
      "description": "Calculate final price after loyalty discount",
      "parameters": {
        "type": "object",
        "properties": {
          "base_price": {"type": "integer", "description": "Base price"},
          "years_as_customer": {"type": "integer", "description": "Years with us"}
        },
        "required": ["base_price", "years_as_customer"],
      },
    },
  },
]`}</pre>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-2">Steps 3–6 — call, execute, feed back</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import ollama
available = {
    "check_inventory": check_inventory,
    "calculate_loyalty_discount": calculate_loyalty_discount,
}

messages = [{"role": "user", "content": "I want to buy a laptop. Check stock?"}]

# 3) LLM decides which tool to call
resp = ollama.chat(model="qwen3:8b", messages=messages, tools=tools)
messages.append(resp.message)

# 4-5) execute each requested tool
for call in resp.message.tool_calls or []:
    fn = available[call.function.name]
    result = fn(**call.function.arguments)
    messages.append({"role": "tool", "content": str(result)})

# 6) call again with full history → final answer
final = ollama.chat(model="qwen3:8b", messages=messages)
print(final.message.content)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ask for an iPhone and it reports &quot;out of stock&quot; (not in the database). Ask &quot;I&apos;m a
          5-year customer, what&apos;s the final laptop price?&quot; and the LLM chains both tools —
          <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> check_inventory</code> then
          <code className="text-[#14b8a6] bg-[#14b8a6]/10 px-1 rounded text-xs"> calculate_loyalty_discount</code> — to answer.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Tool calling lets an LLM do tasks it can't do alone — like DB access or live data — by giving it tools (Python functions).",
            "LLMs read a tool schema (JSON), not raw functions: name, description, parameters, types, and required fields.",
            "Flow: create tools → define schema → call LLM → it returns a JSON tool request → you execute it → feed the result back for the final answer.",
            "An LLM never runs functions itself; you execute them and return the output.",
            "Tool calling needs the chat method (it has a tools parameter) and a tool-capable model like qwen3.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </OllamaLessonLayout>
  );
}
