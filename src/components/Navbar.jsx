import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("dark-mode");
    if (storedMode === "true") {
      setIsDarkMode(true);
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("dark-mode", "false");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Eric's Website
        </Link>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className={`nav-link ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="nav-button">Start Building</button>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
