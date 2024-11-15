/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import 'axios';

declare module '*.svg';

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_KAKAO_API_KEY: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;

}
interface ImportMeta {
  env: ImportMetaEnv;
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}
