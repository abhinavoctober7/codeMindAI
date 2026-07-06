import N8nLessonLayout from "@/components/N8nLessonLayout";

export default function N8nClass4() {
  return (
    <N8nLessonLayout slug="class-4">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ea4b71] font-semibold uppercase tracking-widest">Class 4 — Hands-On</p>
        <h1 className="text-3xl font-bold text-white">Your First Workflow — Triggers, Nodes &amp; Credentials</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Time to build. We&apos;ll explore the editor, learn trigger nodes and data views, then build a real
          workflow: collect feedback from a form, save it to Google Sheets, and branch on the feedback to
          decide who gets a discount.
        </p>
      </div>

      {/* 4.1 Two habits */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.1 Two Habits Before You Build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Plan on paper first</p>
            <p className="text-xs text-gray-400 leading-relaxed">Sketch the steps and how data flows start-to-end. You&apos;ll hit far fewer errors than diving straight in.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-white">Save often</p>
            <p className="text-xs text-gray-400 leading-relaxed">n8n has no auto-save. Hit Save regularly so you don&apos;t lose progress.</p>
          </div>
        </div>
      </div>

      {/* 4.2 Trigger nodes */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.2 Trigger Nodes</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every workflow starts with a <span className="text-white font-medium">trigger node</span> — marked
          with a lightning-bolt icon, with only an output connection (no input). It kick-starts the workflow.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "Manual Trigger", d: "Runs the flow when you click a button. Great for development; not used in production." },
            { t: "On Form Submission", d: "Generates a web form (like a Google Form). When a user submits, the workflow triggers and the form data flows in." },
            { t: "On Chat Message", d: "A ChatGPT-like chat box that feeds the user's message into the workflow — used with AI nodes." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4.3 Data views & pinning */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.3 Viewing &amp; Pinning Data</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Each node&apos;s output can be viewed three ways: <span className="text-white font-medium">JSON</span>
          (raw key-value pairs), <span className="text-white font-medium">Table</span> (keys become columns),
          and <span className="text-white font-medium">Schema</span> (keys with their data types). During
          development, use <span className="text-white font-medium">data pinning</span> (the pin icon) to
          freeze a node&apos;s output as test data so you don&apos;t have to re-submit the form on every run.
          Pinning doesn&apos;t apply to production.
        </p>
      </div>

      {/* 4.4 The workflow */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.4 Build: Form &rarr; Google Sheets</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Plan: <span className="text-white">(1)</span> use a Form Submission node to collect customer data
          (email, name, age, feedback dropdown), then <span className="text-white">(2)</span> append it as a
          row in Google Sheets. Add the Google Sheets node, set the action to
          <span className="text-white font-medium"> Append Row in Sheet</span>, pick the document and sheet,
          and map each column — by simply <span className="text-white font-medium">dragging the input
          keys</span> from the previous node into the fields (n8n fills in the expression for you).
        </p>
      </div>

      {/* 4.5 Credentials */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.5 Credentials (Google OAuth)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To let n8n touch your Google account, you must authorize it. Every node sets credentials
          differently — n8n&apos;s docs cover each. For Google, the high-level steps are:
        </p>
        <div className="flex flex-col gap-2">
          {[
            "Create a Google Cloud Console project.",
            "Enable the needed APIs in the Library (e.g. Gmail, Google Sheets, and always Google Drive for Sheets/Docs/Slides).",
            "Configure the OAuth consent screen (app name, support email, audience = External).",
            "Create OAuth client credentials (Web application) and paste the node's OAuth Redirect URL into Authorized redirect URIs.",
            "Copy the Client ID + Client Secret into n8n, sign in, and add your email as a Test User on the Audience page.",
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#ea4b71]/15 text-[#ea4b71] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Heads Up</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            With an External app you&apos;ll see <span className="text-white">&ldquo;Access blocked&rdquo;</span>
            until you add your own email to the Test Users list. After that, sign-in succeeds and the account
            connects.
          </p>
        </div>
      </div>

      {/* 4.6 Conditional + Set */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">4.6 Branching: the If &amp; Edit Fields Nodes</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Now make it smart: give a discount only to customers with positive feedback. Add an
          <span className="text-white font-medium"> If node</span> with the condition
          <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> feedback == &quot;positive&quot;</code>.
          The node outputs to a <span className="text-white font-medium">true</span> branch or a
          <span className="text-white font-medium"> false</span> branch — never both, so your data never
          conflicts.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          On each branch, use the <span className="text-white font-medium">Edit Fields (Set) node</span> to
          add an extra field <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">give_discount</code>
          — <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs">yes</code> on the true side,
          <code className="text-[#ea4b71] bg-[#ea4b71]/10 px-1 rounded text-xs"> no</code> on the false side.
          Turn on <span className="text-white font-medium">Include Other Input Fields</span> so the original
          data passes through alongside the new field. Then both branches append to the same sheet.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Going Automatic</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Unpin the data and click <span className="text-white">Execute Workflow</span> — the form pops up,
            and on submit the whole flow runs end-to-end, routing each user to the right branch and writing
            the row automatically.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Always plan on paper and save often — n8n has no auto-save.",
            "Every workflow begins with a trigger node (lightning bolt, output only): Manual, Form Submission, Chat, etc.",
            "View node data as JSON, Table, or Schema; pin data to freeze test output during development.",
            "Map sheet columns by dragging input keys into fields — n8n writes the expression for you.",
            "Each node that touches an external app needs credentials; Google uses an OAuth flow via Google Cloud Console.",
            "The If node branches true/false; the Edit Fields (Set) node adds fields — use Include Other Input Fields to keep the rest.",
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
