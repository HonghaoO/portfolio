import React from 'react';
import './Experience.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Analog Devices',
      location: 'Melbourne, Australia',
      period: 'Jul 2024 – Oct 2024',
      description: [
        'Engineered and maintained firmware for embedded systems using C/C++, enhancing system stability.',
        'Designed and implemented a CppUTest-based unit testing framework, achieving 98% test coverage.',
        'Implemented framework for a modular testing board, reducing the device validation time by 25% per batch of production.'
      ]
    },
    {
      title: 'AI Trainer',
      company: 'Scale AI',
      location: 'Remote, San Francisco, California, United States',
      period: 'Dec 2023 – May 2024',
      description: [
        'Collaborated with engineering teams to refine AI-generated code for improved data handling and computational efficiency.',
        'Analyzed and interpreted complex datasets to provide actionable feedback, directly enhancing the accuracy and performance of machine learning models.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Infosys',
      location: 'Melbourne, Australia',
      period: 'Jan 2024 – Mar 2024',
      description: [
        'Collaborated in a team of engineers to develop, test, and deploy a Generative AI application.',
        'Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives, to iteratively improve product features.'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="experience-meta">
                <div className="experience-period">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
                <div className="experience-location">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

