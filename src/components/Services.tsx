export default function Services() {
  return (
    <section className="section navy svc-section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="What we do">Qué hacemos</div>
          <h2 data-en="Construction, maintenance and telecommunications services">Servicios de construcción, mantenimiento y telecomunicaciones</h2>
          <p className="section-kicker lead" data-en="We manage every project comprehensively, from civil works to telecom infrastructure, remodeling and maintenance.">Gestionamos cada proyecto de manera integral, desde la obra civil hasta la infraestructura de telecomunicaciones, la remodelación y el mantenimiento.</p>
        </div>
        <div className="svc-grid">
          <article className="svc-card is-featured reveal">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/></svg>
            </div>
            <h3 data-en="Construction & remodeling">Construcción y remodelación</h3>
            <p data-en="We develop construction, remodeling and expansion projects for commercial and residential spaces, comprehensively managing every stage, from civil works and installations to final finishes.">Desarrollamos proyectos de construcción, remodelación y ampliación para espacios comerciales y residenciales, gestionando integralmente cada etapa, desde la obra civil y las instalaciones hasta los acabados finales.</p>
            <p data-en="We build and transform offices, commercial premises, homes and other spaces, integrating engineering, design, functionality and quality into solutions tailored to each client's needs and expectations.">Construimos y transformamos oficinas, locales comerciales, viviendas y otros espacios, integrando ingeniería, diseño, funcionalidad y calidad para crear soluciones adaptadas a las necesidades y expectativas de cada cliente.</p>
            <a href="#contact" className="svc-btn is-featured" data-en="Get a quote for construction & remodeling">
              <span data-en="Get a quote for construction & remodeling">Cotizar construcción y remodelación</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>

          <article className="svc-card reveal d1">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 2v20M12 6l5 4M12 6L7 10M9 14h6M6 18h12M10 22l2-4 2 4"/></svg>
            </div>
            <h3 data-en="Infrastructure maintenance">Mantenimiento de infraestructura</h3>
            <p data-en="We provide comprehensive infrastructure maintenance services for commercial, corporate and residential facilities, focused on prevention, upkeep and timely response to each space's needs.">Brindamos servicios integrales de mantenimiento de infraestructura para instalaciones comerciales, empresariales y residenciales, enfocados en la prevención, conservación y atención oportuna de las necesidades de cada espacio.</p>
            <p data-en="We service buildings, civil works, electrical and electromechanical installations, HVAC systems and finishes, with solutions tailored to each client that help preserve the functionality, safety and service life of their infrastructure.">Atendemos edificaciones, obra civil, instalaciones eléctricas y electromecánicas, sistemas de climatización y acabados, con soluciones adaptadas a cada cliente que contribuyen a preservar la funcionalidad, seguridad y vida útil de su infraestructura.</p>
            <a href="#contact" className="svc-btn" data-en="Get a maintenance quote">
              <span data-en="Get a maintenance quote">Cotizar mantenimiento</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>

          <article className="svc-card reveal d2">
            <div className="svc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M4 21v-6a4 4 0 014-4h8a4 4 0 014 4v6M8 11V7a4 4 0 118 0v4"/></svg>
            </div>
            <h3 data-en="Telecommunications infrastructure">Infraestructura de telecomunicaciones</h3>
            <p data-en="We develop telecom infrastructure projects and services, integrating engineering, construction, installation and maintenance for network deployment and operation.">Desarrollamos proyectos y servicios de infraestructura de telecomunicaciones, integrando ingeniería, construcción, instalación y mantenimiento para el despliegue y operación de redes.</p>
            <p data-en="We support every project with safe, efficient and reliable solutions, tailored to our clients' technical and operational requirements.">Acompañamos cada proyecto con soluciones seguras, eficientes y confiables, adaptadas a los requerimientos técnicos y operativos de nuestros clientes.</p>
            <ul className="svc-sublist">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Line-of-sight studies, site search & leasing for towers">Líneas de vista, búsqueda y contratación de espacios para torres</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Construction of cell sites">Construcción de estaciones de telefonía celular</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="RF and microwave (MW) antenna installation">Instalación de antenas RF y microondas (MW)</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Tower mapping">Tower Mapping</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Telecom infrastructure maintenance">Mantenimiento de infraestructura de telecomunicaciones</span></li>
            </ul>
            <a href="#contact" className="svc-btn" data-en="Get a telecom quote">
              <span data-en="Get a telecom quote">Cotizar telecomunicaciones</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}