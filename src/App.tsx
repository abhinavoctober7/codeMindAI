import { useEffect, type ComponentType } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BlogLayout from "./app/blog/layout";

type PageModule = { default: ComponentType };

const pages = import.meta.glob<PageModule>("./app/**/page.tsx", { eager: true });

function toRoutePath(file: string): string {
  const path = file.replace("./app", "").replace(/\/page\.tsx$/, "");
  return path === "" ? "/" : path;
}

const routes = Object.entries(pages).map(([file, mod]) => ({
  path: toRoutePath(file),
  Component: mod.default,
}));

const rootRoutes = routes.filter((r) => !r.path.startsWith("/blog"));
const blogRoutes = routes.filter((r) => r.path.startsWith("/blog"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector("main")?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {rootRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route element={<BlogLayout />}>
          {blogRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </>
  );
}
