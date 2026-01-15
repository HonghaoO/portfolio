import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Master of Information Technology',
      university: 'University of Melbourne',
      specialization: 'Artificial Intelligence Specialization',
      period: 'Feb 2023 – Jun 2025',
      coursework: [
        'Natural Language Processing',
        'Statistical Machine Learning',
        'Advanced Database Systems'
      ]
    },
    {
      degree: 'Bachelor of Science',
      university: 'University of Melbourne',
      specialization: 'Data Science Major',
      period: 'Feb 2020 – Dec 2022',
      coursework: [
        'Machine Learning',
        'Applied Data Science',
        'Object-Oriented Software Development',
        'Database Systems'
      ]
    }
  ];

  return (
    <section id="education" className="section education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-university">{edu.university}</p>
              <p className="education-specialization">{edu.specialization}</p>
              <div className="education-period">
                <FaCalendarAlt />
                <span>{edu.period}</span>
              </div>
              <div className="education-coursework">
                <h4>Relevant Coursework:</h4>
                <div className="coursework-tags">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="coursework-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

