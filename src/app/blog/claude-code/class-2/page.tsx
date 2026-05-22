import LessonLayout from "@/components/LessonLayout";

export default function Class2() {
  return (
    <LessonLayout slug="class-2">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 2</p>
        <h1 className="text-3xl font-bold text-white">How to Setup Claude Code on Your System</h1>
      </div>

      {/* 2.1 What is Claude Code */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.1 What is Claude Code?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Claude Code is a command-line tool developed by Anthropic that allows developers to interact with
          Claude&apos;s AI models directly from their terminal. Instead of going to a website, you open your
          terminal, type <code className="text-[#cc785c]">claude</code>, and start talking to the AI right
          inside your project folder.
        </p>
        <p className="text-sm font-semibold text-white">Key Characteristics:</p>
        <ul className="flex flex-col gap-2">
          {[
            "It is a paid software — costs approximately $20/month via the Claude Pro plan.",
            "It runs in the terminal/command prompt — no graphical interface.",
            "It works by connecting to Anthropic's LLMs (Opus, Sonnet, and Haiku).",
            "It has a special Bash Mode for running shell commands within the conversation.",
            "Best used inside a project folder so it can read and understand your codebase.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 2.2 Prerequisites */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.2 Prerequisites</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Prerequisite</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Purpose</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">How to Get It</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A Computer (Mac/Linux/Windows)", "Claude Code runs on all major OS", "—"],
                ["Terminal / Command Prompt", "Interaction medium", "Built into every OS"],
                ["Claude AI Account", "Required to authenticate", "Sign up at claude.ai"],
                ["Claude Pro Plan ($20/month)", "Required to connect", "Upgrade from claude.ai"],
                ["VS Code (Recommended)", "Code editor", "code.visualstudio.com"],
              ].map(([prereq, purpose, how], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs">{prereq}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{purpose}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2.3 Installing */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.3 Installing Claude Code</h2>
        <p className="text-sm text-gray-400">The installation is a single command. Open your terminal and run:</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono">curl -fsSL https://claude.ai/install.sh | bash</pre>
        </div>
        <p className="text-sm font-semibold text-white">What This Command Does:</p>
        <ol className="flex flex-col gap-2">
          {[
            { cmd: "curl", desc: "downloads content from the internet." },
            { cmd: "-fsSL", desc: "flags that make curl work silently and follow redirects." },
            { cmd: "The URL", desc: "hosts the installation script by Anthropic." },
            { cmd: "| bash", desc: "pipes the script directly to bash for execution." },
          ].map(({ cmd, desc }, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <span><code className="text-[#cc785c]">{cmd}</code> — {desc}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm font-semibold text-white">After Successful Installation:</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Claude Code successfully installed!
Version : 2.1.81
Location : ~/.local/bin/claude
Next    : Run claude --help to get started`}</pre>
        </div>
      </div>

      {/* 2.4 Running for the first time */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.4 Running Claude Code for the First Time</h2>
        <p className="text-sm text-gray-400">After installation, simply type:</p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono">claude</pre>
        </div>
        <p className="text-sm font-semibold text-white">First-Time Authentication Flow:</p>
        <ol className="flex flex-col gap-2">
          {[
            { title: "Trust Prompt", desc: "Claude will ask if you trust the files in the current folder. Type Yes." },
            { title: "Login/Authorization", desc: "Claude will ask you to log in to your Anthropic account. A browser window opens automatically. Click the Authorize button. Return to your terminal — you are now logged in." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <span><span className="font-semibold text-white">{item.title}:</span> {item.desc}</span>
            </li>
          ))}
        </ol>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            This authorization happens only once. After the first time, Claude remembers your credentials
            and logs you in automatically.
          </p>
        </div>
      </div>

      {/* 2.7 Bash Mode */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">2.5 Bash Mode in Claude Code</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">2.5.1 What is Bash Mode?</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            When chatting with Claude Code, you sometimes need to run shell commands. Bash Mode lets you run
            those commands inside the Claude Code chat window. This means:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Claude remembers what commands you ran.",
              "Claude sees the output of those commands.",
              "You can ask questions about those commands later in the same conversation.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">2.5.2 How to Enter Bash Mode</h3>
          <p className="text-sm text-gray-400">
            Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white">Shift</kbd> +{" "}
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white">!</kbd> while in the
            Claude Code chat interface. This switches you from Chat Mode to Bash Mode.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Chat Mode : You type messages  -> Claude responds with AI text
Bash Mode : You type commands  -> They execute in the shell
                               -> Output becomes part of conversation`}</pre>
          </div>
        </div>
      </div>

      {/* 2.9 Exploring the Project */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.6 Exploring the Project with Claude Code</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Once Claude Code is running inside the project folder, ask these three essential questions:
        </p>
        <ol className="flex flex-col gap-2">
          {[
            { q: '"What does this project do?"', desc: "Claude reads all files and gives a summary." },
            { q: '"What tech does this project use?"', desc: "Claude analyses requirements.txt, app.py, etc." },
            { q: '"Explain the project structure to me"', desc: "Claude outputs a tree-like hierarchy with explanations." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <span><code className="text-[#cc785c]">{item.q}</code> — {item.desc}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 2.7 Quick Reference */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.7 Quick Reference — Commands</h2>
        <div className="flex flex-col gap-2">
          {[
            { cmd: "curl ... | bash", desc: "Install Claude Code" },
            { cmd: "claude", desc: "Start Claude Code (paid)" },
            { cmd: "claude --help", desc: "Show help and options" },
            { cmd: "Shift + !", desc: "Toggle Bash Mode" },
            { cmd: "/exit", desc: "End the current session" },
          ].map(({ cmd, desc }) => (
            <div key={cmd} className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-2.5 border border-white/10">
              <code className="text-sm text-green-400 font-mono w-44 shrink-0">{cmd}</code>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2.8 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">2.8 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Claude Code is a terminal-based AI tool — install via a single curl command.",
            "Always run Claude Code inside your project folder so it can read your codebase.",
            "Use Bash Mode (Shift + !) to run shell commands within Claude Code.",
            "Ask overview questions first — before writing any code, understand the project.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </LessonLayout>
  );
}
