import React, { useEffect } from 'react';
import './App.css'; // <<< INI HARUS ADA DAN TIDAK DIKOMENTARI
import { Routes, Route } from 'react-router-dom';

// Import komponen header dan footer (sesuai dengan nama file Anda, huruf kecil)
import Header from './components/header';
import Footer from './components/footer';

// Import komponen halaman Anda (akan dibuat di langkah selanjutnya)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage'; // Jika Anda ingin halaman ini ada

function App() {
  // Logika Intersection Observer untuk animasi data-animate (tetap sama)
  useEffect(() => {
    const animateElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animate;
          const animationDelay = element.dataset.delay || '0';

          if (!element.classList.contains('opacity-0')) {
             element.classList.add('opacity-0');
          }

          setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.add(`animated-${animationType}`);
            element.style.animationDelay = `${animationDelay}ms`;
          }, 0);

          observer.unobserve(element);
        }
      });
    }, observerOptions);

    animateElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-app-container">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;