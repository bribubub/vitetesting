import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section id="hero" className="section-padding bg-dark-bg-deep text-text-light flex flex-col items-center justify-center min-h-[calc(100vh-80px)]" data-animate="fadeIn" data-delay="200">

      {/* Gambar Profil */}
      {/* w-48 h-48 rounded-full object-cover border-4 border-blue-accent-light mb-8 shadow-xl */}
      <img src="/profile.jpg" alt="Foto Profil Anda" className="w-48 h-48 rounded-full object-cover border-4 border-blue-accent-light mb-8 shadow-xl" data-animate="slideInUp" data-delay="400" />

      {/* Judul Utama */}
      {/* text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-blue-accent-light mb-4 */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-blue-accent-light mb-4" data-animate="slideInUp" data-delay="600">
        Halo, saya <span className="text-gradient">Rafi Nurfadhil Putra</span>
      </h1>

      {/* Tagline / Profesi */}
      {/* text-xl md:text-2xl text-text-medium text-center mb-10 */}
      <p className="text-xl md:text-2xl text-text-medium text-center mb-10" data-animate="slideInUp" data-delay="800">
        Seorang <span className="font-semibold text-blue-accent-light">Full Stack Developer</span> yang bersemangat di bidang <span className="font-semibold text-blue-accent-light">Internet of Things</span>.
      </p>

      {/* Tombol CTA */}
      {/* btn-primary-gradient (custom class) text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 */}
      <Link to="/portfolio" className="btn-primary-gradient inline-block text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-accent-medium" data-animate="slideInUp" data-delay="1000">
        Lihat Proyek Saya
      </Link>
    </section>
  );
}

export default HomePage;