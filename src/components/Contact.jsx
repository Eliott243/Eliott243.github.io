import { useState } from 'react';
import { profile, socials, ui } from '../data/portfolio';
import { useLang } from '../i18n';
import Reveal from './Reveal';
import MagneticLink from './MagneticLink';
import Icon from './Icon';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value });

  // Envoi par mailto : aucun service tiers, aucune clé API à gérer.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${t(ui.formSubject)} ${form.name || t(ui.formNoName)}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-x border-t border-line py-20 md:py-28" aria-label="Contact">
      <Reveal as="h2" className="whitespace-nowrap font-display text-[clamp(2.4rem,11vw,10rem)] uppercase leading-[0.88]">
        <span className="text-ink">{t(ui.contactTitle.solid)}</span>
        {t(ui.contactTitle.glue)}
        <span className="text-hollow">{t(ui.contactTitle.hollow)}</span>
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 block break-all font-display text-[clamp(1.1rem,3.4vw,2.6rem)] uppercase leading-tight underline decoration-1 underline-offset-[6px] transition-colors hover:text-muted"
        >
          {profile.email}
        </a>
      </Reveal>

      <div className="mt-8 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-16">
        <div>
          <div className="flex flex-wrap gap-3">
            <MagneticLink
              href={`https://wa.me/${profile.phoneRaw.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-5 text-xs font-medium text-white"
            >
              <Icon name="whatsapp" /> WhatsApp
            </MagneticLink>
            <MagneticLink
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink px-5 text-xs font-medium"
            >
              <Icon name="mail" /> {t(ui.formEmail)}
            </MagneticLink>
            <MagneticLink
              href={socials.find((item) => item.icon === 'linkedin')?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink px-5 text-xs font-medium"
            >
              <Icon name="linkedin" /> LinkedIn
            </MagneticLink>
          </div>

          <p className="mt-6 text-sm text-muted">
            {profile.city} · {profile.phone}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted">
              {t(ui.formName)}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              className="mt-2 min-h-[44px] w-full rounded-2xl border border-line bg-white/70 px-4 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted">
              {t(ui.formEmail)}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              className="mt-2 min-h-[44px] w-full rounded-2xl border border-line bg-white/70 px-4 text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted">
              {t(ui.formMessage)}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={update('message')}
              className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-6 text-xs font-medium text-white"
          >
            {t(ui.formSend)}
          </button>
        </form>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <a href="#accueil" className="inline-flex min-h-[44px] items-center gap-1.5 hover:text-ink">
          <Icon name="arrowUp" /> {t(ui.backToTop)}
        </a>
      </footer>
    </section>
  );
}
