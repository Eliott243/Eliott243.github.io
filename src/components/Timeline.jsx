import { timeline, ui } from '../data/portfolio';
import { useLang } from '../i18n';
import Reveal from './Reveal';

export default function Timeline() {
  const { t } = useLang();

  return (
    <section
      id="parcours"
      className="section-x border-t border-line py-20 md:py-28"
      aria-label={`${t(ui.timelineTitle.hollow)} ${t(ui.timelineTitle.solid)}`}
    >
      <Reveal as="h2" className="font-display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.9]">
        <span className="text-hollow">{t(ui.timelineTitle.hollow)}</span>{' '}
        <span className="text-ink">{t(ui.timelineTitle.solid)}</span>
      </Reveal>

      <ol className="mt-10 border-l border-line md:mt-14">
        {timeline.map((entry, index) => (
          <Reveal
            as="li"
            key={`${t(entry.title)}-${index}`}
            delay={index * 0.06}
            className="relative pl-6 pb-10 md:pl-10"
          >
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ink"
              aria-hidden="true"
            />
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{t(entry.kind)}</p>
            <h3 className="mt-2 text-lg font-semibold md:text-xl">{t(entry.title)}</h3>
            <p className="text-sm text-muted">
              {t(entry.org)} · {t(entry.period)}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/85">
              {t(entry.bullets).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
