import React from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram, FaHeart } from "react-icons/fa"; // Import icons for each section
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <div className="resume-content">
        <div className="resume-section">
          <h3><FaGraduationCap className="icon" /> Education</h3>
          <p>
            Bachelor of Science in Computer Science
            <br />
            Your University, Graduation Year
          </p>
          <div className="profile-option">
          <button className="btn highlighted-btn">Read More</button>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaBriefcase className="icon" /> Work History</h3>
          <p>
            Software Developer
            <br />
            Company Name, Start Date - End Date
             
          </p>
          <div className="profile-option">
          <button className="btn highlighted-btn">Read More</button>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaCode className="icon" /> Programming Skills</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
          <div className="profile-option">
          <button className="btn highlighted-btn">Read More</button>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaProjectDiagram className="icon" /> Projects</h3>
          <p>
            Project Name
            
          </p>
          <div className="profile-option">
          <button className="btn highlighted-btn">Read More</button>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaHeart className="icon" /> Interests</h3>
          <p>
            Reading, Writing, Traveling, Photography, Cooking
            {/* Add your interests separated by commas */}
          </p>
          <div className="profile-option">
            <button className="btn highlighted-btn">Read More</button>
          </div>
        </div>
      </div>
       
    </div>
  );
}
