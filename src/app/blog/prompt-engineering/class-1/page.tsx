import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass1() {
  return (
    <PromptEngineeringLessonLayout slug="class-1">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 1 — Foundations</p>
        <h1 className="text-3xl font-bold text-white">How LLMs Work & What Prompt Engineering Is</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Before you can write a great prompt, you need to understand what is on the other side of it.
          This class builds the foundation — what large language models are, the Transformer
          architecture and self-attention that make them work, how they generate text one token at a
          time, and finally what a prompt actually does under the hood.
        </p>
      </div>

      {/* 1.1 Introduction to LLMs */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.1 Introduction to Large Language Models</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          LLMs are complex neural networks trained on a massive amount of data — essentially
          encompassing much of the internet. During training, the model absorbs vast amounts of
          information, which is stored internally as numbers. These numbers are the network&apos;s
          <span className="text-white font-medium"> weights and biases</span> — they are where all the
          &quot;learning&quot; actually lives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { title: "Trained on the Internet", desc: "Massive datasets — books, articles, code, and conversations from across the web." },
            { title: "Learning Stored as Numbers", desc: "Everything the model knows is encoded in its weights and biases — billions of numbers." },
            { title: "Adaptive Writing", desc: "It can match any tone you specify — formal, funny, technical — based on your instructions." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-[#ec4899]">{title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The result is a system that is exceptionally good at understanding and generating text — and
          one that can adjust its output to fit whatever style or audience you ask for.
        </p>
      </div>

      {/* 1.2 The Transformer Architecture */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.2 The Transformer Architecture</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The main reason modern LLMs are so capable is a special kind of neural network called the
          <span className="text-white font-medium"> Transformer</span>. Older architectures processed
          sentences word-by-word and often lost long-term context or hidden meaning. Transformers
          process an entire sentence at once.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Older Models (RNN / LSTM)</p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {["Read one word at a time, in order", "Struggle to hold long-term context", "Often miss hidden or implied meaning"].map((item) => (
                <li key={item} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#ec4899]/5 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest">Transformers</p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {["Process the whole sentence at once", "See how every word relates to every other", "Capture true context and meaning"].map((item) => (
                <li key={item} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-[#ec4899] mt-0.5 shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          By looking at everything simultaneously, the Transformer understands how the words in a
          sentence relate to one another — capturing context and meaning much like a human reader would.
        </p>
      </div>

      {/* 1.3 The Self-Attention Mechanism */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.3 The Self-Attention Mechanism</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Transformer is powered by an innovation called the
          <span className="text-white font-medium"> self-attention mechanism</span>. When a sentence is
          passed to the LLM, every single word evaluates its relationship with every other word in
          that sentence, calculating a &quot;compatibility score&quot; based on patterns the model learned
          during training.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex flex-col gap-2">
          <p className="text-xs text-gray-500 mb-1">Example — resolving what &quot;it&quot; refers to</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`"The animal didn't cross the road as it was tired."

         ┌──────────────── high score
         ▼
   The animal didn't cross the road as [it] was tired
                              ▲
                              └──────── low score`}</pre>
          <p className="text-xs text-gray-400 leading-relaxed mt-1">
            Self-attention assigns a high compatibility score between <span className="text-white">it</span> and
            <span className="text-white"> animal</span> (not <span className="text-white">road</span>), because
            the training data shows that animals get tired — roads don&apos;t.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-white">Dynamic Meaning Capturing</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              It deduces a word&apos;s meaning from context — knowing &quot;bank&quot; means a financial
              institution in <span className="italic">&quot;I went to the bank as I needed money&quot;</span>, not a riverbank.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-white">Global Coherence</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Generation is based on the entire input paragraph rather than just a few preceding
              words — producing far more coherent responses.
            </p>
          </div>
        </div>
      </div>

      {/* 1.4 Next Token Predictors */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.4 LLMs as Next-Token Predictors</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">token</span> is a small piece of text the AI reads
          and writes. Tokens are often thought of as words, but they also include punctuation marks,
          spaces, and special characters (like hashtags or asterisks).
        </p>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">The Core Idea</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Unlike humans, who use reasoning and understanding of the world to finish a sentence, LLMs
            rely strictly on probability. They are fundamentally <span className="text-white font-medium">next-token
            predictors</span> — probabilistic engines.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">The generation process, step by step:</p>
        <div className="flex flex-col gap-2">
          {[
            "Reads the input and uses self-attention to identify patterns and relationships.",
            "Searches its learned patterns for similar contexts.",
            "Generates a list of possible next tokens, each with a probability score.",
            "Predicts and outputs the token with the highest probability.",
            "Adds that token to the prompt and feeds the whole sequence back in to predict the next one — repeating until the response is complete.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex flex-col gap-2">
          <p className="text-xs text-gray-500 mb-1">Example — predicting the next token</p>
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Prompt:  "The PhD student wrote his ___"

  thesis  ████████████████████  70%   ← highest, gets picked
  paper   ██████████████        50%
  essay   ████████              28%
  ...`}</pre>
          <p className="text-xs text-gray-400 leading-relaxed mt-1">
            The model picks <span className="text-white">thesis</span> because, given this context, it
            carries the highest probability.
          </p>
        </div>
      </div>

      {/* 1.5 Prompts and Prompt Engineering */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.5 Prompts and Prompt Engineering</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A <span className="text-white font-medium">prompt</span> is the input — text, a question, a
          command, or code — you give an AI model to tell it what to do. Without a prompt, an LLM is
          just a powerful brain with no direction.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Controlling the Output</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            By writing a prompt, you are manipulating and controlling the probabilities of which tokens
            the LLM predicts next. You specify the task, format, role, and constraints. Compare
            <span className="text-white"> &quot;Explain this as if I&apos;m a fifth grader&quot;</span> with
            <span className="text-white"> &quot;Explain this to a PhD scholar&quot;</span> — same topic,
            completely different output.
          </p>
        </div>
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest">Definition</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="text-white font-medium">Prompt Engineering</span> is the art and science of
            crafting specific, effective instructions to guide generative AI models toward the desired
            output.
          </p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          It is a crucial <span className="text-white font-medium">bridge</span>. LLMs inherently
          understand only numbers, while humans communicate in natural language. Prompt engineering
          translates human intentions, feelings, and expectations into directions the AI can
          successfully execute.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10 flex flex-col gap-2">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest">The SQL Analogy</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Just as you must write precise, effective <span className="text-white">SQL queries</span> to
            fetch the right data from a traditional database, you must write precise, effective
            <span className="text-white"> prompts</span> to extract the right information and generation
            from an LLM.
          </p>
        </div>
      </div>

      {/* 1.6 Key Takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">1.6 Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "LLMs are neural networks trained on huge datasets; their knowledge is stored as weights and biases (numbers).",
            "The Transformer architecture processes an entire sentence at once, capturing context older word-by-word models missed.",
            "Self-attention lets every word score its relationship to every other word, resolving meaning from context.",
            "LLMs are next-token predictors — probabilistic engines that generate text one highest-probability token at a time.",
            "A token is a small piece of text: words, punctuation, spaces, and special characters.",
            "A prompt controls which tokens the model is likely to predict next — it sets the task, format, role, and constraints.",
            "Prompt engineering is the bridge that translates human intent into instructions an LLM can execute — just like SQL for databases.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </PromptEngineeringLessonLayout>
  );
}
