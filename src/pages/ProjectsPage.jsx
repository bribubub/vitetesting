import React from 'react';

// --- Data Proyek ---
// Anda bisa dengan mudah menambah atau mengubah proyek di sini
const projects = [
  {
    title: 'Website Portofolio Laravel',
    description: 'Sebuah portofolio pribadi yang dibangun dengan framework PHP Laravel dan Blade untuk templating.',
    image: '/images/project-laravel.png', // Pastikan gambar ada di folder /public/images/
    liveUrl: '#', // Ganti dengan URL live jika ada
    githubUrl: 'https://github.com/bribubub/laraveltesting',
    tags: ['Laravel', 'PHP', 'Blade', 'TailwindCSS'],
  },
  {
    title: 'Aplikasi IoT Monitoring',
    description: 'Sistem untuk memonitoring data sensor secara real-time menggunakan React dan Firebase.',
    image: '/images/project-iot.png',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Firebase', 'IoT', 'Real-time'],
  },
  {
    title: 'Sistem E-Commerce',
    description: 'Platform toko online dengan fitur lengkap, dibangun menggunakan MERN Stack (MongoDB, Express, React, Node.js).',
    image: '/images/project-ecommerce.png',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Sistem E-Commerce',
    description: 'Platform toko online dengan fitur lengkap, dibangun menggunakan MERN Stack (MongoDB, Express, React, Node.js).',
    image: '/images/project-ecommerce.png',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  // Tambahkan proyek lainnya di sini
];

// --- Komponen Ikon (tanpa import eksternal) ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
  </svg>
);

function ProjectsPage() {
  return (
    <section id="projects" className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-12" data-animate="slideInUp">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gradient">
            Proyek Pilihan
          </h2>
          <p className="text-lg text-text-dark mt-4 max-w-2xl mx-auto">
            Beberapa proyek yang pernah saya kerjakan untuk mengasah kemampuan saya.
          </p>
        </div>

        {/* --- Kontainer Scroll Horizontal dengan kelas 'custom-scrollbar' --- */}
        <div
          className="flex space-x-8 overflow-x-auto pb-6 custom-scrollbar"
          data-animate="fadeIn"
          data-delay="400"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-80 md:w-96 h-96 rounded-2xl overflow-hidden shadow-deep border border-gray-border"
            >
              {/* --- Gambar Latar Belakang --- */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* --- Overlay Gradien --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* --- Konten Overlay (Muncul saat hover) --- */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* --- Tag Teknologi --- */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-accent-medium/50 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* --- Tombol Aksi --- */}
                  <div className="flex items-center space-x-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <ExternalLinkIcon />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;