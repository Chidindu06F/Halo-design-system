# Halo Design System

An open-source design system for designers and developers — a Figma library and a React component library built from the same design tokens, with light and dark mode.

**📖 Docs & component playground: https://chidindu06f.github.io/Halo-design-system/**

> **Status:** early development. Foundations (color, typography, spacing, radius) are in place; components are being added.

## Packages

| Package | Description |
| --- | --- |
| [`@halo-ds/tokens`](packages/tokens) | Design tokens as CSS variables (light + dark), JSON and JS — generated from Figma |
| [`@halo-ds/react`](packages/react) | React components |
| [`docs`](apps/docs) | Storybook — live documentation and component playground |

## Using Halo

```bash
npm install @halo-ds/react @halo-ds/tokens
```

```tsx
import '@halo-ds/tokens/css';
```

Switch themes with the `data-theme` attribute on `<html>`: `light` (default), `dark`, or `system` (follows the OS).

```css
.card {
  background: var(--halo-surface-primary);
  color: var(--halo-text-primary);
  padding: var(--halo-spacing-md);
  border-radius: var(--halo-radius-sm);
}
```

## Working on Halo

Requirements: [Node.js](https://nodejs.org) 20+ and [pnpm](https://pnpm.io) (`npm install -g pnpm`). The project pins its own Node 24 runtime, which pnpm downloads automatically.

```bash
pnpm install     # install dependencies
pnpm dev         # build tokens and start Storybook at http://localhost:6006
pnpm build       # build every package
pnpm typecheck   # type-check every package
```

### Project structure

```
packages/
  tokens/     figma/ ← Figma variable exports (source of truth)
              scripts/build.mjs → dist/tokens.css, tokens.json, index.js
  react/      src/ ← components
apps/
  docs/       Storybook (foundations pages + component stories)
docs/         design notes (e.g. dark-mode mapping)
```

### Design → code workflow

1. Design the component in Figma using Halo variables (never raw hex values).
2. Build it in `packages/react/src/components/<Name>/` using the matching CSS variables.
3. Add a `<Name>.stories.tsx` so it appears in Storybook.
4. Review it in Storybook in both light and dark mode.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

[MIT](LICENSE)
