export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="wrap">
        <div className="stats-band">
          <div className="stat reveal"><b><span data-count="180">180</span><span className="suf">+</span></b><span data-en="Remodeling & maintenance projects">Remodelaciones y mantenimientos</span></div>
          <div className="stat reveal d1"><b><span data-count="14">14</span></b><span data-en="Years of field experience">Años de experiencia en campo</span></div>
          <div className="stat reveal d2"><b><span data-count="7">7</span></b><span data-en="Provinces with active sites">Provincias con sitios activos</span></div>
          <div className="stat reveal d3"><b><span data-count="99">99</span><span className="suf">%</span></b><span data-en="On-time, on-spec delivery">Entregas a tiempo y a norma</span></div>
        </div>
      </div>
    </section>
  );
}