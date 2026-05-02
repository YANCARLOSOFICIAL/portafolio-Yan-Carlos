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

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/YANCARLOSOFICIAL',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yancarlos-pinchao-guerra-0b928a196',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/573105374074',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'hover:text-[#25D366]'
    }
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
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-gray-300 min-h-[3rem] reveal reveal-delay-200">
              <span className="text-accent-blue">Desarrollador Full Stack</span>
            </div>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Estudiante de Ingeniería en Sistemas con +1 año de experiencia en desarrollo full-stack. Transformo ideas en soluciones tecnológicas con React, Node.js y arquitecturas modernas.
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

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500">Contáctame:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 ${social.color} transition-all duration-200 hover:bg-white/10 hover:border-primary-400`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
              <p className="text-sm text-gray-300">Herramientas que uso a diario</p>

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
