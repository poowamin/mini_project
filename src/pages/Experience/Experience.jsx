import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "PAIDUAIYANMAI CO., Ltd",
      position: "Junior Mobile Developer (Flutter)",
      duration: "March - July 2023",
      responsibilities: [
        "Developed mobile application features using Flutter in a team-based environment",
        "Collaborated with designers and developers using Git for version control",
        "Integrated REST APIs to fetch and display dynamic data",
        "Implemented responsive UI components based on design requirements",
        "Tested, debugged, and improved application performance and stability",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="position">{exp.position}</p>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="responsibility-item">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
