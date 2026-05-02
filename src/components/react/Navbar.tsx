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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="text-xl font-bold tracking-tight group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">YC</span>
            <span className="text-white">G</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-text-secondary hover:text-white hover:bg-surface transition-colors"
              aria-label="Menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-4 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-bold text-text-primary hover:text-neon-purple transition-colors py-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}