import LessonLayout from "@/components/LessonLayout";

export default function Class9() {
  return (
    <LessonLayout slug="class-9">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#cc785c] font-semibold uppercase tracking-widest">Class 9</p>
        <h1 className="text-3xl font-bold text-white">Custom Slash Commands &amp; Authentication Feature</h1>
      </div>

      {/* 9.1 Session Objectives */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.1 Session Objectives</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Objective</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Learn Custom Slash Commands", "Build your own /command_name helpers"],
                ["2", "Add Login & Registration", "Real users can register, log in, and log out"],
              ].map(([num, obj, outcome], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-bold">{num}</td>
                  <td className="px-4 py-2.5 text-white text-xs font-semibold">{obj}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 9.2 What Are Custom Slash Commands */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.2 What Are Custom Slash Commands?</h2>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Custom Slash Commands are nothing but{" "}
            <span className="font-semibold text-white">saved prompts</span>. You write a prompt once
            into a Markdown file, save it in a specific folder, and Claude Code automatically picks it
            up. From then on, typing{" "}
            <span className="font-mono text-[#cc785c]">/your_command_name</span> inside Claude Code
            runs that prompt.
          </p>
        </div>
        <p className="text-sm text-gray-400 font-semibold">Three defining characteristics:</p>
        <ul className="flex flex-col gap-2">
          {[
            "Saved prompts invoked with a simple /command_name syntax.",
            "Used to execute any repeatable workflow in your project.",
            "Stored as Markdown files inside the .claude folder.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 9.3 When to Use */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.3 When to Use Custom Slash Commands</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          The single best signal is <span className="text-white font-semibold">repetition</span>. Anything
          you do again and again is a good candidate.
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Command</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">What It Does</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Why Automate It</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["/review", "Code review checklist on current file", "Every time you write code"],
                ["/commit", "Generate a git commit message", "Every feature ends with a commit"],
                ["/test", "Run the test suite and analyse failures", "Tests run after every change"],
                ["/security-scan", "Scan for common vulnerabilities", "Security checks repeat throughout"],
              ].map(([cmd, what, why], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-semibold">{cmd}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{what}</td>
                  <td className="px-4 py-2.5 text-gray-400 text-xs">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-950/30 border border-green-500/20 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">Best Practice</p>
          <p className="text-sm text-gray-300">
            If you&apos;ll type the same prompt more than twice → make it a slash command.
          </p>
        </div>
      </div>

      {/* 9.4 How Custom Slash Commands Work */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.4 How Custom Slash Commands Work</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#cc785c] uppercase tracking-widest">Crucial Naming Rule</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The <span className="font-semibold text-white">filename</span> of your Markdown file becomes
            the command name.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <span className="font-mono text-xs bg-[#0d1117] border border-white/10 rounded px-2 py-1 text-gray-300">
              seed-user.md
            </span>
            <span className="text-gray-500 text-sm">→</span>
            <span className="font-mono text-xs bg-[#cc785c]/10 border border-[#cc785c]/30 rounded px-2 py-1 text-[#cc785c] font-semibold">
              /seed-user
            </span>
          </div>
        </div>
        <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Important — Restart Requirement</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            After creating a new <span className="font-mono text-white">.md</span> file, you must{" "}
            <span className="font-semibold text-white">exit Claude Code and start it again</span> before
            the new command appears.
          </p>
        </div>
      </div>

      {/* 9.5 Project vs User Scope */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.5 Project Scope vs User Scope</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Aspect</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Project-Scoped</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">User-Scoped</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Storage location", "<project>/.claude/commands/", "~/.claude/commands/"],
                ["Availability", "Only inside that one project", "Across every project on your machine"],
                ["Best for", "Project-specific workflows", "General-purpose helpers"],
                ["Shared via git?", "Yes", "No"],
              ].map(([aspect, proj, user], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-gray-300 text-xs font-semibold">{aspect}</td>
                  <td className="px-4 py-2.5 text-blue-400 font-mono text-xs">{proj}</td>
                  <td className="px-4 py-2.5 text-purple-400 font-mono text-xs">{user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 9.6 Anatomy */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.6 Anatomy of a Custom Slash Command File</h2>
        <p className="text-sm text-gray-400">Every custom slash command Markdown file typically contains four parts:</p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Section</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Purpose</th>
                <th className="px-4 py-2.5 text-gray-300 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Description", "Short summary shown in dropdown", '"Create a single dummy user"'],
                ["Allowed tools", "Restricts what Claude can do", "Read, Bash(python3 *)"],
                ["Arguments hint", "(Optional) Tells the user what inputs to provide", "<user_id> <count> <months>"],
                ["Detailed instructions", "The actual prompt — step by step", "Read file X, generate Y, insert into Z"],
              ].map(([section, purpose, example], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{section}</td>
                  <td className="px-4 py-2.5 text-gray-300 text-xs">{purpose}</td>
                  <td className="px-4 py-2.5 text-gray-400 font-mono text-xs">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 9.7 /seed-user */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.7 Practical Example 1 — /seed-user</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.7.1 The Use Case — Database Seeding</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            While developing UI features, you need realistic users in the database to display.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.7.2 The Markdown Content</h3>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <p className="text-xs text-gray-500 font-mono mb-3"># File: .claude/commands/seed-user.md</p>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`---
description: Create a single dummy user in the database
allowed-tools: Read, Bash(python3 *)
---

You have to read database.py to understand the users table, then
write and run a Python script using Bash that generates a realistic
random Indian user using your own knowledge of common Indian names.

Fields to generate:
- name
- email
- password (always "123", encoded/hashed before storing)
- created_at (current timestamp)

Steps:
1. Check whether the generated email already exists in the database.
2. If it does, generate a new one and retry until unique.
3. Insert the user using the get_db() function.
4. Print out the details of the inserted user.`}</pre>
          </div>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">Why These Constraints Matter</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-mono text-white">allowed-tools: Bash(python3 *)</span> — Claude can only
              run Python commands via Bash; not <span className="font-mono">git</span>,{" "}
              <span className="font-mono">rm</span>, or anything else. This is a powerful safety boundary.
            </p>
          </div>
        </div>
      </div>

      {/* 9.8 /seed-expense */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.8 Practical Example 2 — /seed-expense (with arguments)</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.8.1 The Three Inputs</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Input</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Meaning</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["user_id", "Which user's expenses are these for?", "2"],
                  ["count", "How many expense rows to insert", "5"],
                  ["months", "Spread expenses across the last N months", "3"],
                ].map(([input, meaning, example], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-semibold">{input}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{meaning}</td>
                    <td className="px-4 py-2.5 text-blue-400 font-mono text-xs">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">Invocation:</p>
            <pre className="text-sm text-green-400 font-mono">/seed-expense 2 5 3</pre>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.8.2 The Magic Variable — $ARGUMENTS</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Inside the Markdown file you reference user input using the special variable{" "}
            <span className="font-mono text-[#cc785c] font-semibold">$ARGUMENTS</span>:
          </p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`---
description: Seed realistic dummy expenses for a specific user
argument-hint: <user_id> <count> <months>
allowed-tools: Read, Bash(python3 *)
---

User input: $ARGUMENTS

Step 1 -- Extract from arguments:
- user_id (integer)
- count (integer)
- months (integer)

If any are missing, tell the user the correct format:
/seed-expense <user_id> <count> <months>

Step 2 -- Verify the user exists in the users table.
If not, abort with a clear error message.

Step 3 -- Generate and insert expenses:
- Spread count expenses across the last months months.
- Realistic amount ranges per category:
  * Food: 50-800 INR
  * Health: 100-2000 INR
  * Travel: 100-3000 INR
  * Bills: 200-5000 INR
  * Shopping: 100-4000 INR

Step 4 -- Print a summary of the inserted expenses.`}</pre>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            The <span className="font-mono text-white">argument-hint</span> field causes Claude Code to
            show inline hints while you type the command.
          </p>
        </div>
      </div>

      {/* 9.9 /create-spec */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.9 Practical Example 3 — /create-spec</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          This command automates the creation of feature specification documents — the documents
          previously written manually.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
          <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`---
description: Create a spec file for the next Spendly feature
argument-hint: <step_number> <feature_name>
allowed-tools: Read, Write, Bash(git *)
---

You are a senior developer planning a new feature for the Spendly
expense tracker. Always follow the rules in CLAUDE.md.

User input: $ARGUMENTS

Step 1 -- Parse arguments (step_number, feature_title, feature_slug)

Step 2 -- Research the codebase:
- Read CLAUDE.md for project conventions.
- Read app.py and database.py for current architecture.
- Read everything inside .claude/specs/ to see existing features.

Step 3 -- Generate a spec document with structure:
# Feature Title
## Overview
## Dependencies
## Routes to Implement
## Database Changes
## Templates to Create / Modify
## Files Modified
## New Files Created
## New Dependencies
## Rules of Implementation
## Acceptance Criteria (Definition of Done)

Step 4 -- Save the document to:
.claude/specs/<step_number>-<feature_slug>.md

Step 5 -- Tell the user the spec has been created.`}</pre>
        </div>
      </div>

      {/* 9.10 Registration Feature */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.10 End-to-End Feature 1 — User Registration</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.10.1 What the Generated Spec Contains</h3>
          <ul className="flex flex-col gap-2">
            {[
              <><span className="font-semibold text-white">Routes:</span> GET /register (already exists), POST /register (new behaviour).</>,
              <><span className="font-semibold text-white">Database:</span> No schema changes; new DB helper in db.py.</>,
              <><span className="font-semibold text-white">Templates:</span> Modify register.html: add method=&quot;post&quot;, form action URL, error-display block.</>,
              <><span className="font-semibold text-white">Rules:</span> No SQLAlchemy, parameterised queries, hash passwords, server-side validation.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#cc785c] mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.10.2 Manual Acceptance Testing</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">#</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Criterion</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Visiting /register shows the form"],
                  ["2", "Submitting valid fields creates user and redirects to login"],
                  ["3", "Submitting mismatched passwords shows error"],
                  ["4", "Submitting already-registered email shows error"],
                  ["5", "Submitting empty fields blocks submission"],
                  ["6", "Password is stored as a hash, not plain text"],
                ].map(([num, criterion], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-gray-500 font-mono text-xs">{num}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{criterion}</td>
                    <td className="px-4 py-2.5">
                      <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                        <span className="w-4 h-4 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center text-xs">✓</span>
                        Pass
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 9.11 Upgrading /create-spec */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.11 Upgrading /create-spec to Automate Git Branching</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.11.1 Why Each Guard Exists</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Guard</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Reason</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Refuse if working tree is dirty", "Prevents accidentally mixing features' WIP"],
                  ["Check for branch-name collision", "Two features could share the same slug"],
                  ["Pull main before branching", "Ensures new branch starts from latest state"],
                ].map(([guard, reason], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] text-xs font-semibold">{guard}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400 leading-relaxed">
            After this upgrade, running{" "}
            <span className="font-mono text-[#cc785c]">/create-spec 03 login-and-logout</span> also:
          </p>
          <ol className="flex flex-col gap-2">
            {[
              "Confirms tree is clean.",
              "Switches to main and pulls.",
              "Creates and checks out feature/login-and-logout.",
              "Writes the spec.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#cc785c]/20 text-[#cc785c] text-xs flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 9.12 Login & Logout */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.12 End-to-End Feature 2 — Login &amp; Logout</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.12.1 Implementation</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">Where</th>
                  <th className="px-4 py-2.5 text-gray-300 font-semibold">What</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["app.py", "POST /login validates credentials, sets session['user_id']"],
                  ["app.py", "GET /logout clears session"],
                  ["login.html", "Method/action attributes, error message block"],
                  ["base.html", "Navbar: shows Sign Out when logged in"],
                ].map(([where, what], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-4 py-2.5 text-[#cc785c] font-mono text-xs font-semibold">{where}</td>
                    <td className="px-4 py-2.5 text-gray-300 text-xs">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-white">9.12.2 Iterative Fix</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Item 6 wasn&apos;t in the original spec — logged-in users could still access{" "}
            <span className="font-mono text-white">/login</span> and{" "}
            <span className="font-mono text-white">/register</span>. Reported back to Claude:
          </p>
          <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`I am able to access /login and /register even when I am logged in.
This should not happen.`}</pre>
          </div>
          <p className="text-sm text-gray-400">Claude added redirect guards to both routes.</p>
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Lesson</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Even with great automation, specs need careful review.{" "}
              <span className="font-semibold text-white">Iteration is normal and healthy.</span>
            </p>
          </div>
        </div>
      </div>

      {/* 9.13 Key Takeaways */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">9.13 Key Takeaways &amp; Best Practices</h2>

        {[
          {
            title: "Conceptual",
            color: "blue",
            items: [
              "Custom slash commands = saved prompts stored as Markdown in .claude/commands/.",
              "Two scopes — project (<repo>/.claude/commands/) vs user (~/.claude/commands/).",
              "The Markdown filename becomes the command name.",
              "After creating a new command, restart Claude Code to discover it.",
            ],
          },
          {
            title: "Design",
            color: "purple",
            items: [
              "Use commands for anything repeatable: reviews, commits, tests, security scans, seeding, spec generation.",
              "Be very explicit in instructions.",
              "Restrict commands with allowed-tools to keep them safe.",
              "Use $ARGUMENTS + an argument-hint for flexible, parameterised commands.",
            ],
          },
          {
            title: "Workflow",
            color: "green",
            items: [
              "Treat /create-spec as the entry point to every new feature.",
              "Always review generated specs and plans before implementation.",
              "Iterate: if a feature misbehaves in testing, feed the gap back into Claude.",
              "Keep features isolated on branches, PR them, then delete the branch.",
            ],
          },
        ].map(({ title, color, items }) => (
          <div
            key={title}
            className={`bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2 ${
              color === "blue"
                ? "bg-blue-950/20 border-blue-500/20"
                : color === "purple"
                ? "bg-purple-950/20 border-purple-500/20"
                : "bg-green-950/20 border-green-500/20"
            }`}
          >
            <p
              className={`text-xs font-semibold uppercase tracking-widest ${
                color === "blue"
                  ? "text-blue-400"
                  : color === "purple"
                  ? "text-purple-400"
                  : "text-green-400"
              }`}
            >
              {title}
            </p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span
                    className={`mt-0.5 shrink-0 ${
                      color === "blue"
                        ? "text-blue-400"
                        : color === "purple"
                        ? "text-purple-400"
                        : "text-green-400"
                    }`}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LessonLayout>
  );
}
