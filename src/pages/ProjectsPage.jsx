import React from 'react';
import { Link } from 'react-router-dom';

// Data proyek sekarang diekspor dan TANPA 'tags'
export const projects = [
  {
    slug: 'Obstacle Avoiding Robotic car Project',
    title: 'Obstacle Avoiding Robotic car Project',
    description: 'Portofolio pribadi yang dibangun dengan PHP Laravel.',
    image: '/robotic2.jpg',
  },
  {
    slug: 'Web-based Library Management System',
    title: 'Web-based Library Management System',
    description: '',
    image: '/libary1.jpg',
  },
  
   {
    slug: 'brin',
    title: 'Brin Project',
    description: '',
    image: '/brin2.jpg',
  },

];



function ProjectsPage() {
  return (
    <section id="projects" className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-12" data-animate="slideInUp">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gradient">Proyek Pilihan</h2>
          <p className="text-lg text-text-dark mt-4 max-w-2xl mx-auto">Beberapa proyek yang pernah saya kerjakan untuk mengasah kemampuan saya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate="fadeIn" data-delay="400">
          
          {projects.map((project, index) => (
            <Link to={`/portfolio/${project.slug}`} key={index} className="group relative h-64 rounded-2xl overflow-hidden shadow-deep border border-gray-border block">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  
                  {/* Bagian div yang menampilkan tag sudah dihapus dari sini */}

                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;