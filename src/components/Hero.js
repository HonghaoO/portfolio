import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Hogan Ou</span>
            </h1>
            <h2 className="hero-subtitle">Software Engineer & AI Enthusiast</h2>
            <p className="hero-description">
              Fresh graduate with experiences in embedded systems, AI development, and full-stack engineering. 
              Passionate about building innovative solutions and continuously learning new technologies.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
            </div>
            <div className="hero-social">
              <a 
                href="https://www.linkedin.com/in/honghao-ou-5a29b7242" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/HonghaoO" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:Honghaoou@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+61451593079"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

