import React from "react";
import { useLanguage } from "./LanguageContext";

const testimonials = [
  {
    name: "María Rodríguez",
    role: "Cliente freelance",
    text: "Yan Carlos es un profesional comprometido, con gran capacidad técnica y excelente actitud para el trabajo en equipo. Sus soluciones han mejorado nuestros procesos internos.",
    avatar: "/src/assets/testimonials/avatar1.svg"
  },
  {
    name: "Juan Pérez",
    role: "Profesor de Ingeniería de Sistemas",
    text: "Destaco la dedicación y el aprendizaje constante de Yan Carlos. Ha demostrado habilidades excepcionales en desarrollo full stack y liderazgo en proyectos estudiantiles.",
    avatar: "/src/assets/testimonials/avatar2.svg"
  },
  {
    name: "Laura Gómez",
    role: "Cliente freelance",
    text: "El trabajo de Yan Carlos superó mis expectativas. La comunicación fue clara y el resultado final, profesional y funcional. Lo recomiendo totalmente.",
    avatar: "/src/assets/testimonials/avatar3.svg"
  }
];

const testimonialsData = {
  es: testimonials,
  en: [
    {
      name: "Maria Rodriguez",
      role: "CEO, Kamila Innovation S.A.S",
      text: "Yan Carlos is a committed professional, with great technical skills and an excellent attitude for teamwork. His solutions have improved our internal processes.",
      avatar: "/src/assets/testimonials/avatar1.svg"
    },
    {
      name: "John Perez",
      role: "Systems Engineering Professor",
      text: "I highlight Yan Carlos's dedication and constant learning. He has shown exceptional full stack development skills and leadership in student projects.",
      avatar: "/src/assets/testimonials/avatar2.svg"
    },
    {
      name: "Laura Gomez",
      role: "Freelance client",
      text: "Yan Carlos's work exceeded my expectations. Communication was clear and the final result, professional and functional. I totally recommend him.",
      avatar: "/src/assets/testimonials/avatar3.svg"
    }
  ]
};

export default function Testimonials() {
  const { language } = useLanguage();
  const testimonials = testimonialsData[language] || testimonialsData.es;
  return (
    <section id="testimonios" className="py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-black text-center text-accent-cyan mb-10">Testimonios</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center max-w-xs w-full animate-fadeIn">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-accent-cyan shadow-lg" />
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4 italic">“{t.text}”</p>
              <div className="font-bold text-accent-cyan text-lg mb-1">{t.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(.2,.8,.2,1);
        }
      `}</style>
    </section>
  );
}
