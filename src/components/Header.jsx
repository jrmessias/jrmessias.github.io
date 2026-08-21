import { useEffect, useRef, useState } from 'react';
import { COPY } from '../data.js';
import { Icon } from './Icon.jsx';

const SECTION_IDS = ['about', 'skills', 'experience', 'education', 'projects', 'events', 'contact'];

/** Highlights the nav item whose section is crossing a band near the top of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function LangToggle({ lang, setLang }) {
  const a = COPY.a11y;
  return (
    <div role="group" aria-label={a.lang_group[lang]}
      className="relative flex items-center h-9 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-[11px] font-medium p-0.5">
      <span aria-hidden="true"
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-(--accent-ink) transition-transform duration-200"
        style={{ transform: lang === 'en' ? 'translateX(100%)' : 'translateX(0%)' }} />
      {['pt', 'en'].map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          aria-label={l === 'pt' ? a.lang_pt[lang] : a.lang_en[lang]}
          className={`relative z-10 w-8 h-8 rounded-full grid place-items-center uppercase tracking-wide transition-colors ${
            lang === l ? 'text-(--accent-fg)' : 'text-neutral-600 dark:text-neutral-400'
          }`}>{l}</button>
      ))}
    </div>
  );
}

function ThemeToggle({ dark, setDark, lang }) {
  return (
    <button onClick={() => setDark(!dark)}
      aria-label={dark ? COPY.a11y.theme_to_light[lang] : COPY.a11y.theme_to_dark[lang]}
      className="w-9 h-9 rounded-full grid place-items-center border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
      {dark ? <Icon.sun width="16" height="16" /> : <Icon.moon width="16" height="16" />}
    </button>
  );
}

export default function Header({ lang, setLang, dark, setDark }) {
  const t = (k) => COPY.nav[k][lang];
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const active = useActiveSection();
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dismiss the mobile menu on Escape or on a click outside the header.
  useEffect(() => {
    if (!openMobile) return;
    const onKey = (e) => e.key === 'Escape' && setOpenMobile(false);
    const onDown = (e) => { if (!headerRef.current?.contains(e.target)) setOpenMobile(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [openMobile]);

  const links = SECTION_IDS.map((id) => [id, t(id)]);

  return (
    <header ref={headerRef} className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-black/5 dark:border-0' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="-bottom-3 -right-3 w-7 h-7 bg-(--accent) text-white place-items-center self-center shadow-lg box-squircle squircle">
            <Icon.m width="40" height="40" className="mt-1" />
          </div>
          <span className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100 hidden sm:inline">Israel Messias <span className="text-(--accent-ink)">Jr.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}
              className={`relative px-3 py-1.5 text-[13px] transition-colors ${
                active === id
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
              }`}>
              {label}
              {active === id && (
                <span aria-hidden="true" className="absolute left-3 right-3 -bottom-0.5 h-px bg-(--accent-ink)" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle dark={dark} setDark={setDark} lang={lang} />
          <button className="md:hidden ml-1 w-9 h-9 rounded-full grid place-items-center border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300"
            onClick={() => setOpenMobile((v) => !v)} aria-expanded={openMobile} aria-controls="mobile-nav"
            aria-label={openMobile ? COPY.a11y.menu_close[lang] : COPY.a11y.menu_open[lang]}>
            {openMobile ? <Icon.close width="18" height="18" /> : <Icon.menu width="18" height="18" />}
          </button>
        </div>
      </div>
      {openMobile && (
        <div id="mobile-nav" className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl">
          <div className="px-6 py-2 flex flex-col">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpenMobile(false)}
                aria-current={active === id ? 'true' : undefined}
                className={`py-3 text-sm border-b border-black/5 dark:border-white/5 last:border-0 ${
                  active === id ? 'text-(--accent-ink) font-medium' : 'text-neutral-700 dark:text-neutral-300'
                }`}>{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
