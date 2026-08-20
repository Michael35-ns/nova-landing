
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
            <div className="eyebrow" data-en="About Novosti">Sobre Novosti</div>
            <h2 data-en="15 years building, 7 years renewing spaces with accessible quality">15 años construyendo, 7 años renovando espacios con calidad accesible</h2>
            <p data-en="Novosti Construction Company was founded in 2011. After five years of international projects, we arrived in Costa Rica building telecom infrastructure — to date we have built and updated more than 500 radio base towers nationwide. Seven years ago we expanded into remodeling for homes and commercial spaces, and today that is our main line of business.">Novosti Construction Company se fundó en 2011. Tras cinco años de proyectos internacionales, llegamos a Costa Rica construyendo infraestructura de telecomunicaciones — hasta la fecha hemos construido y actualizado más de 500 torres de radiobase a nivel nacional. Hace siete años ampliamos hacia la remodelación de residencias y espacios comerciales, y hoy esa es nuestra línea de negocio principal.</p>
            <p data-en="We work with offices, commercial areas and warehouses across any market, offering accessible pricing without sacrificing quality — with punctuality, accountability and follow-up throughout the entire life cycle of every project.">Trabajamos con oficinas, áreas comerciales y almacenes en cualquier mercado, ofreciendo precios accesibles sin sacrificar la calidad — con puntualidad, responsabilidad y seguimiento durante todo el ciclo de vida de cada proyecto.</p>
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