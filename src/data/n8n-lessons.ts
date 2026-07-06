export const n8nLessons = [
  {
    slug: "class-1",
    title: "Class 1: Business Automation & AI Automation",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: Workflows & Meet n8n",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: Installing n8n — Cloud, Hostinger & Docker",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: Your First Workflow — Triggers, Nodes & Credentials",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: AI-Powered Workflows — LLM Chains, Merge & Aggregate",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: Building an AI Agent — The Personal Assistant Project",
    label: "Class 6",
  },
];

export function getN8nLessonHref(slug: string) {
  return `/blog/n8n/${slug}`;
}
