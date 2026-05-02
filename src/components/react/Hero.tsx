import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const typewriterWords = ['Full Stack Developer', 'React Developer', 'Laravel Developer', 'Node.js Developer'];

const techStack = ['React', 'Node.js', 'Laravel', 'Vue.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'];

const stats = [
  { value: '2+', label: 'años experiencia' },
  { value: '10+', label: 'proyectos' },
  { value: '500+', label: 'empresas' },
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentWord === typewriterWords.length - 1) {
          setIsDeleting(true);
        } else {
          setCurrentWord((prev) => prev + 1);
        }
      } else {
        if (currentWord === 0) {
          setIsDeleting(false);
        } else {
          setCurrentWord((prev) => prev - 1);
        }
      }
    }, isDeleting ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-neon-purple/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-neon-purple" />
              <span className="text-neon-purple font-mono text-sm tracking-widest uppercase">Portfolio 2025</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
            >
              <span className="block text-text-primary">Yan Carlos</span>
              <span className="block text-gradient">Guerra</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl md:text-3xl font-semibold text-text-primary">
                {typewriterWords[currentWord]}
              </span>
              <span className="w-[2px] h-8 bg-neon-purple animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-green-400 font-medium">Disponible para trabajar</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-text-secondary max-w-lg leading-relaxed"
            >
              Estudiante de 10° semestre con +1 año de experiencia en producción. 
              Transformo ideas en soluciones tecnológicas con código limpio y moderno.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary flex items-center gap-2 group">
                Ver proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => window.open('https://wa.me/573105374074', '_blank')} className="btn-secondary">
                Contactar
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-text-muted text-sm">Conecta:</span>
              <div className="flex gap-2">
                {[
                  { icon: Github, url: 'https://github.com/YANCARLOSOFICIAL', label: 'GitHub' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/yancarlos-pinchao-guerra-0b928a196', label: 'LinkedIn' },
                  { icon: Mail, url: 'mailto:yancarlospinchao2021@itp.edu.co', label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/5 text-text-secondary hover:text-neon-purple hover:border-neon-purple/30 hover:shadow-glow-purple-sm transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech, i) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 rounded-3xl blur-2xl" />
              
              <div className="relative glass rounded-3xl p-8 border border-white/5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Logros destacados</h3>
                    <p className="text-text-muted text-sm">Kamila Innovation S.A.S</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="metric-card group">
                      <p className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">
                        {stat.value}
                      </p>
                      <p className="text-text-muted text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Achievement */}
                <div className="p-4 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-xl border border-neon-purple/20">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">Reducción en tiempos de facturación</span>
                    <span className="text-2xl font-bold text-neon-purple">30%</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Laravel', 'Vue.js', 'REST APIs', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-text-secondary font-mono border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:hidden mt-12"
        >
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 glass rounded-xl">
                <p className="text-2xl font-bold text-neon-purple">{stat.value}</p>
                <p className="text-text-muted text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}