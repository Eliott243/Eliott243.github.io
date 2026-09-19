const SOCIALS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/243814367673',
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.4 1.28 4.86L2 22l5.46-1.4a10 10 0 0 0 4.58 1.1h.04c5.46 0 9.89-4.4 9.89-9.83C21.97 6.4 17.5 2 12.04 2Zm5.74 13.95c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.8-.11-.42-.1-.95-.3-1.64-.59-2.88-1.24-4.76-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94 0-1.4.74-2.08 1-2.36.24-.26.54-.34.72-.34h.52c.16 0 .4-.06.62.48.24.56.8 1.94.86 2.08.08.14.12.3.02.48-.1.2-.14.3-.28.46-.14.16-.3.36-.42.48-.14.14-.28.28-.12.54.16.26.72 1.18 1.54 1.92 1.06.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.06.16-.2.7-.8.88-1.08.18-.26.36-.22.6-.12.24.08 1.52.72 1.78.84.26.14.44.2.5.3.08.12.08.68-.16 1.36Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.35 6.4a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
      </svg>
    ),
  },
  {
    label: 'Snapchat',
    href: 'https://www.snapchat.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M12 3.2c2.3 0 4.4 1.7 4.6 4.4.1 1.3.4 2.1.9 2.4.3.2.7 0 1.1-.2.3-.2.7-.2 1 0 .2.2.3.5.2.8-.2.8-1.3 1.4-2.1 1.6-.2.1-.3.2-.2.4.3.8 1.5 1.6 2.2 2 .4.2.5.6.3.9-.2.4-.6.5-1 .4-1.2-.2-2-.1-2.6.5-.5.5-.7 1.2-1.9 1.5-.4.1-.8.4-1.2.8-.3.3-.7.4-1.1.2-.5-.2-1-.6-1.6-.6s-1.1.4-1.6.6c-.4.2-.8.1-1.1-.2-.4-.4-.8-.7-1.2-.8-1.2-.3-1.4-1-1.9-1.5-.6-.6-1.4-.7-2.6-.5-.4.1-.8 0-1-.4-.2-.3-.1-.7.3-.9.7-.4 1.9-1.2 2.2-2 .1-.2 0-.3-.2-.4-.8-.2-1.9-.8-2.1-1.6-.1-.3 0-.6.2-.8.3-.2.7-.2 1 0 .4.2.8.4 1.1.2.5-.3.8-1.1.9-2.4C7.6 4.9 9.7 3.2 12 3.2Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Eliott243',
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.39.1 2.64.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[100svh] overflow-hidden bg-paper">
      <div className="enter-name pointer-events-none absolute inset-0 z-[1] origin-[50%_45%] -rotate-[6deg]">
        <p className="font-display text-hollow absolute left-[4%] top-[10%] text-[clamp(4.2rem,12vw,10.5rem)] uppercase leading-[0.76] tracking-[-0.05em] md:left-[6%]">
          Elie
        </p>
        <p className="font-display absolute right-[3%] top-[34%] text-right text-[clamp(4.2rem,12vw,10.5rem)] uppercase leading-[0.76] tracking-[-0.05em] text-ink md:right-[6%] md:top-[36%]">
          Katende
        </p>
      </div>

      <div className="enter-photo pointer-events-none absolute bottom-0 left-1/2 z-[2] h-[64vh] w-[min(48vw,560px)] -translate-x-1/2 overflow-hidden max-md:w-[78vw]">
        <img
          src="/photo-detouree.png?v=4"
          alt="Elie Katende"
          className="absolute bottom-0 left-1/2 h-[70vh] w-auto max-w-none -translate-x-1/2 select-none object-cover object-top"
        />
      </div>

      <div className="enter-copy absolute left-[8%] top-[44%] z-[3] max-w-[230px] origin-left -rotate-[6deg] max-md:bottom-[30%] max-md:left-[6%] max-md:top-auto max-md:rotate-0">
        <p className="font-sans text-[13px] leading-tight text-ink md:text-[14px]">
          <span className="font-bold uppercase tracking-[0.04em]">Développeur</span>{' '}
          <span>full stack</span>
        </p>
        <p className="mt-2 font-sans text-[12px] leading-snug text-[#3f3f3f]">
          Étudiant en informatique et développeur full stack indépendant basé à Kinshasa.
        </p>
        <a
          href="tel:+243814367673"
          className="mt-4 inline-flex items-center rounded-full bg-ink px-4 py-[7px] font-sans text-[11px] font-medium text-white"
        >
          +243 81 436 76 73
        </a>
      </div>

      <ul className="enter-links absolute bottom-[8%] right-[7%] z-[3] flex origin-bottom-right -rotate-[6deg] flex-col gap-2.5 max-md:bottom-5 max-md:left-0 max-md:right-0 max-md:flex-row max-md:justify-center max-md:rotate-0">
        {SOCIALS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-sans text-[12px] text-[#6b6b6b] hover:text-ink"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#c8c8c8]">
                {item.icon}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
