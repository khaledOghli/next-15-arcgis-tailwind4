# 🚀 ArcGIS + Next.js 15 + React 19 + Tailwind CSS 4 + ShadCN Starter Kit

A modern, scalable, and opinionated starter kit for building web mapping apps using:

- **Next.js 15 App Router**
- **React 19**
- **Tailwind CSS 4**
- **ArcGIS Maps SDK for JavaScript (via Web Components)**
- **Calcite Design System**
- **Strict Code Quality (ESLint, Prettier, Stylelint, Commitlint, Husky, Lint-Staged)**

---

## 📦 Features

- ✅ Latest **Next.js 15 App Router** setup
- ✅ Fully styled using **Tailwind CSS 4**
- ✅ Integrated **ArcGIS Web Components**
- ✅ Built-in **Calcite Components** for ArcGIS UI consistency
- ✅ **Dark Mode** toggle using `next-themes`
- ✅ Preconfigured **ESLint**, **Prettier**, **Stylelint**, **Commitlint**, **Husky**,
  **lint-staged**
- ✅ Clean folder structure for scalability
- ✅ Git hooks and commit conventions (Conventional Commits)
- ✅ Ready for production with `pnpm`, `Turbo`, and `TypeScript`

---

## 🛠️ Getting Started

```bash
pnpm install
pnpm dev
```

---

## 🗺️ ArcGIS Integration

This starter uses the [@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components)
Web Components with automatic support for:

- TypeScript
- Custom themes
- ArcGIS and Calcite CDN stylesheets

### ✨ Bonus: TypeScript support

Add this to `src/env.d.ts`:

```ts
/// <reference types="@arcgis/map-components/types/react" />
```

---

## 📁 Folder Structure

```
.
├── public/
├── src/
│   ├── app/                 # Next.js 15 App Router
│   ├── components/          # Shared components
│   ├── features/            # Feature-based logic
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global and scoped styles
│   ├── services/            # API clients or SDKs
│   └── providers/           # Context and providers
├── config/                  # ESLint, Prettier, Commitlint configs
├── .husky/                  # Git hooks
└── README.md
```

---

## ✅ Linting & Formatting

Run all linters:

```bash
pnpm lint
pnpm lint:styles
pnpm lint:build
```

Fix all automatically:

```bash
pnpm lint:fix
pnpm format
```

---

## 💅 Style Guide

- Tailwind 4
- Custom `:root` tokens (LCH/OKLCH)
- Scoped themes (`@theme inline`)
- Uses `@apply` for shared utility styling
- Stylelint with Tailwind plugin

---

## 🎯 Commit Message Convention

Uses [Conventional Commits](https://www.conventionalcommits.org):

```bash
pnpm commit
```

Example:

```
feat(map): add basemap toggle
```

---

## 🔒 Git Hooks

Preconfigured with Husky + lint-staged + commitlint.

On each commit:

- Formats code
- Runs ESLint, Prettier, Stylelint
- Validates commit messages

---

## 💡 Credits

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ArcGIS Maps SDK](https://developers.arcgis.com/javascript/latest/)
- [Calcite Components](https://developers.arcgis.com/calcite-design-system/)
- [ShadCN UI](https://ui.shadcn.com/)

---

## 🤝 Contributing

PRs are welcome! Please follow commit conventions and test before submitting.

---

## 📄 License

MIT License. Feel free to fork, contribute, and improve!

---

## Author

👤 **Khaled Oghli** Frontend Engineer | Dubai Municipality

- LinkedIn: [Khaled Oghli](https://www.linkedin.com/in/khaledoghli/)
