
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-variant v-split">
        <div className="v-split-stage">
          <div className="v-split-tower" aria-hidden="true">
            <img src="/assets/hero-tower.png" alt="" />
          </div>
          <div className="v-split-ghost" aria-hidden="true" data-en="CONNECT">CONECTA</div>
          <div className="wrap v-split-wrap">
            <div className="v-split-text">
              <div className="eyebrow hero-eyebrow" data-en="Infrastructure that connects">Infraestructura que conecta</div>
              <h1 className="hero-title">
                <span data-en="We connect">Conectamos</span>
                <span className="accent" data-en="tomorrow">el mañana</span>
              </h1>
              <p className="hero-sub" data-en="We build telecom infrastructure to the highest standards of quality, safety and efficiency — self-supporting towers, civil works and site maintenance.">Construimos infraestructura de telecomunicaciones con los más altos estándares de calidad, seguridad y eficiencia — torres autosoportadas, obra civil y mantenimiento de sitios.</p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-gold btn-lg" data-en="View projects">Ver Proyectos</a>
                <a href="#contact" className="btn btn-primary btn-lg" data-en="Contact us">Contáctanos</a>
              </div>
              <ul className="v-split-stats">
                <li>
                  <b><span data-count="240">240</span><span className="suf">+</span></b>
                  <span data-en="Towers erected">Torres erigidas</span>
                </li>
                <li>
                  <b><span data-count="14">14</span></b>
                  <span data-en="Years building">Años construyendo</span>
                </li>
                <li>
                  <b><span data-count="7">7</span></b>
                  <span data-en="Provinces covered">Provincias cubiertas</span>
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
          <div className="hero-bg"><div id="hero-full-slot"></div></div>
          <div className="hero-scrim blueprint" aria-hidden="true"></div>
          <div className="wrap">
            <div className="eyebrow is-light hero-eyebrow" data-en="Telecom Tower Construction">Construcción de Torres de Telecomunicaciones</div>
            <h1 className="hero-title">
              <span data-en="Built to reach">Construidas para</span>
              <span className="accent" data-en="higher">llegar más alto</span>
            </h1>
            <p className="hero-sub" data-en="From foundation to antenna — Novosti designs and builds the towers that carry the signal of an entire region.">De la cimentación a la antena — Novosti diseña y construye las torres que llevan la señal de toda una región.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg" data-en="Request a proposal">Solicitar propuesta</a>
              <a href="#projects" className="btn btn-ghost on-dark btn-lg" data-en="View projects">Ver proyectos</a>
            </div>
            <div className="hero-statstrip">
              <div className="s"><b data-count="240" data-suffix="+">240+</b><span data-en="Towers erected">Torres erigidas</span></div>
              <div className="s"><b data-count="14" data-suffix="">14</b><span data-en="Years building">Años construyendo</span></div>
              <div className="s"><b data-count="7" data-suffix="">7</b><span data-en="Provinces covered">Provincias cubiertas</span></div>
              <div className="s"><b data-count="0" data-suffix="">0</b><span data-en="Lost-time incidents 2025">Incidentes con baja 2025</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-variant v-centered paper blueprint-ink">
        <div className="wrap">
          <div className="hero-top">
            <div className="eyebrow hero-eyebrow" data-en="Telecom Tower Construction">Construcción de Torres de Telecomunicaciones</div>
            <h1 className="hero-title">
              <span data-en="The signal starts">La señal empieza</span>
              <span className="accent" data-en="with the structure">con la estructura</span>
            </h1>
            <p className="hero-sub" data-en="Self-supporting towers, civil works and maintenance for operators and public infrastructure across the region.">Torres autosoportadas, obra civil y mantenimiento para operadores e infraestructura pública en toda la región.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-gold btn-lg" data-en="Request a proposal">Solicitar propuesta</a>
              <a href="#projects" className="btn btn-ghost btn-lg" data-en="View projects">Ver proyectos</a>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="hero-pano">
            <div id="hero-pano-slot"></div>
            <div className="hero-pano-cards">
              <div className="c"><b data-count="240" data-suffix="+">240+</b><span data-en="Towers">Torres</span></div>
              <div className="c"><b data-count="14" data-suffix="">14</b><span data-en="Years">Años</span></div>
              <div className="c"><b data-count="7" data-suffix="">7</b><span data-en="Provinces">Provincias</span></div>
              <div className="c"><b data-count="99" data-suffix="%">99%</b><span data-en="On time">A tiempo</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
