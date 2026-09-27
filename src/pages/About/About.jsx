import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-card">
        <h2>About Me</h2>
        <div>
          <div className="custom-card">
            <h3>Profile</h3>
            <p>
              Computer Engineering graduate from the University of Phayao with
              experience in mobile application development using Flutter and
              REST API integration. Seeking a Software Developer position to
              apply existing skills and continue learning through real-world
              experience.
            </p>
          </div>

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

        </div>
      </div>
    </section>
  );
};

export default About;
