import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "React Portfolio (Current)",
      description:
        "Building a personal portfolio website using React, Vite, and modern CSS styling",
      tags: ["React", "Vite", "CSS", "Web Development"],
      status: "In Progress",
    },
    /*     {
      id: 2,
      title: "Flutter Mobile Applications",
      description:
        "Developed multiple mobile features and components using Flutter during professional internship",
      tags: ["Flutter", "Mobile", "Dart"],
      status: "Completed",
    }, */
  ];

  return (
    <section id="projects">
      <div>
        <h2>My Projects</h2>
        <p>
          Actively building personal projects to strengthen practical
          development skills.
        </p>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <div>
                <h3>{project.title}</h3>
                <span>{project.status}</span>
              </div>
              <p>{project.description}</p>
              <div>
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
