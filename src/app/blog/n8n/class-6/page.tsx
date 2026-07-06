import N8nLessonLayout from "@/components/N8nLessonLayout";

export default function N8nClass6() {
  return (
    <N8nLessonLayout slug="class-6">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ea4b71] font-semibold uppercase tracking-widest">Class 6 — Project</p>
        <h1 className="text-3xl font-bold text-white">Building an AI Agent — The Personal Assistant Project</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The capstone: an agentic personal assistant that answers questions (web search), manages your
          calendar, reads/replies to email, tracks expenses, takes notes, and manages tasks — driven from a
          custom Streamlit chat app via a webhook. Built from scratch.
        </p>
      </div>

      {/* 6.1 The AI Agent node */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.1 The AI Agent Node</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The heart of the project is the <span className="text-white font-medium">AI Agent node</span>, which
          has several sub-slots (appendages):
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Chat Model", d: "The LLM brain (e.g. ChatOpenAI / GPT-5 mini). Required." },
            { t: "Memory", d: "Holds conversation history. Simple Memory stores the last N interactions in RAM (set the context-window length, e.g. 15)." },
            { t: "Tools", d: "External integrations the agent can call to take actions — calendar, Gmail, Sheets, Docs, Tasks, web search." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6.2 Webhook in */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.2 The Webhook Trigger (Input)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Instead of n8n&apos;s built-in chat, we drive the agent from a custom app via a
          <span className="text-white font-medium"> Webhook trigger</span>. A webhook has a URL and stays in a
          <span className="text-white font-medium"> listening state</span> — unlike an API (which you call and
          then poll), a webhook waits and fires the moment a request lands on it. Set the method to
          <span className="text-white font-medium"> POST</span> so we can send the user&apos;s prompt in.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# test_webhook.py — send a prompt to the workflow
import requests

user_message = "Hi how are you?"
request_message = {"message": user_message}
url = "http://localhost:5678/webhook-test/..."   # your webhook URL

response = requests.post(url, json=request_message)
print(response.status_code)   # 200 = it reached the trigger`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Click <span className="text-white">Listen for test event</span>, run the script, and the message
          arrives in the trigger&apos;s <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">body.message</code>.
          Drag that into the agent as its input.
        </p>
      </div>

      {/* 6.3 Respond to webhook */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.3 Respond to Webhook (Output)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To send the agent&apos;s reply back to your app, add a <span className="text-white font-medium">Respond
          to Webhook</span> node (Respond With = All Incoming Items), and set the Webhook trigger&apos;s
          Respond option to <span className="text-white">Using Respond to Webhook Node</span>. The Python side
          reads the answer out of the returned list:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`response = requests.post(url, json=request_message)
# response is a list -> dict -> "output" key holds the text
answer = response.json()[0]["output"]
print(answer)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Wrap this in a small <span className="text-white font-medium">Streamlit</span> chat app: take the
          user&apos;s prompt from a chat input, POST it to the webhook, extract the agent&apos;s reply, and
          display it. Input in, output out — fully custom UI.
        </p>
      </div>

      {/* 6.4 Tools */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.4 Adding Tools (Capabilities)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The LLM can&apos;t touch the outside world on its own — tools are its hands. Each tool&apos;s
          parameters can be <span className="text-white font-medium">&ldquo;Defined automatically by the
          model&rdquo;</span>, so the agent decides the values at runtime. Group related tools with sticky
          notes. The six capabilities we add:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Web Search", d: "A search tool (e.g. SerpAPI Google Search) so the agent can answer about recent events." },
            { t: "Calendar", d: "Google Calendar tools to create events, get a single event, and get many events." },
            { t: "Gmail", d: "Read a single message, get many messages, and send messages." },
            { t: "Expense Tracking", d: "A Calculator tool plus Google Sheets tools to append and read expense rows." },
            { t: "Notes", d: "Google Docs tools to create an empty file, insert text, and read it back." },
            { t: "Tasks", d: "Google Tasks tools to create, get one, get many, and delete tasks." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ea4b71]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">How a Tool Call Works</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The query goes to the chat model, which decides a tool is needed, calls it (e.g.
            <span className="text-white"> Get Calendar Events</span>), feeds the result back to the agent, and
            the agent formulates the final answer — exactly the reasoning + tools pattern of an AI agent.
          </p>
        </div>
      </div>

      {/* 6.5 System prompt */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.5 The System Prompt</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          While testing, we kept telling the agent which tool to use (&ldquo;use the calendar tool&rdquo;). A
          good <span className="text-white font-medium">system prompt</span> removes that need — it tells the
          agent how to function: its role/identity, core capabilities, which tools exist and when to use them,
          output format, decision-making, and guardrails. With it in place, the agent picks the right tool on
          its own.
        </p>
      </div>

      {/* 6.6 Publish */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">6.6 Publishing</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Finally, click <span className="text-white font-medium">Publish</span>. The workflow moves to a
          production setup — switch your webhook URL from the <span className="text-white">test</span> URL to
          the <span className="text-white">production</span> URL, and you no longer need to click Execute each
          time. Your Streamlit app can now hit the workflow whenever it wants.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "The AI Agent node combines a chat model, memory, and tools.",
            "A webhook is always-listening (vs an API you poll); use a POST webhook to send input from a custom app.",
            "Respond to Webhook sends the agent's reply back; read it from response.json()[0]['output'].",
            "Tools are the agent's hands — their parameters can be defined automatically by the model.",
            "We added six capabilities: web search, calendar, Gmail, expense tracking, notes, and tasks.",
            "A strong system prompt lets the agent choose the right tool itself; Publish moves the workflow to production.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ea4b71]/20 text-[#ea4b71] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </N8nLessonLayout>
  );
}
