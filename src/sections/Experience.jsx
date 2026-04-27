import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Experience({ lang }) {
  return (
    <Section id="experience" eyebrow={COPY.section_index.experience[lang]} title={COPY.sections.experience[lang]}>
      <ol className="relative border-l border-black/10 dark:border-white/10 ml-2">
        {CV_DATA.experience.map((e, i) => (
          <Reveal as="li" delay={i * 80} key={e.company + e.period.en} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-(--accent) ring-4 ring-white dark:ring-neutral-950" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">{e.period[lang]}</span>
              <span className="text-[11px] text-neutral-400 dark:text-neutral-500">·</span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{e.place}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
              {e.title[lang]} <span className="text-neutral-400 dark:text-neutral-500 font-normal">· {e.company}</span>
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl">{e.description[lang]}</p>
            {e.tags && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span key={t} className="inline-flex items-center h-6 px-2.5 rounded-md text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10">{t}</span>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
