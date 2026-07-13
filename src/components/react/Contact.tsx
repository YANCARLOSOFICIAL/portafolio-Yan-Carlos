import { useState } from 'react';
import { MessageCircle, Linkedin, Github, Mail, Copy, Check, Send } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const email = 'yancarlospinchao2021@itp.edu.co';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [copied, setCopied] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('contact.requerido');
      isValid = false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.email.invalido');
      isValid = false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t('contact.mensaje.min');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));

    const subject = lang === 'es'
      ? `Portafolio Contacto - ${formData.name}`
      : `Portfolio Contact - ${formData.name}`;
    const body = lang === 'es'
      ? `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      : `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    { name: 'WhatsApp', url: 'https://wa.me/573229369995', icon: MessageCircle, descKey: 'contact.whatsapp.desc' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yancarlos-pinchao-guerra-0b928a196', icon: Linkedin, descKey: 'contact.linkedin.desc' },
    { name: 'GitHub', url: 'https://github.com/YANCARLOSOFICIAL', icon: Github, descKey: 'contact.github.desc' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pattern-grid" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex items-start gap-6 mb-12">
          <span className="section-number">07</span>
          <div>
            <p className="section-tag">{t('contact.tag')}</p>
            <h2 className="section-title">{t('contact.title')}</h2>
          </div>
        </div>

        <p className="text-text-secondary text-lg mb-10 font-sans max-w-2xl">
          {t('contact.desc')}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {quickContacts.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-card p-6 text-center group"
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:text-accentLight transition-colors" />
              <p className="font-display text-text-primary font-bold uppercase tracking-wider text-sm mb-1">{item.name}</p>
              <p className="font-display text-text-muted text-xs uppercase tracking-wide">{t(item.descKey)}</p>
            </a>
          ))}
        </div>

        <div className="brutal-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-brutal"
                  placeholder={t('contact.nombre')}
                />
                {errors.name && <p className="mt-1 font-display text-xs text-accent">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-brutal"
                  placeholder={t('contact.email')}
                />
                {errors.email && <p className="mt-1 font-display text-xs text-accent">{errors.email}</p>}
              </div>
            </div>

            <div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="input-brutal resize-none"
                placeholder={t('contact.mensaje')}
              />
              {errors.message && <p className="mt-1 font-display text-xs text-accent">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent text-white font-display text-sm uppercase tracking-wider border-2 border-accent
                         hover:bg-transparent hover:text-accent transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t('contact.enviando')}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('contact.enviar')}
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-cyber/10 border-2 border-cyber text-cyber text-center font-display text-sm uppercase tracking-wider">
                {t('contact.success')}
              </div>
            )}
          </form>

          <div className="mt-6 pt-6 border-t-2 border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="font-display text-text-muted text-xs uppercase tracking-wider">{t('contact.oescribe')}</span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="font-display text-accent text-sm hover:text-accentLight transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 bg-surface border-2 border-border text-text-muted hover:border-accent hover:text-accent transition-all duration-200 flex items-center gap-1.5 font-display text-xs uppercase tracking-wider"
                >
                  {copied ? <Check className="w-4 h-4 text-cyber" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? t('contact.copiado') : t('contact.copiar')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
