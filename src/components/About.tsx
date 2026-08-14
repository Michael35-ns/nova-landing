import ImageSlot from './ImageSlot';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media reveal">
            <ImageSlot src="/assets/proyectos/oficina-08-pasillo-terminado.jpeg" alt="" className="about-img" />
            <div className="badge">
              <b data-count="14" data-suffix="">14</b>
              <span data-en="Years building">Años construyendo</span>
            </div>
          </div>
          <div className="about-body reveal d1">
            <div className="eyebrow" data-en="About Novosti">Sobre Novosti</div>
            <h2 data-en="A remodeling and maintenance partner that companies trust">Un socio de remodelación y mantenimiento en quien las empresas confían</h2>
            <p data-en="Novosti Construction Company is a specialist contractor for facility remodeling, preventive maintenance and civil works. We renovate offices, commercial premises and corporate buildings — and, through a dedicated specialized line, we also design, build and maintain self-supporting telecom towers.">Novosti Construction Company es un contratista especializado en remodelación de instalaciones, mantenimiento preventivo y obra civil. Renovamos oficinas, locales comerciales y edificios corporativos — y, a través de una línea especializada aparte, también diseñamos, construimos y mantenemos torres autosoportadas de telecomunicaciones.</p>
            <p data-en="Every project is executed under certified safety standards, with clear budgets, transparent reporting and coordinated schedules that minimize disruption to your operation.">Cada proyecto se ejecuta bajo estándares de seguridad certificados, con presupuestos claros, reportería transparente y cronogramas coordinados que minimizan la interrupción de su operación.</p>
            <ul className="about-checks">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Remodels coordinated around your schedule">Remodelaciones coordinadas según su horario</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Preventive maintenance contracts">Contratos de mantenimiento preventivo</span></li>
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