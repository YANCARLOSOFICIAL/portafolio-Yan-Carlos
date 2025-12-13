import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulación de envío - Aquí integrarías tu backend o servicio
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Por ahora, abrimos mailto como fallback
      const mailtoLink = `mailto:yancarlospinchao2021@itp.edu.co?subject=Contacto desde portafolio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section id="contact" className="py-24 px-6 bg-gradient-to-br from-white via-slate-100 to-purple-100 dark:from-slate-900 dark:via-primary-dark dark:to-accent-dark transition-colors duration-500">
  <div className="max-w-3xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary-light to-highlight bg-clip-text text-transparent tracking-tight dark:from-primary-light dark:to-highlight">
          ¿Listo para crear algo épico?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto font-medium text-center">
          <span className="text-slate-800 dark:text-white">Estoy disponible para nuevos proyectos, consultorías y colaboraciones.</span>
        </p>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-accent/30 shadow-2xl backdrop-blur-md animate-fadeInUp">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-800 dark:text-white mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-300 dark:border-slate-600 focus:ring-purple-500'
                } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-200`}
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800 dark:text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-300 dark:border-slate-600 focus:ring-purple-500'
                } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-200`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800 dark:text-white mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-300 dark:border-slate-600 focus:ring-purple-500'
                } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-200 resize-none`}
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-4 bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-500 dark:to-pink-500 rounded-full text-white font-bold text-lg shadow-lg hover:from-purple-800 hover:to-pink-800 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  ¡Hablemos!
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-300 text-center animate-fadeInUp">
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-300 text-center animate-fadeInUp">
                Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
              </div>
            )}
          </form>

          {/* Email directo */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              O escríbeme directamente a:
            </p>
            <a
              href="mailto:yancarlospinchao2021@itp.edu.co"
              className="text-purple-700 dark:text-purple-300 font-semibold hover:underline"
            >
              yancarlospinchao2021@itp.edu.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
