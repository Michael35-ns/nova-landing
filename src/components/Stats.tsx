export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="wrap">
        <h2 className="sr-only" data-en="NOVOSTI in numbers: projects, experience and national coverage">NOVOSTI en cifras: proyectos, experiencia y cobertura nacional</h2>
        <div className="stats-band">
          <div className="stat reveal"><b data-count="15" data-suffix="+">15+</b><span data-en="Years of experience">Años de experiencia</span></div>
          <div className="stat reveal d1"><b data-count="700" data-suffix="+">700+</b><span data-en="Projects">Proyectos</span></div>
          <div className="stat reveal d2"><b data-count="100" data-suffix="%">100%</b><span data-en="Satisfied clients">Clientes satisfechos</span></div>
          <div className="stat reveal d3"><b data-count="7" data-suffix="">7</b><span data-en="Provinces · coverage across the whole country">Provincias con cobertura en todo el país</span></div>
        </div>
      </div>
    </section>
  );
}
