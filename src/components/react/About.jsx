export default function About() {
  return (
  <section id="about" className="py-24 px-6 bg-gradient-to-br from-white via-slate-100 to-purple-100 dark:from-slate-900 dark:via-primary-dark dark:to-accent-dark transition-colors duration-500">
      <div className="max-w-4xl mx-auto bg-dark/90 rounded-2xl shadow-2xl p-10 border border-accent/30 backdrop-blur-md animate-fadeInUp">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary-light to-highlight bg-clip-text text-transparent tracking-tight dark:from-primary-light dark:to-highlight">
          Sobre mi
        </h2>
        <p className="text-lg text-white/90 leading-relaxed text-center max-w-2xl mx-auto font-medium mb-6">
          <span className="text-white dark:text-white">Soy <span className="text-primary font-bold dark:text-primary-light">Yan Carlos Guerra</span>, desarrollador full stack con pasión por la excelencia y la innovación. Mi misión es crear productos digitales que impacten positivamente a las personas y empresas.</span>
          <span className="block mt-4 text-base text-purple-700 dark:text-purple-300 font-semibold">Actualmente tengo en proceso una empresa de desarrollo de software y TI llamada <a href="https://wairasolutions.com/" target="_blank" rel="noopener" className="underline hover:text-purple-500 dark:hover:text-purple-400">Waira Solutions</a>.</span>
  <span className="block mt-2 text-base text-white dark:text-white/80">Waira Solutions nace con la visión de impulsar la transformación digital de empresas y emprendedores, ofreciendo soluciones tecnológicas innovadoras, desarrollo de software a medida, consultoría en TI y acompañamiento estratégico. Nuestro objetivo es potenciar el crecimiento y la eficiencia de nuestros clientes a través de tecnología de vanguardia y un equipo apasionado por la excelencia.</span>
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/20 dark:border-primary-dark shadow-md animate-fadeInUp">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Frontend</h3>
            <ul className="text-base space-y-1">
              <li className="text-slate-800 dark:text-white/80">UI/UX moderno y accesible</li>
              <li className="text-slate-800 dark:text-white/80">React, Astro, animaciones y microinteracciones</li>
              <li className="text-slate-800 dark:text-white/80">Diseño responsivo y mobile first</li>
              <li className="text-slate-800 dark:text-white/80">Performance y SEO</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-purple-700 rounded-xl p-6 border border-purple-300 dark:border-purple-500 shadow-md animate-fadeInUp">
            <h3 className="text-xl font-bold text-purple-700 dark:text-white mb-2">Backend</h3>
            <ul className="text-base space-y-1">
              <li className="text-slate-800 dark:text-white/80">APIs robustas y seguras (REST, GraphQL)</li>
              <li className="text-slate-800 dark:text-white/80">Node.js, Express, bases de datos SQL/NoSQL</li>
              <li className="text-slate-800 dark:text-white/80">Autenticación, seguridad y escalabilidad</li>
              <li className="text-slate-800 dark:text-white/80">DevOps, CI/CD y despliegue en la nube</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
