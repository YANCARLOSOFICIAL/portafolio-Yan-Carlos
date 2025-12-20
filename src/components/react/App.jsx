import React, { useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import CustomCursor from './CustomCursor';
import Stars from './Stars';
import BlurOrbs from './BlurOrbs';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import initReveals from '../../utils/reveal';

export default function App() {
  useEffect(() => {
    initReveals();
  }, []);

  return (
    <LanguageProvider>
      <CustomCursor />
      <Stars />
      <BlurOrbs />
      <Navbar />
      <main className="relative pt-0 bg-transparent min-h-screen font-sans antialiased" suppressHydrationWarning>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
