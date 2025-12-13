export default function Hero() {
  return (
  <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-display px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-slate-900 dark:via-purple-950 dark:to-indigo-950 transition-colors duration-500">
      {/* Fondo animado épico mejorado */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 dark:from-slate-900 dark:via-purple-950 dark:to-indigo-950 -z-20"></div>
  {/* Fondo para modo claro */}
  <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:hidden -z-20"></div>
  {/* El fondo ya responde a dark */}
      
      {/* Partículas flotantes mejoradas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl left-1/4 top-1/4 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-72 h-72 bg-pink-500/15 rounded-full blur-2xl right-10 top-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-60 h-60 bg-blue-500/10 rounded-full blur-2xl left-10 bottom-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl right-1/3 bottom-1/4 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Estrellas brillantes */}
        <div className="absolute w-2 h-2 bg-white rounded-full top-20 left-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-40 right-40 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full bottom-40 left-40 animate-pulse" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full bottom-20 right-20 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="text-center z-10 animate-fadeInUp max-w-5xl mx-auto">
        {/* Avatar mejorado */}
        <div className="mb-12">
          <div className="w-44 h-44 mx-auto mb-8 rounded-full bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 p-1.5 shadow-2xl animate-float relative">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
              <span className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg" aria-label="Yan Carlos">YC</span>
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-yellow-100/10 transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            </div>
          </div>
        </div>
        
        {/* Título mejorado */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl tracking-tight animate-fadeInUp leading-tight">
          Yan Carlos Guerra
        </h1>
        
        {/* Subtitulo con efectos */}
        <div className="relative mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-white max-w-4xl mx-auto font-medium leading-relaxed animate-fadeInUp">
            Soy un{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">Desarrollador Full Stack</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            {' '}apasionado por crear
            <br className="hidden md:block" />
            experiencias digitales únicas y funcionales.
          </p>
        </div>
        
        {/* Descripción mejorada */}
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 font-normal leading-relaxed animate-fadeInUp px-4">
          <span className="text-slate-700 dark:text-white">Especializado en{' '}</span>
          <span className="text-blue-700 dark:text-blue-400 font-semibold">Frontend</span> <span className="text-slate-700 dark:text-white">(React, Astro, UI/UX, animaciones)</span> y{' '}
          <span className="text-purple-700 dark:text-purple-400 font-semibold">Backend</span> <span className="text-slate-700 dark:text-white">(Node.js, APIs, bases de datos, arquitectura).</span>
          <br className="hidden md:block" />
          <span className="text-slate-700 dark:text-white">Transformo ideas en productos digitales de alto impacto.</span>
        </p>
        
        {/* Tecnologías con efectos mejorados */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
          {[
            { name: 'React', color: 'from-cyan-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500' },
            { name: 'Astro', color: 'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400' },
            { name: 'Node.js', color: 'from-green-600 to-emerald-700 dark:from-green-400 dark:to-emerald-500' },
            { name: 'TypeScript', color: 'from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500' },
            { name: 'APIs REST', color: 'from-orange-600 to-red-700 dark:from-orange-400 dark:to-red-500' },
            { name: 'Bases de Datos', color: 'from-yellow-600 to-orange-700 dark:from-yellow-400 dark:to-orange-500' }
          ].map((tech, index) => (
            <span 
              key={index}
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} text-white font-semibold shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-xl transform hover:rotate-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        {/* Botón de acción mejorado */}
        <div className="animate-fadeInUp">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-500 dark:to-pink-500 rounded-full text-white font-bold text-lg shadow-2xl hover:from-purple-800 hover:to-pink-800 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25 group"
          >
            <span>¡Trabajemos juntos!</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
