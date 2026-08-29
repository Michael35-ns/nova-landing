import ImageSlot from './ImageSlot';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-variant v-split">
        <div className="v-split-stage">
          <div className="v-split-tower" aria-hidden="true">
            <img src="/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg" alt="" />
          </div>
          <div className="v-split-ghost" aria-hidden="true" data-en="BUILD">CONSTRUIMOS</div>
          <div className="wrap v-split-wrap">
            <div className="v-split-text">
              <div className="eyebrow hero-eyebrow" data-en="Construction, remodeling, maintenance & engineering">Construcción, remodelación, mantenimiento e ingeniería</div>
              <h1 className="hero-title">
                <span data-en="Construction, engineering and">Construcción, ingeniería y</span>
                <span className="accent" data-en="telecommunications in Costa Rica">telecomunicaciones en Costa Rica</span>
              </h1>
              <p className="hero-sub" data-en="We develop integrated solutions in construction, civil works, telecom infrastructure, remodeling and maintenance, managing every project from planning through execution and handover.">Desarrollamos soluciones integrales de construcción, obra civil, infraestructura de telecomunicaciones, remodelaciones y mantenimiento, gestionando cada proyecto desde la planificación hasta su ejecución y entrega.</p>
              <p className="hero-tagline" data-en="Engineering that plans. Construction that transforms. Projects that generate value.">Ingeniería que planifica. Construcción que transforma. Proyectos que generan valor.</p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-gold btn-lg" data-en="Contact us">Contáctenos</a>
                <a href="#projects" className="btn btn-primary btn-lg" data-en="View projects">Ver proyectos</a>
              </div>
              <ul className="v-split-stats">
                <li>
                  <b><span data-count="15">15</span></b>
                  <span data-en="Years of experience">Años de experiencia</span>
                </li>
                <li>
                  <b><span data-count="700">700</span><span className="suf">+</span></b>
                  <span data-en="Projects">Proyectos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-variant v-fullbleed">
        <div className="hero-stage">
          <div className="hero-bg">
            <ImageSlot src="/assets/proyectos/tribunales/despues-01-estaciones.jpeg" alt="" className="hero-full-img" />
          </div>
          <div className="hero-scrim blueprint" aria-hidden="true"></div>
          <div className="wrap">
            <div className="eyebrow is-light hero-eyebrow" data-en="Construction, remodeling, maintenance & engineering">Construcción, remodelación, mantenimiento e ingeniería</div>
            <h1 className="hero-title">
              <span data-en="Construction, engineering and">Construcción, ingeniería y</span>
              <span className="accent" data-en="telecommunications in Costa Rica">telecomunicaciones en Costa Rica</span>
            </h1>
            <p className="hero-sub" data-en="We develop integrated solutions in construction, civil works, telecom infrastructure, remodeling and maintenance, managing every project from planning through execution and handover. At NOVOSTI we integrate engineering, technical expertise and execution capacity to develop safe, efficient, sustainable projects aligned with our clients' goals.">Desarrollamos soluciones integrales de construcción, obra civil, infraestructura de telecomunicaciones, remodelaciones y mantenimiento, gestionando cada proyecto desde la planificación hasta su ejecución y entrega. En NOVOSTI integramos ingeniería, experiencia técnica y capacidad de ejecución para desarrollar proyectos seguros, eficientes, sostenibles y orientados al cumplimiento de los objetivos de nuestros clientes.</p>
            <p className="hero-tagline" data-en="Engineering that plans. Construction that transforms. Projects that generate value.">Ingeniería que planifica. Construcción que transforma. Proyectos que generan valor.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg" data-en="Contact us">Contáctenos</a>
              <a href="#projects" className="btn btn-ghost on-dark btn-lg" data-en="View projects">Ver proyectos</a>
            </div>
            <div className="trust-bar" aria-label="Certificaciones">
              <span className="trust-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/></svg>Registrados en <b>CFIA</b></span>
              <span className="trust-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 6L9 17l-5-5"/></svg><b>Sello PYME</b></span>
            </div>
            <div className="hero-statstrip">
              <div className="s"><b data-count="15" data-suffix="">15</b><span data-en="Years of experience">Años de experiencia</span></div>
              <div className="s"><b data-count="700" data-suffix="+">700+</b><span data-en="Projects">Proyectos</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-variant v-centered paper blueprint-ink">
        <div className="wrap">
          <div className="hero-top">
            <div className="eyebrow hero-eyebrow" data-en="Construction, remodeling, maintenance & engineering">Construcción, remodelación, mantenimiento e ingeniería</div>
            <h1 className="hero-title">
              <span data-en="Construction, engineering and">Construcción, ingeniería,</span>
              <span className="accent" data-en="telecommunications in Costa Rica">telecomunicaciones en Costa Rica</span>
            </h1>
            <p className="hero-sub" data-en="We develop integrated solutions in construction, civil works, telecom infrastructure, remodeling and maintenance, managing every project from planning through execution and handover.">Desarrollamos soluciones integrales de construcción, obra civil, infraestructura de telecomunicaciones, remodelaciones y mantenimiento, gestionando cada proyecto desde la planificación hasta su ejecución y entrega.</p>
            <p className="hero-tagline" data-en="Engineering that plans. Construction that transforms. Projects that generate value.">Ingeniería que planifica. Construcción que transforma. Proyectos que generan valor.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg" data-en="Contact us">Contáctenos</a>
              <a href="#projects" className="btn btn-ghost btn-lg" data-en="View projects">Ver proyectos</a>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="hero-pano">
            <ImageSlot src="/assets/proyectos/tribunales/despues-05-vidrio-esmerilado.jpeg" alt="" className="hero-pano-img" />
            <div className="hero-pano-cards">
              <div className="c"><b data-count="15" data-suffix="">15</b><span data-en="Years">Años</span></div>
              <div className="c"><b data-count="700" data-suffix="+">700+</b><span data-en="Projects">Proyectos</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}