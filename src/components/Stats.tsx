export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="wrap">
        <div className="stats-band">
          <div className="stat reveal"><b><span data-count="700">700</span><span className="suf">+</span></b><span data-en="Projects executed">Proyectos ejecutados</span></div>
          <div className="stat reveal d1"><b><span data-count="15">15</span></b><span data-en="Years of experience">Años de experiencia</span></div>
          <div className="stat reveal d2"><b><span data-count="99">99</span><span className="suf">%</span></b><span data-en="On-time, on-spec delivery">Entregas a tiempo y a norma</span></div>
        </div>
      </div>
    </section>
  );
}