import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const typewriterWords = [
  'Full Stack Developer',
  'React Developer', 
  'Laravel Developer',
  'Node.js Developer',
];

const techIcons = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'Vue', color: '#42b883' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Astro', color: '#FF5C03' },
];

const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos completados' },
  { value: '500+', label: 'Empresas atendidas' },
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          setCurrentWord(0);
        } else {
          setCurrentWord((prev) => prev - 1);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-purple-400 text-sm font-mono tracking-wider uppercase"
            >
              HOLA, MI NOMBRE ES
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Yan Carlos
              </span>
              <span className="block text-white">Guerra</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl md:text-3xl font-semibold text-gray-300">
                {typewriterWords[currentWord]}
              </span>
              <span className="w-1 h-8 bg-purple-500 animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Disponible para trabajar</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Estudiante de 10° semestre con +1 año de experiencia en producción. Transformo ideas en soluciones tecnológicas con React, Node.js y arquitecturas modernas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver proyectos
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                onClick={() => window.open('https://wa.me/573105374074', '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-sm text-gray-500">Conecta:</span>
              <div className="flex gap-2">
                {[
                  { icon: Github, url: 'https://github.com/YANCARLOSOFICIAL', label: 'GitHub' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/yancarlos-pinchao-guerra-0b928a196', label: 'LinkedIn' },
                  { icon: Mail, url: 'mailto:yancarlospinchao2021@itp.edu.co', label: 'Email' },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-400/50 transition-all duration-200"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-4"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-mono">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techIcons.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-mono hover:border-purple-400/50 hover:text-white transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                  <p className="text-sm text-gray-300 text-center">
                    <span className="text-purple-400 font-semibold">30%</span> de reducción en tiempos de facturación en Kamila Innovation
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['React', 'Node.js', 'Laravel', 'Vue.js', 'TypeScript', 'PostgreSQL'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className="px-3 py-2 bg-white/5 rounded-lg text-xs text-gray-300 text-center font-mono border border-white/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="lg:hidden mt-8 grid grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-2xl font-bold text-purple-400">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}