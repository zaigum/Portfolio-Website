import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <div className="header-container">
          <h1>My Portfolio</h1>
          <div className="hamburger-menu" onClick={toggleNavbar}>
            <div className={isOpen ? "line open" : "line"}></div>
            <div className={isOpen ? "line open" : "line"}></div>
            <div className={isOpen ? "line open" : "line"}></div>
          </div>
        </div>
        <div className="navbar-link">
          <div className={isOpen ? "navbar-links open" : "navbar-links"}>
            <ul>
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>About Me</a>
              </li>
              <li>
                <a href="#resume" onClick={() => scrollToSection("resume")}>Resume</a>
              </li>
              <li>
                <a href="#testimonial" onClick={() => scrollToSection("testimonial")}>Testimonial</a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
