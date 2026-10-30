import { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { href: '#hero', key: 'nav.inicio' },
  { href: '#about', key: 'nav.canal' },
  { href: '#topics', key: 'nav.temas' },
  { href: '#formats', key: 'nav.formatos' },
  { href: '#content', key: 'nav.contenido' },
  { href: '#lab', key: 'nav.laboratorio' },
  { href: '#contact', key: 'nav.contacto' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
          scrolled ? 'bg-background/90 backdrop-blur-xl' : 'bg-background/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-display text-xs font-bold">YC</span>
            <span className="font-display text-sm font-bold text-text-primary group-hover:text-accent transition-colors tracking-wider">CÓDIGO<span className="text-accent">.</span></span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link-brutal"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`lang-btn ${lang === 'en' ? 'lang-btn-active' : 'lang-btn-inactive'}`}
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <DarkModeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center bg-surface border border-border text-text-muted hover:border-accent hover:text-accent transition-colors duration-200"
              aria-label="Menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 border-t border-border">
          <div className="flex flex-col items-center justify-center h-full space-y-2 px-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-display text-3xl font-bold text-text-primary hover:text-accent transition-colors py-4 uppercase tracking-wider"
              >
                {t(link.key)}
              </button>
            ))}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="mt-4 lang-btn lang-btn-active"
            >
              {lang === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
