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
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Actively building personal projects to strengthen practical
          development skills.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span
                  className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
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
