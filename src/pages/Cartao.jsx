import { useEffect, useRef, useState } from 'react';
import { CV_DATA, COPY } from '../data.js';
import { useLangTheme } from '../hooks.js';
import Footer from '../components/Footer.jsx';
import { Icon } from '../components/Icon.jsx';
import { LangToggle, ThemeToggle } from '../components/Toggles.jsx';
import { copyText, downloadVcard } from '../utils.js';
import { pixPayload } from '../pix.js';

const d = CV_DATA;
const PAGE_URL = 'https://www.jrmessias.com.br/cartao';

function ShareModal({ isOpen, onClose, lang }) {
  const c = COPY.card;
  const dialogRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const text = `${c.share_text[lang]} — ${PAGE_URL}`;

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen && !el.open) el.showModal();
    if (!isOpen && el.open) el.close();
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  const copy = async () => setCopied(await copyText(PAGE_URL));

  const targets = [
    { key: 'whatsapp', label: 'WhatsApp', icon: Icon.whatsapp, url: `https://wa.me/?text=${encodeURIComponent(text)}` },
    { key: 'telegram', label: 'Telegram', icon: Icon.telegram, url: `https://t.me/share/url?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(c.share_text[lang])}` },
    { key: 'facebook', label: 'Facebook', icon: Icon.facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}` },
    { key: 'email', label: 'E-mail', icon: Icon.email, url: `mailto:?subject=${encodeURIComponent(c.share_text[lang])}&body=${encodeURIComponent(text)}` },
  ];

  const onBackdropClick = (e) => { if (e.target === dialogRef.current) onClose(); };

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={onBackdropClick} aria-labelledby="share-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-2xl p-6 shadow-2xl">
      <button onClick={onClose} aria-label={COPY.a11y.close[lang]}
        className="absolute top-4 right-4 w-8 h-8 rounded-full grid place-items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <Icon.close width="18" height="18" />
      </button>
      <h2 id="share-modal-title" className="text-xl font-medium mb-6">{c.share_title[lang]}</h2>
      <div className="grid grid-cols-4 gap-3 mb-4">
        {targets.map((t) => (
          <a key={t.key} href={t.url} target="_blank" rel="noreferrer"
            className="flex flex-col items-center gap-2 py-3 rounded-xl border border-black/10 dark:border-white/10 hover:border-(--accent)/50 transition-colors">
            <span className="w-9 h-9 rounded-full grid place-items-center bg-(--accent)/10 text-(--accent-ink)">
              <t.icon width="18" height="18" />
            </span>
            <span className="text-[11px] text-neutral-600 dark:text-neutral-400">{t.label}</span>
          </a>
        ))}
      </div>
      <button type="button" onClick={copy}
        className="w-full py-3 rounded-xl border border-black/10 dark:border-white/10 text-sm font-medium inline-flex items-center justify-center gap-2 hover:border-(--accent)/50 transition-colors">
        {copied ? <Icon.check width="16" height="16" className="text-(--accent-ink)" /> : <Icon.copy width="16" height="16" />}
        {copied ? c.copied[lang] : c.copy[lang]}
      </button>
      <p className="mt-3 text-center text-[11px] font-mono text-neutral-500 dark:text-neutral-400 break-all">{PAGE_URL}</p>
    </dialog>
  );
}

function PixModal({ isOpen, onClose, lang }) {
  const c = COPY.card.pix;
  const dialogRef = useRef(null);
  const [qr, setQr] = useState('');
  const [copied, setCopied] = useState(false);
  const payload = pixPayload(d.contact.pix);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen && !el.open) el.showModal();
    if (!isOpen && el.open) el.close();
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  // qrcode is ~40 kB; only the visitors who open this modal pay for it.
  useEffect(() => {
    if (!isOpen || qr) return;
    let alive = true;
    import('qrcode')
      .then((m) => m.default.toDataURL(payload, { margin: 1, width: 480, errorCorrectionLevel: 'M' }))
      .then((url) => { if (alive) setQr(url); });
    return () => { alive = false; };
  }, [isOpen, qr, payload]);

  const copy = async () => setCopied(await copyText(d.contact.pix.key));

  const onBackdropClick = (e) => { if (e.target === dialogRef.current) onClose(); };

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={onBackdropClick} aria-labelledby="pix-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-2xl p-6 shadow-2xl">
      <button onClick={onClose} aria-label={COPY.a11y.close[lang]}
        className="absolute top-4 right-4 w-8 h-8 rounded-full grid place-items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <Icon.close width="18" height="18" />
      </button>
      <h2 id="pix-modal-title" className="text-xl font-medium mb-2">{c.title[lang]}</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">{c.hint[lang]}</p>
      <div className="mx-auto w-48 h-48 rounded-xl bg-white grid place-items-center overflow-hidden">
        {qr && <img src={qr} alt="QR Code PIX" width="192" height="192" className="w-full h-full" />}
      </div>
      <p className="mt-4 text-center text-sm font-medium break-all">{d.contact.pix.key}</p>
      <button type="button" onClick={copy}
        className="mt-5 w-full py-3 rounded-xl bg-(--accent-ink) text-(--accent-fg) text-sm font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
        {copied ? <Icon.check width="16" height="16" /> : <Icon.copy width="16" height="16" />}
        {copied ? c.copied[lang] : c.copy[lang]}
      </button>
    </dialog>
  );
}

export default function Cartao() {
  const { lang, setLang, dark, setDark } = useLangTheme();
  const [shareOpen, setShareOpen] = useState(false);
  const [pixOpen, setPixOpen] = useState(false);
  const c = COPY.card;

  const items = [
    { key: 'site', label: c.labels.site[lang], icon: Icon.globe, url: d.contact.site_url },
    { key: 'whatsapp', label: 'WhatsApp', icon: Icon.whatsapp, url: d.contact.whatsapp },
    { key: 'phone', label: c.labels.phone[lang], icon: Icon.phone, url: d.contact.phone_url },
    { key: 'email', label: c.labels.email[lang], icon: Icon.email, url: d.contact.email },
    { key: 'github', label: 'GitHub', icon: Icon.github, url: d.contact.github },
    { key: 'instagram', label: 'Instagram', icon: Icon.instagram, url: d.contact.instagram },
    { key: 'linkedin', label: 'LinkedIn', icon: Icon.linkedin, url: d.contact.linkedin },
    { key: 'colekta', label: 'Colekta', icon: Icon.shapes, url: d.contact.colekta },
    // { key: 'figma', label: 'Figma', icon: Icon.figma, url: d.contact.figma },
    // The PIX item only shows up once a key is filled in CV_DATA.contact.pix.
    ...(d.contact.pix.key
      ? [{ key: 'pix', label: c.pix.label[lang], icon: Icon.qr, action: () => setPixOpen(true) }]
      : []),
  ];


  // Native sheet where the browser has one (mobile); the modal is the fallback.
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: d.identity.name, text: c.share_text[lang], url: PAGE_URL });
        return;
      } catch {
        // cancelled or unsupported target — fall through to the modal
      }
    }
    setShareOpen(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="fixed top-4 right-4 z-40 flex items-center gap-1.5 no-print">
        <LangToggle lang={lang} setLang={setLang} />
        <ThemeToggle dark={dark} setDark={setDark} lang={lang} />
      </div>
      <main id="content" className="flex-1 pt-8 md:pt-8 pb-20">
        <div className="max-w-xl mx-auto px-6 pt-16">
          {/*<Reveal>*/}
          {/*  <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.14em] text-(--accent-ink) mb-16 justify-center">*/}
          {/*    <span aria-hidden="true" className="w-6 h-px bg-(--accent-ink)" />*/}
          {/*    {c.title[lang]}*/}
          {/*  </div>*/}
          {/*</Reveal>*/}

            <section className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/2 backdrop-blur-sm px-6 pt-20 pb-8 text-center">
              <button type="button" onClick={share} aria-haspopup="dialog"
                className="absolute top-4 left-4 w-9 h-9 rounded-full grid place-items-center border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:bg-(--accent-ink) hover:border-(--accent-ink) hover:text-(--accent-fg) transition-colors cursor-pointer"
                aria-label={c.share[lang]}>
                <Icon.share width="16" height="16" />
              </button>

              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-(--bg) shadow-lg">
                  <img src="/assets/foto.webp" alt={d.identity.name} width="112" height="112"
                    fetchPriority="high" className="w-full h-full object-cover" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                {d.identity.name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-(--accent-ink)">{d.identity.name.split(' ').slice(-1)[0]}</span>
              </h1>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-pretty">{d.identity.tagline[lang]}</p>
              <p className="mt-1 text-[13px] text-neutral-500 dark:text-neutral-400">
                {d.identity.role[lang]} · {d.identity.company}
              </p>
              <p className="text-[13px] text-neutral-500 dark:text-neutral-400">{d.identity.location[lang]}</p>

              <button type="button" onClick={() => downloadVcard(d, lang)}
                className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-(--accent-ink) text-(--accent-fg) text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                <Icon.saveContact width="15" height="15" />
                {c.save[lang]}
              </button>
            </section>

            <p className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400 text-pretty">{c.lead[lang]}</p>

          <ul className="mt-6 space-y-3">
            {items.map((it) => {
              // Links and the modal triggers differ only in the tag and its props.
              const Tag = it.url ? 'a' : 'button';
              const tagProps = it.url
                ? { href: it.url, target: it.url.startsWith('http') ? '_blank' : undefined,
                    rel: it.url.startsWith('http') ? 'noreferrer' : undefined }
                : { type: 'button', onClick: it.action, 'aria-haspopup': 'dialog' };
              return (
              <li key={it.key}>
                <Tag {...tagProps}
                  className="contact-card group relative w-full flex items-center justify-center gap-4 p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/2 hover:border-(--accent)/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                  <span className="absolute left-4 w-10 h-10 rounded-full grid place-items-center bg-(--accent)/10 text-(--accent-ink) print-icon">
                    <it.icon width="18" height="18" />
                  </span>
                  <span className="px-16 text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">{it.label}</span>
                  <span aria-hidden="true" className="absolute right-4 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 grid place-items-center text-neutral-500 group-hover:bg-(--accent-ink) group-hover:border-(--accent-ink) group-hover:text-(--accent-fg) transition-all">
                    <Icon.arrow width="14" height="14" />
                  </span>
                </Tag>
              </li>
              );
            })}
          </ul>

            <button type="button" onClick={share}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 h-11 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
              <Icon.share width="15" height="15" />
              {c.share[lang]}
            </button>
        </div>
      </main>
      <Footer lang={lang} />
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} lang={lang} />
      <PixModal isOpen={pixOpen} onClose={() => setPixOpen(false)} lang={lang} />
    </div>
  );
}
