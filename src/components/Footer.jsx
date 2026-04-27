import { COPY } from '../data.js';
import { Icon } from './Icon.jsx';

export default function Footer({ lang }) {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-neutral-500 dark:text-neutral-500">
        <div>© {new Date().getFullYear()} Israel Messias Júnior · {COPY.footer.rights[lang]}</div>
        <div className="flex items-center gap-2">
          <Icon.coffee width="12" height="12" className="text-(--accent)" />
          {COPY.footer.made[lang]}
        </div>
      </div>
    </footer>
  );
}
