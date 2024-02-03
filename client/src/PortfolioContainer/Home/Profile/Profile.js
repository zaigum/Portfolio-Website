import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    
    <div className="Profile-Container">

      <div className="Profile-Parent">
        <div className="Profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
              <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
              <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="Profile-details-name">
            {" "}
            {/* Remove extra {} */}
            Hello I'm <span className="highlighted-text"> Zaigum</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {/* Add h2 tag */}
              <h1>
                <Typical
                  steps={[
                    "Zaigum Dev 😊",
                    2000,
                    "Fontend Developer 💻",
                    2000,
                    "React Developer ⚛️",
                    2000,
                    "Fontend Developer 💻",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </h1>
              <span className="profile-role-tagline">
                Web developers create and maintain websites using programming
                languages, frameworks.
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">
              {""}
              Hire me
              {""}
            </button>
            <a href="resume.pdf" download="eee resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-backgound"></div>
        </div>
      </div>
    </div>
  );
}
