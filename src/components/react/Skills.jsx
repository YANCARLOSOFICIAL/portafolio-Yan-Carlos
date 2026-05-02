import { useLanguage } from './LanguageContext';

const skillsData = [
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'Vue.js', category: 'frontend', icon: '💚' },
  { name: 'Astro', category: 'frontend', icon: '🚀' },
  { name: 'TypeScript', category: 'frontend', icon: '🔷' },
  { name: 'Tailwind', category: 'frontend', icon: '💨' },
  { name: 'Node.js', category: 'backend', icon: '🟢' },
  { name: 'Laravel', category: 'backend', icon: '🔶' },
  { name: 'Express', category: 'backend', icon: '⚡' },
  { name: 'PostgreSQL', category: 'database', icon: '🐘' },
  { name: 'MongoDB', category: 'database', icon: '🍃' },
  { name: 'Docker', category: 'devops', icon: '🐳' },
  { name: 'AWS', category: 'devops', icon: '☁️' },
  { name: 'GraphQL', category: 'backend', icon: '◼️' },
  { name: 'REST APIs', category: 'backend', icon: '🔗' },
  { name: 'Git', category: 'devops', icon: '📂' },
];

const categoryColors = {
  frontend: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', label: 'Frontend' },
  backend: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', label: 'Backend' },
  database: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400', label: 'Base de Datos' },
  devops: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400', label: 'DevOps' },
};

export default function Skills() {
  const { t } = useLanguage();

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm text-primary-300 font-medium tracking-wider mb-2">{t.skills.tag}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">{t.skills.title}</h2>
        </div>

        {/* Skill Badges by Category */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {Object.entries(groupedSkills).map(([category, skills]) => {
            const colors = categoryColors[category];
            return (
              <div key={category} className="reveal">
                <h3 className={`text-sm font-semibold ${colors.text} mb-3 flex items-center gap-2`}>
                  <span className={`w-2 h-2 rounded-full ${colors.bg.replace('/20', '')}`}></span>
                  {colors.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`px-4 py-2 ${colors.bg} ${colors.border} border rounded-lg text-gray-200 text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-bold text-white">2+</p>
            <p className="text-xs text-gray-400">Años de experiencia</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-bold text-white">5+</p>
            <p className="text-xs text-gray-400">Proyectos completados</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-bold text-white">15+</p>
            <p className="text-xs text-gray-400">Tecnologías</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-gray-400">Compromiso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
