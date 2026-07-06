export const langchainLessons = [
  {
    slug: "class-1",
    title: "Class 1: What Is LangChain & Why It Exists",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: The Six Core Components of LangChain",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: The Models Component — Language & Embedding Models in Code",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: The Prompts Component — Templates, Messages & Chat History",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: Structured Output — with_structured_output, TypedDict, Pydantic & JSON Schema",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: Output Parsers — Str, JSON, Structured & Pydantic",
    label: "Class 6",
  },
  {
    slug: "class-7",
    title: "Class 7: Chains — Sequential, Parallel & Conditional Pipelines",
    label: "Class 7",
  },
  {
    slug: "class-8",
    title: "Class 8: Runnables — The Standardized Unit That Powers Every Chain",
    label: "Class 8",
  },
  {
    slug: "class-9",
    title: "Class 9: Runnable Primitives & LCEL — Sequence, Parallel, Passthrough, Lambda & Branch",
    label: "Class 9",
  },
  {
    slug: "class-10",
    title: "Class 10: Document Loaders — Loading Data for RAG (Text, PDF, Directory, Web & CSV)",
    label: "Class 10",
  },
  {
    slug: "class-11",
    title: "Class 11: Text Splitters — Length, Text-Structure, Document-Structure & Semantic Chunking",
    label: "Class 11",
  },
  {
    slug: "class-12",
    title: "Class 12: Vector Stores — Storing, Indexing & Searching Embeddings (with Chroma)",
    label: "Class 12",
  },
  {
    slug: "class-13",
    title: "Class 13: Retrievers — Wikipedia, Vector Store, MMR, Multi-Query & Contextual Compression",
    label: "Class 13",
  },
  {
    slug: "class-14",
    title: "Class 14: RAG — Why It Exists, Fine-Tuning vs In-Context Learning & the Four Steps",
    label: "Class 14",
  },
  {
    slug: "class-15",
    title: "Class 15: Building a RAG App — YouTube Chat, End to End with LCEL Chains",
    label: "Class 15",
  },
  {
    slug: "class-16",
    title: "Class 16: Tools — Built-in Tools, Custom Tools & Toolkits (Giving LLMs Hands & Legs)",
    label: "Class 16",
  },
  {
    slug: "class-17",
    title: "Class 17: Tool Calling — Binding, Tool Calls, Execution & a Currency Converter",
    label: "Class 17",
  },
  {
    slug: "class-18",
    title: "Class 18: AI Agents — The ReAct Pattern, Agent & AgentExecutor",
    label: "Class 18",
  },
];

export function getLangChainLessonHref(slug: string) {
  return `/blog/langchain/${slug}`;
}
