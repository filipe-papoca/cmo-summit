declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.webp";
declare module "*.md?raw";

interface ImportMetaEnv {
  readonly VITE_MAILSEND_API_KEY?: string;
  readonly VITE_MAILSEND_LIST_ID?: string;
  readonly VITE_MAILSEND_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
