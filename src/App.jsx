import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import komponen Anda
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage'; // Jika Anda ingin halaman ini ada

// Import CSS Anda
import './App.css';

function App() {
  // Dapatkan objek lokasi saat ini dari router
  const location = useLocation();

  // useEffect ini sekarang akan berjalan setiap kali URL (halaman) berubah
  useEffect(() => {
    const animateElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animate;
          const animationDelay = element.dataset.delay || '0';

          // Hapus kelas 'opacity-0' yang mungkin ada dari render sebelumnya
          element.classList.remove('opacity-0');

          // Terapkan animasi
          element.style.animation = 'none'; // Reset animasi untuk memicu ulang
          // eslint-disable-next-line no-void
          void element.offsetWidth; // Memicu reflow
          element.style.animation = null;

          element.classList.add(`animated-${animationType}`);
          element.style.animationDelay = `${animationDelay}ms`;

          // Hentikan pengamatan setelah animasi berjalan
          observer.unobserve(element);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Hapus kelas animasi lama dan amati elemen di halaman baru
    animateElements.forEach(element => {
      element.classList.remove('animated-fadeIn', 'animated-slideInUp', 'animated-slideInLeft');
      observer.observe(element);
    });

    // Fungsi pembersihan untuk memutuskan observer
    return () => {
      observer.disconnect();
    };
  }, [location]); // <-- Kunci perbaikannya ada di sini

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