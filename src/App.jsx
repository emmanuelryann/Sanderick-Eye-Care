import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Excellence from './components/Excellence';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section');

    sections.forEach((sec) => {
      sec.classList.add('reveal-section');
    });

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
            } else {
              const rect = entry.boundingClientRect;
              // When scrolled away, remove class so it animates again when scrolled into view
              if (rect.top > window.innerHeight || rect.bottom < 0) {
                entry.target.classList.remove('reveal-visible');
              }
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      sections.forEach((sec) => observer.observe(sec));

      return () => {
        observer.disconnect();
      };
    } catch {
      // Fail-safe: ensure all sections remain visible if observer is unsupported
      sections.forEach((sec) => {
        sec.classList.add('reveal-visible');
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Excellence />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
