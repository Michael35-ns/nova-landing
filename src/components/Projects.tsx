import { useEffect, useMemo, useRef, useState } from 'react';

type GalleryImg = { src: string; label: 'Antes' | 'Después' };

type Project = {
  img: string;
  title: string;
  tag: string;
  loc: string;
  desc: string;
  short: string;
  gallery: GalleryImg[];
};

const projects: Project[] = [
  {
    img: '/assets/proyectos/tribunales/despues-01-estaciones.jpeg',
    title: 'Remodelación y Modernización de Oficinas — Poder Judicial',
    tag: 'Remodelación',
    loc: 'San José · 405 m² · 2025',
    desc: 'Remodelación integral de 405 m² de oficinas administrativas para el Poder Judicial: demolición de cielorrasos y divisiones en mal estado, nuevas mamparas de vidrio, pisos, iluminación y estaciones de trabajo. Proyecto entregado en operación, sin interrumpir la atención al público.',
    short: '01 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/tribunales/despues-01-estaciones.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/antes-01-pasillo.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/tribunales/despues-02-pasillo-oficinas.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-03-pasillo-largo.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/antes-02-bano.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/tribunales/despues-04-puerta-madera.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-05-vidrio-esmerilado.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/tribunales/despues-02-pasillo-oficinas.jpeg',
    title: 'Oficinas Privadas con Mamparas de Vidrio',
    tag: 'Remodelación',
    loc: 'San José · 405 m² · 2025',
    desc: 'Construcción de oficinas privadas con mamparas de vidrio templado y estructura de aluminio sobre un edificio existente, como parte de la modernización integral de las instalaciones del Poder Judicial.',
    short: '02 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/tribunales/despues-02-pasillo-oficinas.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/antes-01-pasillo.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/tribunales/despues-03-pasillo-largo.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/jaco/despues-01-fachada-vidrio.jpeg',
    title: 'Acondicionamiento de Local a Oficinas — Correos de Costa Rica',
    tag: 'Remodelación',
    loc: 'Jacó · 120 m² · 2025',
    desc: 'Acondicionamiento completo de un local comercial de 120 m² para convertirlo en oficinas de atención al público de Correos de Costa Rica S.A.: fachada de vidrio, mostrador de atención, cielorraso, piso y sistema eléctrico nuevo.',
    short: '03 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/jaco/despues-01-fachada-vidrio.jpeg', label: 'Después' },
      { src: '/assets/proyectos/jaco/antes-01-obra-gris.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/jaco/antes-02-materiales.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/jaco/despues-02-pasillo-puertas.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg',
    title: 'Oficina Administrativa con Iluminación Natural',
    tag: 'Remodelación',
    loc: 'San José · 405 m² · 2025',
    desc: 'Reacondicionamiento de oficina administrativa aprovechando la iluminación natural existente, con nuevo mobiliario, acabados y acceso directo a sala de reuniones con mampara de vidrio.',
    short: '04 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/antes-02-bano.jpeg', label: 'Antes' },
    ],
  },
  {
    img: '/assets/proyectos/jaco/despues-02-pasillo-puertas.jpeg',
    title: 'Pasillos y Puertas de Acceso — Local Comercial',
    tag: 'Remodelación',
    loc: 'Jacó · 120 m² · 2025',
    desc: 'Distribución interna de pasillos y puertas de acceso a oficinas auxiliares, con acabados en piso porcelanato y pintura, dentro del proyecto de acondicionamiento del local de atención al público.',
    short: '05 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/jaco/despues-02-pasillo-puertas.jpeg', label: 'Después' },
      { src: '/assets/proyectos/jaco/antes-01-obra-gris.jpeg', label: 'Antes' },
    ],
  },
  {
    img: '/assets/hero-tower.png',
    title: 'Torre de Celosía 60m Cordillera',
    tag: 'Torre autosoportada',
    loc: 'Guanacaste · 2025',
    desc: 'Diseño, fabricación y montaje de una torre de celosía autosoportada de 60 metros para ampliar la cobertura 4G en el norte del país. Proyecto entregado a un operador de telecomunicaciones bajo nuestra línea especializada de torres.',
    short: '06 · TORRES',
    gallery: [{ src: '/assets/hero-tower.png', label: 'Después' }],
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
          <h2 data-en="Remodels delivered for real clients">Remodelaciones entregadas a clientes reales</h2>
          <p className="section-kicker lead" data-en="A sample of recent projects — office remodels for the Judicial Branch and Correos de Costa Rica, plus our specialized telecom tower line.">Una muestra de proyectos recientes — remodelación de oficinas para el Poder Judicial y Correos de Costa Rica, además de nuestra línea especializada de torres.</p>
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
            <img src={project.img} alt="" loading="lazy" />
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
            <span className="pcp-count" ref={countRef}>01 / 06</span>
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
              <span className={`lb-ba-badge ${currentImg.label === 'Antes' ? 'is-antes' : 'is-despues'}`}>{currentImg.label}</span>
              <img src={currentImg.src} alt={selectedProject.title} />
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
                    </button>
                  ))}
                </div>
              )}
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