
export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="wrap">
        <div className="stats-band">
          <div className="stat reveal"><b><span data-count="500">500</span><span className="suf">+</span></b><span data-en="Towers built & updated">Torres construidas y actualizadas</span></div>
          <div className="stat reveal d1"><b><span data-count="15">15</span></b><span data-en="Years of experience">Años de experiencia</span></div>
          <div className="stat reveal d2"><b><span data-count="7">7</span></b><span data-en="Years remodeling homes & businesses">Años remodelando hogares y comercios</span></div>
          <div className="stat reveal d3"><b><span data-count="99">99</span><span className="suf">%</span></b><span data-en="On-time, on-spec delivery">Entregas a tiempo y a norma</span></div>
        </div>
      </div>
    </section>
  );
}