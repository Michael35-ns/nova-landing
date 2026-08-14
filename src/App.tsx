import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCounters } from './hooks/useCounters';
import { useReveal } from './hooks/useReveal';
import './styles.css';

export default function App() {
  useReveal();
  useCounters();

  useEffect(() => {
    document.documentElement.setAttribute('data-hero', 'fullbleed');
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Process />
        <Stats />
        <Coverage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}