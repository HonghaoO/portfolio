import React from 'react';
import './Projects.css';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform for Live Action Game',
      type: 'Professional Project',
      description: 'Developed a cross-platform e-commerce website and mobile application using React.js and Firebase.',
      highlights: [
        'Implemented user authentication and payment integration',
        'Managed application data on both iOS and Android platforms',
        'Built responsive web interface with React.js'
      ],
      technologies: ['React.js', 'Firebase', 'iOS', 'Android'],
      link: 'https://gamesite-be03f.web.app/'
    },
    {
      title: 'Modular Device Testing Board Development',
      type: 'Professional Project',
      description: 'Designed and developed a modular test board using C/C++, reducing device validation time by 25% through parallel testing capabilities.',
      highlights: [
        'Implemented firmware with CppUTest unit testing framework',
        'Achieved 98% code coverage and enhanced firmware reliability',
        'Integrated with Python-based automated test framework'
      ],
      technologies: ['C/C++', 'CppUTest', 'Python', 'Embedded Systems']
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Recent Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <div className="project-icon">
                <FaCode />
              </div>
              <div className="project-title-group">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-highlights">
              <h4>Key Features:</h4>
              <ul>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <span>Visit Project</span>
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

