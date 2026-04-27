import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About({ lang }) {
  return (
    <Section id="about" eyebrow={COPY.section_index.about[lang]} title={COPY.sections.about[lang]}>
      <div className="grid md:grid-cols-5 gap-10">
        <Reveal className="md:col-span-3">
          <p className="text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 text-pretty">{CV_DATA.about[lang]}</p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-2">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/40 dark:bg-white/2">
            <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-4">
              {lang === 'pt' ? 'Atualmente' : 'Currently'}
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--accent) shrink-0" />
                <div>
                  <div className="text-neutral-900 dark:text-neutral-100 font-medium">iopoint Tecnologia</div>
                  <div className="text-neutral-500 dark:text-neutral-400">{CV_DATA.identity.role[lang]}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--accent) shrink-0" />
                <div>
                  <div className="text-neutral-900 dark:text-neutral-100 font-medium">{lang === 'pt' ? 'Eventos & comunidade' : 'Events & community'}</div>
                  <div className="text-neutral-500 dark:text-neutral-400">Startup Weekends · Hackathons</div>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
