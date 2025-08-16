import React from 'react';
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText'; // Pastikan komponen ShinyText sudah diimpor

function HomePage() {
  return (
    <section id="home" className="section-padding bg-dark-bg-deep text-text-light min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        
        {/* Profile Image */}
        <div className="mb-8" data-animate="fadeIn" data-delay="200">
          <img 
            src="home.jpg" // Ganti dengan path gambar profil Anda di folder public
            alt="Profil Anda" 
            className="w-48 h-48 rounded-full mx-auto border-4 border-blue-accent-medium shadow-lg"
          />
        </div>

        {/* Shiny Title */}
        <ShinyText className="text-5xl md:text-7xl font-extrabold" data-animate="slideInUp" data-delay="400">
          Hello, saya Rafi Nurfadhil Putra
        </ShinyText>

        {/* Subtitle dengan Efek Text Cursor */}
        <div className="mt-6" data-animate="fadeIn" data-delay="600">
          <p 
            // Tambahkan kelas text-cursor di sini
            className="text-cursor text-xl md:text-2xl text-text-dark inline-block"
          >
           i am a Full Stack Developer excited in a Internet of Things,Networking Computer and a Web Developer.
          </p>
        </div>

        {/* Shiny Button */}
        <div className="mt-12" data-animate="slideInUp" data-delay="800">
          <Link
            to="/portfolio"
            className="btn-primary-gradient shiny-btn text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform transition duration-300 hover:scale-105 inline-block"
          >
            Continue to Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HomePage;