// src/components/Header.jsx
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">Eric's Website</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="nav-button">Start Building</button>
      </nav>
    </header>
  );
}

export default Navbar;
