export default function Services() {
  return (
    <section className="section navy svc-section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="What we do">Qué hacemos</div>
          <h2 data-en="Remodeling and maintenance, with a full-service engineering standard">Remodelación y mantenimiento, con estándar de ingeniería completo</h2>
          <p className="section-kicker lead" data-en="We keep offices, commercial premises and buildings working, remodeled and up to code — plus civil works and specialized telecom tower construction.">Mantenemos oficinas, locales comerciales y edificios funcionando, remodelados y en norma — además de obra civil y construcción especializada de torres de telecomunicaciones.</p>
        </div>
        <div className="svc-grid">
          <article className="svc-card is-featured reveal">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.8 2.8-2-2 2.8-2.8z"/></svg>
            </div>
            <h3 data-en="Office & commercial remodeling">Remodelación de oficinas y locales comerciales</h3>
            <p data-en="Full redesign of offices, corridors, meeting rooms and reception areas — partitions, finishes, flooring and lighting, coordinated to minimize disruption to your operation.">Rediseño integral de oficinas, pasillos, salas de reunión y áreas de recepción — divisiones, acabados, pisos e iluminación, coordinados para minimizar la interrupción de su operación.</p>
            <a href="#contact" className="svc-btn is-featured" data-en="Read More">
              <span data-en="Read More">Leer más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>

          <article className="svc-card reveal d1">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 2v20M12 6l5 4M12 6L7 10M9 14h6M6 18h12M10 22l2-4 2 4"/></svg>
            </div>
            <h3 data-en="Preventive & corrective maintenance">Mantenimiento preventivo y correctivo</h3>
            <p data-en="Scheduled maintenance contracts and on-call repairs for electrical, plumbing, structural and finish systems, keeping your facility compliant and ready for daily use.">Contratos de mantenimiento programado y reparaciones bajo demanda para sistemas eléctricos, hidrosanitarios, estructurales y de acabados, manteniendo su instalación en norma y lista para el uso diario.</p>
            <a href="#contact" className="svc-btn" data-en="Read More">
              <span data-en="Read More">Leer más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>

          <article className="svc-card reveal d2">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/></svg>
            </div>
            <h3 data-en="Civil works & construction">Obra civil y construcción</h3>
            <p data-en="Turnkey buildings and expansions — from foundations to finishes — for corporate, commercial and operational spaces, with the same engineering discipline throughout.">Edificaciones y ampliaciones llave en mano — de la cimentación a los acabados — para espacios corporativos, comerciales y operativos, con la misma disciplina de ingeniería en todo momento.</p>
            <a href="#contact" className="svc-btn" data-en="Read More">
              <span data-en="Read More">Leer más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>
        </div>

        <div className="svc-note reveal d3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width="20" height="20"><path d="M12 2v20M12 6l5 4M12 6L7 10M9 14h6M6 18h12M10 22l2-4 2 4"/></svg>
          <p data-en="We also design and build self-supporting telecom towers and monopoles for operators — a specialized line of business with its own dedicated clients.">También diseñamos y construimos torres autosoportadas y monopolos de telecomunicaciones para operadores — una línea de negocio especializada con clientes propios.</p>
          <a href="#contact" className="svc-note-link" data-en="Ask about towers">Consultar sobre torres →</a>
        </div>
      </div>
    </section>
  );
}