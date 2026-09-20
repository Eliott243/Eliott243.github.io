import { ui } from '../data/portfolio';
import { useLang } from '../i18n';

export default function LangSwitch() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className="fixed right-20 top-5 z-50 flex items-center rounded-full border border-line bg-white/80 p-1 backdrop-blur-md md:right-[8vw] md:top-6"
      role="group"
      aria-label={t(ui.langSwitch)}
    >
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`flex h-10 min-w-[2.75rem] items-center justify-center rounded-full text-[11px] md:h-9 md:min-w-[2.5rem] font-medium uppercase tracking-[0.08em] transition-colors ${
            lang === code ? 'bg-ink text-white' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
