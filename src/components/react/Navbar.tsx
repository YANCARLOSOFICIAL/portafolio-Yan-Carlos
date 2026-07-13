import { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { href: '#hero', key: 'nav.inicio' },
  { href: '#about', key: 'nav.sobremi' },
  { href: '#experience', key: 'nav.experiencia' },
  { href: '#projects', key: 'nav.proyectos' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#education', key: 'nav.educacion' },
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
          scrolled ? 'bg-background border-b-2 border-accent' : 'bg-background/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-1 group"
          >
            <span className="font-display text-xl font-bold text-accent">[</span>
            <span className="font-display text-xl font-bold text-text-primary group-hover:text-accent transition-colors">YCG</span>
            <span className="font-display text-xl font-bold text-accent">]</span>
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
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-surface border-2 border-border text-text-muted hover:border-accent hover:text-accent transition-colors duration-200"
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
        <div className="lg:hidden fixed inset-0 top-14 bg-background z-40 border-t-2 border-accent">
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
