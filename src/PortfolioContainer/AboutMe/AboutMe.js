import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
<div id="about" className="about-me-container">
      <div className="image-container">
        {/* Keep the image as a background in CSS */}
      </div>
      <div className="details-container">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat dolor sit amet lorem dapibus, quis vehicula mauris
          malesuada. <span className="highlight">I'm a full-stack web and mobile developer.</span> Nullam nec velit nec augue tristique ultricies. 
          Mauris quis rhoncus velit. Integer eu libero vehicula, efficitur nisi vel, maximus eros. 
          Suspendisse potenti. Fusce vel magna ac leo tincidunt posuere ac a diam. 
          Proin non ante risus. Phasellus vitae dolor elit. 
        </p>
        <p>
          Etiam et ligula nec velit vehicula tincidunt. Fusce interdum mi id
          mi malesuada vehicula. Mauris convallis dolor a est posuere, sit amet
          vehicula ex aliquam. Proin ac lorem ut arcu suscipit rhoncus sed nec
          tellus. <span className="highlight">Specialized in React, Node.js, and mobile app development.</span> 
          Nam faucibus auctor diam, at sodales odio vulputate quis. Sed convallis vel tortor eget efficitur. 
          Phasellus rutrum tristique elit, sit amet convallis justo convallis quis. 
          Ut pharetra venenatis odio sit amet tincidunt. Nam sit amet mauris scelerisque, vestibulum justo nec, 
          accumsan ligula. Suspendisse at neque vitae ipsum tincidunt malesuada. 
        </p>
        {/* Profile options */}
        <div className="profile-option">
          <button className="btn primary-btn">Hire me</button>
          <a href="resume.pdf" download="eee_resume.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
