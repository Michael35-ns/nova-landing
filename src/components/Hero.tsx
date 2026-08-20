import ImageSlot from './ImageSlot';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-variant v-split">
        <div className="v-split-stage">
          <div className="v-split-tower" aria-hidden="true">
            <img src="/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg" alt="" />
          </div>
          <div className="v-split-ghost" aria-hidden="true" data-en="RENOVATE">RENOVAMOS</div>
          <div className="wrap v-split-wrap">
            <div className="v-split-text">
              <div className="eyebrow hero-eyebrow" data-en="Remodeling, maintenance & civil works">Remodelación, mantenimiento y obra civil</div>
              <h1 className="hero-title">
                <span data-en="We renovate">Renovamos</span>
                <span className="accent" data-en="spaces that work">espacios que trabajan</span>
              </h1>
              <p className="hero-sub" data-en="We remodel and maintain offices, commercial premises and corporate buildings to the highest standards of quality, safety and efficiency — and we also build telecom towers for our specialized clients.">Remodelamos y damos mantenimiento a oficinas, locales comerciales y edificios corporativos con los más altos estándares de calidad, seguridad y eficiencia — y también construimos torres de telecomunicaciones para nuestros clientes especializados.</p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-gold btn-lg" data-en="View projects">Ver Proyectos</a>
                <a href="#contact" className="btn btn-primary btn-lg" data-en="Contact us">Contáctanos</a>
              </div>
              <ul className="v-split-stats">
                <li>
                  <b><span data-count="15">15</span></b>
                  <span data-en="Years of experience">Años de experiencia</span>
                </li>
                <li>
                  <b><span data-count="7">7</span></b>
                  <span data-en="Years remodeling">Años remodelando</span>
                </li>
                <li>
                  <b><span data-count="500">500</span><span className="suf">+</span></b>
                  <span data-en="Towers built & updated">Torres construidas y actualizadas</span>
                </li>
                <li>
                  <b><span data-count="0">0</span></b>
                  <span data-en="Lost-time incidents 2025">Incidentes con baja 2025</span>
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
            <div className="eyebrow is-light hero-eyebrow" data-en="Remodeling, maintenance & civil works">Remodelación, mantenimiento y obra civil</div>
            <h1 className="hero-title">
              <span data-en="Spaces renewed">Espacios renovados</span>
              <span className="accent" data-en="with accessible quality">con calidad accesible</span>
            </h1>
            <p className="hero-sub" data-en="From office remodels and preventive maintenance to full civil works — Novosti keeps your facilities working, safe and up to date, with accessible pricing and no shortcuts on quality. We also design, build and update self-supporting telecom towers for operators.">Desde remodelación de oficinas y mantenimiento preventivo hasta obra civil completa — Novosti mantiene sus instalaciones funcionando, seguras y al día, con precios accesibles y sin atajos en calidad. También diseñamos, construimos y actualizamos torres de telecomunicaciones autosoportadas para operadores.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg" data-en="Request a proposal">Solicitar propuesta</a>
              <a href="#projects" className="btn btn-ghost on-dark btn-lg" data-en="View projects">Ver proyectos</a>
            </div>
            <div className="trust-bar" aria-label="Certificaciones">
              <span className="trust-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/></svg>Registrados en <b>CFIA</b></span>
              <span className="trust-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 6L9 17l-5-5"/></svg><b>Sello PYME</b></span>
              <span className="trust-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v20M12 6l5 4M12 6L7 10M9 14h6M6 18h12"/></svg><b>500+</b>&nbsp;torres construidas y actualizadas</span>
            </div>
            <div className="hero-statstrip">
              <div className="s"><b data-count="15" data-suffix="">15</b><span data-en="Years of experience">Años de experiencia</span></div>
              <div className="s"><b data-count="7" data-suffix="">7</b><span data-en="Years remodeling">Años remodelando</span></div>
              <div className="s"><b data-count="500" data-suffix="+">500+</b><span data-en="Towers built & updated">Torres construidas y actualizadas</span></div>
              <div className="s"><b data-count="0" data-suffix="">0</b><span data-en="Lost-time incidents 2025">Incidentes con baja 2025</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-variant v-centered paper blueprint-ink">
        <div className="wrap">
          <div className="hero-top">
            <div className="eyebrow hero-eyebrow" data-en="Remodeling, maintenance & civil works">Remodelación, mantenimiento y obra civil</div>
            <h1 className="hero-title">
              <span data-en="Every space">Todo espacio</span>
              <span className="accent" data-en="deserves to keep working">merece seguir funcionando</span>
            </h1>
            <p className="hero-sub" data-en="Remodeling, preventive maintenance and civil works for offices, commercial premises and corporate buildings — plus telecom tower construction for operators.">Remodelación, mantenimiento preventivo y obra civil para oficinas, locales comerciales y edificios corporativos — además de construcción de torres de telecomunicaciones para operadores.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg" data-en="Request a proposal">Solicitar propuesta</a>
              <a href="#projects" className="btn btn-ghost btn-lg" data-en="View projects">Ver proyectos</a>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="hero-pano">
            <ImageSlot src="/assets/proyectos/tribunales/despues-05-vidrio-esmerilado.jpeg" alt="" className="hero-pano-img" />
            <div className="hero-pano-cards">
              <div className="c"><b data-count="15" data-suffix="">15</b><span data-en="Years">Años</span></div>
              <div className="c"><b data-count="7" data-suffix="">7</b><span data-en="Years remodeling">Remodelando</span></div>
              <div className="c"><b data-count="500" data-suffix="+">500+</b><span data-en="Towers">Torres</span></div>
              <div className="c"><b data-count="99" data-suffix="%">99%</b><span data-en="On time">A tiempo</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}