export default function Process() {
  return (
    <section className="section navy" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="How we work">Cómo trabajamos</div>
          <h2 data-en="A clear path from site visit to handover">Un camino claro de la visita de sitio a la entrega</h2>
        </div>
        <div className="proc-grid reveal d1">
          <div className="proc-line" aria-hidden="true"></div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">01</div>
            <h3 data-en="Site visit & scope">Visita de sitio y alcance</h3>
            <p data-en="On-site walkthrough to understand your space, define the scope and identify any constraints on hours or access.">Recorrido en sitio para entender su espacio, definir el alcance e identificar restricciones de horario o acceso.</p>
          </div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">02</div>
            <h3 data-en="Proposal & schedule">Propuesta y cronograma</h3>
            <p data-en="A transparent budget and a schedule coordinated around your operation, so the work advances without disrupting your team.">Presupuesto transparente y un cronograma coordinado con su operación, para que la obra avance sin interrumpir a su equipo.</p>
          </div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">03</div>
            <h3 data-en="Build & remodel">Construcción y remodelación</h3>
            <p data-en="Demolition, finishes, systems and installation executed by in-house crews under certified HSE controls.">Demolición, acabados, sistemas e instalación ejecutados por cuadrillas propias bajo controles HSE certificados.</p>
          </div>
          <div className="proc-step">
            <div className="dot"></div>
            <div className="pnum">04</div>
            <h3 data-en="Walkthrough & handover">Revisión y entrega</h3>
            <p data-en="Final walkthrough, punch-list close-out and a documented handover ready for you to move back in.">Revisión final, cierre de pendientes y entrega documentada lista para que su equipo regrese al espacio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}