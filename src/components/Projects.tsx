import { useEffect, useMemo, useRef, useState } from 'react';

type GalleryImg = { src: string; label: 'Antes' | 'Después' | 'Proceso' };

type Project = {
  img: string;
  title: string;
  tag: string;
  loc: string;
  desc: string;
  short: string;
  gallery: GalleryImg[];
};

const badgeClass = (label: GalleryImg['label']) => {
  if (label === 'Antes') return 'is-antes';
  if (label === 'Proceso') return 'is-proceso';
  return 'is-despues';
};

const badgeLetter = (label: GalleryImg['label']) => {
  if (label === 'Antes') return 'A';
  if (label === 'Proceso') return 'P';
  return 'D';
};

// NOTA: reemplazar las rutas de /assets/proyectos/nayara/ por las fotos reales
// del proyecto una vez que estén colocadas en esa carpeta (antes/después).
const projects: Project[] = [
  {
    img: '/assets/proyectos/nayara/entrada.png',
    title: 'Proyecto Nayara - RESIDENCIAL',
    tag: 'Construcción',
    loc: 'Construcción residencial · 112 m² · 2025',
    desc: '',
    short: '01 · CONSTRUCCIÓN',
    gallery: [
      { src: '/assets/proyectos/nayara/casa_fachada.png', label: 'Después' },
      { src: '/assets/proyectos/nayara/banno.png', label: 'Después' },
      { src: '/assets/proyectos/nayara/escalera.png', label: 'Después' },
      { src: '/assets/proyectos/nayara/sala.png', label: 'Después' },
      { src: '/assets/proyectos/nayara/cocina.png', label: 'Después' },
      { src: '/assets/proyectos/nayara/lobby.png', label: 'Después' },
      { src: '/assets/proyectos/nayara/muro.png', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/verbena/racks-02.png',
    title: 'La Verbena - CEDI',
    tag: 'Construcción',
    loc: 'Verbena · 3360 m² · 2022',
    desc: '',
    short: '02 · CONSTRUCCIÓN',
    gallery: [
      { src: '/assets/proyectos/verbena/racks-01.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/racks-02.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/techo-03.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/area-trabajo-05.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/racks-03.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/bannos-01.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/bannos-04.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/lobby-06.png', label: 'Después' },

    ],
  },
  {
    img: '/assets/proyectos/tribunales/despues-01-estaciones.jpeg',
    title: 'Poder Judicial',
    tag: 'Remodelación',
    loc: 'San José · 405 m² · 2025',
    desc: '',
    short: '03 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/tribunales/despues-01-estaciones.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-02-pasillo-oficinas.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-03-pasillo-largo.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-04-puerta-madera.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/oficina-01.png', label: 'Después' },
      { src: '/assets/proyectos/tribunales/oficina-02.png', label: 'Después' },
      { src: '/assets/proyectos/tribunales/oficina-03.png', label: 'Después' },
      { src: '/assets/proyectos/tribunales/pasillo-doble.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/pasillo-vidrio.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/banno.jpg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/tomas.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/emergency.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/jaco/lobby-05.png',
    title: 'Correos de Costa Rica',
    tag: 'Remodelación',
    loc: 'Jacó · 120 m² · 2025',
    desc: '',
    short: '04 · REMODELACIÓN',
    gallery: [
        { src: '/assets/proyectos/jaco/lobby-04.png', label: 'Después' },
      { src: '/assets/proyectos/jaco/despues-01-fachada-vidrio.jpeg', label: 'Después' },
      { src: '/assets/proyectos/jaco/lobby-03.png', label: 'Después' },
      { src: '/assets/proyectos/jaco/despues-02-pasillo-puertas.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/telecomunicaciones/portada.png',
    title: 'Infraestructura de Radiobases y Torres de Telecomunicaciones',
    tag: 'Telecomunicaciones',
    loc: 'Costa Rica · Cobertura nacional',
    desc: 'Construcción de infraestructura civil y electromecánica, y montaje de estructuras para radiobases de telecomunicaciones, incluyendo soluciones tipo rooftop, monopolo, torres autosoportadas y arriostradas, de acuerdo con los requerimientos técnicos de cada proyecto.',
    short: '05 · TELECOMUNICACIONES',
    gallery: [
      { src: '/assets/proyectos/telecomunicaciones/torre-01.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/torre-02.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/torre-03.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/torre-04.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/torre-05.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/torre-06.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/base.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/base-02.png', label: 'Después' },
      { src: '/assets/proyectos/telecomunicaciones/cabina.png', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/san_carlos/despues-fachada-03.png',
    title: 'Proyecto San Carlos',
    tag: 'Remodelación',
    loc: 'San Carlos, Alajuela',
    desc: '',
    short: '06 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/san_carlos/despues-fachada-03.png', label: 'Después' },
      { src: '/assets/proyectos/san_carlos/despues-entrada-01.png', label: 'Después' },
      { src: '/assets/proyectos/san_carlos/despues-piso-02.png', label: 'Después' },
      { src: '/assets/proyectos/san_carlos/interior.png', label: 'Después' },
      { src: '/assets/proyectos/san_carlos/parte-1.png', label: 'Después' },
      { src: '/assets/proyectos/san_carlos/part-2.png', label: 'Después' },
      { src: '/assets/proyectos/san_carlos/part-3.png', label: 'Después' },
    ],
  },
];

export default function Projects() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  const currentImg = useMemo(() => {
    if (!selectedProject) return null;
    return selectedProject.gallery[activeImg] ?? selectedProject.gallery[0];
  }, [selectedProject, activeImg]);

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

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImg(0);
  };

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
          <h2 data-en="Construction and remodeling projects completed in Costa Rica">Proyectos de construcción y remodelación realizados en Costa Rica</h2>
          <p className="section-kicker lead" data-en="Construction, remodeling and telecom infrastructure projects delivered across Costa Rica.">Proyectos de construcción, remodelación e infraestructura de telecomunicaciones entregados en todo Costa Rica.</p>
        </div>
      </div>

      <div className="proj-strip" id="projStrip" ref={stripRef}>
        {projects.map((project, index) => (
          <button
            key={`${project.title}-${index}`}
            type="button"
            className="proj-tile"
            onClick={() => openProject(project)}
          >
            <img src={project.img} alt={`${project.title} — ${project.tag} · ${project.loc}`} loading="lazy" />
            <div className="pt-overlay">
              <div className="pt-tag">{project.tag}</div>
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
            <span className="pcp-count" ref={countRef}>{`01 / ${String(projects.length).padStart(2, '0')}`}</span>
          </div>
          <button className="pc-arrow next" type="button" aria-label="Siguiente" onClick={() => scrollByTile(1)}>
            <span data-en="NEXT">SIG</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      {selectedProject && currentImg && (
        <div className="proj-lb is-open" aria-hidden="false" role="dialog" aria-modal="true">
          <div className="lb-backdrop" onClick={() => setSelectedProject(null)} />
          <div className="lb-frame">
            <button type="button" className="lb-close" data-lb-close="true" aria-label="Cerrar" onClick={() => setSelectedProject(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <div className="lb-media">
              <span className={`lb-ba-badge ${badgeClass(currentImg.label)}`}>{currentImg.label}</span>
              <img src={currentImg.src} alt={`${selectedProject.title} — ${selectedProject.tag} · ${selectedProject.loc}`} />
              {selectedProject.gallery.length > 1 && (
                <div className="lb-thumbs">
                  {selectedProject.gallery.map((g, i) => (
                    <button
                      key={`${g.src}-${i}`}
                      type="button"
                      className={`lb-thumb ${i === activeImg ? 'is-active' : ''}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`${g.label} ${i + 1}`}
                    >
                      <img src={g.src} alt="" />
                      <span className={`lb-thumb-tag ${badgeClass(g.label)}`}>{badgeLetter(g.label)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="lb-body">
              <div className="lb-tag">{selectedProject.tag}</div>
              <h3>{selectedProject.title}</h3>
              <div className="lb-meta">{selectedProject.loc}</div>
              {selectedProject.desc && <p>{selectedProject.desc}</p>}
              <a href="#contact" className="btn btn-gold" data-en="I want a project like this">Quiero un proyecto así</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}