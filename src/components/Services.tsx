
export default function Services() {
  return (
    <section className="section navy svc-section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="What we do">Qué hacemos</div>
          <h2 data-en="Three lines of work, one engineering standard">Tres líneas de trabajo, un mismo estándar de ingeniería</h2>
          <p className="section-kicker lead" data-en="From the structures that carry the network to the buildings around them, we cover the full lifecycle of a site.">Desde las estructuras que sostienen la red hasta las edificaciones a su alrededor, cubrimos el ciclo de vida completo de un sitio.</p>
        </div>
        <div className="svc-grid">
          <article className="svc-card reveal">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 2v20M12 6l5 4M12 6L7 10M9 14h6M6 18h12M10 22l2-4 2 4"/></svg>
            </div>
            <h3 data-en="Self-supporting towers">Torres autosoportadas</h3>
            <p data-en="Design, fabrication and erection of lattice and monopole towers, with foundations and structural calculation certified to standard.">Diseño, fabricación y montaje de torres de celosía y monopolos, con cimentación y cálculo estructural certificado a norma.</p>
            <a href="#contact" className="svc-btn" data-en="Read More">
              <span data-en="Read More">Leer más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>

          <article className="svc-card is-featured reveal d1">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/></svg>
            </div>
            <h3 data-en="House construction">Construcción de casas</h3>
            <p data-en="Turnkey residential and operational buildings — from foundations to finishes, with the same engineering discipline as our towers.">Edificaciones residenciales y operativas llave en mano — de la cimentación a los acabados, con la misma disciplina de ingeniería que nuestras torres.</p>
            <a href="#contact" className="svc-btn is-featured" data-en="Read More">
              <span data-en="Read More">Leer más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>

          <article className="svc-card reveal d2">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.8 2.8-2-2 2.8-2.8z"/></svg>
            </div>
            <h3 data-en="Facility remodeling">Remodelación de instalaciones</h3>
            <p data-en="Upgrades, reinforcement and remodeling of existing sites and facilities to keep them compliant, safe and ready for new equipment.">Adecuación, reforzamiento y remodelación de sitios e instalaciones existentes para mantenerlos en norma, seguros y listos para nuevo equipo.</p>
            <a href="#contact" className="svc-btn" data-en="Read More">
              <span data-en="Read More">Leer más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
