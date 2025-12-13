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
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 dark:from-slate-900 dark:via-purple-950 dark:to-indigo-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-tight animate-fadeInUp">
          Experiencia Profesional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-purple-300 mb-2">
                    <span className="font-semibold text-lg">{exp.company}</span>
                    <span className="hidden sm:inline text-purple-500">•</span>
                    <span className="text-sm">{exp.type}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-purple-400 font-semibold">{exp.period}</p>
                  <p className="text-slate-400 text-sm">{exp.duration}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
