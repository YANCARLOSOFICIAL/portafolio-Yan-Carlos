import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Lang, type TranslationMap } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

/**
 * Fuente primaria: `translations.ts` (compartido por todos los componentes).
 * Este complemento solo guarda claves locales que aún no viven allí;
 * si una clave existe en ambos, gana `translations.ts`.
 */
const localTranslations: TranslationMap = {
  'hero.stat.produccion': { es: 'en producción', en: 'in production' },
  'hero.stat.tiempo': { es: 'menos tiempo facturación', en: 'faster billing' },
};

const translationMap: TranslationMap = { ...localTranslations, ...translations };

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'es') {
      setLangState(saved);
      document.documentElement.setAttribute('data-lang', saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.setAttribute('data-lang', newLang);
  };

  const t = (key: string): string => {
    return translationMap[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
