import JavaScriptLessonLayout from "@/components/JavaScriptLessonLayout";

export default function JSClass1() {
  return (
    <JavaScriptLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#f7df1e] font-semibold uppercase tracking-widest">Class 1</p>
        <h1 className="text-3xl font-bold text-white">Why JavaScript Exists</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before writing a single line of JavaScript, understand the problem it was built to solve —
          and why no existing language at the time could do the job.
        </p>
      </div>

      {/* 1.1 What is JavaScript */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 What is JavaScript?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When you build a website using only HTML, you get a <span className="text-white font-medium">static</span> page.
          It looks like content on a screen — nothing more. You can&apos;t click a button and see a result.
          You can&apos;t add two numbers. The page just sits there.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          CSS improves the appearance, but it still cannot make the page <em>do</em> anything. A calculator
          built with only HTML and CSS will not calculate. A search bar will not search.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          JavaScript is the third layer — the one that brings <span className="text-white font-medium">interactivity</span>.
          It can respond to button clicks, perform calculations, change content dynamically, and communicate
          with servers. Without JavaScript, the modern web as we know it simply would not exist.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`HTML  →  Structure  (the skeleton)
CSS   →  Style      (the appearance)
JS    →  Behaviour  (the brain)`}</pre>
        </div>
      </div>

      {/* 1.2 Client-Server and the Browser */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 The Browser Understands JavaScript</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          When you visit a website (say, Instagram), your browser sends a request to Instagram&apos;s server.
          The server responds with three files:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Client (your browser) → Request → Server
Server → Response → HTML + CSS + JavaScript`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Your browser knows how to read all three. To prove this, open the browser console (right-click → Inspect → Console)
          and type:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono">{`console.log("Hello World")`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          It runs. Now try some C++ code in the same console — it won&apos;t run. The browser only understands
          JavaScript, not C++ or Java. This is a key constraint that shaped how the web was built.
        </p>
      </div>

      {/* 1.3 Why a New Language */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.3 Why a New Language? (First Principles)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          In 1995, when JavaScript was introduced, C++ and Java already existed. So why did the web need
          yet another language? Think about it from first principles — what requirements would a
          browser-side language need to meet?
        </p>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Think Like a Senior Engineer</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Before reading the reasons below, ask yourself: if I had to design a programming language
            specifically for the web browser in 1995, what constraints would I have to respect?
            This thinking habit — reasoning from requirements first — is what separates senior engineers
            from junior ones.
          </p>
        </div>

        {/* Reason 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#f7df1e]/10 text-[#f7df1e] text-sm flex items-center justify-center font-bold shrink-0">1</span>
            <h3 className="text-base font-semibold text-white">Easy to Learn</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            In 1995, web developers were not computer scientists. They were people who had learned HTML —
            a forgiving, simple markup language where even a wrong tag doesn&apos;t crash the page. Asking
            them to learn C++ would have killed web adoption entirely.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Compare printing &ldquo;Hello World&rdquo; in each language:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-4">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">C++ — Hello World</p>
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`#include <iostream>
using namespace std;
int main() {
  cout << "Hello World";
  return 0;
}`}</pre>
            </div>
            <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2">JavaScript — Hello World</p>
              <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`console.log("Hello World")`}</pre>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            JavaScript is also <span className="text-white font-medium">forgiving</span> — you can even omit the
            semicolon at the end and the code still runs. This mirrors HTML&apos;s forgiving nature, lowering
            the barrier for non-programmers.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Key Insight</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Mass adoption requires simplicity. If the web had required C++ knowledge, it would have grown
              10× slower. JavaScript&apos;s ease of learning is one reason the web exploded in the late 1990s.
            </p>
          </div>
        </div>

        {/* Reason 2 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#f7df1e]/10 text-[#f7df1e] text-sm flex items-center justify-center font-bold shrink-0">2</span>
            <h3 className="text-base font-semibold text-white">No Direct System Access (Security)</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            C++ is a <span className="text-white font-medium">low-level language</span>. It can directly
            access memory, read files anywhere on disk, format your hard drive, and communicate with the
            operating system. If a browser ran C++ code downloaded from any website you visit, you would
            have no privacy or security.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Imagine visiting a random website and that site&apos;s C++ code silently reads your private files,
            deletes your data, or enables your camera without asking — because the language gives it direct
            memory access and filesystem pointers. This is not hypothetical; it is exactly the kind of attack
            C++ makes trivial.
          </p>
          <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">Why C++ is dangerous in a browser</p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {[
                "Direct memory access via pointers — can read/write any location",
                "Filesystem access — can delete or exfiltrate any file",
                "No permission model — runs with full system privileges",
                "Can format your hard drive with a single command",
              ].map((item) => (
                <li key={item} className="text-xs text-gray-300 flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            JavaScript was designed from the start with a <span className="text-white font-medium">sandbox model</span>.
            It can only touch what the browser explicitly allows: the current web page (HTML/CSS), keyboard
            and mouse input, and browser APIs. It cannot touch your filesystem, camera, or microphone
            without explicitly asking your permission first.
          </p>
          <div className="bg-green-950/40 border border-green-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">JavaScript&apos;s sandbox</p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {[
                "Can manipulate the current HTML/CSS page",
                "Can read keyboard and mouse events",
                "Camera/microphone: must ask for user permission first",
                "Cannot access your filesystem without explicit permission",
              ].map((item) => (
                <li key={item} className="text-xs text-gray-300 flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reason 3 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#f7df1e]/10 text-[#f7df1e] text-sm flex items-center justify-center font-bold shrink-0">3</span>
            <h3 className="text-base font-semibold text-white">Lightweight (No Compiler Needed)</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            In 1995, computers had <span className="text-white font-medium">4–8 MB of RAM</span> and
            200 MB hard drives. Running C++ code inside a browser would require shipping a C++ compiler
            with every browser — a huge memory and disk cost the hardware of the time simply could not handle.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <pre className="text-sm text-gray-400 font-mono leading-loose whitespace-pre-wrap">{`To run C++ in the browser (1995 approach):
  OS             → ~1 MB RAM
  Browser        → ~1 MB RAM
  C++ Compiler   → ~2 MB RAM
  ──────────────────────────
  Total: ~4 MB   (entire RAM gone just to run one page!)`}</pre>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            JavaScript was designed to be interpreted directly — no separate compilation step requiring
            a large compiler binary sitting in memory. It is lightweight enough to run inside the browser
            process itself.
          </p>
        </div>

        {/* Reason 4 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#f7df1e]/10 text-[#f7df1e] text-sm flex items-center justify-center font-bold shrink-0">4</span>
            <h3 className="text-base font-semibold text-white">Automatic Garbage Collection</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            In C++, the programmer manually manages memory. When you allocate memory with <code className="text-[#f7df1e] bg-[#f7df1e]/10 px-1 rounded text-xs">new</code>,
            you must free it with <code className="text-[#f7df1e] bg-[#f7df1e]/10 px-1 rounded text-xs">delete</code> when done.
            Forgetting this causes <span className="text-white font-medium">memory leaks</span> — your program
            keeps consuming RAM until it crashes.
          </p>
          <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-500 mb-2">C++ — manual memory management (error-prone)</p>
            <pre className="text-sm text-red-400 font-mono leading-loose whitespace-pre-wrap">{`int* data = new int[1000];  // allocate
// ... use data ...
delete[] data;               // must remember to free!
// Forget this → memory leak → program eventually crashes`}</pre>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            JavaScript handles this automatically. Its <span className="text-white font-medium">garbage collector</span> monitors
            which variables are still reachable and frees the memory of those that are no longer needed.
            You never have to think about memory allocation or deallocation — especially important
            when the target audience was non-professional web developers.
          </p>
        </div>
      </div>

      {/* 1.4 The V8 Engine */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.4 How JavaScript Actually Runs: The V8 Engine</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          We know the browser understands JavaScript. But something inside the browser must actually
          execute those instructions. What is it?
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every browser ships with a <span className="text-white font-medium">JavaScript engine</span> —
          a piece of software that takes your JavaScript code as input and produces output (results on screen,
          data, side effects).
        </p>
        <div className="flex flex-col gap-2">
          {[
            { browser: "Google Chrome", engine: "V8", note: "Written by Google, also used in Node.js" },
            { browser: "Mozilla Firefox", engine: "SpiderMonkey", note: "The original JS engine, written in C++" },
            { browser: "Safari", engine: "JavaScriptCore (Nitro)", note: "Built by Apple for WebKit" },
            { browser: "Microsoft Edge", engine: "V8", note: "Switched from Chakra to V8 in 2020" },
          ].map(({ browser, engine, note }) => (
            <div key={browser} className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-2.5 border border-white/10">
              <code className="text-sm text-[#f7df1e] font-mono w-36 shrink-0">{browser}</code>
              <p className="text-sm font-semibold text-white w-40 shrink-0">{engine}</p>
              <p className="text-xs text-gray-400">{note}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">This is why Chrome asks your OS when downloading</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The V8 engine inside Chrome is compiled machine code, and machine code is
            hardware-dependent. The same binary that runs on macOS will not run on Windows or Linux.
            That is why Chrome&apos;s installer asks: &ldquo;Which OS are you on?&rdquo; — so it can deliver the
            correct machine code binary for your system.
          </p>
        </div>
      </div>

      {/* 1.5 What IS the V8 Engine */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 What Exactly Is the V8 Engine?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The name &ldquo;V8 engine&rdquo; sounds mysterious. It isn&apos;t. Here is the plain truth:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`V8 Engine  =  A C++ program
             that takes JavaScript code as input
             and produces the correct output`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Someone wrote a C++ program specifically designed to read and understand JavaScript syntax.
          That C++ source code was compiled into <span className="text-white font-medium">machine code</span> (binary),
          and that machine code binary is what ships inside Chrome.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-gray-400 font-mono leading-loose whitespace-pre-wrap">{`C++ source  →  [Compile once, at Google]  →  Machine code binary
                                                       ↓
                                              Ships inside Chrome
                                                       ↓
                                        Your JS code → Input → V8 → Output`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Because V8 ships as machine code, your computer does not need a C++ compiler installed.
          Your OS can execute machine code directly. No compilation step at runtime — that&apos;s why
          JavaScript starts running almost instantly in the browser.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">How V8 executes your code</p>
          <ol className="flex flex-col gap-2">
            {[
              { step: "Parse", desc: "V8 reads your JavaScript and builds an internal representation (AST)" },
              { step: "Interpret", desc: "An interpreter (Ignition) executes code line-by-line to produce output quickly" },
              { step: "Optimise", desc: "A JIT compiler (TurboFan) optimises hot code paths to machine code for speed" },
            ].map(({ step, desc }, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#f7df1e]/10 text-[#f7df1e] text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                <span><span className="font-medium text-white">{step}:</span> {desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 1.6 Node.js */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">1.6 Running JavaScript Outside the Browser: Node.js</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          For years, JavaScript could only run in a browser — because the V8 engine only existed inside
          Chrome (and similar engines inside other browsers). If you created a <code className="text-[#f7df1e] bg-[#f7df1e]/10 px-1 rounded text-xs">index.js</code> file
          and tried to run it from your terminal, nothing would happen. Your operating system has no idea what JavaScript is.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          In 2009, <span className="text-white font-medium">Ryan Dahl</span> had a simple insight:
          take the V8 engine out of Chrome, add some extra APIs (filesystem access, networking, etc.),
          and give developers a way to run JavaScript anywhere. That project became <span className="text-white font-medium">Node.js</span>.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-green-400 font-mono leading-loose whitespace-pre-wrap">{`Node.js  =  V8 Engine
           + File System APIs
           + Network APIs
           + OS APIs
           + Event Loop (libuv)
           ──────────────────────────
           =  Run JavaScript anywhere`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          This one change had massive consequences. Suddenly, JavaScript developers could write server-side
          code, command-line tools, and backend APIs — all with the same language they already knew from
          the browser. This is why JavaScript became the world&apos;s most used programming language.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Before Node.js</p>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Frontend  →  JavaScript
Backend   →  Java / PHP / Python / C++

→ Must learn two languages
→ Must context-switch constantly`}</pre>
          </div>
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2">After Node.js</p>
            <pre className="text-xs text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">{`Frontend  →  JavaScript
Backend   →  JavaScript (Node.js)

→ One language for everything
→ "Full-stack JS" developer born`}</pre>
          </div>
        </div>
      </div>

      {/* 1.7 Installing Node.js */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.7 Installing Node.js</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To run JavaScript outside the browser, install Node.js from the official site. The installer
          asks for your operating system because — as we now know — the V8 machine code binary is
          hardware-dependent.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">After installing, verify in your terminal:</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`node -v
# Expected output: v22.x.x  (or whatever is current LTS)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Once Node.js is installed, create any <code className="text-[#f7df1e] bg-[#f7df1e]/10 px-1 rounded text-xs">.js</code> file
          and run it:
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <p className="text-xs text-gray-500 mb-3">index.js</p>
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`console.log("JavaScript is running outside the browser!")`}</pre>
          <div className="border-t border-white/10 mt-3 pt-3">
            <p className="text-xs text-gray-500 mb-2">Terminal</p>
            <pre className="text-sm text-green-400 font-mono">{`node index.js
# Output: JavaScript is running outside the browser!`}</pre>
          </div>
        </div>
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">Note on version numbers</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The exact version shown by <code className="text-white bg-white/10 px-1 rounded text-xs">node -v</code> changes over time.
            Any output means Node.js is installed correctly. Always prefer the LTS (Long-Term Support) version
            for stability.
          </p>
        </div>
      </div>

      {/* 1.8 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.8 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "HTML gives structure, CSS gives style, JavaScript gives behaviour. Without JS, websites are static.",
            "JavaScript was created in 1995 specifically for the web browser — existing languages (C++, Java) were unsuitable.",
            "Four reasons JS was built: easy to learn, sandbox security, lightweight (no compiler needed), automatic garbage collection.",
            "The V8 engine is simply a C++ program compiled to machine code that takes JS as input and produces output. It lives inside Chrome.",
            "Different browsers use different JS engines (V8, SpiderMonkey, JavaScriptCore) — each compiled for its target OS.",
            "Node.js (2009) extracted V8 out of the browser, enabling JavaScript to run anywhere: servers, CLIs, desktop apps.",
            "Node.js is why JavaScript became the world's most popular language — one language for both frontend and backend.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#f7df1e]/20 text-[#f7df1e] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </JavaScriptLessonLayout>
  );
}
