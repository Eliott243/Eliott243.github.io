import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile, socials, ui } from '../data/portfolio';
import { useLang } from '../i18n';
import Icon from './Icon';
import MagneticLink from './MagneticLink';

function Letters({ word, className, baseDelay = 0, reduce }) {
  if (reduce) return <span className={className}>{word}</span>;
  return (
    <span className={className}>
      {word.split('').map((letter, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: '0.35em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: baseDelay + index * 0.04,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover)').matches) return;
    const onMove = (event) => {
      setPointer({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce]);

  const name = `${profile.firstName} ${profile.lastName}`;

  return (
    <section
      id="accueil"
      className="relative h-[100svh] min-h-[560px] overflow-hidden bg-paper"
      aria-label={t(ui.heroRegion)}
    >
      <motion.h1
        aria-label={name}
        className="pointer-events-none absolute left-[8vw] top-[3vh] z-[1] w-[84vw] font-display text-[clamp(3rem,9.4vw,10.5rem)] uppercase leading-[0.9] tracking-[-0.035em] md:whitespace-nowrap"
        animate={{ x: pointer.x * 18, y: pointer.y * 10 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      >
        <span aria-hidden="true">
          <Letters word={profile.firstName} className="text-hollow block md:inline" baseDelay={0.15} reduce={reduce} />
          <span className="hidden md:inline">&nbsp;</span>
          <Letters word={profile.lastName} className="block text-ink md:inline" baseDelay={0.35} reduce={reduce} />
        </span>
      </motion.h1>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-[50vh] w-[86vw] -translate-x-1/2 md:h-[85vh] md:w-[min(64vw,1100px)]">
        <motion.img
          src="/photo-hero.png"
          alt={`${t(ui.portraitAlt)} ${profile.fullName}`}
          width="1024"
          height="989"
          fetchPriority="high"
          className="h-full w-full select-none object-contain object-bottom"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? {} : { opacity: 1, y: 0, x: pointer.x * -8 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Mobile : bloc en flux sous le nom. Desktop : chaque enfant reprend son placement absolu. */}
      <div className="absolute left-[8vw] right-[8vw] top-[20vh] z-[3] flex flex-col gap-6 md:contents">
        <div className="max-w-[15rem] md:absolute md:left-[8vw] md:top-[42%]">
          <motion.p
            className="text-[13px] leading-tight md:text-sm"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <span className="font-bold uppercase tracking-[0.02em]">{t(profile.roleStrong)}</span>{' '}
            <span className="text-ink/80">{t(profile.roleLight)}</span>
          </motion.p>
          <motion.p
            className="mt-2 text-xs leading-snug text-muted"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            {t(profile.tagline)}
          </motion.p>
          <MagneticLink
            href={`tel:${profile.phoneRaw}`}
            className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-ink px-5 text-[11px] font-medium text-white"
          >
            {profile.phone}
          </MagneticLink>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-1 md:absolute md:right-[8vw] md:top-[46%] md:z-[3] md:flex-col md:gap-3">
          {socials.map((item, index) => (
            <motion.li
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.06 }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 py-1 text-xs text-muted transition-colors hover:text-ink focus-visible:text-ink md:text-[13px]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line">
                  <Icon name={item.icon} />
                </span>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <a
        href="#a-propos"
        className="absolute bottom-6 left-[8vw] z-[3] flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-ink max-md:hidden"
      >
        {t(ui.scroll)}
        <motion.span
          className="block h-6 w-px origin-top bg-ink/40"
          animate={reduce ? {} : { scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </a>
    </section>
  );
}
