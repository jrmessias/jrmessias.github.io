import {Sun, Moon, ArrowUpRight, ArrowDown, Download, Mail, Coffee, Menu, X, Code, Phone, Share2, Copy, Check, Globe, UserPlus, QrCode} from 'lucide-react';

const lucide = (IconComponent) => (p) => {
  const { width, height, ...rest } = p;
  return <IconComponent {...rest} size={width || height} />;
};

const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
  </svg>
);

const Github = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.31 6.84 9.66.5.1.69-.22.69-.48l-.02-1.72c-2.78.62-3.37-1.36-3.37-1.36-.46-1.17-1.11-1.48-1.11-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
  </svg>
);

const Instagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
  </svg>
);

const Figma = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const Lattes = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const XIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2.25h3.308l-7.227 8.275 8.26 10.956H16.17l-5.602-7.322-4.936 5.644H2.277l6.692-8.64L2.25 2.25h8.06l4.396 5.998zm-1.474 12.64h6.914L8.522 3.548 6.77 14.89z"/>
  </svg>
);

const Telegram = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6.1 13 1.2 11.5c-1-.3-1.1-1 .2-1.5l19.1-7.4c.9-.3 1.6.2 1.4 1.7z" />
  </svg>
);

const Facebook = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);

const Linkedin = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9z" />
  </svg>
);

const Dot = (p) => (
  <svg viewBox="0 0 8 8" {...p}><circle cx="4" cy="4" r="3" fill="currentColor" /></svg>
);

const M = (p) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...p}>
        <path className="fill-black dark:fill-white"
            transform="translate(38.05 38.63) scale(0.81187)"
            d="M 0 0 L 0 52.947266 L 15.496094 65.951172 L 15.496094 36.023438 L 152.73438 151.17969 L 152.73438 77.019531 L 137.1875 90.066406 L 137.1875 115.11328 L 0 0 z M 152.73438 0 L 101.11328 43.316406 L 101.11328 65.9375 L 137.23828 36.023438 L 137.23828 65.951172 L 152.73438 52.947266 L 152.73438 0 z M 0.32421875 77.019531 L 0.32421875 144.92969 L 109.61328 144.92383 L 91.53125 129.75195 L 15.496094 129.75195 L 15.496094 89.398438 L 0.74414062 77.019531 L 0.32421875 77.019531 z"/>
    </svg>
);

export const Icon = {
    arrow: lucide(ArrowUpRight),
    check: lucide(Check),
    copy: lucide(Copy),
    facebook: Facebook,
    globe: lucide(Globe),
    phone: lucide(Phone),
    qr: lucide(QrCode),
    saveContact: lucide(UserPlus),
    share: lucide(Share2),
    telegram: Telegram,
    close: lucide(X),
    code: lucide(Code),
    coffee: lucide(Coffee),
    dot: Dot,
    down: lucide(ArrowDown),
    download: lucide(Download),
    email: lucide(Mail),
    figma: Figma,
    github: Github,
    instagram: Instagram,
    lattes: Lattes,
    linkedin: Linkedin,
    m: M,
    menu: lucide(Menu),
    moon: lucide(Moon),
    sun: lucide(Sun),
    whatsapp: WhatsApp,
    x: XIcon,
};
