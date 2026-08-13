import { useEffect } from 'react';

export function useCounters(selector = '[data-count]') {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => {
        const target = Number((el as HTMLElement).dataset.count || 0);
        (el as HTMLElement).textContent = String(target);
      });
      return;
    }
    const co = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          animateCount(en.target as HTMLElement);
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.6 });
    els.forEach((el) => co.observe(el));
    function animateCount(el: HTMLElement) {
      const target = parseFloat(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      const dur = 1400;
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(tick);
    }
    return () => co.disconnect();
  }, [selector]);
}
