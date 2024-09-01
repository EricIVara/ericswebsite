import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Eric Vara</h3>
          <p>
            Data Analyst with a passion for turning data into actionable
            insights. Connect with me on my social platforms.
          </p>
        </div>
        <div className="footer-section links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Eric Vara. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
