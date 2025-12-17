import { useLanguage } from './LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="container">

        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold text-primary-300 uppercase tracking-wider mb-2">{t.about.tag}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{t.about.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile / visual column */}
          <div className="md:col-span-1 reveal reveal-delay-100">
            <div className="card flex flex-col items-center text-center p-6 hover-lift">
              <div className="w-32 h-32 rounded-full bg-white/6 border border-white/8 mb-4 flex items-center justify-center text-2xl">YC</div>
              <h3 className="font-bold text-lg text-white">Yan Carlos Guerra</h3>
              <p className="text-sm text-gray-300 mt-2">Full Stack Developer</p>
              <div className="mt-4 flex gap-3">
                <a href="#contact" className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm">Contact</a>
                <a href="mailto:pinnchaoguerrayancarlos@gmail.com" className="px-4 py-2 border border-white/10 text-white rounded-full text-sm">Email</a>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div className="md:col-span-2 reveal reveal-delay-200">
            <div className="card hover-lift">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.about.intro }} />
                <p className="text-base text-gray-300 leading-relaxed">{t.about.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/3 rounded-lg">
                  <h4 className="text-sm font-semibold text-white">Frontend</h4>
                  <ul className="mt-2 text-sm text-gray-300 space-y-2">
                    {t.about.frontend.items.map((it, i) => <li key={i}>• {it}</li>)}
                  </ul>
                </div>
                <div className="p-4 bg-white/3 rounded-lg">
                  <h4 className="text-sm font-semibold text-white">Backend</h4>
                  <ul className="mt-2 text-sm text-gray-300 space-y-2">
                    {t.about.backend.items.map((it, i) => <li key={i}>• {it}</li>)}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
