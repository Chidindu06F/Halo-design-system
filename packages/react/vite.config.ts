import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ include: ['src'], exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'] })],
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
