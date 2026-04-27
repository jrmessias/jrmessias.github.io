import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Skills({ lang }) {
  return (
    <Section id="skills" eyebrow={COPY.section_index.skills[lang]} title={COPY.sections.skills[lang]}>
      <div className="grid md:grid-cols-2 gap-6">
        {CV_DATA.skills.map((g, i) => (
          <Reveal key={g.group.en} delay={i * 60} className="h-full">
            <div className="group relative rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/40 dark:bg-white/2 hover:border-(--accent)/40 transition-colors h-full flex flex-col">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{g.group[lang]}</h3>
                <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2 flex-1">
                {g.items.map((s) => (
                  <span key={s} className="inline-flex items-center h-7 px-3 rounded-full text-[12px] text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 border border-transparent hover:border-(--accent)/40 hover:text-(--accent) transition-colors">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
