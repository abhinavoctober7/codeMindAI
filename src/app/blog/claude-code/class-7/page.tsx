import LessonLayout from "@/components/LessonLayout";

export default function Class7() {
  return (
    <LessonLayout slug="class-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 7</p>
        <h1 className="text-3xl font-bold text-white">Spec-Driven Development (SDD)</h1>
      </div>

      {/* 7.1 The Big Picture */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.1 The Big Picture</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          There are two philosophically opposite ways to do AI-assisted programming today:
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Approach</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Philosophy</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Who is in charge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white/[0.02]">
                <td className="px-4 py-2.5 text-yellow-400 font-semibold text-xs">Vibe Coding</td>
                <td className="px-4 py-2.5 text-gray-400 text-xs">Lose control to gain speed</td>
                <td className="px-4 py-2.5 text-gray-400 text-xs">AI drives most decisions</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 text-green-400 font-semibold text-xs">Spec-Driven Development</td>
                <td className="px-4 py-2.5 text-gray-400 text-xs">Take time upfront to gain control</td>
                <td className="px-4 py-2.5 text-gray-400 text-xs">You drive every decision</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Agentic Coding</span> = SDD + sub-agents +
            structured workflows. SDD is the foundational pillar.
          </p>
        </div>
      </div>

      {/* 7.2 Vibe Coding */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">7.2 The Problem — What is Vibe Coding?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Vibe Coding is a modern style of programming where, instead of carefully planning
            everything upfront, you build software by interacting with an AI assistant in a fast,
            conversational, and experimental way.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-white">How it works in practice:</p>
          <ol className="flex flex-col gap-2">
            {[
              'You open an AI coding tool — Cursor, Lovable, Replit, etc.',
              'You type plain English: "Build me a To-Do application."',
              'The AI starts coding on your behalf and produces an app.',
              'You check the app, find issues, give more English feedback.',
              'The AI iterates and refines.',
              'You repeat until "it feels right."',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-white">Why people like it:</p>
          <ul className="flex flex-col gap-2">
            {[
              "Great for non-technical users — no code knowledge required.",
              "Very fast initial results.",
              "Perfect for prototypes, exploration, side projects.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7.3 Why Vibe Coding Breaks Down */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">7.3 Why Vibe Coding Breaks Down</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">7.3.1 The Core Flaw — You Lose Control</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            When you give a vague English prompt, the AI must make dozens of crucial decisions on
            your behalf — and you have no way to know what it decided until the code is already
            written.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">
            7.3.2 Concrete Example — &quot;Build me a user authentication system&quot;
          </h3>
          <p className="text-sm text-gray-400">That single sentence forces the AI to silently answer:</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Hidden Question</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Which framework should I use?", "Affects every line of code that follows"],
                  ["JWT or sessions?", "Different security model, different infrastructure"],
                  ["What are the password rules?", "Affects UX + security"],
                  ["What happens after 3 failed login attempts?", "Lockout? CAPTCHA? Email alert?"],
                ].map(([question, why], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-red-400 text-xs font-mono">{question}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            If even one choice doesn&apos;t match your real intent → the whole feature is wrong →
            you re-prompt → it changes other things → cycle repeats.
          </p>
        </div>
      </div>

      {/* 7.4 What is SDD */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.4 What is Spec-Driven Development (SDD)?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Spec-Driven Development is a software development approach where a{" "}
            <span className="font-semibold text-white">detailed specification document (spec doc)</span>{" "}
            is written before any code is written. The spec acts as the single source of truth for
            what the system should do.
          </p>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          The simple core idea: You keep most of the control with yourself. Every crucial decision
          is written down in a spec document and handed to the AI.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-yellow-950/30 border border-yellow-500/20 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">Vibe Coding</p>
            <p className="text-sm text-gray-300">Lose control → faster code</p>
          </div>
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">SDD</p>
            <p className="text-sm text-gray-300">Keep control → slower start, but right code</p>
          </div>
        </div>
      </div>

      {/* 7.5 Anatomy of a Spec Doc */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.5 Anatomy of a Spec Document</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Section</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What it answers</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Problem Statement", "Why are we building this feature?"],
                ["2", "Functional Requirements", "What exactly will the feature do?"],
                ["3", "API Contracts", "What goes in, what comes out?"],
                ["4", "Constraints", "Performance, screen size, limits, etc."],
                ["5", "Edge Cases & Error Handling", "Where can it fail and how do we handle it?"],
                ["6", "Acceptance Criteria", 'How do we know the feature is "done"?'],
              ].map(([num, section, answer], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-500 text-xs font-mono">{num}</td>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{section}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7.6 Full Example */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">7.6 Full Example — Chat History Sidebar Spec</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          We are building a ChatGPT-like app. A new feature: a left sidebar showing past
          conversations.
        </p>

        {/* Problem Statement */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">7.6.1 Problem Statement</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            As users interact with the application, they create multiple conversations over time.
            However, there is currently no easy way to revisit and continue past chats. This makes
            it difficult for users to find previous discussions, resume earlier conversations, and
            manage multiple chat threads.
          </p>
        </div>

        {/* Functional Requirements */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">7.6.2 Functional Requirements</p>
          <p className="text-sm text-gray-400">The system should:</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Display a sidebar showing a list of past chats.",
              "Show a short, readable title for each chat.",
              "Automatically generate the title from the user's first message (like ChatGPT does).",
              "Allow users to click on any chat to open it.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* API Contract */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">7.6.3 Input / Output Behaviour (API Contract)</p>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2 text-gray-300 font-semibold">Aspect</th>
                  <th className="px-4 py-2 text-gray-300 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/[0.02]">
                  <td className="px-4 py-2 text-gray-300 text-xs font-semibold">Input</td>
                  <td className="px-4 py-2 text-gray-400 text-xs">User clicks a particular past conversation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-300 text-xs font-semibold">Output</td>
                  <td className="px-4 py-2 text-gray-400 text-xs">That chat opens in the main area</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Constraints */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">7.6.4 Constraints</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "The sidebar should load within 1 second.",
              "The sidebar should work properly on standard laptop screens.",
              "Titles should be short and readable.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Edge Cases */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">7.6.5 Edge Cases & Error Handling</p>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2 text-gray-300 font-semibold">Edge Case</th>
                  <th className="px-4 py-2 text-gray-300 font-semibold">How to Handle</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["No chats exist yet (first-time user)", 'Show message: "No chat history yet"'],
                  ["User clicks a chat that can't be loaded", "Show an error message"],
                  ["First user message is very long", "Use only the first part as the title"],
                ].map(([edge, handle], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2 text-red-400 text-xs">{edge}</td>
                    <td className="px-4 py-2 text-gray-400 text-xs">{handle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Acceptance Criteria */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">7.6.6 Acceptance Criteria</p>
          <p className="text-sm text-gray-400">The feature is considered complete if:</p>
          <ul className="flex flex-col gap-2">
            {[
              "User can see a list of their past chats.",
              "The correct conversation is displayed every time.",
              "A new chat appears automatically after first use.",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-4 h-4 rounded border border-green-400/50 bg-green-400/10 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7.7 Complete SDD Workflow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.7 The Complete SDD Workflow</h2>
        <div className="flex flex-col gap-2">
          {[
            { step: 1, title: "Spec", desc: "Write the spec document (the Why + What).", highlight: false },
            { step: 2, title: "Review", desc: "Re-read the spec to catch missing info or mistakes.", highlight: true },
            { step: 3, title: "Design", desc: "Convert the spec into a Technical Design Plan (the How).", highlight: false },
            { step: 4, title: "Review", desc: "Double-check the technical plan.", highlight: true },
            { step: 5, title: "Tasks", desc: "Extract a list of concrete tasks from the technical plan.", highlight: false },
            { step: 6, title: "Build", desc: "Write actual code for each task.", highlight: false },
            { step: 7, title: "Validate", desc: "Check the finished code against the spec doc's Acceptance Criteria.", highlight: false },
          ].map(({ step, title, desc, highlight }) => (
            <div
              key={step}
              className={`flex items-start gap-4 border rounded-xl p-4 ${
                highlight
                  ? "bg-amber-950/20 border-amber-500/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <span className={`mt-0.5 w-7 h-7 rounded-full text-sm flex items-center justify-center font-bold shrink-0 ${
                highlight
                  ? "bg-amber-400/20 text-amber-400"
                  : "bg-[#cc785c]/20 text-[#cc785c]"
              }`}>
                {step}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className={`text-sm font-semibold ${highlight ? "text-amber-300" : "text-white"}`}>{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Important</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The two Review steps are not optional — they&apos;re the safety net that catches small
            mistakes before they get baked into code.
          </p>
        </div>
      </div>

      {/* 7.8 Technical Design Plan */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">7.8 Technical Design Plan (the &quot;How&quot; Document)</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          The spec doc describes <span className="font-semibold text-white">What &amp; Why</span> in
          a non-technical way (a PRD). The Technical Design Plan describes{" "}
          <span className="font-semibold text-white">How</span> to actually build it.
        </p>
        <p className="text-sm font-semibold text-white">Typical contents — Chat App Example:</p>

        <div className="flex flex-col gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">1. Database &amp; Models</p>
            <p className="text-sm text-gray-400">Create Chat and Message tables with one-to-many relationship.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-sm font-semibold text-white">2. Backend APIs</p>
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-4 py-2 text-gray-300 font-semibold">Method</th>
                    <th className="px-4 py-2 text-gray-300 font-semibold">Endpoint</th>
                    <th className="px-4 py-2 text-gray-300 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["GET", "/chats", "Fetch chat summaries (sorted by recency)"],
                    ["GET", "/chats/{id}", "Fetch full chat (ordered messages)"],
                    ["POST", "/chats", "Create new chat (generate title + store first message)"],
                    ["POST", "/chats/{id}/messages", "Append message"],
                  ].map(([method, endpoint, purpose], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className={`px-4 py-2 text-xs font-bold font-mono ${method === "GET" ? "text-blue-400" : "text-green-400"}`}>{method}</td>
                      <td className="px-4 py-2 text-[#cc785c] font-mono text-xs">{endpoint}</td>
                      <td className="px-4 py-2 text-gray-400 text-xs">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">3. Frontend Components</p>
            <p className="text-sm text-gray-400">ChatSidebar, ChatWindow, state management, loading + error states.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">4. Integration</p>
            <p className="text-sm text-gray-400">Connect FE → BE APIs, ensure correct ordering, dynamic updates.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">7.8.1 Why Spec Doc and Technical Design Are Kept Separate</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">If you mix them</p>
              <ul className="flex flex-col gap-1 mt-1">
                {[
                  "Spec is tied to a specific tech stack.",
                  "Migrating (e.g. FastAPI → Django) = rewrite the entire spec.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-red-400 shrink-0 mt-0.5">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">If you keep them separate</p>
              <ul className="flex flex-col gap-1 mt-1">
                {[
                  "One spec doc → many possible Technical Design Plans.",
                  "Switching tech stack = write a new Technical Design Plan only.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-green-400 shrink-0 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10 mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Document</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Typically written by</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/[0.02]">
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">Spec Document</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">Product Managers (with engineering input)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">Technical Design Plan</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">Engineering team</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 7.9 Comparison Table */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.9 Vibe Coding vs SDD — Comparison Table</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Dimension</th>
                <th className="px-4 py-2.5 text-yellow-400 font-semibold">Vibe Coding</th>
                <th className="px-4 py-2.5 text-green-400 font-semibold">Spec-Driven Development</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting point", "A feeling / rough idea", "A written specification"],
                ["Who decides requirements", "AI infers them", "You define them upfront"],
                ["Control", "Low — AI leads", "High — you lead"],
                ["Speed to first result", "Very fast", "Slower upfront, faster overall"],
                ["Code quality", "Unpredictable", "Consistent and traceable"],
                ["Works well for", "Prototypes, exploration, side projects", "Production systems, teams, complex apps"],
                ["Failure mode", "Spaghetti code you don't understand", "Over-specified, rigid if requirements change"],
              ].map(([dim, vibe, sdd], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{dim}</td>
                  <td className="px-4 py-2.5 text-yellow-300/80 text-xs">{vibe}</td>
                  <td className="px-4 py-2.5 text-green-300/80 text-xs">{sdd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Critical Insight</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            In SDD, you must understand programming. You&apos;re writing the spec, leading the AI
            — that requires real engineering knowledge.
          </p>
          <p className="text-sm text-white font-semibold mt-2">
            Mental model: Claude does the typing, you do the thinking and the reviewing.
          </p>
        </div>
      </div>

      {/* 7.10 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">7.10 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Vibe Coding ≠ Agentic Coding. Vibe Coding is great for prototypes; Agentic Coding (powered by SDD) is for serious production work.",
            "The fundamental trade-off: Speed-of-typing (Vibe) vs Control-and-correctness (SDD).",
            "The spec document is the single source of truth. Once it exists, no development happens outside it.",
            "The single biggest reason vibe coding fails on big features is hidden decisions the AI makes.",
            'Always separate the "Why/What" doc from the "How" doc. This protects from tech-stack lock-in.',
            "Review steps are non-negotiable.",
            'Acceptance criteria define "done". No subjectivity. Either each box is checked or the feature is incomplete.',
            "You still need to know how to code. SDD requires you to lead the AI.",
            "Agentic Coding = SDD + Sub-Agents + Tooling.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </LessonLayout>
  );
}
