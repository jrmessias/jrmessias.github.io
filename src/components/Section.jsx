import Reveal from './Reveal.jsx';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.14em] text-(--accent) mb-4">
            <span className="w-6 h-px bg-(--accent)" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 mb-14 text-balance max-w-3xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
