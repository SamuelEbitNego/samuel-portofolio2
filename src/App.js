import React, { useState, useEffect } from 'react';
import './App.css';
import qrcodeImage from './foto/qrcode.png';
import webdesainImage from './foto/webdesain.png';
import onshopImage from './foto/onshop.png';
import listrikImage from './foto/listrik.jpg';
import VigenchatImage from './foto/vigenchat.png';
import faceImage from './foto/face.jpg';
import samuel1Image from './foto/samuel1.png';
import sertifikatImage from './foto/sertifikat.jpg';
import sertifikat1Image from './foto/sertifikat1.jpg';
import sertifikat2Image from './foto/sertifikat2.jpg';
import sertifikat3Image from './foto/sertifikat3.jpg';
import sertifikatlinkinImage from './foto/sertifikatlinkin.jpg';
import courseImage from './foto/course.jpg';
import phpImage from './foto/php.jpg';
import javascriptImage from './foto/javascript.jpg';
import cssImage from './foto/css.jpg';
import weatherImage from './foto/weather.png';
import htmlajaImage from './foto/htmlaja.JPG';
import cssajaImage from './foto/cssaja.JPG';
import dasarImage from './foto/dasar.JPG';
import jsImage from './foto/js.JPG';
import aiImage from './foto/ai.JPG';
import note_app_lvl1Image from './foto/note_app_lvl1.JPG';
import jssImage from './foto/jss.JPG';
import backendImage from './foto/backend.JPG';
import reactImage from './foto/react.JPG';
import naposoImage from './foto/naposo.JPG;

const projects = [
  { id: 1, title: 'QR Code Generate', description: 'This program Text To QR Code With Generate', foto: qrcodeImage, sourceCode: 'https://github.com/SamuelEbitNego/qrcodegenerate.git', source: 'https://qrcodegenerate-three.vercel.app/' },
  { id: 2, title: 'Web Desain E-commerce Style', description: 'For Simple Desain Web E-commerce Style', foto: webdesainImage, sourceCode: 'https://github.com/SamuelEbitNego/tampilan-aplikasi.git', source: 'https://tampilan-aplikasi.vercel.app/' },
  { id: 3, title: 'Web Aplikasi Belanja Onshop', description: 'Web Application with 2 framework Bootstrap & Codeigniter 3', foto: onshopImage, sourceCode: 'https://github.com/SamuelEbitNego/onshopp' },
  { id: 4, title: 'Web Pembayaran Pasca Listrik', description: 'Web Application with 2 framework Bootstrap & Codeigniter 3', foto: listrikImage, sourceCode: 'https://github.com/SamuelEbitNego/listrik' },
  { id: 5, title: 'Vigenchat', description: 'Intelligent chatbot using natural language processing', foto: VigenchatImage, sourceCode: 'https://github.com/SamuelEbitNego/vigenchat', source: 'https://preview.flutlab.io/samuel_ebitnego/vigenchat/' },
  { id: 6, title: 'Face Detection Simple', description: 'Face detection using simple algorithms', foto: faceImage, sourceCode: 'https://github.com/SamuelEbitNego/facedetection-simple' },
  { id: 7, title: 'Weather App', description: 'Using framework React', foto: weatherImage, sourceCode: 'https://github.com/SamuelEbitNego/weather-app.git', source: 'https://weather-app-silk-seven-93.vercel.app' },
  { id: 8, title: 'Note-App Lvl 1', description: 'Using framework React', foto: note_app_lvl1Image, sourceCode: 'https://github.com/SamuelEbitNego/app-note.git', source: 'https://app-note-psi.vercel.app/' },
  { id: 9, title: 'Compony Profile Naposo HKBP Pondok Kelapa', description: 'HTML, CSS, & JavaScript', foto: naposoImage, source: 'https://app-note-psi.vercel.app/' },
];

