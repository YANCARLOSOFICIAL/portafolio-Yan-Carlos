import { createContext, useState, useEffect, useContext } from 'react';
import translations from '../../i18n/translations.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem('portfolio-language');
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguage(saved);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es' || browserLang === 'en') {
        setLanguage(browserLang);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for SSR or when provider is missing
    return {
      language: 'es',
      changeLanguage: () => {},
      t: translations['es'],
    };
  }
  return context;
}
