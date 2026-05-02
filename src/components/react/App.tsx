import { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative pt-0 bg-transparent min-h-screen font-sans antialiased">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}