import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems, profile, ui } from '../data/portfolio';
import { useLang } from '../i18n';

export default function Nav() {
  const { t } = useLang();
  const [active, setActive] = useState('accueil');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.05, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label={t(ui.mainNav)}
        aria-hidden={active === 'accueil' ? 'true' : undefined}
        className={`fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-line bg-white/70 px-2 py-2 backdrop-blur-md transition-opacity duration-500 md:block ${
          active === 'accueil' ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`block rounded-full px-4 py-2 text-xs transition-colors ${
                  active === item.id ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? t(ui.closeMenu) : t(ui.openMenu)}
        className="fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/80 backdrop-blur-md md:hidden"
      >
        <span className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform ${
              open ? 'top-1.5 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform ${
              open ? 'top-1.5 -rotate-45' : 'top-3'
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-[8vw] md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.4 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-1 font-display text-[clamp(1.9rem,10vw,3.2rem)] uppercase leading-[1.05] ${
                      active === item.id ? 'text-ink' : 'text-hollow'
                    }`}
                  >
                    {t(item.label)}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-10 text-xs text-muted">{profile.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
