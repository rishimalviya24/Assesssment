import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import WhyPage from './pages/WhyPage';
import ExamplesPage from './pages/ExamplesPage';
import SpecializationPage from './pages/SpecializationPage';
import ContactPage from './pages/ContactPage';
import DesignPage from './pages/DesignPage';
import PhotographyPage from './pages/PhotographyPage';
import WebPage from './pages/WebPage';

// ── Home page (all sections stacked) ──
function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const hero = document.getElementById('hero');
    const navObs = new IntersectionObserver(
      ([e]) => setShowNav(!e.isIntersecting),
      { threshold: 0 }
    );
    if (hero) navObs.observe(hero);

    const sections = ['why','examples','specialization','contact'];
    const activeObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.15 });
    sections.forEach(id => {
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
        <WhyPage />
        <ExamplesPage />
        <SpecializationPage />
        <ContactPage />
      </main>
    </>
  );
}

// ── Portfolio pages (navbar always visible) ──
function PortfolioLayout({ children }) {
  return (
    <>
      <Navbar alwaysShow={true} />
      {children}
    </>
  );
}

// ── Scroll to hash on navigation ──
function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<PortfolioLayout><DesignPage /></PortfolioLayout>} />
        <Route path="/photography" element={<PortfolioLayout><PhotographyPage /></PortfolioLayout>} />
        <Route path="/web" element={<PortfolioLayout><WebPage /></PortfolioLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
