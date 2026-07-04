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
      skills: ["Postman", "Git", "GitHub"],
    },
    {
      id: "api",
      category: "API",
      skills: ["REST API", "Fetched API"],
    },
    {
      id: "soft-skills",
      category: "Soft Skills",
      skills: ["Teamwork", "Fast Learner", "Open-mindedness", "Adaptability"],
    },
  ];

  const handleCategoryClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="skills">
      <div>
        <h2>Technical Skills</h2>
        <div>
          {skillCategories.map((item) => (
            <div
              key={item.id}
              id={item.id}
              onClick={() => handleCategoryClick(item.id)}
            >
              <h3>{item.category}</h3>
              <ul>
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
          <div id="languages" onClick={() => handleCategoryClick("languages")}>
            <h3>Languages</h3>
            <p>English - Professional working proficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
