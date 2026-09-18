/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Endpoint propio (serverless/API) al que se envía el formulario de contacto. Opcional. */
  readonly VITE_CONTACT_ENDPOINT?: string;
  /** Access key de Web3Forms. Se usa si no hay VITE_CONTACT_ENDPOINT. */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
