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
    <header className="header">
      <a className="logo">My Portfolio</a>
      <nav className="navbar">
        {navItems.map((item) => (
          <a
            key={item.id}
            className="nav-link"
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
