
export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media reveal">
            <div id="about-img-slot"></div>
            <div className="badge">
              <b data-count="14" data-suffix="">14</b>
              <span data-en="Years building">Años construyendo</span>
            </div>
          </div>
          <div className="about-body reveal d1">
            <div className="eyebrow" data-en="About Novosti">Sobre Novosti</div>
            <h2 data-en="An engineering partner that operators and governments trust">Un socio de ingeniería en quien operadores y gobiernos confían</h2>
            <p data-en="Novosti Construction Company is a specialist contractor for telecommunications infrastructure. We design, build and maintain self-supporting towers, and we deliver the civil works and remodeling that keep critical sites operational.">Novosti Construction Company es un contratista especializado en infraestructura de telecomunicaciones. Diseñamos, construimos y mantenemos torres autosoportadas, y entregamos la obra civil y las remodelaciones que mantienen operativos los sitios críticos.</p>
            <p data-en="Every project is executed under certified safety standards, with structural calculations, transparent reporting and the documentation required for public tenders.">Cada proyecto se ejecuta bajo estándares de seguridad certificados, con cálculo estructural, reportería transparente y la documentación que exigen las licitaciones públicas.</p>
            <ul className="about-checks">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Certified structural engineering">Ingeniería estructural certificada</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Tender-ready documentation">Documentación lista para licitar</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="In-house crews & equipment">Cuadrillas y equipo propios</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="HSE & quality management">Gestión HSE y de calidad</span></li>
            </ul>
            <div className="hero-cta" style={{ marginTop: 30 }}>
              <a href="#contact" className="btn btn-primary" data-en="Talk to our team">Hablar con el equipo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
