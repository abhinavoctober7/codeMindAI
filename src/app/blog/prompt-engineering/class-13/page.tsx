import PromptEngineeringLessonLayout from "@/components/PromptEngineeringLessonLayout";

export default function PromptEngineeringClass13() {
  return (
    <PromptEngineeringLessonLayout slug="class-13">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#ec4899] font-semibold uppercase tracking-widest">Class 13 — Beyond Text</p>
        <h1 className="text-3xl font-bold text-white">Multimodal Prompting &amp; Chain of Verification</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Modern LLMs don&apos;t just read text — they <span className="text-white font-medium">see</span> documents
          and images. This class covers why they&apos;re now so good at files, how to structure a multimodal
          prompt with Role + Context + Task, and the <span className="text-white font-medium">Chain of
          Verification (CoVe)</span> technique that makes the model fact-check itself.
        </p>
      </div>

      {/* 13.1 What is multimodal */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.1 Single vs. Multimodal Prompting</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Single Modality</p>
            <p className="text-xs text-gray-400 leading-relaxed">One type of input — typically text in, text out.</p>
          </div>
          <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-sm font-bold text-white">Multimodal</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              More than one input type at once — a document <span className="text-white font-medium">plus</span> a
              text prompt, or an image alongside text questions about it.
            </p>
          </div>
        </div>
      </div>

      {/* 13.2 Why modern LLMs excel */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.2 Why Modern LLMs Excel at Files</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Three advancements make today&apos;s models strong at documents and images.</p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-bold text-white">A. Computer Vision over OCR</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="text-red-400">Old way (OCR):</span> only extracted text — graphs and tables lost
            their layout, dumping raw jumbled characters and feeding &quot;garbage&quot; to the model.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="text-green-400">Modern way (CV):</span> treats the document as an image and reads
            every pixel, keeping <span className="text-white font-medium">layout awareness</span>. The model
            knows which text belongs to which table column or graph — far higher accuracy.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-bold text-white">B. Large Context Windows</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            The context window is the max input (in tokens) a model handles at once.
            <span className="text-red-400"> Old:</span> ~10k–20k tokens — too small for a 100-page report or
            long chats. <span className="text-green-400">Now:</span> up to ~1M tokens, roughly a
            1,300–1,500-page book.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-bold text-white">C. Cache Augmented Generation</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="text-red-400">Old:</span> every question was an &quot;open-book test&quot; — the
            model re-read the whole document each time, slow and costly.
            <span className="text-green-400"> Now:</span> it processes the document once, stores its
            understanding in <span className="text-white font-medium">cache</span>, and answers follow-ups
            straight from cache — much faster.
          </p>
        </div>
      </div>

      {/* 13.3 Structuring the prompt */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.3 Structuring a Multimodal Prompt</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          A simple &quot;upload + ask&quot; prompt scores maybe 70/100. Structuring it into three delimiter-tagged
          components pushes output to 90+. (Recall the XML-tag habit from Class 5.)
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#ec4899]">A. Role (Persona)</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Define exactly who the model is (Senior Financial Analyst, Senior Data Scientist). The persona sets
            vocabulary, depth, and example style. Use <span className="text-white font-medium">anti-persona</span> elements
            too — e.g. &quot;avoid jargon, use only real-world analogies.&quot;
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#ec4899]">B. Context</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "State what file/document you've uploaded.",
              "Target prompting — point it at a specific section (e.g. 'Section 3') as a reading lens.",
              "Context grounding — base output strictly on the document, NOT pre-trained knowledge; say 'Information not found' when the answer isn't there.",
            ].map((i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-[#ec4899] mt-0.5 shrink-0">•</span>{i}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#ec4899]">C. Task</p>
          <p className="text-xs text-gray-400 leading-relaxed">Clearly define the query or objective you want achieved.</p>
        </div>
      </div>

      {/* 13.4 CoVe */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.4 Chain of Verification (CoVe)</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          To cut hallucination further, embed CoVe into the Task section — a 4-step method where the model acts
          as its own critic.
        </p>
        {[
          { n: 1, k: "Initial Draft", v: "Write a quick, rough draft answering the query from the document." },
          { n: 2, k: "Generate Verification Questions", v: "Look at that draft and generate ~3 specific questions to fact-check its own claims." },
          { n: 3, k: "Answer the Verification Questions", v: "Search the document to answer them, extracting exact quotes as proof." },
          { n: 4, k: "Final Revised Output", v: "Rewrite the answer, replacing any hallucinated facts with the verified information from step 3." },
        ].map(({ n, k, v }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#ec4899]/20 text-[#ec4899] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{n}</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-white">{k}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v}</p>
            </div>
          </div>
        ))}
        <div className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-[#ec4899] uppercase tracking-widest mb-1">Real Example</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            On a 102-page Accenture annual report, a basic prompt just copy-pasted generic revenue tables. The
            structured Role + Grounding + CoVe template isolated the actual top-3 drivers — the
            <span className="text-white font-medium"> Americas region, Products industry group, and
            Consulting</span> — with exact quotes proving each.
          </p>
        </div>
      </div>

      {/* 13.5 The CoVe prompt */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.5 The CoVe Prompt</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`I am going to ask you a question about the uploaded
document. Do not just give me the final answer. Follow
these steps exactly:

1. Write a quick initial draft answering the question.
2. Look at your own draft and write 3 specific questions
   to fact-check the claims you just made.
3. Search the uploaded document to answer those 3 questions.
   You MUST extract exact quotes from the text to verify.
   If the document does not support a claim, explicitly
   state that the premise is FALSE.
4. Write a final, revised answer that fixes any mistakes
   found in step 3.`}</pre>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          The &quot;state the premise is FALSE&quot; clause is what catches loaded questions — if a question assumes
          something the document never says, CoVe surfaces it instead of inventing support.
        </p>
      </div>

      {/* 13.6 Full template */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">13.6 Full Multimodal Template (Role + Context + CoVe)</h2>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`<system_role>
You are a Senior Financial Analyst with deep expertise in
evaluating corporate earnings reports, assessing market
risks, and identifying revenue drivers.
</system_role>

<context_and_grounding>
I am providing a company's financial overview document
[Name]. Your analysis must be strictly grounded ONLY on
the provided document. Do not use external knowledge,
pre-trained data, or outside assumptions to fill gaps.
If the document lacks the information, state that clearly.
</context_and_grounding>

<task>
Analyze the document and identify the top three revenue
drivers and the top three risk factors mentioned.

Do not just give the final answer. Follow these steps:
1. Write a quick initial draft answering the question.
2. Write 3 specific questions to fact-check your draft.
3. Search the document to answer them with exact quotes.
   If unsupported, state the premise is FALSE.
4. Write a final, revised answer fixing any mistakes.
</task>`}</pre>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Multimodal prompting feeds more than one input type at once — e.g. a document or image plus a text prompt.",
            "Modern LLMs excel at files thanks to computer vision (layout-aware, not OCR), ~1M-token context windows, and cache-augmented generation.",
            "Structure prompts into Role, Context, and Task — use delimiter tags, anti-persona elements, target prompting, and context grounding.",
            "Context grounding forces answers from the document only and makes the model say 'Information not found' instead of hallucinating.",
            "Chain of Verification is a 4-step self-critique: draft, generate fact-check questions, answer them with exact quotes, then revise.",
            "CoVe's 'state the premise is FALSE' clause defends against loaded questions that assume facts the document never states.",
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
