import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { Icon } from '../components/Icon.jsx';

export default function Projects({ lang }) {
  return (
    <Section id="projects" eyebrow={COPY.section_index.projects[lang]} title={COPY.sections.projects[lang]}>
      <div className="grid md:grid-cols-2 gap-6">
        {CV_DATA.projects.map((p, i) => (
          <Reveal key={p.url} delay={i * 80}>
            <a href={p.url} target="_blank" rel="noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/2 hover:border-(--accent)/50 transition-all hover:-translate-y-0.5 h-full">
               <div className="relative aspect-16/10 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                 <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                 <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 10px)' }} />
               </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">{p.name}</h3>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 grid place-items-center text-neutral-500 group-hover:bg-(--accent) group-hover:border-(--accent) group-hover:text-white transition-all">
                    <Icon.arrow width="14" height="14" />
                  </span>
                </div>
                <p className="mt-2 text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">{p.description[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center h-6 px-2.5 rounded-md text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
