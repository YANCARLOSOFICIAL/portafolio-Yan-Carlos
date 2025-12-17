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
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-cyan text-sm font-medium tracking-wider mb-4">EXPERIENCE</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Work History
          </h2>
        </div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                <p className="text-accent-blue font-semibold mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location} • {exp.type}</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="font-semibold text-white">{exp.period}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-accent-blue mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
