import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <h3 className="card-title">🎓 Education</h3>
            <div className="card-content">
              <p className="education-university">
                <strong>University of Phayao</strong>
              </p>
              <p className="education-duration">2019 - 2023</p>
              <p className="education-degree">
                Bachelor of Computer Engineering
              </p>
            </div>
          </div>

          <div className="about-card">
            <h3 className="card-title">📋 Contact Information</h3>
            <div className="card-content">
              <p className="contact-item">
                <span className="icon">📱</span>
                <span>+66 84 - 573 - 9901</span>
              </p>
              <p className="contact-item">
                <span className="icon">✉️</span>
                <span>james.poowamin7@gmail.com</span>
              </p>
              <p className="contact-item">
                <span className="icon">📍</span>
                <span>177/1 Phufa Place, Chiang Mai</span>
              </p>
              <p className="contact-item">
                <span className="icon">🔗</span>
                <span>github.com/poowamin</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
