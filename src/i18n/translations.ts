export type Lang = 'es' | 'en';

export type TranslationMap = Record<string, Record<Lang, string>>;

export const translations: TranslationMap = {
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.sobremi': { es: 'Sobre mí', en: 'About' },
  'nav.experiencia': { es: 'Experiencia', en: 'Experience' },
  'nav.proyectos': { es: 'Proyectos', en: 'Projects' },
  'nav.skills': { es: 'Skills', en: 'Skills' },
  'nav.educacion': { es: 'Educación', en: 'Education' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },

  'hero.tag': { es: 'Portfolio 2026', en: 'Portfolio 2026' },
  'hero.disponible': { es: 'Disponible para trabajar', en: 'Available for work' },
  'hero.desc': {
    es: 'Estudiante de 10° semestre con +1 año de experiencia en producción. Transformo ideas en soluciones tecnológicas con código limpio y moderno.',
    en: '10th semester student with +1 year of production experience. I transform ideas into tech solutions with clean, modern code.',
  },
  'hero.verproyectos': { es: 'Ver proyectos', en: 'View projects' },
  'hero.contactar': { es: 'Contactar', en: 'Contact me' },
  'hero.conecta': { es: 'Conecta:', en: 'Connect:' },
  'hero.logros': { es: 'Logros destacados', en: 'Key achievements' },
  'hero.reduccion': { es: 'Reducción en facturación', en: 'Billing time reduction' },

  'hero.stat.experiencia': { es: 'año experiencia', en: 'year experience' },
  'hero.stat.proyectos': { es: 'proyectos', en: 'projects' },
  'hero.stat.empresas': { es: 'empresas atendidas', en: 'companies served' },

  'about.tag': { es: 'SOBRE MÍ', en: 'ABOUT ME' },
  'about.title': { es: 'Construyendo el futuro', en: 'Building the future' },
  'about.bio1': {
    es: 'Soy **Yan Carlos Guerra**, estudiante de Ingeniería en Sistemas con +1 año de experiencia en desarrollo full-stack. Me especializo en crear soluciones tecnológicas que generan resultados medibles.',
    en: 'I\'m **Yan Carlos Guerra**, Systems Engineering student with +1 year of full-stack development experience. I specialize in creating tech solutions that deliver measurable results.',
  },
  'about.bio2': {
    es: 'En **Kamila Innovation S.A.S**, participé en el desarrollo de sistemas que sirven a más de 500 empresas. Me apasiona aprender nuevas tecnologías y adaptarme rápidamente a los requerimientos del equipo.',
    en: 'At **Kamila Innovation S.A.S**, I helped build systems serving 500+ companies. I\'m passionate about learning new technologies and quickly adapting to team needs.',
  },
  'about.metric.empresas': { es: 'Empresas atendidas', en: 'Companies served' },
  'about.metric.proyectos': { es: 'Proyectos', en: 'Projects' },
  'about.metric.reduccion': { es: 'Reducción en facturación', en: 'Billing reduction' },
  'about.frontend': { es: 'Frontend', en: 'Frontend' },
  'about.backend': { es: 'Backend', en: 'Backend' },

  'exp.tag': { es: 'EXPERIENCIA', en: 'EXPERIENCE' },
  'exp.title': { es: 'Trayectoria profesional', en: 'Professional journey' },
  'exp.logros': { es: 'Logros', en: 'Achievements' },

  'skills.tag': { es: 'HABILIDADES', en: 'SKILLS' },
  'skills.title': { es: 'Tecnologías', en: 'Technologies' },

  'testimonials.tag': { es: 'TESTIMONIOS', en: 'TESTIMONIALS' },
  'testimonials.title': { es: 'Lo que dicen', en: 'What they say' },

  'edu.tag': { es: 'FORMACIÓN', en: 'EDUCATION' },
  'edu.title': { es: 'Educación académica', en: 'Academic education' },
  'edu.certificaciones': { es: 'Certificaciones', en: 'Certifications' },
  'edu.continua': { es: 'Formación continua', en: 'Continuous learning' },
  'edu.continua.desc': { es: 'Siempre aprendiendo nuevas tecnologías y mejores prácticas.', en: 'Always learning new technologies and best practices.' },
  'edu.credencial': { es: 'Credencial:', en: 'Credential:' },

  'projects.tag': { es: 'PORTAFOLIO', en: 'PORTFOLIO' },
  'projects.title': { es: 'Proyectos destacados', en: 'Featured projects' },
  'projects.filtro.todos': { es: 'Todos', en: 'All' },

  'contact.tag': { es: 'CONTACTO', en: 'CONTACT' },
  'contact.title': { es: '¿Trabajamos juntos?', en: 'Let\'s work together?' },
  'contact.desc': {
    es: 'Disponible para proyectos, consultorías y colaboraciones. Escríbeme y te responderé a la brevedad.',
    en: 'Available for projects, consulting, and collaborations. Drop me a message and I\'ll get back to you shortly.',
  },
  'contact.whatsapp.desc': { es: 'respuesta inmediata', en: 'instant reply' },
  'contact.linkedin.desc': { es: 'conexión profesional', en: 'professional network' },
  'contact.github.desc': { es: 'explora mi código', en: 'explore my code' },
  'contact.nombre': { es: 'Tu nombre', en: 'Your name' },
  'contact.email': { es: 'tu@email.com', en: 'your@email.com' },
  'contact.mensaje': { es: 'Cuéntame sobre tu proyecto...', en: 'Tell me about your project...' },
  'contact.enviar': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.enviando': { es: 'Enviando...', en: 'Sending...' },
  'contact.success': { es: 'Mensaje enviado — Redirigiendo al correo...', en: 'Message sent — Redirecting to email...' },
  'contact.oescribe': { es: 'O escribe a:', en: 'Or write to:' },
  'contact.copiar': { es: 'Copiar', en: 'Copy' },
  'contact.copiado': { es: 'Copiado', en: 'Copied' },
  'contact.requerido': { es: 'Requerido', en: 'Required' },
  'contact.email.invalido': { es: 'Email inválido', en: 'Invalid email' },
  'contact.mensaje.min': { es: 'Mínimo 10 caracteres', en: 'Min 10 characters' },

  'footer.copyright': { es: '© 2026 Yan Carlos Guerra — Todos los derechos reservados.', en: '© 2026 Yan Carlos Guerra — All rights reserved.' },
};

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
