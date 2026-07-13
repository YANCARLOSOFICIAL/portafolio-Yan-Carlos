import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const typewriterWords = [
  'Full Stack Developer',
  'React Developer',
  'Laravel Developer',
  'Next.js Developer',
];

const techStack = ['React', 'Node.js', 'Laravel', 'Astro', 'TypeScript', 'PostgreSQL', 'Docker', 'Python'];

export default function Hero() {
  const { t } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }

    const currentWord = typewriterWords[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsPaused(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, wordIndex]);

  const displayText = typewriterWords[wordIndex].substring(0, charIndex);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pattern-grid" />
      <div className="absolute inset-0 bg-noise" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-display text-accent text-sm tracking-[0.2em]">01</span>
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-text-muted text-xs tracking-[0.2em] uppercase">{t('hero.tag')}</span>
            </div>

            <div className="space-y-0">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-text-primary leading-[0.9] tracking-tighter">
                YAN<br />
                <span className="text-accent">CARLOS</span>
              </h1>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-text-primary leading-[0.9] tracking-tighter mt-2">
                GUERRA
              </h2>
            </div>

            <div className="flex items-center gap-3 h-10">
              <span className="font-display text-xl md:text-2xl text-text-secondary">
                {displayText}
              </span>
              <span className="w-[3px] h-8 bg-accent animate-blink" />
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full bg-cyber animate-pulse-accent" />
                <span className="relative inline-flex h-3 w-3 bg-cyber" />
              </span>
              <span className="font-display text-xs uppercase tracking-wider text-cyber">{t('hero.disponible')}</span>
            </div>

            <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-sans">
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo('projects')} className="btn-brutal flex items-center gap-2 group">
                {t('hero.verproyectos')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => window.open('https://wa.me/573229369995', '_blank')} className="btn-brutal-outline">
                {t('hero.contactar')}
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="font-display text-xs uppercase tracking-widest text-text-muted">{t('hero.conecta')}</span>
              <div className="flex gap-2">
                {[
                  { icon: Github, url: 'https://github.com/YANCARLOSOFICIAL', label: 'GitHub' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/yancarlos-pinchao-guerra-0b928a196', label: 'LinkedIn' },
                  { icon: Mail, url: 'mailto:yancarlospinchao2021@itp.edu.co', label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-surface border-2 border-border text-text-muted hover:border-accent hover:text-accent transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="brutal-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent flex items-center justify-center">
                  <span className="font-display text-white text-lg font-bold">*</span>
                </div>
                <div>
                  <h3 className="font-display text-text-primary font-bold uppercase tracking-wider text-sm">{t('hero.logros')}</h3>
                  <p className="font-display text-text-muted text-xs uppercase tracking-wide">Kamila Innovation S.A.S</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: '11 meses', labelKey: 'hero.stat.produccion' },
                  { value: '10+', labelKey: 'hero.stat.proyectos' },
                  { value: '30%', labelKey: 'hero.stat.tiempo' },
                ].map((stat) => (
                  <div key={stat.labelKey} className="bg-background border-2 border-border p-4 text-center">
                    <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="font-display text-text-muted text-xs uppercase tracking-wider mt-1">{t(stat.labelKey)}</p>
                  </div>
                ))}
              </div>

              <div className="border-2 border-border p-4 bg-background">
                <p className="font-display text-text-secondary text-xs uppercase tracking-wider leading-relaxed">
                  {t('hero.reduccion')}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Laravel', 'Vue.js', 'REST APIs', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-10">
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '11 meses', labelKey: 'hero.stat.produccion' },
              { value: '10+', labelKey: 'hero.stat.proyectos' },
              { value: '30%', labelKey: 'hero.stat.tiempo' },
            ].map((stat) => (
              <div key={stat.labelKey} className="bg-surface border-2 border-border p-4 text-center">
                <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
                <p className="font-display text-text-muted text-xs uppercase tracking-wider mt-1">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
