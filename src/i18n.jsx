import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'portfolio-lang';
const LanguageContext = createContext(null);

function initialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    // localStorage indisponible (navigation privée) : on retombe sur la langue du navigateur.
  }
  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Rien à faire : la préférence ne sera simplement pas mémorisée.
    }
  }, [lang]);

  /** Renvoie la variante dans la langue courante, ou la valeur telle quelle si elle est commune. */
  const t = useCallback(
    (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value[lang] ?? value.fr;
      }
      return value;
    },
    [lang]
  );

  const value = useMemo(
    () => ({
      lang,
      t,
      toggle: () => setLang((current) => (current === 'fr' ? 'en' : 'fr')),
      setLang,
    }),
    [lang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang doit être utilisé dans un LanguageProvider');
  return context;
}
