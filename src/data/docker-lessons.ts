export const dockerLessons = [
  {
    slug: "class-1",
    title: "Class 1: Introduction to Docker — Engine, Images, Containers & Registries",
    label: "Class 1",
  },
  {
    slug: "class-2",
    title: "Class 2: Docker in Practice — Setup, Building Images, Port Mapping & Docker Hub",
    label: "Class 2",
  },
  {
    slug: "class-3",
    title: "Class 3: Environment Variables in Docker — ENV, ARG & --env-file",
    label: "Class 3",
  },
  {
    slug: "class-4",
    title: "Class 4: Caching & Multi-Stage Builds — Smaller, Faster Images",
    label: "Class 4",
  },
  {
    slug: "class-5",
    title: "Class 5: Volumes in Docker — Concepts & Why Data Needs Persisting",
    label: "Class 5",
  },
  {
    slug: "class-6",
    title: "Class 6: Volumes in Docker — Implementation (Bind Mounts & Named Volumes)",
    label: "Class 6",
  },
  {
    slug: "class-7",
    title: "Class 7: Docker Compose — Running Multi-Container Apps",
    label: "Class 7",
  },
  {
    slug: "class-8",
    title: "Class 8: Deploying to AWS — Part 1 (ECR & Pushing Your Image)",
    label: "Class 8",
  },
  {
    slug: "class-9",
    title: "Class 9: Deploying to AWS — Part 2 (Running on EC2)",
    label: "Class 9",
  },
  {
    slug: "class-10",
    title: "Class 10: Debugging in Docker — Logs, Exec, Inspect & Common Fixes",
    label: "Class 10",
  },
];

export function getDockerLessonHref(slug: string) {
  return `/blog/docker/${slug}`;
}
