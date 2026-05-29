import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a>My Portfolio</a>
      <nav className="navbar">
        <a>Home</a>
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Experience</a>
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
