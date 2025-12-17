export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-blue text-sm font-medium tracking-wider mb-4">ABOUT ME</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
            Building the future
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Soy <span className="font-bold text-white">Yan Carlos Guerra</span>, estudiante de noveno semestre de Ingeniería en Sistemas con sólida formación en desarrollo de software full-stack y arquitectura de aplicaciones.
          </p>
          <p className="text-base text-gray-500 leading-relaxed max-w-3xl mx-auto mt-4">
            Experiencia práctica en la implementación de soluciones tecnológicas utilizando múltiples lenguajes y frameworks modernos. Orientado a resultados con capacidad demostrada para adaptarme rápidamente a nuevas tecnologías.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• UI/UX moderno y accesible</li>
              <li>• React, Astro, animaciones</li>
              <li>• Diseño responsivo mobile-first</li>
              <li>• Performance y SEO optimizado</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent-purple/50 transition-all duration-300">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• APIs robustas (REST, GraphQL)</li>
              <li>• Node.js, bases de datos SQL/NoSQL</li>
              <li>• Autenticación y escalabilidad</li>
              <li>• DevOps, CI/CD y cloud</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
