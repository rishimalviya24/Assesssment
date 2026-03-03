import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import WhyPage from './pages/WhyPage';
import ExamplesPage from './pages/ExamplesPage';
import SpecializationPage from './pages/SpecializationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const hero = document.getElementById('hero');
    const navObs = new IntersectionObserver(([e]) => setShowNav(!e.isIntersecting), { threshold: 0 });
    if (hero) navObs.observe(hero);

    const activeObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.2 });
    ['why','examples','specialization','contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) activeObs.observe(el);
    });

    return () => { navObs.disconnect(); activeObs.disconnect(); };
  }, []);

  return (
    <>
      <Navbar showNav={showNav} active={active} />
      <main>
        <HeroPage />
        <div style={{height:'42px',background:'#000'}} />
        <WhyPage />
        <div className="section-gap" />
        <ExamplesPage />
        <div className="section-gap" />
        <SpecializationPage />
        <div className="section-gap" />
        <ContactPage />
      </main>
    </>
  );
}
