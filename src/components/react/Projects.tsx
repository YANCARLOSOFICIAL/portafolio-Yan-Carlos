import { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface Project {
  title: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'ai';
  demo: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'Chatbot Uniputumayo',
    description: 'Asistente virtual "Guaca" con IA para la Universidad del Putumayo. Sistema RAG con soporte de voz y chat.',
    descriptionEn: '"Guaca" AI virtual assistant for Universidad del Putumayo. RAG system with voice and chat support.',
    tech: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Ollama'],
    category: 'fullstack',
    demo: 'https://github.com/YANCARLOSOFICIAL/chatbot-uniputumayo',
    github: 'https://github.com/YANCARLOSOFICIAL/chatbot-uniputumayo',
  },
  {
    title: 'Waira Solutions',
    description: 'Sitio corporativo con escena 3D interactiva, diseño responsivo y sistema de contacto.',
    descriptionEn: 'Corporate website with interactive 3D scene, responsive design, and contact system.',
    tech: ['Next.js', 'React Three Fiber', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'frontend',
    demo: 'https://www.wairasolutions.com/',
    github: 'https://github.com/YANCARLOSOFICIAL/Waira-Solutions',
  },
  {
    title: 'Plataforma Educativa IA',
    description: 'Plataforma educativa que genera exámenes, resúmenes, rúbricas y más usando IA.',
    descriptionEn: 'Educational platform that generates exams, summaries, rubrics and more using AI.',
    tech: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Ollama', 'Gemini'],
    category: 'ai',
    demo: 'https://github.com/YANCARLOSOFICIAL/plataforma-educativa-con-IA',
    github: 'https://github.com/YANCARLOSOFICIAL/plataforma-educativa-con-IA',
  },
  {
    title: 'Sistema Solar 3D',
    description: 'Aplicación interactiva 3D con modelos de la NASA, realidad aumentada y modo juego.',
    descriptionEn: 'Interactive 3D app with NASA models, augmented reality, and game mode.',
    tech: ['Three.js', 'JavaScript', 'NASA GLB', 'WebXR'],
    category: 'frontend',
    demo: 'https://github.com/YANCARLOSOFICIAL/Sistema-Solar-3D',
    github: 'https://github.com/YANCARLOSOFICIAL/Sistema-Solar-3D',
  },
  {
    title: 'API Facturas IA',
    description: 'Extracción de datos estructurados de facturas PDF usando GPT-4o y FastAPI.',
    descriptionEn: 'Structured data extraction from PDF invoices using GPT-4o and FastAPI.',
    tech: ['FastAPI', 'Python', 'OpenAI', 'Docker', 'JWT'],
    category: 'backend',
    demo: 'https://github.com/YANCARLOSOFICIAL/api-facturas-2',
    github: 'https://github.com/YANCARLOSOFICIAL/api-facturas-2',
  },
  {
    title: 'Tienda Microservicios',
    description: 'Plataforma e-commerce con arquitectura de microservicios y autenticación JWT.',
    descriptionEn: 'E-commerce platform with microservices architecture and JWT authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'fullstack',
    demo: 'https://github.com/YANCARLOSOFICIAL/tienda-microservicios',
    github: 'https://github.com/YANCARLOSOFICIAL/tienda-microservicios',
  },
];

const filters = [
  { id: 'all', labelKey: 'projects.filtro.todos' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'AI' },
];

const categoryStyles: Record<string, string> = {
  fullstack: 'bg-accent text-white border-accent',
  frontend: 'bg-cyber text-black border-cyber',
  backend: 'bg-depth text-white border-depth',
  ai: 'bg-alert text-black border-alert',
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

export default function Projects() {
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
        <div className="flex items-start gap-6 mb-12">
          <span className="section-number">04</span>
          <div>
            <p className="section-tag">{t('projects.tag')}</p>
            <h2 className="section-title">{t('projects.title')}</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-5 py-2 font-display text-xs uppercase tracking-wider border-2 transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-accent text-white border-accent'
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
                    className="px-3 py-1.5 bg-accent text-white text-xs font-display uppercase tracking-wider flex items-center gap-1 hover:bg-accentLight transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {project.demo.includes('github.com') ? 'Repo' : 'Demo'}
                  </a>
                  {!project.demo.includes('github.com') && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-background text-text-secondary text-xs font-display uppercase tracking-wider border-2 border-border flex items-center gap-1 hover:border-accent hover:text-accent transition-colors"
                    >
                      <Code2 className="w-3 h-3" />
                      Code
                    </a>
                  )}
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className={`px-2 py-1 text-xs font-display uppercase tracking-wider border-2 ${categoryStyles[project.category] || ''}`}>
                    {project.category === 'ai' ? 'AI' : project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
