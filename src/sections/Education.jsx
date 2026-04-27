import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Education({ lang }) {
  return (
    <Section id="education" eyebrow={COPY.section_index.education[lang]} title={COPY.sections.education[lang]}>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
        {CV_DATA.education.map((e, i) => (
          <Reveal key={e.title.en + e.inst} delay={(i % 6) * 50}>
            <div className="group flex items-start gap-5 py-5 border-b border-black/5 dark:border-white/5">
              <div className="shrink-0 w-14 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 tabular-nums pt-1">{e.year}</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 leading-snug group-hover:text-(--accent) transition-colors">{e.title[lang]}</h3>
                <div className="mt-1 text-[13px] text-neutral-500 dark:text-neutral-400">{e.degree[lang]} · {e.inst}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
