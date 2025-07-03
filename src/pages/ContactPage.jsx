import React from 'react';

function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <h2>Hubungi Saya</h2>
      <p>Tertarik untuk berkolaborasi? Mari terhubung!</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:emailanda@example.com">emailanda@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/namaanda" target="_blank" rel="noopener noreferrer">linkedin.com/in/namaanda</a></p>
        <p>GitHub: <a href="https://github.com/namaanda" target="_blank" rel="noopener noreferrer">github.com/namaanda</a></p>
      </div>
    </section>
  );
}

export default ContactPage;