
export default function Coverage() {
  return (
    <section className="section cov-light" id="coverage">
      <div className="cov-map-bg" id="covMapBg" aria-hidden="true">
        <img src="/assets/cr-map-relief.png" alt="" className="cr-map-photo" id="crMapPhoto" />
      </div>
      <div className="wrap cov-wrap">
        <div className="cov-body reveal">
          <div className="eyebrow" data-en="Where we work">Dónde trabajamos</div>
          <h2 data-en="Active projects across all 7 provinces of Costa Rica">Proyectos activos en las 7 provincias de Costa Rica</h2>
          <p className="section-kicker lead" data-en="More than 500 towers built and updated nationwide back our reach — mobilized crews and equipment ready to deploy for your next remodel, maintenance contract or civil works project.">Más de 500 torres construidas y actualizadas a nivel nacional respaldan nuestro alcance — cuadrillas y equipo movilizados, listos para desplegarse en su próxima remodelación, contrato de mantenimiento u obra civil.</p>
          <ul className="cov-list">
            <li><div><b>San José</b><div className="ct" data-en="Remodeling · Maintenance">Remodelación · Mantenimiento</div></div><div className="cn">72</div></li>
            <li><div><b>Alajuela</b><div className="ct" data-en="Remodeling · Construction">Remodelación · Construcción</div></div><div className="cn">58</div></li>
            <li><div><b>Guanacaste</b><div className="ct" data-en="Towers">Torres</div></div><div className="cn">41</div></li>
            <li><div><b>Cartago</b><div className="ct" data-en="Remodeling">Remodelación</div></div><div className="cn">33</div></li>
            <li><div><b>Puntarenas</b><div className="ct" data-en="Towers · Civil works">Torres · Obra civil</div></div><div className="cn">28</div></li>
            <li><div><b>Heredia</b><div className="ct" data-en="Maintenance">Mantenimiento</div></div><div className="cn">22</div></li>
            <li><div><b>Limón</b><div className="ct" data-en="Civil works">Obra civil</div></div><div className="cn">19</div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}