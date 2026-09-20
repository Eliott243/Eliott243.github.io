import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState(null);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add('cursor-none-desktop');

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target.closest('[data-cursor], a, button');
      setLabel(target ? target.getAttribute('data-cursor') ?? '' : null);
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.classList.remove('cursor-none-desktop');
    };
  }, [reduce]);

  if (!enabled) return null;

  const active = label !== null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] flex items-center justify-center rounded-full bg-ink text-[9px] uppercase tracking-wide text-white"
      aria-hidden="true"
      animate={{
        x: position.x,
        y: position.y,
        width: active ? 56 : 10,
        height: active ? 56 : 10,
      }}
      style={{ translateX: '-50%', translateY: '-50%' }}
      transition={{ type: 'spring', stiffness: 500, damping: 34, mass: 0.4 }}
    >
      {label ? label : null}
    </motion.div>
  );
}
