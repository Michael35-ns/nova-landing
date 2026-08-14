import ImageSlot from './ImageSlot';

export default function Testimonials() {
  return (
    <section className="section paper" id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow" data-en="Client trust">Confianza de clientes</div>
          <h2 data-en="The teams that keep their offices running, on Novosti">Los equipos que mantienen sus oficinas funcionando, sobre Novosti</h2>
        </div>
        <div className="tst-grid">
          <figure className="tst-main reveal">
            <div className="quote-mark" aria-hidden="true">“</div>
            <blockquote data-en="Novosti remodeled our entire office floor without stopping our operation for a single day. They worked nights and weekends, coordinated every detail, and handed over a space that looks brand new.">Novosti remodeló todo nuestro piso de oficinas sin detener nuestra operación ni un solo día. Trabajaron de noche y fines de semana, coordinaron cada detalle, y entregaron un espacio que parece nuevo.</blockquote>
            <figcaption className="tst-author">
              <ImageSlot src="/assets/ph-ava.png" alt="Mariana Cruz" className="tst-avatar" />
              <div>
                <b>Mariana Cruz</b>
                <span data-en="Facilities Manager, Corporate Services Firm">Gerente de Facilidades, Empresa de Servicios Corporativos</span>
              </div>
            </figcaption>
          </figure>
          <div className="tst-side">
            <figure className="tst-card reveal d1">
              <div className="stars" aria-hidden="true">{/* stars svgs omitted for brevity in JSX */}
              </div>
              <p data-en="Our maintenance contract with Novosti has been flawless. Response times are fast and every visit is documented — exactly what we needed for our building.">Nuestro contrato de mantenimiento con Novosti ha sido impecable. Los tiempos de respuesta son rápidos y cada visita queda documentada — exactamente lo que necesitábamos para nuestro edificio.</p>
              <figcaption className="tst-author">
              <ImageSlot src="/assets/ph-ava.png" alt="Ing. Rafael Méndez" className="tst-avatar" />
                <div>
                  <b>Ing. Rafael Méndez</b>
                  <span data-en="Building Administrator, Torre Empresarial">Administrador de Edificio, Torre Empresarial</span>
                </div>
              </figcaption>
            </figure>
            <figure className="tst-card reveal d2">
              <div className="stars" aria-hidden="true"></div>
              <p data-en="From the new glass partitions to the data room, everything was coordinated and clean. We will absolutely work with them again for our next remodel.">Desde las nuevas mamparas de vidrio hasta el cuarto de datos, todo estuvo coordinado y limpio. Sin duda volveremos a trabajar con ellos en nuestra próxima remodelación.</p>
              <figcaption className="tst-author">
              <ImageSlot src="/assets/ph-ava.png" alt="Laura Pérez" className="tst-avatar" />
                <div>
                  <b>Laura Pérez</b>
                  <span data-en="Operations Director, Regional Retail Group">Directora de Operaciones, Grupo Comercial Regional</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}