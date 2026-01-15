import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'R', 'GDScript', 'C', 'C#', 'C++']
    },
    {
      title: 'Frameworks & Technologies',
      skills: ['Node.js', 'MongoDB', 'MySQL', 'React', 'Flask', 'Django', 'AWS']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

