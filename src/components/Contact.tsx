import { useState, type FormEvent } from 'react';
import { site, whatsappUrl } from '../siteConfig';
import { submitLead } from '../lib/submitLead';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot anti-spam: si viene relleno, simulamos éxito y no enviamos nada.
    if (String(formData.get('botcheck') ?? '').trim()) {
      setStatus('success');
      return;
    }

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();

    const nextErrors: Record<string, boolean> = {};
    if (!name) nextErrors.name = true;
    if (!email || !EMAIL_RE.test(email)) nextErrors.email = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = {
      name,
      email,
      company: String(formData.get('company') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      service: String(formData.get('service') ?? '').trim(),
      details: String(formData.get('details') ?? '').trim(),
    };

    setStatus('submitting');
    setErrorMsg('');

    try {
      await submitLead(payload);

      // Evento de conversión para GA4 / Google Ads / Meta (vía GTM dataLayer).
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_name: 'contacto_novosti',
        service: payload.service,
      });

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.',
      );
    }
  };

  return (
    <section className="section contact-shell" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy reveal contact-info">
          <div className="eyebrow" data-en="Start a project">Inicia un proyecto</div>
          <h2 data-en="Request a quote for your construction or remodeling project">Solicita una cotización para tu proyecto de construcción o remodelación</h2>
          <p className="section-kicker lead" data-en="Tell us about your project — construction, remodeling, maintenance or telecom infrastructure. We reply within one business day with the next steps and the documentation you need.">Cuéntanos sobre tu proyecto de construcción, remodelación, mantenimiento o infraestructura de telecomunicaciones. Te respondemos en un día hábil con los siguientes pasos y la documentación que necesitas.</p>

          <ul className="contact-meta">
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" /></svg>
              </span>
              <div>
                <b data-en="Call us">Llámanos</b>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 12a8 8 0 10-3.1 6.3L21 21l-1.7-4A7.96 7.96 0 0020 12z" /></svg>
              </span>
              <div>
                <b>WhatsApp</b>
                <a href={whatsappUrl('Hola, quiero solicitar una cotización.')} target="_blank" rel="noopener">{site.phone.display}</a>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4h16v16H4z" /><path d="M4 6l8 6 8-6" /></svg>
              </span>
              <div>
                <b data-en="Email">Correo</b>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              </span>
              <div>
                <b data-en="Main office">Oficina principal</b>
                <span>{site.address.locality}, {site.address.countryName}</span>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              <div>
                <b data-en="Hours">Horario</b>
                <span>{site.hoursShort}</span>
              </div>
            </li>
          </ul>
        </div>

        {status !== 'success' ? (
          <form className="contact-form reveal d1 form-card" onSubmit={handleSubmit} noValidate>
            <h3 data-en="Request a quote">Solicitar cotización</h3>
            <p className="fc-sub" data-en="Fields marked with * are required.">Los campos con * son obligatorios.</p>

            <p className="hp-field" aria-hidden="true">
              <label>
                No completar este campo
                <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-name">
                  <span>Nombre completo *</span>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    aria-invalid={errors.name || undefined}
                    style={{ borderColor: errors.name ? '#c0392b' : undefined }}
                  />
                </label>
              </div>
              <div className="field">
                <label htmlFor="cf-company">
                  <span>Empresa / Entidad</span>
                  <input id="cf-company" type="text" name="company" autoComplete="organization" />
                </label>
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-email">
                  <span>Correo *</span>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    aria-invalid={errors.email || undefined}
                    style={{ borderColor: errors.email ? '#c0392b' : undefined }}
                  />
                </label>
              </div>
              <div className="field">
                <label htmlFor="cf-phone">
                  <span>Teléfono</span>
                  <input id="cf-phone" type="tel" name="phone" autoComplete="tel" />
                </label>
              </div>
            </div>

            <div className="field">
              <label htmlFor="cf-service">
                <span>Servicio de interés</span>
                <select id="cf-service" name="service" defaultValue="Construcción y remodelación">
                  <option>Construcción y remodelación</option>
                  <option>Mantenimiento de infraestructura</option>
                  <option>Infraestructura de telecomunicaciones</option>
                  <option>Licitación pública / RFP</option>
                  <option>Otro</option>
                </select>
              </label>
            </div>

            <div className="field">
              <label htmlFor="cf-details">
                <span>Detalles del proyecto</span>
                <textarea id="cf-details" name="details" rows={5} placeholder="Ubicación, tipo de obra, metros cuadrados, plazos…" />
              </label>
            </div>

            {status === 'error' && (
              <p className="form-error" role="alert">{errorMsg}</p>
            )}

            <button type="submit" className="btn btn-gold btn-lg" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Enviando…' : 'Quiero mi cotización'}
            </button>

            <p className="form-trust">Respuesta en 1 día hábil · Registrados en el CFIA · Sello PYME</p>

            <div className="form-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" /><path d="M12 8h.01M11 12h2v4h-2z" /></svg>
              <span>Al enviar aceptas nuestra <a href="/privacidad/">política de privacidad</a>. Tus datos se usan solo para responder tu solicitud.</span>
            </div>
          </form>
        ) : (
          <div className="form-card form-success show" aria-live="polite">
            <div className="check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12l4 4L19 2" /></svg>
            </div>
            <h3 data-en="Request sent">Solicitud enviada</h3>
            <p>Te contactaremos en un día hábil. Si es urgente, escríbenos por WhatsApp al {site.phone.display}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
