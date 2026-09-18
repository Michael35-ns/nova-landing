/**
 * Endpoint propio para el formulario de contacto / cotización.
 *
 * Pensado para Vercel (carpeta /api). Funciona en cualquier runtime con
 * `fetch` global (Node 18+). No añade dependencias al proyecto.
 *
 * Flujo: valida el payload -> envía un correo con Resend -> responde JSON.
 *
 * Variables de entorno (definir en el panel del hosting, NO con prefijo VITE_):
 *   RESEND_API_KEY   API key de https://resend.com
 *   LEAD_FROM_EMAIL  remitente verificado en Resend (ej. web@novosti.com)
 *   LEAD_TO_EMAIL    destinatario interno de los leads (ej. proyectos@novosti.com)
 *
 * En el frontend basta con: VITE_CONTACT_ENDPOINT=/api/contact
 */

type LeadBody = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  details?: string;
  botcheck?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const esc = (v: unknown): string =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Firma laxa para no depender de @vercel/node.
export default async function handler(req: any, res: any): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ success: false, message: 'Método no permitido.' });
    return;
  }

  const body: LeadBody =
    typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  // Honeypot: si viene relleno es un bot. Respondemos OK sin hacer nada.
  if (body.botcheck && body.botcheck.trim()) {
    res.status(200).json({ success: true });
    return;
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();

  if (!name || !email || !EMAIL_RE.test(email)) {
    res.status(422).json({ success: false, message: 'Nombre y correo válidos son obligatorios.' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;

  if (!apiKey || !from || !to) {
    res.status(500).json({ success: false, message: 'El servidor de correo no está configurado.' });
    return;
  }

  const rows: Array<[string, string]> = [
    ['Nombre', name],
    ['Correo', email],
    ['Empresa / Entidad', body.company || '—'],
    ['Teléfono', body.phone || '—'],
    ['Servicio de interés', body.service || '—'],
    ['Detalles', body.details || '—'],
  ];

  const html = `
    <h2>Nueva solicitud de cotización — NOVOSTI</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd"><b>${esc(k)}</b></td><td style="border:1px solid #ddd">${esc(v)}</td></tr>`,
        )
        .join('')}
    </table>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Cotización web — ${name}`,
        html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('Resend error', r.status, detail);
      res.status(502).json({ success: false, message: 'No se pudo enviar el correo.' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error inesperado al enviar la solicitud.' });
  }
}

function safeParse(s: string): LeadBody {
  try {
    return JSON.parse(s) as LeadBody;
  } catch {
    return {};
  }
}
