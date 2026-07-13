import { LanguageProvider } from '../../i18n/LanguageContext';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
