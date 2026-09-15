import { COPY } from '../data.js';
import { Icon } from './Icon.jsx';

// Shared by the site header and the standalone /cartao page.
export function LangToggle({ lang, setLang }) {
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

export function ThemeToggle({ dark, setDark, lang }) {
  return (
    <button onClick={() => setDark(!dark)}
      aria-label={dark ? COPY.a11y.theme_to_light[lang] : COPY.a11y.theme_to_dark[lang]}
      className="w-9 h-9 rounded-full grid place-items-center border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
      {dark ? <Icon.sun width="16" height="16" /> : <Icon.moon width="16" height="16" />}
    </button>
  );
}
