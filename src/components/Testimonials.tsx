import ImageSlot from './ImageSlot';

export default function Testimonials() {
  return (
    <section className="section paper" id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow" data-en="Client trust">Confianza de clientes</div>
          <h2 data-en="The teams that keep networks running, on Novosti">Los equipos que mantienen las redes en marcha, sobre Novosti</h2>
        </div>
        <div className="tst-grid">
          <figure className="tst-main reveal">
            <div className="quote-mark" aria-hidden="true">“</div>
            <blockquote data-en="Novosti delivered four towers ahead of schedule, with the structural documentation our tender required from day one. Their crews are disciplined and their safety record is impeccable.">Novosti entregó cuatro torres antes de lo previsto, con la documentación estructural que nuestra licitación exigía desde el primer día. Sus cuadrillas son disciplinadas y su récord de seguridad es impecable.</blockquote>
            <figcaption className="tst-author">
              <ImageSlot src="/assets/ph-ava.png" alt="Mariana Cruz" className="tst-avatar" />
              <div>
                <b>Mariana Cruz</b>
                <span data-en="Network Deployment Lead, National Operator">Líder de Despliegue de Red, Operador Nacional</span>
              </div>
            </figcaption>
          </figure>
          <div className="tst-side">
            <figure className="tst-card reveal d1">
              <div className="stars" aria-hidden="true">{/* stars svgs omitted for brevity in JSX */}
              </div>
              <p data-en="A reliable partner for public infrastructure. Documentation was flawless and the work passed inspection on the first visit.">Un socio confiable para infraestructura pública. La documentación fue impecable y la obra pasó inspección en la primera visita.</p>
              <figcaption className="tst-author">
              <ImageSlot src="/assets/ph-ava.png" alt="Ing. Rafael Méndez" className="tst-avatar" />
                <div>
                  <b>Ing. Rafael Méndez</b>
                  <span data-en="Project Office, Public Works">Oficina de Proyectos, Obras Públicas</span>
                </div>
              </figcaption>
            </figure>
            <figure className="tst-card reveal d2">
              <div className="stars" aria-hidden="true"></div>
              <p data-en="From the site remodel to the new shelter, everything was coordinated and clean. We will absolutely work with them again.">Desde la remodelación del sitio hasta la nueva caseta, todo estuvo coordinado y limpio. Sin duda volveremos a trabajar con ellos.</p>
              <figcaption className="tst-author">
              <ImageSlot src="/assets/ph-ava.png" alt="Laura Pérez" className="tst-avatar" />
                <div>
                  <b>Laura Pérez</b>
                  <span data-en="Infrastructure Manager, Tower Co.">Gerente de Infraestructura, Tower Co.</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
