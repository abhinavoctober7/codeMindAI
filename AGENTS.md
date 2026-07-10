# Stack note

This project is a **plain React single-page app built with Vite** — not Next.js.
There is no server, no SSR, no `app/` server components, and no Next.js APIs.

- Routing is client-side via **React Router v7** (`react-router-dom`).
- Pages still live under `src/app/**/page.tsx`; `src/App.tsx` auto-maps them to routes
  with `import.meta.glob`, so the file layout mirrors old Next.js conventions, but the
  runtime is a standard Vite SPA.
- Do **not** use `next/link`, `next/image`, `next/font`, `next/navigation`, `redirect`,
  `metadata` exports, or `"use client"` — none of them exist here. Use React Router's
  `Link` / `useLocation` / `<Navigate>`, plain `<img>`, and fonts loaded in `index.html`.
