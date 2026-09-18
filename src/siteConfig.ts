/**
 * Fuente única de la información de contacto (NAP: Name, Address, Phone).
 *
 * Todos los componentes (Topbar, Nav, Contact, Footer) y los datos
 * estructurados de index.html deben usar EXACTAMENTE estos valores.
 * Si cambia un teléfono, correo o dirección, se actualiza aquí y en el
 * bloque JSON-LD de index.html; en ningún otro lugar.
 *
 * NOTA: revisar y reemplazar los valores marcados como provisionales
 * (número de WhatsApp y perfiles sociales) por los reales.
 */
export const site = {
  name: 'NOVOSTI',
  legalName: 'NOVOSTI Construction Company',
  /** Dominio de producción confirmado. Debe coincidir con robots.txt, sitemap.xml e index.html. */
  domain: 'https://www.novosti.com',

  phone: {
    /** Formato para mostrar en pantalla. */
    display: '+506 6064 1906',
    /** Formato E.164 para enlaces tel: */
    tel: '+50660641906',
  },

  /** Provisional: confirmar el número habilitado para WhatsApp (con código país, sin +). */
  whatsapp: '50660641906',

  email: 'proyectos@novosti.com',

  address: {
    locality: 'San José',
    region: 'San José',
    country: 'CR',
    countryName: 'Costa Rica',
  },

  hoursShort: 'Lun–Vie · 8:00–18:00',
  hoursLong: 'Lun–Vie 8:00–18:00 · Sáb 9:00–13:00',

  /** Provisional: reemplazar '#' por las URLs reales de cada red. */
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
} as const;

export const whatsappUrl = (message: string): string =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
