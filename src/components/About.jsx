import React from "react";
import "./About.css";
// import schoolBanner from "../assets/images/school_banner.jpg";
import armyLogo from "../assets/images/airborne.jpg";
import signature from "../assets/images/signature.png";
import mccLogo from "../assets/images/mcc.jpg";
import uaLogo from "../assets/images/uofa.jpg";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={signature} alt="Banner" className="banner-image" />
        <div className="intro">
          <h1>Eric Vara</h1>
          <img src={signature} alt="Signature" className="signature-image" />
          <p>Information Technology Specialist & Military Veteran</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        <h2>My Journey</h2>
        <div className="timeline-item">
          <h3>1996</h3>
          <p>Born in San Bernardino County, California</p>
        </div>
        <div className="timeline-item">
          <h3>2014</h3>
          <p>Graduated High School and Joined the U.S. Army</p>
        </div>
        <div className="timeline-item">
          <h3>2014-2015</h3>
          <p>Basic Training and Mechanic School at Fort Jackson, SC</p>
        </div>
        <div className="timeline-item">
          <h3>2015</h3>
          <p>Airborne Training at Fort Benning, GA</p>
          <img src={armyLogo} alt="Airborne Logo" className="timeline-logo" />
        </div>
        <div className="timeline-item">
          <h3>2016-2018</h3>
          <p>Served at Fort Bragg, NC</p>
        </div>
        <div className="timeline-item">
          <h3>2019-2020</h3>
          <p>Studied Computer Science at Mohave Community College</p>
          <img src={mccLogo} alt="MCC Logo" className="timeline-logo" />
        </div>
        <div className="timeline-item">
          <h3>2021-2023</h3>
          <p>
            Completed Bachelor’s in Information Technology at the University of
            Arizona
          </p>
          <img
            src={uaLogo}
            alt="University of Arizona Logo"
            className="timeline-logo"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="about-footer">
        <p>&copy; 2024 Eric Vară. All rights reserved.</p>
      </div>
    </div>
  );
}

export default About;
