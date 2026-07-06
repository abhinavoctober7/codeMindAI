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
];

export function getRagLessonHref(slug: string) {
  return `/blog/rag/${slug}`;
}
