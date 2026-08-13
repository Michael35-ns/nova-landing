import { useEffect } from 'react';

export function useReveal(selector = '.reveal', options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, options);
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, JSON.stringify(options)]);
}
