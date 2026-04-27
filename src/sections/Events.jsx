import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { Icon } from '../components/Icon.jsx';

export default function Events({ lang }) {
  return (
    <Section id="events" eyebrow={COPY.section_index.events[lang]} title={COPY.sections.events[lang]}>
      <div className="divide-y divide-black/5 dark:divide-white/5 border-y border-black/5 dark:border-white/5">
        {CV_DATA.events.map((e, i) => (
          <Reveal key={e.title.en + e.year} delay={(i % 6) * 50}>
            <a href={e.url} target={e.url && e.url !== '#' ? '_blank' : undefined} rel="noreferrer"
              className="group flex items-start gap-5 py-5 hover:bg-black/2 dark:hover:bg-white/2 transition-colors px-2 -mx-2 rounded-lg">
              <div className="shrink-0 w-14 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 tabular-nums pt-1">{e.year}</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 leading-snug group-hover:text-(--accent) transition-colors">
                  {e.title[lang]}
                  <span className="ml-2 inline-flex items-center h-5 px-2 rounded-sm text-[10px] font-mono uppercase tracking-widest text-(--accent) bg-(--accent)/10 border border-(--accent)/20 align-middle">
                    {e.role[lang]}
                  </span>
                </h3>
                <div className="mt-1 text-[13px] text-neutral-500 dark:text-neutral-400">{e.place}</div>
              </div>
              <span className="shrink-0 text-neutral-400 group-hover:text-(--accent) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all pt-1">
                <Icon.arrow width="14" height="14" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
