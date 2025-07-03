import React from 'react';

function ProjectsPage() {
  return (
    // Gunakan kelas Tailwind untuk styling bagian section, dengan section-padding dari index.css
    <section id="projects" className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-7xl px-6 py-12"> {/* mx-auto, padding, dan max-width dari Tailwind */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gradient" data-animate="slideInUp" data-delay="200">
          Proyek Pilihan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid layout dari Tailwind */}
          {/* Contoh Proyek 1 */}
          <div className="project-card bg-dark-bg-medium rounded-xl p-6 shadow-deep border border-gray-border" data-animate="slideInUp" data-delay="400">
            <img src="/project1-thumbnail.jpg" alt="Thumbnail Proyek 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-blue-accent-light mb-2">Nama Proyek 1</h3>
            <p className="text-text-medium text-lg leading-relaxed mb-4">
              Deskripsi singkat proyek ini. Jelaskan masalah yang dipecahkan dan peran Anda. Teknologi: React, Node.js, MongoDB.
            </p>
            <div className="flex justify-between items-center">
              <a href="https://example.com/project1-live" target="_blank" rel="noopener noreferrer" className="text-blue-accent-medium hover:underline font-semibold">
                Lihat Proyek
              </a>
              <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-text-light transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Contoh Proyek 2 */}
          <div className="project-card bg-dark-bg-medium rounded-xl p-6 shadow-deep border border-gray-border" data-animate="slideInUp" data-delay="600">
            <img src="/project2-thumbnail.jpg" alt="Thumbnail Proyek 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-blue-accent-light mb-2">Nama Proyek 2</h3>
            <p className="text-text-medium text-lg leading-relaxed mb-4">
              Deskripsi singkat proyek ini. Fokus pada teknologi dan hasil. Teknologi: Vue.js, Firebase, Tailwind CSS.
            </p>
            <div className="flex justify-between items-center">
              <a href="https://example.com/project2-live" target="_blank" rel="noopener noreferrer" className="text-blue-accent-medium hover:underline font-semibold">
                Lihat Proyek
              </a>
              <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-text-light transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Anda bisa menambahkan project-card lainnya di sini */}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;