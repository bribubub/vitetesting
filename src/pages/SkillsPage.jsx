import React from 'react';

function SkillsPage() {
  return (
    <section id="skills" className="skills-section section-padding" data-animate="fadeIn" data-delay="200">
      <h2 data-animate="slideInUp" data-delay="400">Keahlian Saya</h2>
      <div className="skills-grid">
        <div className="skill-item card-base" data-animate="slideInUp" data-delay="600">
          <h3>Frontend Development</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="skill-item card-base" data-animate="slideInUp" data-delay="700">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Database (MongoDB, SQL)</li>
          </ul>
        </div>
        {/* Tambahkan lebih banyak skill item sesuai keahlian Anda */}
      </div>
    </section>
  );
}

export default SkillsPage;