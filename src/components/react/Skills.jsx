import { useLanguage } from './LanguageContext';

const skillsData = [
  { name: 'React', level: 95 },
  { name: 'Vue.js', level: 90 },
  { name: 'Node.js', level: 92 },
  { name: 'Laravel', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'PostgreSQL', level: 90 },
  { name: 'Tailwind', level: 95 },
  { name: 'Docker', level: 80 },
  { name: 'AWS', level: 78 },
  { name: 'APIs REST', level: 92 },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm text-primary-300 font-medium tracking-wider mb-2">{t.skills.tag}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">{t.skills.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, idx) => (
            <div key={idx} className="card text-center hover-lift reveal reveal-delay-100">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                  <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={`${2 * Math.PI * 36}`} strokeDashoffset={`${2 * Math.PI * 36 * (1 - skill.level / 100)}`} className="text-accent-blue transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{skill.level}%</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
