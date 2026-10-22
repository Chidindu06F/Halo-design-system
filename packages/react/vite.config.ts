import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// Put the token variables at the top of styles.css, so React users need one install and one CSS import.
// The tokens package is built first (it is a dependency), and still ships on its own for non-React use.
function withTokens(): Plugin {
  return {
    name: 'halo-with-tokens',
    // After the files are written, since Vite adds the stylesheet late in the build
    writeBundle(options) {
      const file = `${options.dir}/index.css`;
      const tokens = readFileSync(fileURLToPath(new URL('../tokens/dist/tokens.css', import.meta.url)), 'utf8');
      writeFileSync(file, `${tokens}\n${readFileSync(file, 'utf8')}`);
    },
  };
}

export default defineConfig({
  plugins: [react(), withTokens(), dts({ include: ['src'], exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'] })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /^@halo-ds\//],
      // Halo components use state and effects, so Next.js and other server-component setups need this marker
      output: { banner: "'use client';" },
    },
    cssCodeSplit: false,
  },
  css: {
    modules: {
      generateScopedName: 'halo-[local]-[hash:base64:5]',
    },
  },
});
