import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend",
      skills: ["HTML (Basic)", "CSS (Basic)", "JavaScript (Basic)", "React (Basic)"],
    },
    {
      id: "database",
      category: "Database",
      skills: ["SQL (Basic)"],
    },
    {
      id: "development-tools",
      category: "Development Tools",
      skills: ["Dart (Flutter, Basic)", "Git / GitHub (Basic)"],
    },
    {
      id: "testing",
      category: "Other Skills",
      skills: ["Debugging", "Application Testing"],
    },
  ];

/*   const handleCategoryClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }; */

  return (
    <section id="skills">
      <div className="skills-card">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((item) => (
            <div className="skills-container" key={item.id}>
              <h3>{item.category}</h3>
              <ul>
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="skills-container" key="languages">
            <h3>Languages</h3>
            <p>English (Basic)</p>
            <p>Thai (Native)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
