import { useEffect, useState } from 'react';
import { COPY } from '../data.js';
import { Icon } from './Icon.jsx';

function LangToggle({ lang, setLang }) {
  return (
    <div className="relative flex items-center h-9 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-[11px] font-medium p-0.5">
      <span className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-(--accent) transition-transform duration-200"
        style={{ transform: lang === 'en' ? 'translateX(100%)' : 'translateX(0%)' }} />
      {['pt', 'en'].map((l) => (
        <button key={l} onClick={() => setLang(l)}
          className={`relative z-10 w-8 h-8 rounded-full grid place-items-center uppercase tracking-wide transition-colors ${
            lang === l ? 'text-white' : 'text-neutral-600 dark:text-neutral-400'
          }`}>{l}</button>
      ))}
    </div>
  );
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)} aria-label="Toggle theme"
      className="w-9 h-9 rounded-full grid place-items-center border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
      {dark ? <Icon.sun width="16" height="16" /> : <Icon.moon width="16" height="16" />}
    </button>
  );
}

export default function Header({ lang, setLang, dark, setDark }) {
  const t = (k) => COPY.nav[k][lang];
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['about', t('about')],
    ['skills', t('skills')],
    ['experience', t('experience')],
    ['education', t('education')],
    ['projects', t('projects')],
    ['courses', t('courses')],
    ['events', t('events')],
    ['contact', t('contact')],
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-black/5 dark:border-0' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative w-7 h-7 rounded-full bg-(--accent) flex items-center justify-center text-white text-[11px] font-semibold tracking-tight">IMJ</span>
          <span className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100 hidden sm:inline">Israel Messias <span className="text-(--accent)">Jr.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="px-3 py-1.5 text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle dark={dark} setDark={setDark} />
          <button className="md:hidden ml-1 w-9 h-9 rounded-full grid place-items-center border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300"
            onClick={() => setOpenMobile((v) => !v)} aria-label="Menu">
            {openMobile ? <Icon.close width="18" height="18" /> : <Icon.menu width="18" height="18" />}
          </button>
        </div>
      </div>
      {openMobile && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl">
          <div className="px-6 py-2 flex flex-col">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpenMobile(false)}
                className="py-3 text-sm text-neutral-700 dark:text-neutral-300 border-b border-black/5 dark:border-white/5 last:border-0">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
