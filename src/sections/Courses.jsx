import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Courses({ lang }) {
  return (
    <Section id="courses" eyebrow={COPY.section_index.courses[lang]} title={COPY.sections.courses[lang]}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
        {CV_DATA.courses.map((c, i) => (
          <Reveal key={c.title.en + i} delay={(i % 6) * 50}>
            <div className="h-full p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900/30 hover:border-(--accent)/30 hover:bg-(--accent)/5 transition-colors flex flex-col">
              <h3 className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                {c.title[lang]}
              </h3>
              <div className="mt-2 text-[12px] text-neutral-500 dark:text-neutral-400">{c.institution}</div>
              <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-500">
                <span className="font-mono">{c.year}</span>
                {c.expire && <span>· {c.expire}</span>}
                {c.hours && <span>· {c.hours}h</span>}
              </div>
              <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}