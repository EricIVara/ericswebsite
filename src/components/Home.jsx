import React from "react";
import { Link } from "react-router-dom";
import "./Home.module.css";
import ProfilePic from "../assets/images/ProfilePic.png";

function Home() {
  return (
    <section className="home" id="home">
      <h2 className="subtitle">Information Technology Specialist</h2>
      <h1 className="title">Eric Vara</h1>
      <Link to="/about">
        <img
          src={ProfilePic}
          alt="Eric's profile picture"
          className="profile-pic"
        />
      </Link>
      <Link to="/contact">
        <button className="cta-button">Contact Me</button>
      </Link>
    </section>
  );
}

export default Home;
