import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <h1>My Portfolio</h1>
        <div className="navbar-link">
          <div className={isOpen ? "navbar-links open" : "navbar-links"}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu" onClick={toggleNavbar}>
            <div className={isOpen ? "line open" : "line"}></div>
            <div className={isOpen ? "line open" : "line"}></div>
            <div className={isOpen ? "line open" : "line"}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
