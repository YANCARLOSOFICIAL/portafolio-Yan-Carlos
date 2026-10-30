import { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export interface Project {
  slug: string;
  title: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'ai';
  demo: string;
  github: string;
}

const filters = [
  { id: 'all', labelKey: 'projects.filtro.todos' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'AI' },
];

const categoryStyles: Record<string, string> = {
  fullstack: 'bg-accent text-background border-accent',
  frontend: 'bg-cyber text-background border-cyber',
  backend: 'bg-depth text-background border-depth',
  ai: 'bg-alert text-background border-alert',
};

const bannerGradients: Record<string, string> = {
  fullstack: 'from-accent/20 via-accent/5 to-background',
  frontend: 'from-cyber/20 via-cyber/5 to-background',
  backend: 'from-depth/20 via-depth/5 to-background',
  ai: 'from-alert/20 via-alert/5 to-background',
};

const bannerPatterns: Record<string, string> = {
  fullstack: 'bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,85,0.08)_0%,transparent_50%)]',
  frontend: 'bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,136,0.08)_0%,transparent_50%)]',
  backend: 'bg-[radial-gradient(circle_at_50%_30%,rgba(102,0,255,0.08)_0%,transparent_50%)]',
  ai: 'bg-[radial-gradient(circle_at_50%_70%,rgba(255,170,0,0.08)_0%,transparent_50%)]',
};

export default function Projects({ projects }: { projects: Project[] }) {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setFilteredProjects(filterId === 'all' ? projects : projects.filter((p) => p.category === filterId));
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pattern-grid-accent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-start justify-between gap-6 mb-12">
          <div className="flex items-start gap-6">
            <span className="section-number">04</span>
            <div>
              <p className="section-tag">{t('projects.tag')}</p>
              <h2 className="section-title">{t('projects.title')}</h2>
            </div>
          </div>
          <a href="/proyectos" className="nav-link-brutal hidden md:block mt-4 shrink-0">
            {t('projects.verTodas')}
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-5 py-2 rounded-full font-display text-xs uppercase tracking-wider border transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-accent text-background border-accent'
                  : 'bg-transparent text-text-muted border-border hover:border-accent hover:text-accent'
              }`}
            >
              {filter.labelKey ? t(filter.labelKey) : filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="brutal-card group flex flex-col"
            >
              <div className={`relative h-44 overflow-hidden border-b-2 border-border bg-gradient-to-br ${bannerGradients[project.category]} ${bannerPatterns[project.category]} flex items-center justify-center`}>
                <span className="font-display text-5xl md:text-6xl font-black text-text-primary/5 select-none">
                  {project.title.split(' ')[0]}
                </span>

                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-accent text-background text-xs font-display uppercase tracking-wider flex items-center gap-1 hover:bg-accentLight transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {project.demo.includes('github.com') ? 'Repo' : 'Demo'}
                  </a>
                  {!project.demo.includes('github.com') && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-background text-text-secondary text-xs font-display uppercase tracking-wider border border-border flex items-center gap-1 hover:border-accent hover:text-accent transition-colors"
                    >
                      <Code2 className="w-3 h-3" />
                      Code
                    </a>
                  )}
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-display uppercase tracking-wider border ${categoryStyles[project.category] || ''}`}>
                    {project.category === 'ai' ? 'AI' : project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  <a href={`/proyectos/${project.slug}`} className="hover:text-accent transition-colors">
                    {project.title}
                  </a>
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed font-sans flex-1">
                  {lang === 'es' ? project.description : project.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={`/proyectos/${project.slug}`}
                  className="mt-4 font-display text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
                >
                  {t('projects.verFicha')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
