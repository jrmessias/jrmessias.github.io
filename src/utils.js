// Small utility helpers

// CSS handles most of prefers-reduced-motion; JS-driven animations (reveal on
// scroll, slot counters) have to opt out themselves.
export const reduceMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

export function getLabel(value, lang = 'en') {
  // If it's already a string, return it
  if (typeof value === 'string') return value

  // If it's an object with language keys, prefer requested language
  if (value && typeof value === 'object') {
    if (value[lang]) return value[lang]
    if (value.en) return value.en
    if (value.pt) return value.pt
  }

  return ''
}

/**
 * navigator.clipboard is undefined on plain http (anything but localhost), so
 * the textarea fallback is what actually runs when the page is opened over the
 * LAN or any non-https host.
 */
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand?.('copy') ?? false;
    ta.remove();
    return ok;
  }
}

/** RFC 6350 contact card for the identity in CV_DATA. */
export function vcard(d, lang = 'pt') {
  const parts = d.identity.name.split(' ');
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${d.identity.name}`,
    `N:${parts.slice(-1)[0]};${parts.slice(0, -1).join(' ')};;;`,
    `ORG:${d.identity.company}`,
    `TITLE:${d.identity.role[lang]}`,
    `TEL;TYPE=CELL:${d.contact.phone_url.replace('tel:', '')}`,
    `EMAIL;TYPE=INTERNET:${d.contact.email.replace('mailto:', '')}`,
    `URL:${d.contact.site_url}`,
    `ADR;TYPE=WORK:;;${d.identity.location[lang]};;;;`,
    `NOTE:${d.identity.tagline[lang]}`,
    'END:VCARD',
  ].join('\r\n');
}

/** Downloads the vCard as a blob — no server round-trip needed. */
export function downloadVcard(d, lang) {
  const url = URL.createObjectURL(new Blob([vcard(d, lang)], { type: 'text/vcard;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'israel-messias-junior.vcf';
  a.click();
  URL.revokeObjectURL(url);
}

export default { getLabel, reduceMotion, copyText, vcard, downloadVcard }
