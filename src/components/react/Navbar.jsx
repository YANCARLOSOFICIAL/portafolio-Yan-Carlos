export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900/80 via-slate-900/80 to-pink-900/80 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900 shadow-lg backdrop-blur-md transition-colors duration-500 font-sans dark:font-display">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
          Yan Carlos Guerra
        </span>
        <div className="hidden md:flex gap-8">
          <a href="#hero" className="text-lg font-medium text-white/80 dark:text-white hover:text-purple-300 dark:hover:text-yellow-400 transition-colors duration-200 relative group">
            Inicio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 dark:bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="text-lg font-medium text-white/80 dark:text-white hover:text-purple-300 dark:hover:text-yellow-400 transition-colors duration-200 relative group">
            Sobre mi
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 dark:bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="text-lg font-medium text-white/80 dark:text-white hover:text-purple-300 dark:hover:text-yellow-400 transition-colors duration-200 relative group">
            Proyectos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 dark:bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="text-lg font-medium text-white/80 dark:text-white hover:text-purple-300 dark:hover:text-yellow-400 transition-colors duration-200 relative group">
            Habilidades
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 dark:bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-lg font-medium text-white/80 dark:text-white hover:text-purple-300 dark:hover:text-yellow-400 transition-colors duration-200 relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 dark:bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
