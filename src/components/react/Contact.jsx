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
      await new Promise((resolve) => setTimeout(resolve, 1500));

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
    <section id="contact" className="py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-16">
          <p className="text-accent-cyan text-sm font-medium tracking-wider mb-4">CONTACT</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400">
            Disponible para nuevos proyectos, consultorías y colaboraciones.
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Name *
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
                    : 'border-white/10 focus:ring-accent-blue'
                } bg-white/5 text-white focus:ring-2 focus:outline-none transition-all duration-200`}
                placeholder="Your name"
                suppressHydrationWarning
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                suppressHydrationWarning
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-white/10 focus:ring-accent-blue'
                } bg-white/5 text-white focus:ring-2 focus:outline-none transition-all duration-200`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                suppressHydrationWarning
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-white/10 focus:ring-accent-blue'
                } bg-white/5 text-white focus:ring-2 focus:outline-none transition-all duration-200 resize-none`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              suppressHydrationWarning
              className="w-full px-10 py-4 bg-primary-500 text-white rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
                Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
              </div>
            )}
          </form>

          {/* Direct Email */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400 mb-2">Or email me directly at:</p>
            <a href="mailto:yancarlospinchao2021@itp.edu.co" className="text-primary-100 font-semibold hover:text-white transition-colors">yancarlospinchao2021@itp.edu.co</a>
          </div>
        </div>
      </div>
    </section>
  );
}
