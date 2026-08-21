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
      { src: '/assets/proyectos/tribunales/antes-03-cuarto.png', label: 'Antes' },
      { src: '/assets/proyectos/tribunales/despues-05-vidrio-esmerilado.jpeg', label: 'Después' },
      { src: '/assets/proyectos/tribunales/despues-06-oficina-luz.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/jaco/despues-01-fachada-vidrio.jpeg',
    title: 'Acondicionamiento de Local a Oficinas — Correos de Costa Rica',
    tag: 'Remodelación',
    loc: 'Jacó · 120 m² · 2025',
    desc: 'Acondicionamiento completo de un local comercial de 120 m² para convertirlo en oficinas de atención al público de Correos de Costa Rica S.A.: fachada de vidrio, mostrador de atención, cielorraso, piso y sistema eléctrico nuevo.',
    short: '02 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/jaco/antes-02-materiales.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/jaco/proceso-correos-01.jpeg', label: 'Proceso' },
      { src: '/assets/proyectos/jaco/despues-01-fachada-vidrio.jpeg', label: 'Después' },
      { src: '/assets/proyectos/jaco/antes-01-obra-gris.jpeg', label: 'Antes' },
      { src: '/assets/proyectos/jaco/proceso-correos-02.jpeg', label: 'Proceso' },
      { src: '/assets/proyectos/jaco/despues-02-pasillo-puertas.jpeg', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/san-carlos/despues-fachada-03.png',
    title: 'Acondicionamiento de local de oficinas - Caja Costarricense del Seguro Social',
    tag: 'Remodelación',
    loc: 'San Carlos · 100 m² · 2025',
    desc: 'Remodelación integral y adecuación espacial de un local de oficinas de 100 m² para la Caja Costarricense del Seguro Social en San Carlos. La intervención contempló la modernización de los acabados interiores mediante la renovación completa de pisos, la sustitución de sistemas de cielorrasos y techos, y la actualización de la fachada principal. El diseño se enfocó en optimizar la distribución para el flujo administrativo, mejorar el confort ambiental y cumplir estrictamente con los estándares institucionales de accesibilidad y durabilidad.',
    short: '03 · REMODELACIÓN',
    gallery: [
      { src: '/assets/proyectos/san-carlos/antes-piso-01.png', label: 'Antes' },
      { src: '/assets/proyectos/san-carlos/despues-piso-02.png', label: 'Después' },
      { src: '/assets/proyectos/san-carlos/antes-techo-02.png', label: 'Antes' },
      { src: '/assets/proyectos/san-carlos/despues-entrada-01.png', label: 'Después' },
      { src: '/assets/proyectos/san-carlos/antes-techo-03.png', label: 'Antes' },  
      { src: '/assets/proyectos/san-carlos/despues-fachada-03.png', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/verbena/lobby-06.png',
    title: 'Proyecto la Verbena Construcción de CEDI',
    tag: 'Construcción',
    loc: 'Verbena · 3360 m² · 2022',
    desc: 'Proyecto llave en mano para la construcción de un Centro de Distribución (CEDI) de 3,360 m² en La Verbena. La obra civil abarcó desde la preparación del terreno hasta la ejecución de estructuras industriales de gran luz, techumbres de alta resistencia y la configuración técnica del área de almacenamiento masivo con sistemas de racks optimizados. Además de la zona operativa, se desarrollaron espacios complementarios que incluyen áreas de trabajo administrativo, núcleos de servicios sanitarios de alta demanda y un lobby de acceso contemporáneo.',
    short: '04 · CONSTRUCCIÓN',
    gallery: [
      { src: '/assets/proyectos/verbena/racks-01.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/racks-02.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/techo-03.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/bannos-04.png', label: 'Después' },
      { src: '/assets/proyectos/verbena/area-trabajo-05.png', label: 'Después' },
    ],
  },
  {
    img: '/assets/proyectos/telecomunicaciones/torre-01.png',
    title: 'Torre de Celosía 60m Cordillera',
    tag: 'Torre autosoportada',
    loc: 'Guanacaste · 2025',
    desc: 'Diseño, fabricación y montaje de una torre de celosía autosoportada de 60 metros para ampliar la cobertura 4G en el norte del país. Proyecto entregado a un operador de telecomunicaciones bajo nuestra línea especializada de torres.',
    short: '05 · TORRES',
    gallery: [
        { src: '/assets/proyectos/telecomunicaciones/torre-03.png', label: 'Después' },
        { src: '/assets/proyectos/telecomunicaciones/torre-02.png', label: 'Después' },
        { src: '/assets/proyectos/telecomunicaciones/torre-04.png', label: 'Después' },
        { src: '/assets/proyectos/telecomunicaciones/torre-01.png', label: 'Después' },
        
    ],
  },
   {
    img: '/assets/proyectos/casa/fachada-casa.png',
    title: 'Residencia Unifamiliar',
    tag: 'Diseño Residencial Contemporáneo',
    loc: 'San José · 200 m² · 2025',
    desc: 'Proyecto residencial de una planta fundamentado en el racionalismo formal y la optimización climática. El diseño destaca por una volumetría limpia en estuco blanco, interceptada por un sistema de cubiertas multi-ángulo con lucernarios triangulares que favorecen la iluminación cenital. La fachada oeste integra una celosía metálica horizontal exenta para el control de la radiación solar directa y la ventilación cruzada pasiva. El emplazamiento se complementa con un tratamiento de paisaje xerófilo de bajo mantenimiento y pavimentos articulados de alta resistencia en accesos vehicular y peatonal.',
    short: '06 · RESIDENCIAL',
    gallery: [
        { src: '/assets/proyectos/casa/cocina-casa.png', label: 'Después' },
        { src: '/assets/proyectos/casa/banno-casa.png', label: 'Después' },
        { src: '/assets/proyectos/casa/entrada-casa.png', label: 'Después' },
    ],
  }
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