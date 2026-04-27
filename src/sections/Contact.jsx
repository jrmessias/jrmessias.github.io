import { useState, useEffect } from 'react';
import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { Icon } from '../components/Icon.jsx';

function Modal({ isOpen, onClose, lang }) {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://submit-form.com/iGLnOTgxF', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });
      if (res.ok) { setStatus('sent'); } else { throw new Error('fail'); }
    } catch {
      setStatus('idle');
      alert('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full grid place-items-center text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-6">{COPY.nav.contact[lang]}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="text" placeholder={COPY.contact.form.name[lang]} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-(--accent)" />
          </div>
          <div>
            <input type="email" placeholder={COPY.contact.form.email[lang]} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-(--accent)" />
          </div>
          <div>
            <textarea placeholder={COPY.contact.form.message[lang]} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4}
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-(--accent) resize-none" />
          </div>
          <button type="submit" disabled={status === 'sending' || status === 'sent'}
            className="w-full py-3 rounded-xl bg-(--accent) text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {status === 'idle' && COPY.contact.form.send[lang]}
            {status === 'sending' && COPY.contact.form.sending[lang]}
            {status === 'sent' && COPY.contact.form.sent[lang]}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Contact({ lang }) {
  const [modalOpen, setModalOpen] = useState(false);

  const items = [
    { key: 'whatsapp', label: 'WhatsApp', value: '+55 49 98819-8409', icon: Icon.whatsapp, url: CV_DATA.contact.whatsapp },
    { key: 'github', label: 'GitHub', value: 'github.com/jrmessias', icon: Icon.github, url: CV_DATA.contact.github },
    { key: 'figma', label: 'Figma', value: 'figma.com/@jrmessias', icon: Icon.figma, url: CV_DATA.contact.figma },
    { key: 'lattes', label: 'Lattes', value: 'lattes.cnpq.br', icon: Icon.lattes, url: CV_DATA.contact.lattes },
    { key: 'instagram', label: 'Instagram', value: '@imj.dev', icon: Icon.instagram, url: CV_DATA.contact.instagram },
    { key: 'email', label: 'Email', value: 'jrmessias@gmail.com', icon: Icon.email, action: () => setModalOpen(true) },
  ];

  return (
    <>
      <Section id="contact" eyebrow={COPY.section_index.contact[lang]} title={COPY.sections.contact[lang]}>
        <Reveal>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mb-10 text-pretty">{COPY.contact.lead[lang]}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.key} delay={i * 70}>
              {it.url ? (
                <a href={it.url} target="_blank" rel="noreferrer" data-print-value={it.value}
                   className="contact-card group flex items-center justify-between gap-4 p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/2 hover:border-(--accent)/50 hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-10 h-10 rounded-full grid place-items-center bg-(--accent)/10 text-(--accent) print-icon">
                      <it.icon width="18" height="18" />
                    </span>
                    <div className="min-w-0">
                      <div className="contact-label text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">{it.label}</div>
                      <div className="contact-value text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">{it.value}</div>
                    </div>
                  </div>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 grid place-items-center text-neutral-500 group-hover:bg-(--accent) group-hover:border-(--accent) group-hover:text-white transition-all">
                    <Icon.arrow width="14" height="14" />
                  </span>
                </a>
              ) : (
                <button onClick={it.action} data-print-value={it.value}
                  className="contact-card group flex items-center justify-between gap-4 p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/2 hover:border-(--accent)/50 hover:-translate-y-0.5 transition-all w-full">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-10 h-10 rounded-full grid place-items-center bg-(--accent)/10 text-(--accent) print-icon">
                      <it.icon width="18" height="18" />
                    </span>
                    <div className="min-w-0">
                      <div className="contact-label text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 text-left">{it.label}</div>
                      <div className="contact-value text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">{it.value}</div>
                    </div>
                  </div>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 grid place-items-center text-neutral-500 group-hover:bg-(--accent) group-hover:border-(--accent) group-hover:text-white transition-all">
                    <Icon.arrow width="14" height="14" />
                  </span>
                </button>
              )}
            </Reveal>
          ))}
        </div>
      </Section>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
    </>
  );
}
