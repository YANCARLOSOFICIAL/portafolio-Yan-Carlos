const frontend = [
  { name: 'React', level: 'Intermedio' },
  { name: 'Astro', level: 'Intermedio' },
  { name: 'Tailwind CSS', level: 'Intermedio' },
  { name: 'TypeScript', level: 'Intermedio' },
  { name: 'UI/UX', level: 'Intermedio' },
  { name: 'Animaciones', level: 'Intermedio' },
];
const backend = [
  { name: 'Node.js', level: 'Intermedio' },
  { name: 'Express', level: 'Intermedio' },
  { name: 'MongoDB', level: 'Intermedio' },
  { name: 'PostgreSQL', level: 'Intermedio' },
  { name: 'APIs REST/GraphQL', level: 'Intermedio' },
  { name: 'Laravel', level: 'Intermedio' },
  { name: 'Spring Boot', level: 'Intermedio' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-white via-slate-100 to-purple-100 dark:from-slate-900 dark:via-primary-dark dark:to-accent-dark transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary-light to-highlight bg-clip-text text-transparent tracking-tight dark:from-primary-light dark:to-highlight">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-primary/20 dark:border-primary-dark shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">Frontend</h3>
            <ul className="space-y-3">
              {frontend.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center text-slate-800 dark:text-white font-medium">
                  <span>{skill.name}</span>
                  <span className="text-purple-700 dark:text-purple-300 font-semibold">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-purple-700 rounded-2xl p-8 border border-purple-300 dark:border-purple-500 shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold text-purple-700 dark:text-white mb-4">Backend</h3>
            <ul className="space-y-3">
              {backend.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center text-slate-800 dark:text-white font-medium">
                  <span>{skill.name}</span>
                  <span className="text-blue-700 dark:text-blue-200 font-semibold">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
