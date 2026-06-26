import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Lightbox } from './components/Lightbox';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Impact } from './sections/Impact';
import { Work } from './sections/Work';
import { Process } from './sections/Process';
import { Metrics } from './sections/Metrics';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    type: '',
    src: '',
    caption: ''
  });

  const { personalInfo } = portfolioData;

  const openLightbox = (type, src, caption) => {
    setLightbox({
      isOpen: true,
      type,
      src,
      caption
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    let revealObserver = null;
    let counterObserver = null;

    const timer = setTimeout(() => {
      // ── SCROLL / REVEAL OBSERVER ───
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revealObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.07 });

      document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
      });

      // ── COUNTERS OBSERVER ───
      counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const targetValue = parseFloat(el.dataset.counter);
          if (isNaN(targetValue)) return;

          const fmt = el.dataset.fmt;
          const sfx = el.dataset.sfx || '';
          const duration = 1500;
          let startTime = null;

          const animateStep = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeInOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeInOutCubic * targetValue);

            el.textContent = fmt === 'k' && currentVal >= 1000
              ? (currentVal / 1000).toFixed(0) + 'K' + sfx
              : currentVal.toLocaleString() + sfx;

            if (progress < 1) {
              requestAnimationFrame(animateStep);
            }
          };

          requestAnimationFrame(animateStep);
          counterObserver.unobserve(el);
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('[data-counter]').forEach((el) => {
        counterObserver.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (revealObserver) revealObserver.disconnect();
      if (counterObserver) counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Impact />
        <Work onOpenLightbox={openLightbox} />
        <Process />
        <Metrics />
        <Services />
        <Skills />
        <Contact />
      </main>

      <footer>
        <div className="wrap">
          <div className="fi">
            <p className="ft">
              © {new Date().getFullYear()} {personalInfo.name} · Content-Led Growth Strategist · Social Media Manager · AWS Certified
            </p>
          </div>
        </div>
      </footer>

      <Lightbox
        isOpen={lightbox.isOpen}
        type={lightbox.type}
        src={lightbox.src}
        caption={lightbox.caption}
        onClose={closeLightbox}
      />
    </>
  );
}

export default App;
