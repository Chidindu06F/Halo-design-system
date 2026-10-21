import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages the site lives at /Halo-design-system/. Set SITE_BASE=/ for a custom domain.
export default defineConfig({
  base: process.env.SITE_BASE ?? (process.env.NODE_ENV === 'production' ? '/Halo-design-system/' : '/'),
  plugins: [react()],
});
