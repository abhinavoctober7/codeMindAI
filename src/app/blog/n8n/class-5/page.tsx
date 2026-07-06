import N8nLessonLayout from "@/components/N8nLessonLayout";

export default function N8nClass5() {
  return (
    <N8nLessonLayout slug="class-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ea4b71] font-semibold uppercase tracking-widest">Class 5 — AI Workflows</p>
        <h1 className="text-3xl font-bold text-white">AI-Powered Workflows — LLM Chains, Merge &amp; Aggregate</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Now we add intelligence. We&apos;ll build a <span className="text-white font-medium">code
          summarizer</span>: when a code-related email arrives, an LLM adds comments to the code and writes a
          summary, in parallel — then we merge, aggregate, format, and email the result back.
        </p>
      </div>

      {/* 5.1 The plan */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.1 The Plan</h2>
        <div className="flex flex-col gap-2">
          {[
            "Read the code-related mail (trigger).",
            "Summarize the code using an LLM.",
            "Generate inline comments for the code using an LLM (steps 2 & 3 run in parallel).",
            "Merge the outputs of steps 2 & 3.",
            "Send the result back to me as an email.",
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#ea4b71]/15 text-[#ea4b71] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5.2 Gmail trigger */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.2 The Gmail Trigger</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Add the <span className="text-white font-medium">Gmail &rarr; On Message Received</span> trigger. Set
          a poll time (e.g. every minute), uncheck <span className="text-white">Simplify</span>, and add a
          <span className="text-white font-medium"> sender filter</span> so it only fires for the mail you
          sent yourself. The mail&apos;s plain-text body lives in the
          <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> text</code> key — that&apos;s
          the code we&apos;ll feed to the LLM.
        </p>
      </div>

      {/* 5.3 LLM chains */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.3 Basic LLM Chain Nodes</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Add two <span className="text-white font-medium">Basic LLM Chain</span> nodes — one for comments,
          one for the summary. In each, set the source to <span className="text-white">Define Below</span> and
          write a prompt. The magic: drag the <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">text</code>
          key into the prompt and n8n drops the whole code in (anything inside
          <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> {`{{ }}`}</code> is JavaScript).
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`# Comments node — system message
You are a helpful assistant and know how to write
code in Python. You can help me understand the code
by adding comments to it.

# Comments node — prompt
Given the code below: {{ $json.text }}
Generate comments for the code so I can understand
what each line does. Do NOT modify any existing
code lines — just add comments where required.`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Connect a <span className="text-white font-medium">chat model</span> (e.g. ChatOpenAI, GPT-5 mini)
          to each chain via the Model slot, after adding the OpenAI API-key credential. The summary node gets
          a similar prompt asking for a simple-language summary that keeps all important details.
        </p>
      </div>

      {/* 5.4 Merge & Aggregate */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.4 Merge &amp; Aggregate</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Both chains take the same input in parallel and produce a <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">text</code>
          output. Two special nodes combine them:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#ea4b71]/5 border border-[#ea4b71]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#ea4b71]">Merge node</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Waits until <em>both</em> inputs are available, then combines them. Because LLM nodes finish at
              different times, this avoids the race conditions you&apos;d get connecting them directly.
            </p>
          </div>
          <div className="bg-[#ea4b71]/5 border border-[#ea4b71]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#ea4b71]">Aggregate node</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Merge returns two items; Aggregate collapses them into a <em>single</em> item with a
              <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-[10px]"> text</code> list —
              element 0 is the comments, element 1 is the summary.
            </p>
          </div>
        </div>
      </div>

      {/* 5.5 Format & send */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">5.5 Format &amp; Send</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A first attempt emailing the raw text comes out messy. The fix: concatenate the two list elements
          with an <span className="text-white font-medium">Edit Fields</span> node into one
          <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> message</code> string, then
          run it through one more <span className="text-white font-medium">Basic LLM Chain</span> to convert
          it to clean HTML:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`Convert the message into HTML format. Include proper
code blocks wherever necessary. The code blocks should
have syntax highlighting for the language used.`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Finally, send it with the <span className="text-white font-medium">Gmail &rarr; Send a Message</span>
          node, set the email type to <span className="text-white">HTML</span>, and paste the formatted body.
          The result is a clean email with a highlighted code block plus a well-structured summary.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "The Gmail trigger fires on new mail; filter by sender and read the body from the text key.",
            "Basic LLM Chain nodes run prompts; drag input keys into the prompt and attach a chat model via the Model slot.",
            "Run independent LLM tasks in parallel by feeding the same input to two chains.",
            "The Merge node waits for both inputs before combining — avoiding LLM timing race conditions.",
            "The Aggregate node collapses multiple items into a single item holding a list.",
            "Use an extra LLM chain to convert text to HTML, then send via Gmail with email type = HTML for clean formatting.",
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
