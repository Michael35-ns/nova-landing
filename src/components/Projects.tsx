import { useEffect, useRef, useState } from 'react';

type Project = {
  img: string;
  title: string;
  tag: string;
  loc: string;
  desc: string;
  short: string;
};

const projects: Project[] = [
  {
    img: '/assets/ph-tile-b.png',
    title: 'Torre de Celosía 60m Cordillera',
    tag: 'Torre autosoportada',
    loc: 'Guanacaste · 2025',
    desc: 'Diseño, fabricación y montaje de una torre de celosía autosoportada de 60 metros para ampliar la cobertura 4G en el norte del país. Cimentación profunda con cálculo estructural certificado y entrega documentada en cronograma.',
    short: '01 · TORRES',
  },
  {
    img: '/assets/ph-tile-a.png',
    title: 'Casa de Operaciones — Sitio Costa',
    tag: 'Construcción',
    loc: 'Puntarenas · 2024',
    desc: 'Caseta operativa llave en mano con cimentación, mampostería, acabados y sistemas eléctricos. Entregada lista para la instalación de equipos de telecomunicaciones del cliente.',
    short: '02 · CONSTRUCCIÓN',
  },
  {
    img: '/assets/ph-tile-c.png',
    title: 'Reforzamiento de Sitio — Hub Metro',
    tag: 'Remodelación',
    loc: 'San José · 2024',
    desc: 'Reforzamiento estructural y remodelación integral de un hub metropolitano para soportar nueva carga de antenas y equipos. Cero interrupción de servicio durante los trabajos.',
    short: '03 · REMODELACIÓN',
  },
  {
    img: '/assets/ph-tile-a.png',
    title: 'Monopolo Urbano 36m',
    tag: 'Torre autosoportada',
    loc: 'Heredia · 2025',
    desc: 'Monopolo urbano de 36m diseñado para minimizar impacto visual en zona residencial. Cimentación compacta y acabado camuflaje arquitectónico aprobado por la municipalidad.',
    short: '04 · TORRES',
  },
  {
    img: '/assets/ph-tile-b.png',
    title: 'Red Altiplano — 4 Torres',
    tag: 'Torre autosoportada',
    loc: 'Cartago · 2023',
    desc: 'Despliegue coordinado de cuatro torres en sitios remotos del altiplano. Logística de izaje en condiciones adversas y entregas escalonadas según el plan de despliegue del operador.',
    short: '05 · TORRES',
  },
  {
    img: '/assets/ph-tile-b.png',
    title: 'Complejo de Casetas de Equipo',
    tag: 'Construcción',
    loc: 'Limón · 2023',
    desc: 'Complejo de seis casetas modulares para equipo de telecomunicaciones con sistemas redundantes de energía y ventilación. Construcción acelerada y entrega anticipada al cronograma.',
    short: '06 · CONSTRUCCIÓN',
  },
];

export default function Projects() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const strip = stripRef.current;
    const fill = fillRef.current;
    const count = countRef.current;

    if (!strip || !fill || !count) return;

    const updateProgress = () => {
      const total = projects.length || 1;
      const tile = strip.querySelector<HTMLElement>('.proj-tile');
      const tileW = tile ? tile.offsetWidth : 280;
      const index = tileW ? Math.round(strip.scrollLeft / tileW) : 0;
      const visible = Math.max(1, Math.floor(strip.clientWidth / Math.max(1, tileW)));
      const pos = Math.min(index + 1, total);
      count.textContent = `${String(pos).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
      const fillStart = (index / total) * 100;
      const fillWidth = Math.min(100, ((index + visible) / total) * 100) - fillStart;
      fill.style.left = `${fillStart}%`;
      fill.style.width = `${Math.max(fillWidth, 8)}%`;
    };

    updateProgress();
    strip.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    return () => {
      strip.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const scrollByTile = (direction: number) => {
    const strip = stripRef.current;
    if (!strip) return;
    const tile = strip.querySelector<HTMLElement>('.proj-tile');
    const tileWidth = tile ? tile.offsetWidth + 20 : 320;
    strip.scrollBy({ left: direction * tileWidth, behavior: 'smooth' });
  };

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="Selected work">Trabajo seleccionado</div>
          <h2 data-en="Projects delivered across the region">Proyectos entregados en toda la región</h2>
          <p className="section-kicker lead" data-en="A sample of recent sites — towers, civil works and remodels handed over to operators and public clients.">Una muestra de sitios recientes — torres, obra civil y remodelaciones entregadas a operadores y clientes públicos.</p>
        </div>
      </div>

      <div className="proj-strip" id="projStrip" ref={stripRef}>
        {projects.map((project, index) => (
          <button
            key={`${project.title}-${index}`}
            type="button"
            className="proj-tile"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.img} alt="" loading="lazy" />
            <div className="pt-overlay">
              <div className="pt-tag" data-en="Self-supporting tower">{project.tag}</div>
              <h3>{project.title}</h3>
              <div className="pt-meta">{project.loc}</div>
            </div>
            <div className="pt-vlabel" aria-hidden="true">{project.short}</div>
          </button>
        ))}
      </div>

      <div className="wrap">
        <div className="proj-controls">
          <button className="pc-arrow prev" type="button" aria-label="Anterior" onClick={() => scrollByTile(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            <span data-en="PREV">ANT</span>
          </button>
          <div className="pc-progress" aria-hidden="true">
            <span className="pcp-bar"><span className="pcp-fill" ref={fillRef}></span></span>
            <span className="pcp-count" ref={countRef}>01 / 06</span>
          </div>
          <button className="pc-arrow next" type="button" aria-label="Siguiente" onClick={() => scrollByTile(1)}>
            <span data-en="NEXT">SIG</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      {selectedProject && (
        <div className="proj-lb is-open" aria-hidden="false" role="dialog" aria-modal="true">
          <div className="lb-backdrop" onClick={() => setSelectedProject(null)} />
          <div className="lb-frame">
            <button type="button" className="lb-close" data-lb-close="true" aria-label="Cerrar" onClick={() => setSelectedProject(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <div className="lb-media">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>
            <div className="lb-body">
              <div className="lb-tag">{selectedProject.tag}</div>
              <h3>{selectedProject.title}</h3>
              <div className="lb-meta">{selectedProject.loc}</div>
              <p>{selectedProject.desc}</p>
              <a href="#contact" className="btn btn-gold" data-en="Request a quote">Solicitar cotización</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
