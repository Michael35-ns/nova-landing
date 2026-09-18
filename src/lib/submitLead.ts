/**
 * Envío del formulario de contacto/cotización.
 *
 * Resolución del destino (en orden):
 *   1. VITE_CONTACT_ENDPOINT  -> POST JSON a un endpoint propio (serverless/API).
 *      Se considera éxito cualquier respuesta 2xx.
 *   2. VITE_WEB3FORMS_KEY      -> POST a https://api.web3forms.com/submit
 *      (servicio sin backend; el éxito viene en el campo `success` del JSON).
 *   3. Por defecto            -> POST JSON a /contacto.php (script incluido en
 *      public/, pensado para hosting cPanel/Apache con PHP). Éxito = respuesta 2xx.
 *
 * Para usar otro destino, define la variable correspondiente en un archivo .env
 * (ver `.env.example`). `api/contact.ts` es una alternativa para despliegues en
 * Vercel/Netlify.
 */

export type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  details?: string;
};

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const DEFAULT_ENDPOINT = '/contacto.php';
const SUBJECT = 'Nueva solicitud de cotización — NOVOSTI';

export async function submitLead(payload: LeadPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!endpoint && web3formsKey) {
    return submitViaWeb3Forms(web3formsKey, payload);
  }

  const target = endpoint || DEFAULT_ENDPOINT;
  const res = await fetch(target, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data: { message?: string } = await res.json().catch(() => ({}));
    throw new Error(data.message || `El servidor respondió con estado ${res.status}.`);
  }
}

async function submitViaWeb3Forms(key: string, payload: LeadPayload): Promise<void> {
  const res = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: key,
      subject: SUBJECT,
      from_name: payload.name,
      name: payload.name,
      email: payload.email,
      company: payload.company || '—',
      phone: payload.phone || '—',
      service: payload.service || '—',
      details: payload.details || '—',
    }),
  });

  const data: { success?: boolean; message?: string } = await res
    .json()
    .catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.message || `No se pudo enviar la solicitud (estado ${res.status}).`);
  }
}
