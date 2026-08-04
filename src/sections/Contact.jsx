import { useState, useEffect, useRef } from 'react';
import { CV_DATA, COPY } from '../data.js';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { Icon } from '../components/Icon.jsx';

const FIELD = 'w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:border-(--accent-ink)';

function Modal({ isOpen, onClose, lang }) {
  const f = COPY.contact.form;
  const dialogRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // showModal() is what buys us Esc-to-close, focus trapping, initial focus and
  // an inert background — none of which a plain <div> overlay had.
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen && !el.open) el.showModal();
    if (!isOpen && el.open) el.close();
    if (!isOpen) {
      setStatus('idle');
      setError('');
      setForm({ name: '', email: '', message: '' });
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('https://submit-form.com/iGLnOTgxF', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });
      if (!res.ok) throw new Error('fail');
      setStatus('sent');
    } catch {
      setStatus('idle');
      setError(f.error[lang]);
    }
  };

  // A click on the backdrop lands on the <dialog> element itself, never on its content.
  const onBackdropClick = (e) => { if (e.target === dialogRef.current) onClose(); };

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={onBackdropClick} aria-labelledby="contact-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-2xl p-6 shadow-2xl">
      <button onClick={onClose} aria-label={COPY.a11y.close[lang]}
        className="absolute top-4 right-4 w-8 h-8 rounded-full grid place-items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <Icon.close width="18" height="18" />
      </button>
      <h2 id="contact-modal-title" className="text-xl font-medium mb-6">{COPY.nav.contact[lang]}</h2>
      {status === 'sent' ? (
        <p role="status" className="py-4 text-sm text-neutral-700 dark:text-neutral-300">{f.sent_msg[lang]}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="sr-only">{f.name[lang]}</span>
            <input type="text" name="name" autoComplete="name" placeholder={f.name[lang]} required
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={FIELD} />
          </label>
          <label className="block">
            <span className="sr-only">{f.email[lang]}</span>
            <input type="email" name="email" autoComplete="email" placeholder={f.email[lang]} required
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={FIELD} />
          </label>
          <label className="block">
            <span className="sr-only">{f.message[lang]}</span>
            <textarea name="message" placeholder={f.message[lang]} required rows={4}
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${FIELD} resize-none`} />
          </label>
          {error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <button type="submit" disabled={status === 'sending'}
            className="w-full py-3 rounded-xl bg-(--accent-ink) text-(--accent-fg) font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {status === 'sending' ? f.sending[lang] : f.send[lang]}
          </button>
        </form>
      )}
    </dialog>
  );
}

export default function Contact({ lang }) {
  const [modalOpen, setModalOpen] = useState(false);

  const items = [
    { key: 'whatsapp', label: 'WhatsApp', value: '+55 49 98819-8409', icon: Icon.whatsapp, url: CV_DATA.contact.whatsapp },
    { key: 'github', label: 'GitHub', value: 'github.com/jrmessias', icon: Icon.github, url: CV_DATA.contact.github },
    { key: 'figma', label: 'Figma', value: 'figma.com/@jrmessias', icon: Icon.figma, url: CV_DATA.contact.figma },
    { key: 'lattes', label: 'Lattes', value: 'lattes.cnpq.br', icon: Icon.lattes, url: CV_DATA.contact.lattes },
    { key: 'instagram', label: 'Instagram', value: '@i.am.jrmessias', icon: Icon.instagram, url: CV_DATA.contact.instagram },
    { key: 'email', label: 'Email', value: 'jrmessias@gmail.com', icon: Icon.email, action: () => setModalOpen(true) },
  ];

  return (
    <>
      <Section id="contact" eyebrow={COPY.section_index.contact[lang]} title={COPY.sections.contact[lang]}>
        <Reveal>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mb-10 text-pretty">{COPY.contact.lead[lang]}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => {
            // Links and the modal trigger differ only in the tag and its props.
            const Tag = it.url ? 'a' : 'button';
            const tagProps = it.url
              ? { href: it.url, target: '_blank', rel: 'noreferrer' }
              : { type: 'button', onClick: it.action, 'aria-haspopup': 'dialog' };
            return (
              <Reveal key={it.key} delay={i * 70}>
                <Tag {...tagProps} data-print-value={it.value}
                  className="contact-card group w-full text-left flex items-center justify-between gap-4 p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/2 hover:border-(--accent)/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 min-w-0">
                    <span className="shrink-0 w-10 h-10 rounded-full grid place-items-center bg-(--accent)/10 text-(--accent-ink) print-icon">
                      <it.icon width="18" height="18" />
                    </span>
                    <span className="min-w-0">
                      <span className="contact-label block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">{it.label}</span>
                      <span className="contact-value block text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">{it.value}</span>
                    </span>
                  </span>
                  <span aria-hidden="true" className="shrink-0 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 grid place-items-center text-neutral-500 group-hover:bg-(--accent-ink) group-hover:border-(--accent-ink) group-hover:text-(--accent-fg) transition-all">
                    <Icon.arrow width="14" height="14" />
                  </span>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} lang={lang}/>
    </>
  );
}
