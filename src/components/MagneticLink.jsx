import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Bouton/lien légèrement attiré par le curseur (desktop uniquement). */
export default function MagneticLink({ as = 'a', strength = 10, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.a;

  const handleMove = (event) => {
    if (reduce || !ref.current || !window.matchMedia('(hover: hover)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  return (
    <MotionTag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
