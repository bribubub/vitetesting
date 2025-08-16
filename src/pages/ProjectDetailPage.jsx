import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    // ... (kode jika proyek tidak ditemukan, tidak berubah)
  }

  return (
    <section className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-accent-light hover:underline mb-8 group"
        >
          {/* ... (kode tombol kembali, tidak berubah) ... */}
          Kembali
        </button>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-gradient mb-8">{project.title}</h1>
        <img src={project.image} alt={`Gambar ${project.title}`} className="w-full h-auto object-cover rounded-2xl shadow-deep mb-8 border border-gray-border"/>
        
        {/* --- KONTEN DETAIL SEKARANG DIAMBIL DARI DATA --- */}
        <div className="prose prose-invert prose-lg max-w-none text-text-dark">
          {/* Deskripsi Singkat */}
          <p className="lead">{project.description}</p>
          
          {/* Tampilkan detail jika ada di data */}
          {project.overview && (
            <>
              <h3 className="text-white">Project Overview</h3>
              <p>{project.overview}</p>
            </>
          )}

          {project.challenges && (
            <>
              <h3 className="text-white">Challenges</h3>
              <p>{project.challenges}</p>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProjectDetailPage;