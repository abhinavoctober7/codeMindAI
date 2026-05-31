export const javascriptLessons = [
  {
    slug: "class-1",
    title: "Class 1: Why JavaScript Exists",
    label: "Class 1",
  },
];

export function getJsLessonHref(slug: string) {
  return `/blog/javascript/${slug}`;
}
