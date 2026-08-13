
export default function Process() {
  return (
    <section className="section navy" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="How we work">Cómo trabajamos</div>
          <h2 data-en="A clear path from site survey to handover">Un camino claro del estudio de sitio a la entrega</h2>
        </div>
        <div className="proc-grid reveal d1">
          <div className="proc-line" aria-hidden="true"></div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">01</div>
            <h3 data-en="Survey & engineering">Estudio e ingeniería</h3>
            <p data-en="Site survey, soil study and structural design with stamped calculations and a documented scope.">Estudio de sitio, ensayo de suelo y diseño estructural con cálculos sellados y alcance documentado.</p>
          </div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">02</div>
            <h3 data-en="Proposal & permits">Propuesta y permisos</h3>
            <p data-en="Transparent budget, schedule and the full documentation set required for tenders and approvals.">Presupuesto y cronograma transparentes, con el set documental que exigen licitaciones y aprobaciones.</p>
          </div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">03</div>
            <h3 data-en="Build & assemble">Construcción y montaje</h3>
            <p data-en="Foundations, fabrication and erection executed by in-house crews under certified HSE controls.">Cimentación, fabricación y montaje ejecutados por cuadrillas propias bajo controles HSE certificados.</p>
          </div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">04</div>
            <h3 data-en="Test & handover">Pruebas y entrega</h3>
            <p data-en="Load testing, as-built records and a documented handover ready for equipment installation.">Pruebas de carga, planos as-built y entrega documentada lista para instalación de equipo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
