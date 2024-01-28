/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly PRODUCT_ID_1: string;
  readonly PRODUCT_ID_2: string;
  readonly PRODUCT_ID_3: string;
  readonly PADDLE_API_KEY: string;
  readonly ENVIRONMENT: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
