// Testimonial.js

import React from "react";
import "./Testimonial.css";
import testimonial1 from "../../assets//Home/profilephoto.jpg";
import testimonial2 from "../../assets//Home/profilephoto.jpg";

const Testimonial = () => {
  return (
<div id="testimonial" className="testimonial-container">
      <h2>Testimonials</h2>

      <div className="testimonial-content">
        <div className="testimonial-item">
          <img
            src={testimonial1}
            alt="Testimonial 1"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p className="testimonial-author">- John Doe, CEO at ABC Company</p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>

        <div className="testimonial-item">
          <img
            src={testimonial2}
            alt="Testimonial 2"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p className="testimonial-author">
            - Jane Smith, CTO at XYZ Corporation
          </p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>

        <div className="testimonial-item">
          <img
            src={testimonial2}
            alt="Testimonial 3"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p className="testimonial-author">
            - Mark Johnson, COO at LMN Corporation
          </p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            src={testimonial2}
            alt="Testimonial 3"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p className="testimonial-author">
            - Mark Johnson, COO at LMN Corporation
          </p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
        <div className="testimonial-item">
          <img
            src={testimonial2}
            alt="Testimonial 3"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p className="testimonial-author">
            - Mark Johnson, COO at LMN Corporation
          </p>
          <div className="testimonial-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
