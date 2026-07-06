import N8nLessonLayout from "@/components/N8nLessonLayout";

export default function N8nClass1() {
  return (
    <N8nLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ea4b71] font-semibold uppercase tracking-widest">Class 1 — Foundations</p>
        <h1 className="text-3xl font-bold text-white">Business Automation &amp; AI Automation</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before touching n8n, you need the lay of the land. What is business automation, why do companies
          rely on it, and what changed when AI entered the picture? This class builds the mental model that
          everything else in the course rests on.
        </p>
      </div>

      {/* 1.1 What is business automation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 What Is Business Automation?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every business runs <span className="text-white font-medium">for profit</span>, and to make profit
          it has to sell a product or a service. That requires <span className="text-white font-medium">skilled
          human resource</span> — which is both <span className="text-white">scarce</span> and
          <span className="text-white"> costly</span>. Meanwhile, a lot of business tasks are
          <span className="text-white font-medium"> repetitive</span>. Automating those repetitive tasks with
          a tool or software is exactly what business automation is.
        </p>
        <div className="bg-[#ea4b71]/10 border border-[#ea4b71]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ea4b71] uppercase tracking-widest mb-1">The Core Idea</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Automate the trivial, mundane, repetitive tasks so humans are freed for creative and strategic
            work — saving money and increasing profit margins.
          </p>
        </div>
      </div>

      {/* 1.2 Examples */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 Two Examples</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
          <p className="text-sm font-bold text-white">Invoicing</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Before invoicing software, you maintained invoice IDs, line items, and tax calculations by hand.
            An invoicing tool auto-fills stock, unit price, totals, taxes, and company details. A person who
            could do 100 invoices a day (with errors) now does 500 — a 5× productivity boost.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
          <p className="text-sm font-bold text-white">Customer Service</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            A 4-step process: categorize the incoming mail, forward it to the right department, generate a
            ticket number (saved to a database), and reply to the customer. Automating all four frees the
            team for more dynamic, creative work.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That series of fixed steps in a fixed order is the <span className="text-white font-medium">business
          logic</span> — a series of rules/instructions to achieve a task. Automation means encoding that
          logic into a tool.
        </p>
      </div>

      {/* 1.3 Why needed */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 Why Business Automation Is Needed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: "Saves time", d: "No manual listing, calculating, or tax handling — the software does it." },
            { t: "Reduces human errors", d: "No missed points or wrong tax percentages from manual work." },
            { t: "Scales easily", d: "1 invoice or 1000 — no need to keep hiring more people to scale up." },
            { t: "Frees humans for better work", d: "People move to strategy, decision-making, and creative tasks." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#ea4b71]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.4 The problem: static */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 The Problem: Plain Automation Is Static</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Traditional business automation hard-codes its logic. It can&apos;t adapt to a situation
          dynamically. Take the customer-service bot that categorizes mail by
          <span className="text-white font-medium"> keyword search</span>: keywords for each department are
          stored statically. What happens when a single mail mentions <em>both</em> a billing issue
          <em> and</em> a refund? The keyword logic can&apos;t decide where to forward it. It can&apos;t do
          mid-way decision-making — because it&apos;s static.
        </p>
      </div>

      {/* 1.5 Enter AI */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 Enter AI: From Static to Dynamic</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LLMs are trained on language data, so they have <span className="text-white font-medium">Natural
          Language Understanding (NLU)</span> — they grasp hidden patterns in language and understand a
          user&apos;s <span className="text-white">intent</span>. Plug an LLM into that customer-service flow
          and it <em>reads</em> the complaint, understands which department it belongs to, and routes it —
          no hard-coded keywords. The whole process becomes <span className="text-white font-medium">dynamic
          and intelligent</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-red-400">Business Automation</p>
            <p className="text-xs text-gray-400 leading-relaxed">Static, rule-based, hard-coded. Can&apos;t adapt to new situations.</p>
          </div>
          <div className="bg-[#ea4b71]/5 border border-[#ea4b71]/30 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#ea4b71]">AI Automation</p>
            <p className="text-xs text-gray-400 leading-relaxed">Dynamic, intelligent. Understands intent and adapts; agents can also take actions.</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The next stage beyond LLMs is <span className="text-white font-medium">agents</span> — they
          don&apos;t just classify and generate, they <em>perform tasks</em>. An agent could classify the
          complaint, generate the ticket, <em>and</em> email the reply, automating the whole flow.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Business automation = encoding repetitive business logic into a tool to save time, cut errors, scale, and free people for better work.",
            "Business logic is a fixed series of steps/rules executed to achieve a task.",
            "Plain automation is static — it can't make dynamic mid-process decisions.",
            "LLMs add NLU, understanding intent and turning static automations into dynamic AI automations.",
            "Agents go further: they reason and take actions, not just classify or generate text.",
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
