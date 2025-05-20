import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(__dirname, 'src/setupTests.ts'),
  },
  },
);

