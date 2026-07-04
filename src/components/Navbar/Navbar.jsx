import React from "react";
import "./Navbar.css";

const Navbar = ({ onNavClick }) => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    if (onNavClick) {
      onNavClick(id);
    }
  };

  return (
    <header>
      <a className="customNav">My Portfolio</a>
      <nav className="customNav">
        {navItems.map((item) => (
          <a
            className="customNav"
            key={item.id}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
