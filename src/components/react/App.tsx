import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background min-h-screen font-sans antialiased">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}