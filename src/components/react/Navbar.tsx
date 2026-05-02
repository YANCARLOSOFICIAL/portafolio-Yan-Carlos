import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#education', label: 'Educación' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (href: string) => {
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 dark:bg-black/90 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#hero"
              className="text-xl font-bold text-white tracking-tight hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
            >
              YCG
            </motion.a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <DarkModeToggle />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 8 : 0,
                    }}
                    className="w-full h-0.5 bg-current rounded-full origin-left"
                  />
                  <motion.span
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    className="w-full h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -8 : 0,
                    }}
                    className="w-full h-0.5 bg-current rounded-full origin-left"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-4 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-2xl font-bold text-white hover:text-purple-400 transition-colors py-3 px-8 rounded-lg hover:bg-white/5 w-full text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}