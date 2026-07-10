export const ragLessons = [
  {
    slug: "class-1",
    title: "Class 1: Why Is RAG Important — The Four Problems in LLMs",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: What Is RAG — Retrieval, Augmented, Generation",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: How RAG Works — The End-to-End Data Flow",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: What Are Document Loaders & How They Work?",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: Text Loader, CSV Loader and PDF Loader",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: JSON Loader, Web Loader, Recursive Web Loader",
    label: "Class 6",
  },
  {
    slug: "class-7",
    title: "Class 7: What are Text Splitters, Text & Length Based Splitters",
    label: "Class 7",
  },
  {
    slug: "class-8",
    title: "Class 8: Advanced Text Splitter Techniques",
    label: "Class 8",
  },
  {
    slug: "class-9",
    title: "Class 9: Vector Embeddings, Embedding Space and Distance Metrics",
    label: "Class 9",
  },
  {
    slug: "class-10",
    title: "Class 10: Embedding Vectors Dimensionality & Proprietary vs Open Source Models",
    label: "Class 10",
  },
];

export function getRagLessonHref(slug: string) {
  return `/blog/rag/${slug}`;
}
