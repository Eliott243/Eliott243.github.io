import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects, ui } from '../data/portfolio';
import { useLang } from '../i18n';
import Reveal from './Reveal';

function DetailModal({ project, onClose }) {
  const { t } = useLang();
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 md:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t(project.title)}
    >
      <motion.div
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-paper p-6 md:p-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{project.year}</p>
            <h3 className="mt-1 font-display text-3xl uppercase leading-none">{t(project.title)}</h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-sm"
            aria-label={t(ui.close)}
          >
            ✕
          </button>
        </div>

        <img
          src={project.image}
          alt={`${t(ui.projectPreviewAlt)} ${t(project.title)}`}
          loading="lazy"
          className="mt-5 w-full rounded-2xl border border-line"
        />

        <p className="mt-5 text-sm leading-relaxed text-ink/85">{t(project.summary)}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">{t(ui.projectRole)}</p>
        <p className="text-sm">{t(project.role)}</p>

        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-ink/85">
          {t(project.details).map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {t(project.stack).map((tech) => (
            <li key={tech} className="rounded-full border border-line px-3 py-1.5 text-xs">
              {tech}
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-5 text-xs font-medium text-white"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-xs text-muted">{t(ui.projectDemoSoon)}</p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [hovered, setHovered] = useState(null);
  const [preview, setPreview] = useState({ x: 0, y: 0 });
  const [openId, setOpenId] = useState(null);
  const reduce = useReducedMotion();
  const openProject = projects.find((project) => project.id === openId);

  const onMove = (event) => setPreview({ x: event.clientX, y: event.clientY });

  return (
    <section
      id="projets"
      className="section-x border-t border-line py-20 md:py-28"
      aria-label={`${t(ui.projectsTitle.solid)} ${t(ui.projectsTitle.hollow)}`}
    >
      <Reveal as="h2" className="font-display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.9]">
        <span className="text-ink">{t(ui.projectsTitle.solid)}</span>{' '}
        <span className="text-hollow">{t(ui.projectsTitle.hollow)}</span>
      </Reveal>

      <ul className="mt-10 md:mt-14" onMouseMove={onMove}>
        {projects.map((project, index) => (
          <Reveal as="li" key={project.id} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setOpenId(project.id)}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              data-cursor={t(ui.cursorView)}
              className="group flex w-full items-baseline gap-4 border-t border-line py-6 text-left md:gap-8 md:py-8"
            >
              <span className="w-8 shrink-0 text-xs text-muted md:w-12">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-display text-[clamp(1.7rem,5vw,4rem)] uppercase leading-[0.95] transition-colors md:group-hover:text-hollow ${
                    hovered === project.id ? 'md:text-hollow' : 'text-ink'
                  }`}
                >
                  {t(project.title)}
                </span>
                <span className="mt-2 block text-xs text-muted">{t(project.stack).join(' · ')}</span>
                <img
                  src={project.image}
                  alt={`${t(ui.projectPreviewAlt)} ${t(project.title)}`}
                  loading="lazy"
                  className="mt-4 w-full rounded-2xl border border-line md:hidden"
                />
              </span>
              <span className="shrink-0 text-xs text-muted">{project.year}</span>
            </button>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {hovered && !reduce && (
          <motion.div
            className="pointer-events-none fixed z-30 hidden md:block"
            style={{ left: preview.x + 24, top: preview.y - 90 }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.18 }}
            aria-hidden="true"
          >
            <img
              src={projects.find((project) => project.id === hovered)?.image}
              alt=""
              className="h-[180px] w-[280px] rounded-2xl border border-line object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openProject && <DetailModal project={openProject} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  );
}
