/* ============================================================
   NOVOSTI — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Bilingual (ES default, EN via data-en) ---------- */
  const i18nEls = document.querySelectorAll('[data-en]');
  i18nEls.forEach((el) => { el.dataset.es = el.textContent; });
  // placeholder fields
  const phEls = document.querySelectorAll('[data-ph]');
  phEls.forEach((el) => { el.dataset.phEs = el.getAttribute('placeholder') || el.dataset.ph; });

  function setLang(lang) {
    document.documentElement.lang = lang;
    i18nEls.forEach((el) => {
      const val = lang === 'en' ? el.dataset.en : el.dataset.es;
      if (val != null) el.textContent = val;
    });
    // placeholders: only ES provided; for EN use data-ph-en if present else keep
    phEls.forEach((el) => {
      const en = el.dataset.phEn;
      if (lang === 'en' && en) el.setAttribute('placeholder', en);
      else el.setAttribute('placeholder', el.dataset.phEs);
    });
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('novosti-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  let savedLang = 'es';
  try { savedLang = localStorage.getItem('novosti-lang') || 'es'; } catch (e) {}
  if (savedLang === 'en') setLang('en');

  /* ---------- Nav: scrolled state + mobile menu ---------- */
  (function setupNavScroll(){
    const init = () => {
      const navEl = document.getElementById('nav');
      if (!navEl) return;
      const onScroll = () => navEl.classList.toggle('scrolled', window.scrollY > 12);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
  })();

  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (!links) return;
      const open = links.classList.toggle('is-open');
      // Reflect state for assistive tech
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      // Fallback for environments that don't have .is-open styles yet:
      const cs = getComputedStyle(links);
      if (open && (cs.display === 'none' || cs.visibility === 'hidden')) {
        links.style.display = 'flex';
        links.style.position = 'absolute';
        links.style.top = '76px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.flexDirection = 'column';
        links.style.background = '#fff';
        links.style.padding = '18px var(--gutter)';
        links.style.borderBottom = '1px solid var(--line-soft)';
        links.style.boxShadow = 'var(--shadow-sm)';
        links.style.gap = '14px';
      } else if (!open) {
        // remove any fallback inline styles so CSS can take over
        links.style.display = '';
        links.style.position = '';
        links.style.top = '';
        links.style.left = '';
        links.style.right = '';
        links.style.flexDirection = '';
        links.style.background = '';
        links.style.padding = '';
        links.style.borderBottom = '';
        links.style.boxShadow = '';
        links.style.gap = '';
      }
    });
    document.querySelectorAll('.nav-links a').forEach((a) =>
      a.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          const links = document.querySelector('.nav-links');
          links && links.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
        }
      })
    );
  }

  /* ---------- Project carousel + lightbox ---------- */
  const projStrip = document.getElementById('projStrip');
  const projTiles = projStrip ? [...projStrip.querySelectorAll('.proj-tile')] : [];
  const pcpFill = document.getElementById('pcpFill');
  const pcpCount = document.getElementById('pcpCount');

  function updateProgress() {
    if (!projStrip || !pcpFill) return;
    const total = projTiles.length || 1;
    const tile = projTiles[0];
    const tileW = tile ? tile.offsetWidth : 0;
    const idx = tileW ? Math.round(projStrip.scrollLeft / tileW) : 0;
    const visible = Math.max(1, Math.floor(projStrip.clientWidth / Math.max(1, tileW)));
    const pos = Math.min(idx + 1, total);
    pcpCount.textContent = String(pos).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    const fillW = Math.min(100, ((idx + visible) / total) * 100);
    const fillL = (idx / total) * 100;
    pcpFill.style.left = fillL + '%';
    pcpFill.style.width = (fillW - fillL) + '%';
  }
  if (projStrip) {
    projStrip.addEventListener('scroll', () => requestAnimationFrame(updateProgress));
    window.addEventListener('resize', updateProgress);
    updateProgress();

    document.querySelectorAll('.pc-arrow').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dir = btn.classList.contains('next') ? 1 : -1;
        const tileW = projTiles[0] ? projTiles[0].offsetWidth : 280;
        projStrip.scrollBy({ left: dir * tileW, behavior: 'smooth' });
      });
    });
  }

  /* Lightbox */
  const lb = document.getElementById('projLb');
  const lbImg = document.getElementById('lbImg');
  const lbTag = document.getElementById('lbTag');
  const lbTitle = document.getElementById('lbTitle');
  const lbLoc = document.getElementById('lbLoc');
  const lbDesc = document.getElementById('lbDesc');

  function openLb(data) {
    lbImg.src = data.img || '';
    lbTag.textContent = data.tag || '';
    lbTitle.textContent = data.title || '';
    lbLoc.textContent = data.loc || '';
    lbDesc.textContent = data.desc || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  projTiles.forEach((t) => {
    t.addEventListener('click', () => {
      openLb({
        img: t.dataset.img,
        tag: t.dataset.tag,
        title: t.dataset.title,
        loc: t.dataset.loc,
        desc: t.dataset.desc
      });
    });
  });
  if (lb) {
    lb.querySelectorAll('[data-lb-close]').forEach((el) =>
      el.addEventListener('click', closeLb));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLb();
    });
  }

  /* ---------- Dark-mode hero image swap ---------- */
  const heroTowerImg = document.querySelector('.v-split .v-split-tower img');
  const HERO_LIGHT = 'assets/hero-tower.png';
  const HERO_DARK  = 'assets/hero-tower-dark.png';

  const crMapImg   = document.getElementById('crMapPhoto');
  const CR_LIGHT   = 'assets/cr-map-relief.png';
  const CR_DARK    = 'assets/cr-map-dark.png';

  function swapImg(el, next, animate) {
    if (!el || el.src.endsWith(next)) return;
    if (animate) {
      el.classList.add('is-swapping');
      setTimeout(() => { el.src = next; el.classList.remove('is-swapping'); }, 320);
    } else { el.src = next; }
  }

  function applyHeroImage(mode, animate) {
    swapImg(heroTowerImg, mode === 'dark' ? HERO_DARK : HERO_LIGHT, animate);
    swapImg(crMapImg,     mode === 'dark' ? CR_DARK   : CR_LIGHT,   animate);
  }

  const modeObserver = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      if (m.attributeName === 'data-mode') {
        applyHeroImage(document.body.getAttribute('data-mode'), true);
      }
    });
  });
  modeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-mode'] });
  applyHeroImage(document.body.getAttribute('data-mode'), false);

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { animateCount(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
  }

  /* ---------- Coverage map pings ---------- */
  const style = document.createElement('style');
  style.textContent =
    '.cov-nodes .ping{transform-box:fill-box;transform-origin:center;animation:pingA 3s ease-out infinite}' +
    '.cov-nodes g:nth-child(2) .ping{animation-delay:.4s}' +
    '.cov-nodes g:nth-child(3) .ping{animation-delay:.8s}' +
    '.cov-nodes g:nth-child(4) .ping{animation-delay:1.2s}' +
    '.cov-nodes g:nth-child(5) .ping{animation-delay:1.6s}' +
    '@keyframes pingA{0%{r:5;opacity:.9}100%{r:34;opacity:0}}' +
    '@media (prefers-reduced-motion: reduce){.cov-nodes .ping{animation:none;opacity:0}}';
  document.head.appendChild(style);

  /* ---------- Form ---------- */
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      let ok = true;
      [name, email].forEach((f) => {
        if (!f.value.trim()) { f.style.borderColor = '#c0392b'; ok = false; }
        else f.style.borderColor = '';
      });
      if (email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        email.style.borderColor = '#c0392b'; ok = false;
      }
      if (!ok) return;
      form.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    });
  }
})();
