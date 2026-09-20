import { marqueeRows, skillGroups, ui } from '../data/portfolio';
import { useLang } from '../i18n';
import Reveal from './Reveal';

function Marquee({ items, reverse = false, hollow = false }) {
  const line = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-2" aria-hidden="true">
      <div className={`flex w-max gap-10 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {line.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`font-display text-[clamp(2rem,6vw,5rem)] uppercase leading-none ${
              hollow ? 'text-hollow' : 'text-ink'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();

  return (
    <section
      id="competences"
      className="border-t border-line py-20 md:py-28"
      aria-label={`${t(ui.skillsTitle.hollow)} ${t(ui.skillsTitle.solid)}`}
    >
      <Reveal as="h2" className="section-x font-display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.9]">
        <span className="text-hollow">{t(ui.skillsTitle.hollow)}</span>{' '}
        <span className="text-ink">{t(ui.skillsTitle.solid)}</span>
      </Reveal>

      <div className="mt-10 space-y-1 md:mt-14">
        <Marquee items={t(marqueeRows[0])} />
        <Marquee items={t(marqueeRows[1])} reverse hollow />
      </div>

      <ul className="section-x mt-12 grid gap-10 md:mt-16 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal as="li" key={t(group.title)} delay={index * 0.08}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted">{t(group.title)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t(group.items).map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white/60 px-3.5 py-2 text-xs text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
