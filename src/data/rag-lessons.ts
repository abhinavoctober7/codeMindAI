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
];

export function getRagLessonHref(slug: string) {
  return `/blog/rag/${slug}`;
}
