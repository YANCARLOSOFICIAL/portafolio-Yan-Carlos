import { useLanguage } from './LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent-purple text-sm font-medium tracking-wider mb-4">{t.education.tag}</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-16">
            {t.education.title}
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {t.education.degrees.map((edu, idx) => (
            <article key={idx} className="card hover-lift reveal reveal-delay-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-primary-300 font-semibold mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-4">{edu.period}</p>
              <p className="text-gray-300 text-sm">{edu.description}</p>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          {t.education.certifications.map((cert, idx) => (
            <article key={idx} className="card reveal reveal-delay-200">
              <div className="flex items-start gap-6">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-primary-300 font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                  {cert.credential && (
                    <p className="text-xs text-gray-600 font-mono">ID: {cert.credential}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
