import { useLanguage } from './LanguageContext';

const projectImages = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
];

const projectLinks = [
  {
    demo: 'https://ejemplo-ecommerce.com',
    github: 'https://github.com/YANCARLOSOFICIAL/ecommerce-moderno',
  },
  {
    demo: 'https://ejemplo-tareas.com',
    github: 'https://github.com/YANCARLOSOFICIAL/gestor-tareas',
  },
  {
    demo: 'https://ejemplo-dashboard.com',
    github: 'https://github.com/YANCARLOSOFICIAL/dashboard-social',
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <div className="container">

        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium text-primary-300 uppercase tracking-wider mb-2">{t.projects.tag}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">{t.projects.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, idx) => (
            <article key={idx} className="group card hover:scale-[1.02] transition-transform duration-300 reveal reveal-delay-100">
              <div className="relative rounded-xl overflow-hidden h-44 bg-white/5">
                <img src={projectImages[idx]} alt={`Screenshot of ${project.title}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <a href={projectLinks[idx].demo} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary-500 text-white text-xs rounded-md">Live</a>
                  <a href={projectLinks[idx].github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white/6 text-white text-xs rounded-md">Code</a>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-200">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
