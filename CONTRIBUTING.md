# Contributing to Halo

Thanks for helping! Halo welcomes contributions from designers and developers.

## Ground rules

- **Tokens, not values.** Components use semantic tokens (`--halo-surface-primary`, `--halo-text-secondary`), never hex codes or primitive colors. This is what makes dark mode work.
- **Figma is the source of truth for tokens.** Don't hand-edit `packages/tokens/figma/*.json` or anything in `dist/`. Change the variable in Figma and re-export.
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

## Releasing to npm

Halo publishes two packages, `@halo-ds/tokens` and `@halo-ds/react`, under the `halo-ds` npm organisation.

One-time setup:

1. Create an npm account at [npmjs.com](https://www.npmjs.com) and turn on two-factor authentication.
2. Create a free organisation named `halo-ds` (Add Organization in your npm profile). The `@halo-ds/` names only work once you own it.
3. Sign in from the terminal: `npm login`.

Releases are batched. Pushing to `main` only updates Storybook; nothing goes to npm until someone runs `pnpm release`. Add each change to the **Unreleased** section of [CHANGELOG.md](CHANGELOG.md) as you make it, and release when there is a worthwhile batch, such as a few new components, a breaking change, or a fix people are waiting for.

Each release:

1. In `CHANGELOG.md`, rename **Unreleased** to the new version and add a fresh empty **Unreleased** section above it.
2. Set the same new version in `packages/tokens/package.json` and `packages/react/package.json` (for example `0.1.0`, then `0.1.1` for fixes and `0.2.0` for new components).
3. Check what would be published, without publishing:

   ```bash
   pnpm release:check
   ```

4. Publish both packages:

   ```bash
   pnpm release
   ```

   pnpm swaps the internal `workspace:*` link for the real version number, so `@halo-ds/react` depends on the matching `@halo-ds/tokens`.

5. Tag the release in git: `git tag v0.1.0 && git push --tags`.

