import { useEffect, useRef, useState } from 'react';

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return [ref, shown];
}

export default function Reveal({ children, delay = 0, as: As = 'div', className = '', ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity .7s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform .7s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
