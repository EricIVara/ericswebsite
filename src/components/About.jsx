import React from "react";
import "./About.module.css";
import ProfilePic from "../assets/images/ProfilePic.png";

function About() {
  return (
    <div className="about-container">
      {/* Hero Sections */}
      <div className="hero-section">
        <img src={ProfilePic} alt="Eric Vara" className="profile-pic" />
        <div className="intro">
          <h1>Eric Vara</h1>
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
        </div>
        <div className="timeline-item">
          <h3>2015-2018</h3>
          <p>Served at Fort Bragg, NC</p>
        </div>
        <div className="timeline-item">
          <h3>2018-2022</h3>
          <p>Studied Computer Science at Mohave Community College</p>
        </div>
        <div className="timeline-item">
          <h3>2022-2024</h3>
          <p>
            Completed Bachelor’s in Information Technology at the University of
            Arizona
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
