import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Github, Mail, Copy, Check, Send } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

const { contact } = siteConfig;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [copied, setCopied] = useState(false);

  const email = siteConfig.email;

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mailtoLink = `mailto:${email}?subject=Contacto desde portafolio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const quickContacts = [
    {
      name: 'WhatsApp',
      url: siteConfig.social.whatsapp,
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Respuesta inmediata',
    },
    {
      name: 'LinkedIn',
      url: siteConfig.social.linkedin,
      icon: Linkedin,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Conectemos profesionalmente',
    },
    {
      name: 'GitHub',
      url: siteConfig.social.github,
      icon: Github,
      color: 'bg-gray-700 hover:bg-gray-600',
      description: 'Explora mi código',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm font-mono tracking-wider uppercase mb-2">{contact.tag}</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">{contact.title}</h2>
          <p className="text-lg text-gray-400">{contact.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {quickContacts.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} p-6 rounded-xl text-white text-center transition-all duration-200 hover:scale-105 hover:shadow-lg group`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">{item.name}</p>
              <p className="text-xs text-white/80">{item.description}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  {contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                  } bg-white/5 text-white focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  {contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                  } bg-white/5 text-white focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                {contact.form.message} *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                } bg-white/5 text-white focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all resize-none`}
                placeholder="Cuéntame sobre tu proyecto..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {contact.form.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {contact.form.submit}
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
                {contact.form.success}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
                {contact.form.error}
              </div>
            )}
          </form>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-sm text-gray-400">{contact.or}</p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-purple-300 font-semibold hover:text-white transition-colors font-mono text-sm"
                >
                  {email}
                </a>
                <motion.button
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-200 flex items-center gap-1.5 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}