import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass17() {
  return (
    <LangChainLessonLayout slug="class-17">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 17 — Tool Calling</p>
        <h1 className="text-3xl font-bold text-white">Tool Calling — Connecting Tools to an LLM</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Last class we built tools. Now we connect them to an LLM and let the model decide when to use them. We&apos;ll
          go through the full flow — <span className="text-white">tool binding → tool calling → tool execution</span> —
          and finish by building a real-time currency converter powered by an LLM. This is the first solid step toward
          building AI agents.
        </p>
      </div>

      {/* Recap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.1 Quick Recap</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An LLM can <span className="text-white">reason</span> and <span className="text-white">generate output</span>,
          but can&apos;t perform tasks — a body with a brain and mouth but no hands or legs.
          <span className="text-white"> Tools</span> (special Python functions) give it those hands and legs. We learned
          how to build tools; what we skipped is how to <span className="text-white">connect</span> a tool to an LLM and
          how the LLM <span className="text-white">calls</span> it when needed. That&apos;s this class.
        </p>
      </div>

      {/* Tool binding */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.2 Tool Binding</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Tool binding <span className="text-white">registers</span> tools with an LLM so it knows: (1) which tools are
          available, (2) what each does (from the description), and (3) what input format each expects (from the schema).
          Once bound, the LLM will send inputs in exactly the format the tool expects.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.tools import tool
from langchain_openai import ChatOpenAI

@tool
def multiply(a: int, b: int) -> int:
    """Given two numbers a and b, this tool returns their product."""
    return a * b

llm = ChatOpenAI()

# bind_tools takes a LIST of tools
llm_with_tools = llm.bind_tools([multiply])`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Not every LLM supports it</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Only some models support tool binding. <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">llm_with_tools</code>
            is still an LLM, but now it&apos;s aware of the multiply tool and can call it when it decides multiplication
            is needed.
          </p>
        </div>
      </div>

      {/* Tool calling */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.3 Tool Calling</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Tool calling is when the LLM decides, during a conversation, that it needs a specific tool and generates a
          <span className="text-white"> structured output</span> with the tool&apos;s name and the arguments to call it
          with. Ask &ldquo;Hi, how are you?&rdquo; and it just replies. Ask &ldquo;Can you multiply 3 with 10?&rdquo; and
          the reply&apos;s <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">content</code> is empty —
          but it now carries a <span className="text-white">tool call</span>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`result = llm_with_tools.invoke("Can you multiply 3 with 10?")

print(result.content)      # ''  (empty)
print(result.tool_calls)   # [{'name': 'multiply', 'args': {'a': 3, 'b': 10},
                           #   'id': '...', 'type': 'tool_call'}]`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The LLM does NOT run the tool</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            A crucial point: the LLM only <span className="text-white">suggests</span> the tool and its input arguments.
            The actual execution is handled by LangChain / the programmer. This is intentional — letting the LLM
            autonomously execute tools would be risky, so you keep that control. It&apos;s giving advice, not running
            anything.
          </p>
        </div>
      </div>

      {/* Tool execution */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.4 Tool Execution</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now you (the programmer) actually run the tool with the arguments the LLM suggested. Pass the
          <span className="text-white"> entire tool call</span> to <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code>
          (not just the args) and you get back a <span className="text-white">ToolMessage</span> — a special message type
          you can feed back to the LLM.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`tool_call = result.tool_calls[0]

# passing just the args returns the raw value (15)
multiply.invoke(tool_call["args"])

# passing the WHOLE tool_call returns a ToolMessage (feedable to the LLM)
tool_message = multiply.invoke(tool_call)
print(tool_message)   # ToolMessage(content='15', tool_call_id='...')`}</pre>
        </div>
      </div>

      {/* Full loop */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.5 Closing the Loop — Back to the LLM</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The final step: give the LLM the full conversation so it can produce the natural-language answer. Maintain a
          <span className="text-white"> messages</span> list — HumanMessage → AIMessage (with the tool call) →
          ToolMessage — then send the whole history back.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.messages import HumanMessage

query = HumanMessage("Can you multiply 3 with 10?")
messages = [query]

ai_message = llm_with_tools.invoke(messages)
messages.append(ai_message)                       # AIMessage with tool_calls

tool_result = multiply.invoke(ai_message.tool_calls[0])
messages.append(tool_result)                       # ToolMessage

# now the LLM has full context: Human -> AI -> Tool
final = llm_with_tools.invoke(messages)
print(final.content)   # "The product of 3 and 10 is 30."`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The four steps</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Tool creation → tool binding → tool calling → tool execution, then feed the ToolMessage back so the LLM
            writes the final answer. This message history <span className="text-white">(Human → AI → Tool)</span> is the
            conversation context the model reasons over.
          </p>
        </div>
      </div>

      {/* Currency converter */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.6 Project — Real-Time Currency Converter</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An LLM can&apos;t know today&apos;s exchange rate (it&apos;s past its cut-off). We give it two tools: one hits
          a live exchange-rate API to get the conversion factor, another multiplies. A query like &ldquo;convert 10 USD
          to INR&rdquo; is solved in two steps: fetch the rate, then multiply.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import requests
from langchain_core.tools import tool

@tool
def get_conversion_factor(base_currency: str, target_currency: str) -> float:
    """Fetch the currency conversion factor between a base and a target currency."""
    url = f"https://v6.exchangerate-api.com/v6/YOUR_KEY/pair/{base_currency}/{target_currency}"
    return requests.get(url).json()

@tool
def convert(base_currency_value: int, conversion_rate: float) -> float:
    """Given a conversion rate, calculate the target value from a base currency value."""
    return base_currency_value * conversion_rate`}</pre>
        </div>
      </div>

      {/* Injected tool argument */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.7 The Dependency Problem &amp; InjectedToolArg</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Bind both tools and ask both questions at once, and the LLM issues <span className="text-white">two tool
          calls</span> in parallel. The second one (<code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">convert</code>)
          needs a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">conversion_rate</code> — but the
          first tool hasn&apos;t run yet, so the LLM <span className="text-white">makes one up</span> from its training
          data, breaking the logic. The fix: mark that argument as <span className="text-white">injected</span> so the
          LLM never fills it — you inject the real value after the first tool runs.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.tools import InjectedToolArg
from typing import Annotated

@tool
def convert(
    base_currency_value: int,
    conversion_rate: Annotated[float, InjectedToolArg],   # LLM won't fill this
) -> float:
    """Given a conversion rate, calculate the target value from a base currency value."""
    return base_currency_value * conversion_rate`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now the LLM&apos;s <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">convert</code> tool
          call only sets <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">base_currency_value</code>
          — you inject <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">conversion_rate</code>
          yourself after running the first tool.
        </p>
      </div>

      {/* Execution loop */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.8 Executing Both Tools in Order</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import json

for tool_call in ai_message.tool_calls:
    if tool_call["name"] == "get_conversion_factor":
        tool_message1 = get_conversion_factor.invoke(tool_call)
        # extract the rate from the JSON string result
        conversion_rate = json.loads(tool_message1.content)["conversion_rate"]
        messages.append(tool_message1)

    if tool_call["name"] == "convert":
        # inject the rate we just fetched into the second tool's args
        tool_call["args"]["conversion_rate"] = conversion_rate
        tool_message2 = convert.invoke(tool_call)
        messages.append(tool_message2)

# send full context back -> final natural-language answer
llm_with_tools.invoke(messages).content`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The same code now converts between <span className="text-white">any</span> two currencies at today&apos;s
          real-time rate.
        </p>
      </div>

      {/* Is this an agent */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">17.9 Is This an AI Agent?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">No.</span> Even though it uses tools and tool calling, an agent&apos;s defining
          trait is <span className="text-white">autonomy</span> — it breaks a problem down and solves it step by step
          without help. Here, <span className="text-white">we</span> wrote the decision-making and execution logic. A
          real agent would decide on its own: &ldquo;I don&apos;t know the rate → call get_conversion_factor → now I
          know it → call convert&rdquo; — all autonomously. That&apos;s the next class.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Tool calling has four steps: tool creation, tool binding, tool calling, tool execution.",
            "Tool binding (llm.bind_tools([...])) registers tools so the LLM knows their names, purposes, and input schemas. Not all models support it.",
            "In tool calling, the LLM returns a structured tool call (name + args) in result.tool_calls; content is empty.",
            "The LLM does NOT execute the tool — it only suggests it. Execution is done by the programmer/LangChain (safer).",
            "Pass the whole tool_call to tool.invoke() to get a ToolMessage; pass just args to get the raw value.",
            "Maintain a messages list (Human -> AI -> Tool) and send it back so the LLM produces the final natural-language answer.",
            "When one tool depends on another's output, mark the dependent arg with Annotated[type, InjectedToolArg] so the LLM won't fill it — you inject the real value after running the first tool.",
            "Using tools + tool calling is NOT an agent; an agent is autonomous — it decides and executes the steps itself.",
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

      {/* Next up */}
      <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4">
        <p className="text-xs font-semibold text-[#22a06b] uppercase tracking-widest mb-1">Coming Next</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          We can bind, call, and execute tools — but we drove every step manually. Next up: building your first
          <span className="text-white"> AI agent</span> in LangChain, where the LLM decides and runs the steps
          autonomously.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
