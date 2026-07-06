import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-card">
        <h2>About Me</h2>
        <div>
          <div className="custom-card">
            <h3>🎓 Education</h3>
            <div>
              <p>
                <strong>University of Phayao</strong>
              </p>
              <p>2019 - 2023</p>
              <p>Bachelor of Computer Engineering</p>
            </div>
          </div>

          <div className="custom-card">
            <h3>📋 Contact Information</h3>
            <div>
              <p>
                <span>📱</span>
                <span>+66 84 - 573 - 9901</span>
              </p>
              <p>
                <span>✉️</span>
                <span>james.poowamin7@gmail.com</span>
              </p>
              <p>
                <span>📍</span>
                <span>177/1 Phufa Place, Chiang Mai</span>
              </p>
              <p>
                <span>🔗</span>
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
