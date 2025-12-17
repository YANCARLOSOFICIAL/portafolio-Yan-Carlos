const experiences = [
  {
    position: 'Full-stack Developer',
    company: 'Kamila Innovation S.A.S',
    location: 'Sibundoy, Putumayo, Colombia',
    type: 'Remoto',
    period: 'Marzo 2025 - Actualidad',
    duration: '10 meses',
    description: [
      'Desarrollo de aplicaciones web con Laravel y Vue',
      'Implementación de APIs RESTful',
      'Integración con sistemas de facturación electrónica y ecommerce',
    ],
    skills: ['Laravel', 'Vue.js', 'APIs REST', 'Desarrollo Full Stack'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Experiencia</p>
          <h2 className="text-4xl md:text-6xl font-black text-primary-900 dark:text-white tracking-tight">
            Trayectoria profesional
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <article key={idx} className="card hover-lift reveal reveal-delay-100">
              <div className="md:flex md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.position}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-lg font-semibold text-primary-300">{exp.company}</span>
                    <span className="hidden sm:inline text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{exp.type}</span>
                  </div>
                  <p className="text-sm text-gray-400">{exp.location}</p>
                </div>

                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="font-semibold text-white">{exp.period}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/6 text-gray-200 rounded-full text-xs font-semibold">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
