/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
      jsxImportSource: "@emotion/react"
    }),
    tsconfigPaths(),
  ],
  test: {
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom'
  },
} as UserConfig);
