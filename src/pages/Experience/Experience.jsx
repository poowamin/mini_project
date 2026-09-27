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
        "Developed mobile application features using Flutter in a team-based environment.",
        "Worked on a Dental Booking Application, including user registration and login, profile management, document upload, doctor availability, and appointment-related features.",
        "Worked on a Time Attendance Application, including login, profile management, document upload, and clock-in / clock-out functionality.",
        "Integrated REST APIs to retrieve and display application data.",
        "Implemented UI components based on design and application requirements.",
        "Tested application features, identified and debugged issues, and improved functionality and stability.",
        "Collaborated with developers and designers using Git for version control.",
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
