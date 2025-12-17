import TypewriterEffect from './TypewriterEffect';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const techStack = [
    'React',
    'Node.js',
    'TypeScript',
    'Laravel',
    'Vue.js',
    'PostgreSQL',
    'Docker',
    'AWS'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div className="space-y-6 reveal reveal-delay-100">
            <p className="text-primary-300 text-sm font-medium tracking-wider">
              {t.hero.greeting}
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              <span className="block text-white">{t.hero.name}</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-blue mt-2">{t.hero.subtitle}</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-gray-300 min-h-[3rem] reveal reveal-delay-200">
              <TypewriterEffect texts={t.hero.typewriter} />
            </div>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 reveal reveal-delay-300">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-blue text-white rounded-xl shadow-lg hover:scale-[1.02] transform transition"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 text-white rounded-xl hover:border-primary-400 transition"
              >
                {t.hero.cta2}
              </a>
            </div>

            <div className="pt-8">
              <p className="text-sm uppercase text-gray-400 tracking-wider mb-4">{t.hero.technologies}</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Illustrative card */}
          <div className="card h-80 flex items-center justify-center hover-lift reveal reveal-delay-200">
            <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-4 p-6 relative overflow-hidden">
              <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-r from-primary-500 to-accent-blue opacity-20 blur-2xl animate-float"></div>
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-gradient-to-r from-accent-blue to-primary-400 opacity-20 blur-2xl animate-float"></div>

              <h3 className="text-xl font-bold text-white">Tech stack</h3>
              <p className="text-sm text-gray-300">Tools and technologies I work with daily</p>

              <div className="mt-4 grid grid-cols-3 gap-3 w-full">
                {techStack.slice(0,6).map((tech, i) => (
                  <div key={i} className="px-3 py-2 bg-white/6 border border-white/8 rounded-lg text-xs text-gray-200 text-center">{tech}</div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
