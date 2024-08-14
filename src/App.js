import React, { useState, useEffect } from 'react';
import './App.css';
import qrcodeImage from './foto/qrcode.png';
import webdesainImage from './foto/webdesain.png';
import onshopImage from './foto/onshop.png';
import listrikImage from './foto/listrik.jpg';
import VigenchatImage from './foto/vigenchat.png';
import faceImage from './foto/face.jpg';
import samueelImage from './foto/samueel.png';
import sertifikatImage from './foto/sertifikat.jpg';
import sertifikat1Image from './foto/sertifikat1.jpg';
import sertifikat2Image from './foto/sertifikat2.jpg';
import sertifikat3Image from './foto/sertifikat3.jpg';
import sertifikatlinkinImage from './foto/sertifikatlinkin.jpg';
import courseImage from './foto/course.jpg';


const projects = [
  { id: 1, title: 'QR Code Generate', description: 'This program Text To QR Code With Generate', foto: qrcodeImage, sourceCode: 'https://github.com/SamuelEbitNego/qrcodegenerate' },
  { id: 2, title: 'Web Desain E-commerce Style', description: 'For Simple Desain Web E-commerce Style', foto: webdesainImage, sourceCode: 'https://github.com/SamuelEbitNego/tampilan-aplikasi' },
  { id: 3, title: 'Web Aplikasi Belanja Onshop', description: 'Web Application with 2 framework Bootstrap & Codeigniter 3', foto: onshopImage, sourceCode: 'https://github.com/SamuelEbitNego/onshopp' },
  { id: 4, title: 'Web Pembayaran Pasca Listrik', description: 'Web Application with 2 framework Bootstrap & Codeigniter 3', foto: listrikImage, sourceCode: 'https://github.com/SamuelEbitNego/listrik' },
  { id: 5, title: 'Vigenchat', description: 'Intelligent chatbot using natural language processing', foto: VigenchatImage, sourceCode: 'https://github.com/SamuelEbitNego/vigenchat' },
  { id: 6, title: 'Face Detection Simple', description: 'Face detection using simple algorithms', foto: faceImage, sourceCode: 'https://github.com/SamuelEbitNego/facedetection-simple' },
];

const certificate = [
  { id: 1, title: 'HTML Course', foto: sertifikatImage, source: 'https://drive.google.com/file/d/19MR-dAmbzF18eieAhLwvo3vTXEpyf4W1/view?usp=sharing' },
  { id: 2, title: 'Web Development Fundamentals Course', foto: sertifikat1Image, source: 'https://drive.google.com/file/d/1M0x3uu6LzBOyErTB0F0X6WSLH3UfVkbo/view?usp=sharing' },
  { id: 3, title: 'Responsive Web Design Course', foto: sertifikat2Image, source: 'https://drive.google.com/file/d/10_DY07CfB0qhUEqW1hh2GBHYjky5X408/view?usp=sharing' },
  { id: 4, title: 'CSS Course', foto: sertifikat3Image, source: 'https://drive.google.com/file/d/1PLNmLOhdiLfwB-eX3YeByqEFnl8D5bPi/view?usp=sharing' },
  { id: 5, title: 'Certificate Of Completion Creating a Responsive Web Design', foto: sertifikatlinkinImage, source: 'https://drive.google.com/file/d/1yDyuLjTjFE8BCYEC8BI3TN-PeWmZAO9q/view?usp=sharing' },
  { id: 6, title: 'Course Completion Certificate page', foto: courseImage, source: 'https://drive.google.com/file/d/1FgQ4vXjR2ZP1S2vAoLoYAd3sqhfSA67q/view?usp=sharing' },
];

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  const mailtoLink = `mailto:samuelebitnego13@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
  
  window.location.href = mailtoLink;
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <nav>
          <div className="logo">Samuel Ebit Nego</div>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
          <img src={samueelImage} alt="Samuel Ebit Nego" style={{ width: '200px', height: 'auto' }} />
            <h1>Samuel Ebit Nego</h1>
            <h2>Junior Web Front-End Developer</h2>
            <a href="#contact" className="cta-button">Contact</a>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p class="p1"> I am Samuel Ebit Nego From Indonesian My last education was at SMK Bina Karya Mandiri in 2018, in 2019
                    I worked as a computer operator for 2 years. In 2020 I joined the church organization at HKBP Pondok
                    Kelapa in Multi Talenta, Multimedia, & Public Relations until 2024. Then I stopped working in 2021 and
                    continued my studies at Bina Sarana Informatika University in September 2021. I have gained knowledge
                    during my studies, such as in Web Programming using the Html, CSS, PHP programming languages using
                    the codeigniter framework. I am currently studying in semester 6 and I hope to be better and more
                    professional in programming.
              </p>

            </div>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Codeigniter</li>
                <li>Laravel</li>
                <li>MYSQL</li>
                <li>Tailwindcss</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.foto} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.sourceCode} className="btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certificate" className="certificate">
          <h2>Certificate</h2>
          <div className="project-grid">
            {certificate.map((certificate) => (
              <div key={certificate.id} className="project-card">
                <img src={certificate.foto} alt={certificate.title} />
                <div className="project-info">
                  <h3>{certificate.title}</h3>
                  <a href={certificate.source} className="btn" target="_blank" rel="noopener noreferrer">Show</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <div className="contact-content">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
            <div className="social-links">
              <h3>Connect with me</h3>
              <div className="social-icons">
                <a href="mailto:samuelebitnego13@gmail.com" className="social-icon" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://wa.me/089508065875" className="social-icon" title="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/samuel_ebit13/" className="social-icon" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/samuel-ebit-nego-6934002a9/" className="social-icon" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Samuel Ebit Nego.</p>
      </footer>
    </div>
  );

  
}

export default App;
