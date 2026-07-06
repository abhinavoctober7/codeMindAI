import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass4() {
  return (
    <LangChainLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 4 — Prompts</p>
        <h1 className="text-3xl font-bold text-white">The Prompts Component — Templates, Messages &amp; Chat History</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          A <span className="text-white font-medium">prompt</span> is simply the message you send to an LLM — we
          already used plenty in the last class without naming them. They matter enormously: a tiny change in
          the prompt can swing the output wildly, which is why <span className="text-white font-medium">prompt
          engineering</span> is now its own job. This class is all about text-based prompts in LangChain —
          static vs dynamic prompts, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">PromptTemplate</code>,
          message types, <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ChatPromptTemplate</code>,
          and <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">MessagesPlaceholder</code>.
        </p>
      </div>

      {/* temperature correction */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Quick Correction — temperature</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          A clarification from last class: <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">temperature</code> isn&apos;t
          just &ldquo;creativity.&rdquo; The real idea is <span className="text-white">determinism</span>. At
          <span className="text-white"> temperature 0</span>, the <em>same input always gives the same
          output</em> — run it ten times, get the same answer. As you raise it toward
          <span className="text-white"> 1.5&ndash;2</span>, the same input produces different, more creative
          outputs each run. Want reproducible results? Stay near 0. Want variety? Go higher.
        </p>
      </div>

      {/* What is a prompt */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 What Is a Prompt?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Whatever you pass into <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code> is
          the prompt. Prompts can be <span className="text-white">multimodal</span> (image, audio, video), but
          ~99% of the time today you work with <span className="text-white font-medium">text prompts</span> — so
          that&apos;s our focus.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# the string below IS the prompt
result = model.invoke("Write a five line poem on cricket")
print(result.content)`}</pre>
        </div>
      </div>

      {/* Static vs Dynamic */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 Static vs Dynamic Prompts</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In a real app, <span className="text-white">you</span> don&apos;t write the prompt — the
          <span className="text-white"> user</span> does. Imagine a research-paper summarizer with one text box.
          That free-form box is a <span className="text-white font-medium">static prompt</span>: the user types
          the whole thing.
        </p>
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
          <p className="text-sm font-bold text-red-400">The problem with static prompts</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Handing users full control is risky — outputs are very sensitive to wording. A misspelled paper name
            can make the model hallucinate, and you can&apos;t guarantee a consistent experience. Tiny edits
            (&ldquo;5 lines&rdquo; → &ldquo;math heavy&rdquo;) change everything.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The fix: a <span className="text-white font-medium">dynamic prompt</span>. You write a fixed template
          with placeholders and let the user fill only a few controlled values (e.g. via dropdowns) — paper,
          style, length. The template&apos;s quality stays in your hands.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# a Streamlit research-summarizer UI (three controlled inputs)
import streamlit as st

paper_input = st.selectbox("Select paper", ["Attention Is All You Need", "Word2Vec", ...])
style_input = st.selectbox("Explanation style", ["Simple", "Math Heavy", "Code Heavy"])
length_input = st.selectbox("Length", ["Short", "Medium", "Long"])`}</pre>
        </div>
      </div>

      {/* PromptTemplate */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 PromptTemplate</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LangChain&apos;s <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">PromptTemplate</code> builds
          dynamic prompts. You define a template string with <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">{`{placeholders}`}</code>,
          list the input variables, then fill them at run time with <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.prompts import PromptTemplate

template = PromptTemplate(
    template="""Please summarize the research paper titled {paper_input}
with the following specifications:
- Explanation style: {style_input}
- Explanation length: {length_input}
Include relevant equations and intuitive code snippets where applicable.
If information is unavailable, respond "Insufficient information available"
instead of hallucinating.""",
    input_variables=["paper_input", "style_input", "length_input"],
    validate_template=True,
)

prompt = template.invoke({
    "paper_input": paper_input,
    "style_input": style_input,
    "length_input": length_input,
})
result = model.invoke(prompt)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          A fair question: why not just use an <span className="text-white">f-string</span>? It would work — but
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> PromptTemplate</code> gives you three
          real benefits.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">1. Validation</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              With <code className="text-[#22a06b] bg-[#22a06b]/10 px-0.5 rounded">validate_template=True</code>, a
              missing or extra variable fails at <span className="text-white">dev time</span>, not on the live
              server.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">2. Reusability</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Save a template to JSON and load it anywhere — keeps big templates out of your app code and
              shareable across pages.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">3. Ecosystem</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Tightly coupled with LangChain — drops straight into <span className="text-white">chains</span>,
              which f-strings can&apos;t.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-medium">Save &amp; reuse a template:</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# prompt_generator.py — build once, save to disk
template.save("template.json")

# anywhere else — load it back
from langchain_core.prompts import load_prompt
template = load_prompt("template.json")`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-medium">Use it in a chain (one invoke instead of two):</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# template -> model, tied together as a single chain
chain = template | model
result = chain.invoke({
    "paper_input": paper_input,
    "style_input": style_input,
    "length_input": length_input,
})
print(result.content)`}</pre>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.4 Messages — System, Human, AI</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Build a console chatbot and a problem appears: it has no memory. Ask &ldquo;which is greater, 2 or
          0?&rdquo; then &ldquo;multiply the bigger number by 10,&rdquo; and it&apos;s lost — there&apos;s no
          <span className="text-white"> context</span> of past messages. The fix is a
          <span className="text-white font-medium"> chat history</span> list you send on every call.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`chat_history = []
while True:
    user_input = input("You: ")
    if user_input == "exit":
        break
    chat_history.append(user_input)        # keep the whole conversation
    result = model.invoke(chat_history)    # send the full history
    chat_history.append(result.content)
    print("AI:", result.content)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That solves memory, but a second problem remains: the history is a flat list of strings — you
          can&apos;t tell <span className="text-white">who said what</span>. As the chat grows the model gets
          confused about which line was the user vs itself. LangChain solves this with
          <span className="text-white font-medium"> three message types</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">SystemMessage</p>
            <p className="text-xs text-gray-400 leading-relaxed">Sets the role/behavior at the very start, e.g. &ldquo;You are a helpful assistant.&rdquo;</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">HumanMessage</p>
            <p className="text-xs text-gray-400 leading-relaxed">What the user sends to the LLM.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">AIMessage</p>
            <p className="text-xs text-gray-400 leading-relaxed">What the model sends back.</p>
          </div>
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.messages import SystemMessage, HumanMessage, AIMessage

chat_history = [SystemMessage(content="You are a helpful AI assistant")]
while True:
    user_input = input("You: ")
    if user_input == "exit":
        break
    chat_history.append(HumanMessage(content=user_input))   # labeled
    result = model.invoke(chat_history)
    chat_history.append(AIMessage(content=result.content))  # labeled
    print("AI:", result.content)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now every message is labeled by role, so no matter how long the conversation gets, the model always
          knows who said what.
        </p>
      </div>

      {/* ChatPromptTemplate */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.5 ChatPromptTemplate</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">PromptTemplate</code> makes a single
          dynamic message. When you&apos;re sending a <span className="text-white">list of messages</span> and
          want placeholders inside them — say a dynamic system <em>and</em> human message —
          use <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ChatPromptTemplate</code>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.prompts import ChatPromptTemplate

# NOTE: use (role, text) tuples — passing SystemMessage/HumanMessage
# objects here does NOT fill the placeholders (a LangChain quirk).
chat_template = ChatPromptTemplate([
    ("system", "You are a helpful {domain} expert"),
    ("human", "Explain in simple terms, what is {topic}"),
])

prompt = chat_template.invoke({"domain": "cricket", "topic": "Dusra"})
print(prompt)`}</pre>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Watch Out</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            If you build a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ChatPromptTemplate</code> with
            <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs"> SystemMessage(...)</code>/<code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">HumanMessage(...)</code> objects,
            the placeholders won&apos;t get filled. Use <span className="text-white">(role, text) tuples</span> as
            shown — that&apos;s what the latest LangChain docs recommend.
          </p>
        </div>
      </div>

      {/* MessagesPlaceholder */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.6 MessagesPlaceholder</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">MessagesPlaceholder</code> is a special
          slot inside a <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">ChatPromptTemplate</code> where
          you inject an entire <span className="text-white">list of messages</span> at run time — typically a
          loaded chat history.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Picture customer support: a user asked for a refund yesterday, the bot replied, the chat was saved to
          a database. Today they return and ask &ldquo;Where is my refund?&rdquo; — meaningless without the past
          context. You load the old messages into the placeholder so the new query sees the full conversation.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

# 1. a template with a slot for past messages
chat_template = ChatPromptTemplate([
    ("system", "You are a helpful customer support agent"),
    MessagesPlaceholder(variable_name="chat_history"),
    ("human", "{query}"),
])

# 2. load the saved history (from a DB; here a text file)
chat_history = []
with open("chat_history.txt") as f:
    chat_history.extend(f.readlines())

# 3. build the final prompt
prompt = chat_template.invoke({
    "chat_history": chat_history,
    "query": "Where is my refund?",
})
print(prompt)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The final prompt is now: system message → all the loaded history → today&apos;s query. The
          &ldquo;Where is my refund?&rdquo; question arrives with full context, so the LLM understands it
          instantly.
        </p>
      </div>

      {/* Mental model recap */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.7 The Mental Model</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          There are two ways to call <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">invoke()</code>,
          and each has a static and a dynamic form:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">You send…</th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold">Use it for</th>
                <th className="text-left py-2 px-3 text-[#22a06b] font-semibold">Dynamic version</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["A single message", "Single-turn, standalone queries (e.g. summarize one paper)", "PromptTemplate"],
                ["A list of messages", "Multi-turn conversations (chatbots)", "ChatPromptTemplate (+ MessagesPlaceholder for history)"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-b border-white/5">
                  <td className="py-2 px-3 font-medium text-white">{a}</td>
                  <td className="py-2 px-3">{b}</td>
                  <td className="py-2 px-3">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "A prompt is whatever you send to the LLM; outputs are extremely sensitive to it.",
            "temperature controls determinism: 0 = same input → same output, higher = more varied/creative.",
            "Static prompts hand users full control (risky); dynamic prompts expose only a few safe placeholders.",
            "PromptTemplate builds single dynamic prompts and beats f-strings via validation, reusability (save/load JSON), and chain support.",
            "Chain a template to a model with template | model so you invoke once.",
            "Chatbots need a chat history; LangChain labels it with SystemMessage, HumanMessage, and AIMessage so the model knows who said what.",
            "ChatPromptTemplate makes a list of messages dynamic — use (role, text) tuples so placeholders actually fill.",
            "MessagesPlaceholder injects a whole loaded chat history into a ChatPromptTemplate for context-aware conversations.",
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
