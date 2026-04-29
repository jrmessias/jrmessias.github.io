import { CV_DATA, COPY } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import { Icon } from '../components/Icon.jsx';

export default function Hero({ lang }) {
  const d = CV_DATA;
  const c = COPY.hero;
  return (
    <section id="top" className="relative pt-32 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 75%)',
        }} />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full border border-(--accent)/30 bg-(--accent)/10 text-(--accent) text-[11px] font-medium">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-(--accent) animate-ping opacity-60" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-(--accent)" />
                </span>
                {c.available[lang]}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl md:text-7xl font-medium tracking-tight leading-[1.02] text-neutral-900 dark:text-neutral-50">
                {d.identity.name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-(--accent)">{d.identity.name.split(' ').slice(-1)[0]}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-snug text-balance max-w-2xl">{d.identity.tagline[lang]}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-neutral-500 dark:text-neutral-400">
                <span className="inline-flex items-center gap-1.5">
                  <Icon.dot width="6" height="6" className="text-(--accent)" />
                  {d.identity.role[lang]} · {d.identity.company}
                </span>
                <span>{d.identity.location[lang]}</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#contact"
                   className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-(--accent) dark:bg-(--accent) text-white dark:text-neutral-900 text-sm font-medium hover:bg-(--accent)/80 hover:text-black dark:hover:bg-(--accent)/80 dark:hover:text-white transition-colors">
                  {c.cta_contact[lang]}
                  <Icon.arrow width="15" height="15" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                </a>
                <button onClick={() => window.print()}
                    className="cursor-pointer inline-flex items-center gap-2 h-11 rounded-full text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-emerald-400 dark:to-black animate-rotate-border p-[1px]"
                >
                  <div className="inline-flex items-center gap-2 h-10 px-5 w-full rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 py-[1px]">
                    <Icon.download width="15" height="15"/>
                    {c.cta_cv[lang]}
                  </div>
                </button>
              </div>
            </Reveal>
            {/*<Reveal delay={400}>*/}
            {/*  <div className="mt-16 grid grid-cols-3 gap-8 max-w-md border-t border-black/10 dark:border-white/10 pt-6">*/}
            {/*    {d.stats.map((s) => (*/}
            {/*      <div key={s.value}>*/}
            {/*        <div className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">{s.value}</div>*/}
            {/*        <div className="text-[11px] uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400 mt-1">{s.label[lang]}</div>*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</Reveal>*/}
          </div>
          <Reveal delay={240}>
            <div className="relative hidden md:block">
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <img src="/assets/foto.png" alt={d.identity.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-(--accent) text-white grid place-items-center shadow-lg">
                <Icon.code width="22" height="22" />
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={500}>
          <div className="mt-20 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500 print:hidden">
            <Icon.down width="12" height="12" className="animate-bounce" />
            {c.scroll[lang]}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
