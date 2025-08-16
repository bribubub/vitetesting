import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

// Reusing the GitHub icon from the footer component
const GithubIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-2"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.088.687-.206.687-.457 0-.223-.008-.813-.013-1.636-2.782.603-3.37-1.34-3.37-1.34-.454-1.15-1.11-1.462-1.11-1.462-.908-.62.068-.608.068-.608 1.007.073 1.532 1.03 1.532 1.03.89 1.528 2.336 1.085 2.903.829.09-.643.349-1.085.635-1.336-2.22-.25-4.555-1.11-4.555-4.945 0-1.09.39-1.986 1.029-2.684-.103-.252-.446-1.272.097-2.659 0 0 .84-.27 2.75 1.025A9.643 9.643 0 0112 6.844c.85.006 1.7.113 2.508.337 1.909-1.295 2.748-1.025 2.748-1.025.542 1.387.2 2.407.098 2.659.64.698 1.028 1.594 1.028 2.684 0 3.844-2.339 4.69-4.565 4.935.359.309.678.92.678 1.855 0 1.336-.012 2.417-.012 2.747 0 .254.209.55.694.456C20.137 20.19 23 16.42 23 12.017 23 6.484 18.522 2 13 2h-1z" clipRule="evenodd"></path></svg>;

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="section-padding bg-dark-bg-deep text-text-light min-h-screen">
        <div className="container mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gradient mb-4">Project Not Found</h1>
          <p className="text-lg text-text-dark mb-8">The project you are looking for does not exist.</p>
          <Link to="/portfolio" className="btn-primary-gradient inline-block text-white font-bold py-3 px-6 rounded-full text-lg shadow-xl transform transition duration-300 hover:scale-105">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-accent-light hover:underline mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali
        </button>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-gradient mb-8">{project.title}</h1>
        <img src={project.image} alt={`Gambar ${project.title}`} className="w-full h-auto object-cover rounded-2xl shadow-deep mb-8 border border-gray-border"/>
        
        {}
        <div className="prose prose-invert prose-lg max-w-none text-text-dark">
          {}
          <p className="lead">{project.description}</p>
          
          {}
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

          {}
          {project.githubLink && (
              <div className="mt-8">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient inline-flex items-center text-white font-bold py-2 px-4 rounded-full text-base shadow-lg transform transition duration-300 hover:scale-105">
                      <GithubIcon />
                      View on GitHub
                  </a>
              </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProjectDetailPage;