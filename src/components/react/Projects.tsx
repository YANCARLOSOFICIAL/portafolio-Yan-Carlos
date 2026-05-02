import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'fullstack' | 'frontend' | 'backend';
  demo: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Moderno',
    description: 'Plataforma de comercio electrónico con panel de administración y pagos integrados.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    demo: 'https://ejemplo-ecommerce.com',
    github: 'https://github.com/YANCARLOSOFICIAL/ecommerce-moderno',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Gestor de Tareas',
    description: 'App colaborativa para gestión de tareas en tiempo real con sockets.',
    tech: ['Astro', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    demo: 'https://ejemplo-tareas.com',
    github: 'https://github.com/YANCARLOSOFICIAL/gestor-tareas',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
  },
  {
    title: 'Dashboard Social',
    description: 'Dashboard analítico para redes sociales y métricas en tiempo real.',
    tech: ['Astro', 'React', 'D3.js'],
    category: 'frontend',
    demo: 'https://ejemplo-dashboard.com',
    github: 'https://github.com/YANCARLOSOFICIAL/dashboard-social',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
];

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setFilteredProjects(filterId === 'all' ? projects : projects.filter(p => p.category === filterId));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fullstack': return 'bg-neon-purple/20 text-neon-purpleLight border-neon-purple/30';
      case 'frontend': return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30';
      case 'backend': return 'bg-neon-pink/20 text-neon-pink border-neon-pink/30';
      default: return 'bg-white/5 text-text-secondary border-white/10';
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-title">PORTAFOLIO</p>
          <h2 className="section-heading">Proyectos destacados</h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-neon-purple text-white shadow-glow-purple-sm'
                  : 'bg-surface border border-white/5 text-text-secondary hover:text-white hover:border-neon-purple/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group card-neon overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  <div className="absolute top-3 right-3 flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-neon-purple/90 text-white text-xs rounded-lg flex items-center gap-1 hover:bg-neon-purple transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-surface/80 backdrop-blur-sm text-white text-xs rounded-lg border border-white/10 flex items-center gap-1 hover:bg-surface hover:border-white/20 transition-colors"
                    >
                      <Code2 className="w-3 h-3" />
                      Code
                    </a>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 text-xs rounded-md font-mono border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}