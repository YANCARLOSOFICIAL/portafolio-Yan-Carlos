export default function Contact() {
  return (
  <section id="contact" className="py-24 px-6 bg-gradient-to-br from-white via-slate-100 to-purple-100 dark:from-slate-900 dark:via-primary-dark dark:to-accent-dark transition-colors duration-500">
  <div className="max-w-3xl mx-auto text-center bg-white dark:bg-slate-900 rounded-2xl p-10 border border-accent/30 shadow-2xl backdrop-blur-md animate-fadeInUp">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary-light to-highlight bg-clip-text text-transparent tracking-tight dark:from-primary-light dark:to-highlight">
          ¿Listo para crear algo épico?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
          <span className="text-slate-800 dark:text-white">Estoy disponible para nuevos proyectos, consultorías y colaboraciones.<br />
          Escríbeme a <a href="mailto:yancarlospinchao2021@itp.edu.co" className="text-purple-700 underline font-semibold dark:text-purple-300">yancarlospinchao2021@itp.edu.co</a></span>
        </p>
        <a href="mailto:yancarlospinchao2021@itp.edu.co" className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold text-lg shadow-lg hover:from-accent hover:to-highlight-dark transition-all duration-300 transform hover:scale-105 animate-fadeInUp">
          ¡Hablemos!
        </a>
      </div>
    </section>
  );
}
