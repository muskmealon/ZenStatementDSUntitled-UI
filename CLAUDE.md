# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Storybook dev server on :6006
npm run build        # Library build (ESM + CJS via Vite)
npm run build:storybook  # Static Storybook build
npm test             # Vitest — runs stories as browser tests via Playwright/Chromium
npm run typecheck    # tsc --noEmit
```

Run a single story test by passing a filter:

```bash
npx vitest --reporter=verbose Button
```

## Architecture

This is a **React component library** published as a dual-format package (`dist/zen-ds.es.js` + `dist/zen-ds.cjs.js`). The entry point is `src/index.ts`. React and lucide-react are externalized from the bundle — consumers must provide them.

### Token layer

`src/tokens/tokens.css` is the single source of truth for design tokens and is **auto-generated from Figma** — do not edit it manually. It defines:

- **Base palette**: `--color-{palette}-{scale}` (e.g. `--color-teal-500`)
- **Semantic tokens**: `--color-{surface|text|border}-{role}` (e.g. `--color-surface-brand-primary`)
- **Spacing**: `--space-{n}`, `--radius-{n}`, `--size-{n}`
- **Typography**: `--font-family-primary` (IBM Plex Sans), `--font-weight-*`

Dark mode is applied via `[data-theme="dark"]` attribute. All component styles must use semantic tokens, never raw palette values or hardcoded hex colours.

### Component conventions

Each component lives in `src/components/{ComponentName}/` with four files:
- `ComponentName.tsx` — implementation and exported TypeScript types
- `ComponentName.module.css` — scoped styles (camelCase convention enabled)
- `ComponentName.stories.tsx` — Storybook stories (also serves as the test suite via `@storybook/addon-vitest`)
- `index.ts` — re-exports everything from the `.tsx` file

Every public export (component + all types) must be added to `src/index.ts`.

### Two implementation patterns

**Simple/display components** (Button, Badge, Text, Alert, Avatar, Loader, etc.) are plain React with `forwardRef`, extending the relevant HTML element's attribute interface. Class composition is done by filtering and joining an array of CSS Module class names.

**Interactive/complex components** (Tabs, Dialog, Select, Accordion, Checkbox, Radio, Toggle, Tooltip, ActionMenu) wrap primitives from **`react-aria-components`** to get accessibility, keyboard navigation, and ARIA semantics for free. The wrapper component adapts the RAC API to a simpler prop surface (e.g. `value`/`onChange` instead of `selectedKey`/`onSelectionChange`) and applies CSS Module classes via the render-prop or `className` patterns RAC provides.

### Path alias

`@` maps to `src/` in both Vite and Storybook. Use `@/tokens/tokens.css` for token imports.

### Storybook

Stories are co-located with components. The vitest plugin (`@storybook/addon-vitest`) converts each story into a browser test running in headless Chromium. Write stories first — they are the tests.
