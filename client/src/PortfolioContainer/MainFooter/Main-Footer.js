import React from 'react';
import './Main-Footer.css';  

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo"></div>
        <div className="footer-middle">
          <h2>Contact Us</h2>  
          <ul>
            <li><i className="fa fa-envelope"></i> Email: example@example.com</li>
            <li><i className="fa fa-phone"></i> Phone: +1234567890</li>
            <li><i className="fa fa-map-marker"></i> Address: 123 Street, City, Country</li>
          </ul>
        </div>
        <div className="footer-icons">
          <h2>Social Media</h2>  
          <div className="custom-icon">
            <a href="#"><i className="fa fa-facebook-square"></i></a>
            <a href="#"><i className="fa fa-google-plus-square"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-youtube-square"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <p className="additional-content">© 2024 Your Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
 