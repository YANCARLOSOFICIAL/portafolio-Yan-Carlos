import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.sobremi': { es: 'Sobre mí', en: 'About' },
  'nav.experiencia': { es: 'Experiencia', en: 'Experience' },
  'nav.proyectos': { es: 'Proyectos', en: 'Projects' },
  'nav.skills': { es: 'Skills', en: 'Skills' },
  'nav.educacion': { es: 'Educación', en: 'Education' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },
  'hero.tag': { es: 'Portfolio 2026', en: 'Portfolio 2026' },
  'hero.disponible': { es: 'Disponible para trabajar', en: 'Available for work' },
  'hero.desc': { es: 'Estudiante de 10° semestre y fundador de Waira Solutions. +1 año en producción transformando ideas en soluciones tecnológicas con código limpio.', en: '10th semester student and founder of Waira Solutions. +1 year in production turning ideas into tech solutions with clean code.' },
  'hero.verproyectos': { es: 'Ver proyectos', en: 'View projects' },
  'hero.contactar': { es: 'Contactar', en: 'Contact me' },
  'hero.conecta': { es: 'Conecta:', en: 'Connect:' },
  'hero.logros': { es: 'Experiencia actual', en: 'Current experience' },
  'hero.stat.produccion': { es: 'en producción', en: 'in production' },
  'hero.stat.proyectos': { es: 'proyectos', en: 'projects' },
  'hero.stat.tiempo': { es: 'menos tiempo facturación', en: 'faster billing' },
  'hero.reduccion': { es: 'Desarrollando sistemas que sirven a +500 empresas en Colombia.', en: 'Building systems serving 500+ companies in Colombia.' },
  'projects.filtro.todos': { es: 'Todos', en: 'All' },
  'projects.filtro.fullstack': { es: 'Fullstack', en: 'Fullstack' },
  'projects.filtro.frontend': { es: 'Frontend', en: 'Frontend' },
  'projects.filtro.backend': { es: 'Backend', en: 'Backend' },
  'projects.filtro.ai': { es: 'AI', en: 'AI' },
  'projects.tag': { es: 'PORTAFOLIO', en: 'PORTFOLIO' },
  'projects.title': { es: 'Proyectos destacados', en: 'Featured projects' },
  'contact.nombre': { es: 'Tu nombre', en: 'Your name' },
  'contact.email': { es: 'tu@email.com', en: 'your@email.com' },
  'contact.mensaje': { es: 'Cuéntame sobre tu proyecto...', en: 'Tell me about your project...' },
  'contact.enviar': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.enviando': { es: 'Enviando...', en: 'Sending...' },
  'contact.success': { es: 'Mensaje enviado — Redirigiendo al correo...', en: 'Message sent — Redirecting to email...' },
  'contact.oescribe': { es: 'O escribe a:', en: 'Or write to:' },
  'contact.copiar': { es: 'Copiar', en: 'Copy' },
  'contact.copiado': { es: 'Copiado', en: 'Copied' },
  'contact.requerido': { es: 'Requerido', en: 'Required' },
  'contact.email.invalido': { es: 'Email inválido', en: 'Invalid email' },
  'contact.mensaje.min': { es: 'Mínimo 10 caracteres', en: 'Min 10 characters' },
  'contact.whatsapp.desc': { es: 'respuesta inmediata', en: 'instant reply' },
  'contact.linkedin.desc': { es: 'conexión profesional', en: 'professional network' },
  'contact.github.desc': { es: 'explora mi código', en: 'explore my code' },
  'contact.tag': { es: 'CONTACTO', en: 'CONTACT' },
  'contact.title': { es: '¿Trabajamos juntos?', en: "Let's work together?" },
  'contact.desc': { es: 'Disponible para proyectos, consultorías y colaboraciones. Escríbeme y te responderé a la brevedad.', en: 'Available for projects, consulting, and collaborations. Drop me a message and I\'ll get back to you shortly.' },
  'footer.copyright': { es: '© 2026 Yan Carlos Guerra — Todos los derechos reservados.', en: '© 2026 Yan Carlos Guerra — All rights reserved.' },
};

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
    return (translations as any)[key]?.[lang] ?? key;
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
