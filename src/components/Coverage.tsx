export default function Coverage() {
  return (
    <section className="section cov-light" id="coverage">
      <div className="cov-map-bg" id="covMapBg" aria-hidden="true">
        <img src="/assets/cr-map-relief.png" alt="" className="cr-map-photo" id="crMapPhoto" />
      </div>
      <div className="wrap cov-wrap">
        <div className="cov-body reveal">
          <div className="eyebrow" data-en="National coverage">Cobertura nacional</div>
          <h2 data-en="Present across all 7 provinces of Costa Rica">Presentes en las 7 provincias de Costa Rica</h2>
          <p className="section-kicker lead" data-en="Our track record and experience on projects across different regions of Costa Rica back our ability to mobilize and provide nationwide service.">Nuestra trayectoria y experiencia en proyectos ejecutados en diferentes regiones de Costa Rica respaldan nuestra capacidad de movilización y atención a nivel nacional.</p>
          <p className="section-kicker lead" data-en="We have technical staff, crews and equipment ready to take on construction, remodeling, maintenance and telecom infrastructure projects across the entire country.">Contamos con personal técnico, cuadrillas y equipos preparados para atender proyectos de construcción, remodelación, mantenimiento e infraestructura de telecomunicaciones en todo el territorio nacional.</p>
        </div>
      </div>
    </section>
  );
}