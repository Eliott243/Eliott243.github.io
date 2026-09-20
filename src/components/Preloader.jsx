import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;
    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-paper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <motion.p
            className="font-display text-[clamp(1.5rem,5vw,3rem)] uppercase tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.firstName} <span className="text-hollow">{profile.lastName}</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
