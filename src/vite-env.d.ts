/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg';
interface ImportMeta {
  VITE_BASE_URL: string;
}
