import ImageSlot from './ImageSlot';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media reveal">
            <ImageSlot src="/assets/proyectos/tribunales/despues-03-pasillo-largo.jpeg" alt="" className="about-img" />
            <div className="badge">
              <b data-count="15" data-suffix="">15</b>
              <span data-en="Years of experience">Años de experiencia</span>
            </div>
          </div>
          <div className="about-body reveal d1">
            <div className="eyebrow" data-en="About Us">Nosotros</div>
            <h2 data-en="Our mission and vision">Nuestra misión y visión</h2>

            <h3 className="about-subhead" data-en="Our mission">Nuestra misión</h3>
            <p data-en="At NOVOSTI we develop engineering, construction and telecommunications solutions, turning our clients' needs into efficient, reliable, high-value projects.">En NOVOSTI desarrollamos soluciones de ingeniería, construcción y telecomunicaciones, transformando las necesidades de nuestros clientes en proyectos eficientes, confiables y de alto valor.</p>
            <p data-en="We combine technical expertise, planning and execution capacity to manage every project comprehensively, with safety, efficiency and commitment, building long-term trust with our clients and our community.">Integramos experiencia técnica, planificación y capacidad de ejecución para gestionar cada proyecto de manera integral, con seguridad, eficiencia y compromiso, construyendo relaciones de confianza a largo plazo con nuestros clientes y nuestra comunidad.</p>
            <p data-en="Our field of action spans the public, private and residential sectors, serving government institutions, telecom companies, service providers and commercial establishments through civil works, telecom infrastructure, remodeling, adaptations, maintenance and electromechanical works.">Nuestro campo de acción abarca los sectores público, privado y residencial, atendiendo instituciones gubernamentales, empresas de telecomunicaciones, compañías de servicios y establecimientos comerciales, mediante soluciones de obra civil, infraestructura de telecomunicaciones, remodelaciones, adecuaciones, mantenimiento y obras electromecánicas.</p>

            <h3 className="about-subhead" data-en="Our vision">Nuestra visión</h3>
            <p data-en="At NOVOSTI we envision a future where engineering, construction and innovation come together to develop infrastructure that generates value and contributes to Costa Rica's growth.">En NOVOSTI proyectamos un futuro donde la ingeniería, la construcción y la innovación se integren para desarrollar infraestructura que genere valor y contribuya al crecimiento de Costa Rica.</p>
            <p data-en="By 2035, we aim to be a leading company in construction, engineering and civil and telecom infrastructure projects in Costa Rica, recognized for our operational capacity, innovation and commitment to quality, safety, sustainability and compliance.">Para el 2035, aspiramos a consolidarnos como una empresa referente en construcción, proyectos de ingeniería e infraestructura civil y de telecomunicaciones en Costa Rica, reconocida por nuestra capacidad operativa, innovación y compromiso con la calidad, seguridad, sostenibilidad y cumplimiento.</p>
            <p data-en="We want to grow alongside our clients, partners, collaborators and communities, building relationships of trust and developing projects that generate value and leave a positive, lasting impact.">Queremos crecer junto a nuestros clientes, colaboradores, aliados y comunidades, construyendo relaciones de confianza y desarrollando proyectos que generen valor y dejen una huella positiva y sostenible.</p>

            <ul className="about-checks">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="CFIA registered">Registrados en el CFIA</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Sello PYME certified">Certificados con Sello PYME</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="On-time, accountable delivery">Entregas puntuales y con responsabilidad</span></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M20 6L9 17l-5-5"/></svg><span data-en="Follow-up for the full project life cycle">Seguimiento en todo el ciclo de vida del proyecto</span></li>
            </ul>

            <div className="hero-cta" style={{ marginTop: 30 }}>
              <a href="#contact" className="btn btn-primary" data-en="Talk to our team">Hablar con el equipo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}