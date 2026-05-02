import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Github, Mail, Copy, Check, Send } from 'lucide-react';

const email = 'yancarlospinchao2021@itp.edu.co';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [copied, setCopied] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) { newErrors.name = 'Required'; isValid = false; }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Invalid email'; isValid = false; }
    if (!formData.message.trim() || formData.message.trim().length < 10) { newErrors.message = 'Min 10 characters'; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));

    const mailtoLink = `mailto:${email}?subject=Portfolio Contact - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickContacts = [
    { name: 'WhatsApp', url: 'https://wa.me/573105374074', icon: MessageCircle, color: 'bg-green-500 hover:bg-green-600', desc: ' respuesta inmediata' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yancarlos-pinchao-guerra-0b928a196', icon: Linkedin, color: 'bg-blue-600 hover:bg-blue-700', desc: 'conexión profesional' },
    { name: 'GitHub', url: 'https://github.com/YANCARLOSOFICIAL', icon: Github, color: 'bg-zinc-700 hover:bg-zinc-600', desc: 'explora mi código' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-neon-purple/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-title">CONTACTO</p>
          <h2 className="section-heading mb-4">¿Trabajamos juntos?</h2>
          <p className="text-text-secondary text-lg">Disponible para proyectos, consultorías y colaboraciones.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {quickContacts.map((item) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} p-6 rounded-2xl text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">{item.name}</p>
              <p className="text-xs text-white/80">{item.desc}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8 border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="input-field resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-neon-purple text-white font-bold rounded-xl hover:bg-neon-purpleLight hover:shadow-glow-purple transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
                ¡Mensaje enviado! Redirecting to email...
              </div>
            )}
          </form>

          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-text-muted text-sm">O escribe a:</span>
              <div className="flex items-center gap-2">
                <a href={`mailto:${email}`} className="text-neon-purple font-mono hover:text-neon-purpleLight transition-colors">
                  {email}
                </a>
                <motion.button
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 bg-surface border border-white/5 rounded-lg text-text-secondary hover:text-white hover:border-neon-purple/30 transition-all duration-200 flex items-center gap-1.5 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copiado' : 'Copiar'}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}