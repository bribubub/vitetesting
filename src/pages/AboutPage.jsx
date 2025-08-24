import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <section id="about" className="section-padding bg-dark-bg-deep text-text-light">
        <div className="container mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-animate="fadeIn" data-delay="100">
            {/* Gambar Profil dengan Efek Card */}
            <div className="relative group" data-animate="slideInLeft" data-delay="400">
                <div className="w-full h-full bg-dark-bg-medium rounded-2xl p-6 shadow-deep border border-gray-border transform transition hover:scale-105 flex flex-col items-center text-center">
                    {/* Updated image and its wrapper */}
                    <div className="w-48 h-48 mb-6 overflow-hidden rounded-full">
                        <img src="/Rafi Nurfadhil Putra.jpg" alt="Profile Image" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-blue-accent-light">Rafi Nurfadhil Putra</h3>
                        <p className="text-text-dark mt-2">Internet of Things</p>
                    </div>
                </div>
            </div>

            {/* Konten Teks About Me */}
            <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gradient" data-animate="slideInUp" data-delay="200">About Me</h2>

                <div className="space-y-4 text-lg text-text-dark leading-relaxed">
                    <p data-animate="slideInUp" data-delay="600">
                     Hello, my name is Rafi Nurfadhil Putra a student of Information Technology with a strong passion for technology and continuous learning. My academic background has given me a solid foundation in IT concepts, problem-solving, and the ability to adapt quickly to new tools and environments.
                    </p>
                    <p data-animate="slideInUp" data-delay="800">
                    I am able to work effectively in a team, communicate clearly, and contribute to achieving common goals. I value collaboration and believe that diverse perspectives are essential for creating innovative solutions.
                    </p>
                    <p data-animate="slideInUp" data-delay="1000">
                    I enjoy facing new challenges and view them as opportunities for personal and professional growth. With a proactive and responsible mindset, I am eager to apply my knowledge and skills to real-world projects and contribute positively to future workplaces.
                    </p>
                </div>

                <Link to="/contact" className="btn-primary-gradient inline-block text-white font-bold py-3 px-6 rounded-full text-lg shadow-xl transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-accent-medium" data-animate="slideInUp" data-delay="1200">
                    Let's Connect
                </Link>
            </div>
        </div>
    </section>
  );
}

export default AboutPage;