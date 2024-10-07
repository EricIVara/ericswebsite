import React from "react";
import {
  FaBaby,
  FaGraduationCap,
  FaFlagUsa,
  FaWrench,
  FaParachuteBox,
  FaMedal,
  FaLaptopCode,
  FaUniversity,
  FaHome,
} from "react-icons/fa";
import "./About.module.css";
import ProfilePic from "../assets/images/ProfilePic.png";

function About() {
  const timelineData = [
    {
      year: "1996",
      text: "Born in San Bernardino County, California",
      icon: <FaBaby />,
    },
    { year: "2006", text: "Moved to Victorville, CA", icon: <FaHome /> },
    {
      year: "2014",
      text: "Graduated Silverado High School",
      icon: <FaGraduationCap />,
    },
    { year: "2014", text: "Joined the U.S. Army", icon: <FaFlagUsa /> },
    {
      year: "2014-2015",
      text: "Basic Training and Mechanic School at Fort Jackson, SC",
      icon: <FaWrench />,
    },
    {
      year: "2015",
      text: "Airborne Training at Fort Benning, GA",
      icon: <FaParachuteBox />,
    },
    { year: "2015-2018", text: "Served at Fort Bragg, NC", icon: <FaMedal /> },
    {
      year: "2018-2022",
      text: "Studied Computer Science at Mohave Community College",
      icon: <FaLaptopCode />,
    },
    {
      year: "2022-2024",
      text: "Completed Bachelor’s in Information Technology at the University of Arizona",
      icon: <FaUniversity />,
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
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
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
