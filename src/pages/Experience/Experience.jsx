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
    <section id="experience">
      <div>
        <h2>My Experience</h2>
        <div>
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div>
                <h3>{exp.company}</h3>
                <span>{exp.duration}</span>
              </div>
              <p>{exp.position}</p>
              <ul>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
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
