import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();

    const nextErrors: Record<string, boolean> = {};
    if (!name) nextErrors.name = true;
    if (!email) nextErrors.email = true;
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) nextErrors.email = true;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="section contact-shell" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy reveal contact-info">
          <div className="eyebrow" data-en="Start a project">Inicia un proyecto</div>
          <h2 data-en="Request a proposal for your next site">Solicita una propuesta para tu próximo sitio</h2>
          <p className="section-kicker lead" data-en="Tell us about your tower, building or remodeling. We will respond in one business day with the next steps and the documentation you need.">Cuéntanos sobre tu torre, edificación o remodelación. Te respondemos en un día hábil con los siguientes pasos y la documentación que necesitas.</p>

          <ul className="contact-meta">
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" /></svg>
              </span>
              <div>
                <b data-en="Call us">Llámanos</b>
                <span>+1 (000) 000-0000</span>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4h16v16H4z" /><path d="M4 6l8 6 8-6" /></svg>
              </span>
              <div>
                <b data-en="Email">Correo</b>
                <span>proyectos@novosti.com</span>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              </span>
              <div>
                <b data-en="Main office">Oficina principal</b>
                <span>San José, Costa Rica</span>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              <div>
                <b data-en="Hours">Horario</b>
                <span>Lun–Vie · 8:00–18:00</span>
              </div>
            </li>
          </ul>
        </div>

        {!submitted ? (
          <form className="contact-form reveal d1 form-card" onSubmit={handleSubmit} noValidate>
            <h3 data-en="Request a quote">Solicitar cotización</h3>
            <p className="fc-sub" data-en="Fields marked with * are required.">Los campos con * son obligatorios.</p>

            <div className="field-row">
              <div className="field">
                <label>
                  <span>Nombre completo *</span>
                  <input type="text" name="name" style={{ borderColor: errors.name ? '#c0392b' : undefined }} />
                </label>
              </div>
              <div className="field">
                <label>
                  <span>Empresa / Entidad</span>
                  <input type="text" name="company" />
                </label>
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label>
                  <span>Correo *</span>
                  <input
                    type="email"
                    name="email"
                    style={{ borderColor: errors.email ? '#c0392b' : undefined }}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  <span>Teléfono</span>
                  <input type="tel" name="phone" />
                </label>
              </div>
            </div>

            <div className="field">
              <label>
                <span>Servicio de interés</span>
                <select name="service" defaultValue="Torres autosoportadas">
                  <option>Torres autosoportadas</option>
                  <option>Construcción de casas</option>
                  <option>Remodelación de instalaciones</option>
                  <option>Licitación pública / RFP</option>
                  <option>Otro</option>
                </select>
              </label>
            </div>

            <div className="field">
              <label>
                <span>Detalles del proyecto</span>
                <textarea name="details" rows={5} placeholder="Ubicación, tipo de estructura, plazos…" />
              </label>
            </div>

            <button type="submit" className="btn btn-gold btn-lg" data-en="Send request">Enviar solicitud</button>

            <div className="form-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" /><path d="M12 8h.01M11 12h2v4h-2z" /></svg>
              <span data-en="Your information stays confidential.">Tu información se mantiene confidencial.</span>
            </div>
          </form>
        ) : (
          <div className="form-card form-success show" aria-live="polite">
            <div className="check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12l4 4L19 2" /></svg>
            </div>
            <h3 data-en="Request sent">Solicitud enviada</h3>
            <p data-en="We will contact you shortly.">Te contactaremos pronto.</p>
          </div>
        )}
      </div>
    </section>
  );
}
