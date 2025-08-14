const projects = [
  {
    title: 'E-Commerce Moderno',
    description: 'Plataforma de comercio electrónico con panel de administración y pagos integrados.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  },
  {
    title: 'Gestor de Tareas',
    description: 'App colaborativa para gestión de tareas en tiempo real.',
    tech: ['Astro', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
  },
  {
    title: 'Dashboard Social',
    description: 'Dashboard analítico para redes sociales y métricas en tiempo real.',
    tech: ['Astro', 'React', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
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
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-light dark:text-primary group-hover:text-accent dark:group-hover:text-highlight transition-colors">
                  <span className="text-purple-700 dark:text-purple-300">{project.title}</span>
                </h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  <span className="text-slate-800 dark:text-white/80">{project.description}</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-xs border border-purple-300 dark:border-purple-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
