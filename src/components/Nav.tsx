import { useEffect, useState } from 'react';

type Lang = 'es' | 'en';

export default function Nav() {
  const [lang, setLang] = useState<Lang>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('novosti-lang') as Lang | null;
    const nextLang = saved === 'en' ? 'en' : 'es';
    setLang(nextLang);
  }, []);

  useEffect(() => {
    const i18nEls = document.querySelectorAll<HTMLElement>('[data-en]');
    i18nEls.forEach((el) => {
      const savedEs = el.dataset.es ?? el.textContent ?? '';
      el.dataset.es = savedEs;
      const nextText = lang === 'en' ? el.dataset.en : savedEs;
      if (nextText) {
        el.textContent = nextText;
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('novosti-lang', lang);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      nav.classList.toggle('scrolled', window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#top" aria-label="Novosti">
          <img src="/assets/novosti-logo-transparent.png" alt="Novosti Construction Company" />
        </a>

        <nav className={`nav-links${isMenuOpen ? ' is-open' : ''}`} aria-label="Principal">
          <a href="#about" data-en="About">Nosotros</a>
          <a href="#services" data-en="Services">Servicios</a>
          <a href="#projects" data-en="Projects">Proyectos</a>
          <a href="#process" data-en="Process">Proceso</a>
          <a href="#coverage" data-en="Coverage">Cobertura</a>
          <a href="#contact" data-en="Contact">Contacto</a>
        </nav>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Idioma">
            <button type="button" data-lang="es" className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
            <button type="button" data-lang="en" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#contact" className="btn btn-gold" data-en="Get a quote">Cotizar</a>
          <button
            className="nav-burger"
            id="burger"
            aria-label="Menú"
            type="button"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
