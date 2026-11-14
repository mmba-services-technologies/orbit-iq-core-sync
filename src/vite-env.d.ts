/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PHP_API_URL?: string;
  readonly VITE_NODE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
