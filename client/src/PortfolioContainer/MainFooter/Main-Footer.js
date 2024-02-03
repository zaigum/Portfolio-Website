import React from 'react';
import './Main-Footer.css';  

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2024 Your Website. All rights reserved.</p>
         
        {/* Additional icons */}
        <div className="colz-icon">
          <a href="#"><i className="fa fa-facebook-square"></i></a>
          <a href="#"><i className="fa fa-google-plus-square"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube-square"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