const certificate = [
  { id: 1, title: 'HTML Course', foto: sertifikatImage, source: 'https://drive.google.com/file/d/19MR-dAmbzF18eieAhLwvo3vTXEpyf4W1/view?usp=sharing' },
  { id: 2, title: 'Web Development Fundamentals Course', foto: sertifikat1Image, source: 'https://drive.google.com/file/d/1M0x3uu6LzBOyErTB0F0X6WSLH3UfVkbo/view?usp=sharing' },
  { id: 3, title: 'Responsive Web Design Course', foto: sertifikat2Image, source: 'https://drive.google.com/file/d/10_DY07CfB0qhUEqW1hh2GBHYjky5X408/view?usp=sharing' },
  { id: 4, title: 'CSS Course', foto: sertifikat3Image, source: 'https://drive.google.com/file/d/1PLNmLOhdiLfwB-eX3YeByqEFnl8D5bPi/view?usp=sharing' },
  { id: 5, title: 'Certificate Of Completion Creating a Responsive Web Design', foto: sertifikatlinkinImage, source: 'https://drive.google.com/file/d/1yDyuLjTjFE8BCYEC8BI3TN-PeWmZAO9q/view?usp=sharing' },
  { id: 6, title: 'Course Completion Certificate page', foto: courseImage, source: 'https://drive.google.com/file/d/1FgQ4vXjR2ZP1S2vAoLoYAd3sqhfSA67q/view?usp=sharing' },
  { id: 7, title: 'PHP', foto: phpImage, source: 'https://drive.google.com/file/d/1uvjn9eYp8YN5Bq6vyEWTfQFh6QHaGbLG/view?usp=sharing' },
  { id: 8, title: 'Javascript Basic', foto: javascriptImage, source: 'https://drive.google.com/file/d/1I6xAAgS2gJubt4Mca2LW_QTssqbqcpQl/view?usp=sharing' },
  { id: 9, title: 'CSS Basic', foto: cssImage, source: 'https://drive.google.com/file/d/1esb4TxDOdc_QtxCWpHb3kKgJQQ-fKMPS/view?usp=sharing' },
  { id: 10, title: 'HTML Certificate Of Completion', foto: htmlajaImage, source: 'https://drive.google.com/file/d/1pX7qo_JuTjdiAue-xQNDibRyr8DEUJ_0/view?usp=sharing' },
  { id: 11, title: 'CSS Certificate Of Completion', foto: cssajaImage, source: 'https://drive.google.com/file/d/1Ab7Sl3WEQ8vD4_9a9l0FVjnxqubpQtMH/view?usp=sharing' },
  { id: 12, title: 'Basic Web Program', foto: dasarImage, source: 'https://drive.google.com/file/d/1JZJ_-UnlJ_Ce3VzPpBk37arikoQzvor9/view?usp=sharing' },
  { id: 13, title: 'JavaScript Program Basic', foto: jsImage, source: 'https://drive.google.com/file/d/1d0scf_zo-EJZcnxZJJziGoomT7jd2kSs/view?usp=sharing' },
  { id: 14, title: 'Belajar Dasar AI', foto: aiImage, source: 'https://drive.google.com/file/d/1eOxd42wMdO36PWgh-xgKbS3Qi8eklUu1/view?usp=sharing' },
  { id: 15, title: 'JavaScript', foto: jssImage, source: 'https://drive.google.com/file/d/1hPqIaHbAhdJINI8WZ5yhCE8u3zlRF0Qn/view?usp=sharing' },
  { id: 16, title: 'Belajar Back-End Pemula dengan JavaScript', foto: backendImage, source: 'https://drive.google.com/file/d/1n755kn5O33mHHpVgTsMi4AQYkObb2CQe/view?usp=sharing' },
  { id: 17, title: 'Belajar Membuat Aplikasi Web dengan React', foto: reactImage, source: 'https://drive.google.com/file/d/1K34Eep_n8xQbRC0zHovc95fUK2IR7uj1/view?usp=sharing' },
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
          <img src={samuel1Image} alt="Samuel Ebit Nego" style={{ width: '200px', height: 'auto' }} />
            <h1>Samuel Ebit Nego</h1>
            <h2>Junior Web Developer</h2>
            <a href="https://drive.google.com/file/d/1zSvw-y_sM7sqem_p8vZFPw_IfmeOPnbs/view?usp=sharing" className="cta-button">My CV</a>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p class="p1"> I am an undergraduate student at UBSI (Bina Sarana Informatika), currently getting a bachelor's degree in Information Systems. I have gained various knowledge during my studies related to web development using HTML, CSS, PHP programming (including using the codeigniter framework). I create various mini projects in order for me to learn and gain experiences that are essential for real-world problem solving. I love coding and all things related to IT, especially front-end web development.              </p>

            </div>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Tailwindcss</li>
                <li>Codeigniter</li>
                <li>MYSQL</li>
                <li>Laravel</li>
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
    
                  <a href={project.source} className="btn" target="_blank" rel="noopener noreferrer">Visit</a>
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
