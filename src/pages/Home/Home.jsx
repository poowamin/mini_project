import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Poowamin Klomkaing</h1>
          <p className="home-subtitle">Junior Frontend Developer</p>
          <p className="home-description">
            Frontend Developer with hands-on experience in Flutter and a strong
            interest in modern web development using React, Vite, and Tailwind
            CSS. Familiar with REST API integration, Git workflows, and
            responsive UI development. Continuously building personal projects
            to strengthen frontend engineering skills.
          </p>
          {/* <div className="home-cta">
            <button className="cta-button primary">View My Work</button>
            <button className="cta-button secondary">Get In Touch</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
