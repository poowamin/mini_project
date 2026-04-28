import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
        <li onClick={() => scrollToSection('note')}>Note</li>
      </ul>
    </div>
  );
};

export default Navbar;
