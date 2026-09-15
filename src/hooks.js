import { useEffect, useState } from 'react';

/**
 * Language + theme state shared by every entry point (home and /cartao).
 * Both persist in localStorage and are read before first paint by the inline
 * script in each HTML file.
 */
export function useLangTheme() {
  const [lang, setLang] = useState(() => localStorage.getItem('cv-lang') || 'pt');
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('cv-dark');
    if (saved != null) return saved === '1';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('cv-dark', dark ? '1' : '0');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('cv-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Printing always uses the light palette.
  useEffect(() => {
    const before = () => document.documentElement.classList.remove('dark');
    const after = () => { if (dark) document.documentElement.classList.add('dark'); };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, [dark]);

  return { lang, setLang, dark, setDark };
}
