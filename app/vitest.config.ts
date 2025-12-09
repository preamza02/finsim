import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    browser: {
      enabled: false,
      name: 'chromium',
      provider: 'playwright',
    },
  },
  resolve: {
    alias: {
      $lib: '/src/lib',
    },
  },
});
