import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { profile, stats, languages, ui } from '../data/portfolio';
import { useLang } from '../i18n';
import Reveal from './Reveal';
import MagneticLink from './MagneticLink';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let frame;
    const start = performance.now();
    const duration = 900;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="a-propos"
      className="section-x border-t border-line py-20 md:py-28"
      aria-label={`${t(ui.aboutTitle.solid)} ${t(ui.aboutTitle.hollow)}`}
    >
      <Reveal as="h2" className="font-display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.9]">
        <span className="text-ink">{t(ui.aboutTitle.solid)}</span>{' '}
        <span className="text-hollow">{t(ui.aboutTitle.hollow)}</span>
      </Reveal>

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          {t(profile.bio).map((paragraph, index) => (
            <Reveal
              key={paragraph}
              as="p"
              delay={index * 0.08}
              className="mb-4 max-w-[46ch] text-sm leading-relaxed text-ink/85 md:text-base"
            >
              {paragraph}
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <MagneticLink
              href={t(profile.cvUrl)}
              download
              className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-ink px-6 text-xs font-medium text-white"
            >
              {t(ui.downloadCv)}
            </MagneticLink>
          </Reveal>
        </div>

        <div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map((stat, index) => (
              <Reveal key={t(stat.label)} delay={index * 0.06}>
                <dt className="sr-only">{t(stat.label)}</dt>
                <dd>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-xs leading-snug text-muted">{t(stat.label)}</p>
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.2} className="mt-10 border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted">{t(ui.languagesTitle)}</h3>
            <ul className="mt-3 space-y-1.5">
              {languages.map((language) => (
                <li key={t(language.name)} className="text-sm">
                  <span className="font-medium">{t(language.name)}</span>{' '}
                  <span className="text-muted">— {t(language.level)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">{t(profile.address)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
