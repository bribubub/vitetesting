import React from 'react';

// --- Data untuk Technical Skills (disederhanakan menjadi daftar) ---
const technicalSkills = [
  'Laravel & PHP',
  'Java',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'MySQL',
  'PostgreSQL',
  'IoT',
  'Mikrotik',
];

// --- Data untuk Soft Skills (tetap sama) ---
const softSkills = [
  { icon: 'fas fa-lightbulb', title: 'Problem-Solving', description: 'Adept at dissecting complex challenges and architecting elegant, scalable solutions.' },
  { icon: 'fas fa-comments', title: 'Communication', description: 'Articulate and effective communicator, fostering clear and productive collaboration.' },
  { icon: 'fas fa-handshake', title: 'Teamwork', description: 'Proven ability to thrive in collaborative environments, contributing to shared success.' },
  { icon: 'fas fa-brain', title: 'Adaptability', description: 'Eager to learn and rapidly integrate new technologies and methodologies.' },
  { icon: 'fas fa-clock', title: 'Time Management', description: 'Highly organized and efficient, consistently delivering projects on schedule.' },
  { icon: 'fas fa-filter', title: 'Critical Thinking', description: 'Analyzes situations thoroughly to make informed decisions.' },
];

// --- Komponen Ikon (tetap sama) ---
const LightbulbIcon = () => <svg xmlns="http://www.w.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l-.707-.707M12 21V10a2 2 0 00-2-2H8a2 2 0 00-2 2v10m12 0v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2" /></svg>;
const CommentsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const HandshakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.148-6.014a1.76 1.76 0 011.162-2.312l5.443-1.944a1.76 1.76 0 012.312 1.162l2.149 6.014a1.76 1.76 0 01-1.162 2.312l-5.443 1.944A1.76 1.76 0 0111 19.24z" /></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V17a1 1 0 01-.293.707l-2 2A1 1 0 0113 19v-2.586l-4-4V6H4a1 1 0 01-1-1v-1z" /></svg>;

const iconMap = {
    'fas fa-lightbulb': <LightbulbIcon />,
    'fas fa-comments': <CommentsIcon />,
    'fas fa-handshake': <HandshakeIcon />,
    'fas fa-brain': <BrainIcon />,
    'fas fa-clock': <ClockIcon />,
    'fas fa-filter': <FilterIcon />
};

function SkillsPage() {
  return (
    <section id="skills" className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16" data-animate="fadeIn">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">My Expertise</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* --- Left Column: Technical Skills (Desain Baru) --- */}
          <div className="bg-dark-bg-medium rounded-2xl p-8 shadow-deep" data-animate="slideInUp" data-delay="200">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400 border-b-2 border-gray-700 pb-3">
              Technical Skills
            </h3>
            {/* Menggunakan flexbox untuk layout tag/pill */}
            <div className="flex flex-wrap gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill} className="bg-dark-bg-light text-text-light font-medium py-2 px-5 rounded-lg shadow-md hover:bg-blue-accent-medium/30 transition-colors duration-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Soft Skills (Tidak Berubah) --- */}
          <div className="bg-dark-bg-medium rounded-2xl p-8 shadow-deep" data-animate="slideInUp" data-delay="400">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400 border-b-2 border-gray-700 pb-3">
              Soft Skills
            </h3>
            <ul className="space-y-4">
              {softSkills.map((skill) => (
                <li key={skill.title}>
                  <div className="flex items-start bg-gray-800 p-4 rounded-lg hover:bg-blue-900 hover:bg-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                    {iconMap[skill.icon]}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{skill.title}</h4>
                      <p className="text-gray-300 text-base">{skill.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;