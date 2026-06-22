import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Vite"],
    },
    {
      id: "mobile",
      category: "Mobile",
      skills: ["Flutter"],
    },
    {
      id: "tools",
      category: "Tools",
      skills: ["Visual Studio Code", "Postman", "Git", "GitHub"],
    },
    {
      id: "api",
      category: "API",
      skills: ["REST API", "Fetched API"],
    },
    {
      id: "soft-skills",
      category: "Soft Skills",
      skills: ["Teamwork", "Patience", "Open-mindedness", "Adaptability"],
    },
  ];

  const handleCategoryClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="skill-card"
              onClick={() => handleCategoryClick(item.id)}
            >
              <h3 className="skill-category">{item.category}</h3>
              <ul className="skill-list">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          id="languages"
          className="languages-card"
          onClick={() => handleCategoryClick("languages")}
        >
          <h3 className="skill-category">Languages</h3>
          <p className="language-text">
            English - Professional working proficiency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
