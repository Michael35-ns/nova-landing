import { useEffect, useState } from 'react';

export function useI18n(defaultLang: 'es' | 'en' = 'es') {
  const [lang, setLang] = useState<'es' | 'en'>(defaultLang);

  useEffect(() => {
    const i18nEls = document.querySelectorAll('[data-en]');
    i18nEls.forEach((el) => {
      // store the original ES content in data-es only once
      if (!el.hasAttribute('data-es')) el.setAttribute('data-es', el.textContent || '');
    });
    const phEls = document.querySelectorAll('[data-ph]');
    phEls.forEach((el) => {
      if (!el.hasAttribute('data-ph-es')) {
        const ph = (el as HTMLElement).getAttribute('placeholder') || (el as HTMLElement).dataset.ph || '';
        el.setAttribute('data-ph-es', ph);
      }
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';
    const i18nEls = document.querySelectorAll('[data-en]');
    i18nEls.forEach((el) => {
      const es = el.getAttribute('data-es');
      const en = el.getAttribute('data-en');
      const val = lang === 'en' && en ? en : es || '';
      if (val != null && (el as HTMLElement).textContent !== val) (el as HTMLElement).textContent = val;
    });
    const phEls = document.querySelectorAll('[data-ph]');
    phEls.forEach((el) => {
      const en = (el as HTMLElement).dataset.phEn;
      const es = (el as HTMLElement).getAttribute('data-ph-es') || '';
      if (lang === 'en' && en) (el as HTMLInputElement).setAttribute('placeholder', en);
      else (el as HTMLInputElement).setAttribute('placeholder', es);
    });
    try { localStorage.setItem('novosti-lang', lang); } catch (e) {}
  }, [lang]);

  useEffect(() => {
    try {
      const saved = (localStorage.getItem('novosti-lang') as 'es' | 'en' | null) || null;
      if (saved) setLang(saved);
    } catch (e) {}
  }, []);

  return { lang, setLang }; 
}
