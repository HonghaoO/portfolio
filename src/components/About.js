import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            I am a recent graduate with a Master's in Information Technology from the University of Melbourne, 
            specializing in Artificial Intelligence. With hands-on experience in AI development, embedded systems,
            and full-stack engineering.
          </p>
          <p className="about-text">
            My professional journey includes working as an Embedded Software Engineer at Analog Devices, where I 
            developed firmware and testing frameworks, and as an AI Trainer at Scale AI, where I refined AI models 
            for improved performance.
          </p>
          <p className="about-text">
            Currently seeking opportunities to contribute to innovative projects and grow as a software engineer 
            in a collaborative, forward-thinking environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

