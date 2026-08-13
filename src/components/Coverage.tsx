
export default function Coverage() {
  return (
    <section className="section cov-light" id="coverage">
      <div className="cov-map-bg" id="covMapBg" aria-hidden="true">
        <img src="/assets/cr-map-relief.png" alt="" className="cr-map-photo" id="crMapPhoto" />
      </div>
      <div className="wrap cov-wrap">
        <div className="cov-body reveal">
          <div className="eyebrow" data-en="Where we build">Dónde construimos</div>
          <h2 data-en="Active sites across all 7 provinces of Costa Rica">Sitios activos en las 7 provincias de Costa Rica</h2>
          <p className="section-kicker lead" data-en="Mobilized crews and equipment ready to deploy wherever the network needs to grow.">Cuadrillas y equipo movilizados, listos para desplegarse donde la red necesita crecer.</p>
          <ul className="cov-list">
            <li><div><b>San José</b><div className="ct" data-en="Towers · Civil works">Torres · Obra civil</div></div><div className="cn">72</div></li>
            <li><div><b>Alajuela</b><div className="ct" data-en="Towers · Construction">Torres · Construcción</div></div><div className="cn">58</div></li>
            <li><div><b>Guanacaste</b><div className="ct" data-en="Towers">Torres</div></div><div className="cn">41</div></li>
            <li><div><b>Cartago</b><div className="ct" data-en="Remodeling">Remodelación</div></div><div className="cn">33</div></li>
            <li><div><b>Puntarenas</b><div className="ct" data-en="Towers · Civil works">Torres · Obra civil</div></div><div className="cn">28</div></li>
            <li><div><b>Heredia</b><div className="ct" data-en="Construction">Construcción</div></div><div className="cn">22</div></li>
            <li><div><b>Limón</b><div className="ct" data-en="Civil works">Obra civil</div></div><div className="cn">19</div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
