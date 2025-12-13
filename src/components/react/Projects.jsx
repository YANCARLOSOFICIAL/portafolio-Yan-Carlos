const projects = [
  {
    title: 'E-Commerce Moderno',
    description: 'Plataforma de comercio electrónico con panel de administración y pagos integrados.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    demo: 'https://ejemplo-ecommerce.com',
    github: 'https://github.com/YANCARLOSOFICIAL/ecommerce-moderno',
  },
  {
    title: 'Gestor de Tareas',
    description: 'App colaborativa para gestión de tareas en tiempo real.',
    tech: ['Astro', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    demo: 'https://ejemplo-tareas.com',
    github: 'https://github.com/YANCARLOSOFICIAL/gestor-tareas',
  },
  {
    title: 'Dashboard Social',
    description: 'Dashboard analítico para redes sociales y métricas en tiempo real.',
    tech: ['Astro', 'React', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    demo: 'https://ejemplo-dashboard.com',
    github: 'https://github.com/YANCARLOSOFICIAL/dashboard-social',
  },
];

export default function Projects() {
  return (
  <section id="projects" className="py-24 px-6 bg-gradient-to-br from-white via-slate-100 to-purple-100 dark:from-slate-900 dark:via-primary-dark dark:to-accent-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary-light to-highlight bg-clip-text text-transparent tracking-tight dark:from-primary-light dark:to-highlight">
          Proyectos Épicos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/20 dark:border-primary-dark hover:border-purple-400 dark:hover:border-purple-500 shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-highlight/20 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent dark:group-hover:text-highlight transition-colors">
                  <span className="text-purple-700 dark:text-purple-300">{project.title}</span>
                </h3>
                <p className="mb-4 text-sm leading-relaxed">
                  <span className="text-slate-800 dark:text-white/80">{project.description}</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-xs border border-purple-300 dark:border-purple-500">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botones de acción */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
