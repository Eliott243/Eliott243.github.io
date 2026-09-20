import { useEffect } from 'react';
import { LanguageProvider } from './i18n';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import LangSwitch from './components/LangSwitch';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

export default function App() {
  // Les sections n'existent qu'après le premier rendu : on rejoue l'ancre du lien partagé.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
  }, []);

  return (
    <LanguageProvider>
      <Preloader />
      <Cursor />
      <Nav />
      <LangSwitch />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
