import React, { useState } from 'react';

// --- Komponen Ikon SVG (Menggantikan Font Awesome/Blade SVGs) ---

const EmailIcon = () => <svg className="w-7 h-7 mr-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const LocationIcon = () => <svg className="w-7 h-7 mr-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const LinkedInIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-9 h-9"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;
const GithubIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-9 h-9"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.088.687-.206.687-.457 0-.223-.008-.813-.013-1.636-2.782.603-3.37-1.34-3.37-1.34-.454-1.15-1.11-1.462-1.11-1.462-.908-.62.068-.608.068-.608 1.007.073 1.532 1.03 1.532 1.03.89 1.528 2.336 1.085 2.903.829.09-.643.349-1.085.635-1.336-2.22-.25-4.555-1.11-4.555-4.945 0-1.09.39-1.986 1.029-2.684-.103-.252-.446-1.272.097-2.659 0 0 .84-.27 2.75 1.025A9.643 9.643 0 0112 6.844c.85.006 1.7.113 2.508.337 1.909-1.295 2.748-1.025 2.748-1.025.542 1.387.2 2.407.098 2.659.64.698 1.028 1.594 1.028 2.684 0 3.844-2.339 4.69-4.565 4.935.359.309.678.92.678 1.855 0 1.336-.012 2.417-.012 2.747 0 .254.209.55.694.456C20.137 20.19 23 16.42 23 12.017 23 6.484 18.522 2 13 2h-1z" clipRule="evenodd"></path></svg>;
const TwitterIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" className="w-9 h-9"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.65-1.002.274-2.06.26-3.064.233.606 1.884 2.364 3.264 4.448 3.302-1.812 1.423-4.1 2.16-6.602 2.143-.427 0-.85-.025-1.265-.074 2.333 1.503 5.108 2.38 8.046 2.38 9.658 0 14.948-7.992 14.948-14.948 0-.227-.005-.453-.014-.678.98-.703 1.83-1.576 2.51-2.59z"></path></svg>;


function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Di sini Anda akan menambahkan logika untuk mengirim form
    // ke layanan seperti Formspree, Netlify Forms, atau API Anda sendiri.
    // Contoh simulasi:
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000); // Hapus status setelah 3 detik
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-dark-bg-deep text-text-light">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-16" data-animate="fadeIn">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Kolom Kiri: Info Kontak */}
          <div className="bg-dark-bg-medium p-8 rounded-2xl shadow-deep" data-animate="slideInLeft" data-delay="200">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400 border-b-2 border-gray-700 pb-3">Reach Out Directly</h3>
              <ul className="space-y-6 text-gray-300 text-lg">
                <li className="flex items-center">
                  <EmailIcon />
                  <span><a href="mailto:rnurfadil5@gmail.com" className="text-blue-400 hover:underline">rnurfadil5@gmail.com</a></span>
                </li>
                <li className="flex items-center">
                  <LocationIcon />
                  <span>Depok, West Java, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h3 className="text-3xl font-semibold mb-5 text-blue-400 border-b-2 border-gray-700 pb-3">Find Me Online</h3>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/rafi-nurfadhil-putra-559849373/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"><LinkedInIcon /></a>
                <a href="https://github.com/bribubub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"><GithubIcon /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"><TwitterIcon /></a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div className="bg-dark-bg-medium p-8 rounded-2xl shadow-deep" data-animate="slideInLeft" data-delay="400">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400 border-b-2 border-gray-700 pb-3">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-style w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent-medium" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-style w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent-medium" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} className="input-style w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent-medium" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn-primary-gradient text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transform transition duration-300 hover:scale-105 w-full focus:outline-none focus:ring-4 focus:ring-blue-accent-light/50" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && status !== 'Sending...' && <p className="text-center mt-4 text-green-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;