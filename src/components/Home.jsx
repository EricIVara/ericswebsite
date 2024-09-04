import React from "react";
import "./Home.module.css";
import ProfilePic from "../assets/images/ProfilePic.png";

function Home() {
  return (
    <section className="home" id="home">
      <h2 className="subtitle">Data Analyst</h2>
      <h1 className="title">Eric Vara</h1>
      <img
        src={ProfilePic}
        alt="Eric's profile picture"
        className="profile-pic"
      />
    </section>
  );
}

export default Home;
