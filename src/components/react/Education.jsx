const education = [
  {
    degree: 'Ingeniería de Sistemas',
    institution: 'Institución Universitaria del Putumayo',
    period: 'En curso - 9º Semestre',
    description: 'Programación orientada a objetos (POO), Arquitectura de la información',
    logo: '🎓',
  },
  {
    degree: 'Tecnólogo en Desarrollo de Software',
    institution: 'Institución Universitaria del Putumayo',
    period: '2021 - 2024',
    description: 'Informática, comunicaciones y servicios de asistencia. Programación orientada a objetos (POO), Arquitectura de la información',
    logo: '💻',
  },
];

const certifications = [
  {
    name: 'Apropiación de conceptos de ciberseguridad',
    issuer: 'Servicio Nacional de Aprendizaje (SENA)',
    date: 'Mayo 2025',
    credential: '9209003184764CC1123321738C',
    category: 'Ciberseguridad',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Educación */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight animate-fadeInUp">
            Educación
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-blue-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{edu.logo}</div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {edu.institution}
                </p>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {edu.period}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent tracking-tight animate-fadeInUp">
            Certificaciones
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-green-200 dark:border-green-900/30 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-green-700 dark:text-green-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {cert.date}
                      </span>
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                        {cert.category}
                      </span>
                    </div>
                    {cert.credential && (
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 font-mono">
                        ID: {cert.credential}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
