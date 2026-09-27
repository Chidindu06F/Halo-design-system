# Contributing to Halo

Thanks for helping! Halo welcomes contributions from designers and developers.

## Ground rules

- **Tokens, not values.** Components use semantic tokens (`--halo-surface-primary`, `--halo-text-secondary`), never hex codes or primitive colors. This is what makes dark mode work.
- **Figma is the source of truth for tokens.** Don't hand-edit `packages/tokens/figma/*.json` or anything in `dist/` — change the variable in Figma and re-export.
- **Accessible by default.** Text meets WCAG AA contrast (4.5:1), interactive elements are keyboard-usable with a visible focus ring (`--halo-border-focus`), and Storybook's Accessibility panel shows no violations.
- **Both themes.** Check every change in light and dark mode using the Storybook toolbar.

## For designers

- Use the Halo Figma library's variables for every fill, stroke, radius and spacing value.
- Name component variants and properties the way they'll appear in code (e.g. `variant=primary`, `size=md`, `state=disabled`).
- To propose a new token or component, open an issue with a Figma link and a short description of the use case.

## For developers

```bash
pnpm install
pnpm dev        # Storybook at http://localhost:6006
```

Adding a component:

```
packages/react/src/components/Button/
  Button.tsx
  Button.module.css
  Button.stories.tsx
  index.ts
```

Then export it from `packages/react/src/index.ts`.

## Updating tokens from Figma

See [packages/tokens/README.md](packages/tokens/README.md).
