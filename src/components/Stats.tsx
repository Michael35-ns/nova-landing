export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="wrap">
        <h2 className="sr-only" data-en="NOVOSTI in numbers: projects, experience and national coverage">NOVOSTI en cifras: proyectos, experiencia y cobertura nacional</h2>
        <div className="stats-band">
          <div className="stat reveal"><b><span data-count="700">700+</span><span className="suf">+</span></b><span data-en="Projects executed">Proyectos ejecutados</span></div>
          <div className="stat reveal d1"><b><span data-count="15">15+</span></b><span data-en="Years of experience">Años de experiencia</span></div>
          <div className="stat reveal d2"><b><span data-count="99">100</span><span className="suf">%</span></b><span data-en="On-time, on-spec delivery">De Clientes Satisfechos</span></div>
          <div className="stat reveal d3"><b><span data-count="100">100%</span></b><span data-en="Provinces with active coverage">De disponibilidad en todo el país</span></div>
        </div>
      </div>
    </section>
  );
}