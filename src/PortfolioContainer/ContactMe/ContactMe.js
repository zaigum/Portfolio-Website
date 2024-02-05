import React from "react";
import "./ContactMe.css";
import ContactImage from "../../assets/Home/2880031.jpg";
import Typical from "react-typical";

const ContactMe = () => {
  return (
    <div id="contact" className="heading">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-content">
          <div className="background-color">
            <h3>
              <Typical
                steps={["Get in Touch", 2000, "Contact Me", 2000]}
                loop={Infinity}
                wrapper="span"
              />
            </h3>

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
              </a>{" "}
            </div>
            <div className="contact-heading">
              <img src={ContactImage} alt="Contact" className="contact-image" />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button className="btn primary-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
