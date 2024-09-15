import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";

import AIDigitRecognitionImg from "../assets/images/AI-Digit-Recognition-App.png";
import BlogImg from "../assets/images/Blog.png";
import DsaImg from "../assets/images/dsa.png";
import EZTechMovieImg from "../assets/images/EZ_TechMovie.png";
import GroupMovieAppImg from "../assets/images/GroupMovieApp.png";
import MyWebsiteImg from "../assets/images/MyWebsite.png";
import ReactEmployeeDashboardImg from "../assets/images/React-Employee-Management-Dashboard.png";
import ReactMovieSearchAppImg from "../assets/images/React-MovieSearch-App.png";
import ReactItAppImg from "../assets/images/ReactIt-app.png";
import ZombieApocalypseAppImg from "../assets/images/Zombie-Apocalypse-app.png";

const GITHUB_USERNAME = "EricIVara";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchProjects();
  }, []);

  const getProjectImage = (projectName) => {
    switch (projectName) {
      case "AI-Digit-Recognition-App":
        return AIDigitRecognitionImg;
      case "Blog":
        return BlogImg;
      case "dsa":
        return DsaImg;
      case "EZ_TechMovie":
        return EZTechMovieImg;
      case "GroupMovieApp":
        return GroupMovieAppImg;
      case "ericswebsite":
        return MyWebsiteImg;
      case "React-Employee-Management-Dashboard":
        return ReactEmployeeDashboardImg;
      case "React-MovieSearch-App":
        return ReactMovieSearchAppImg;
      case "ReactIt-app":
        return ReactItAppImg;
      case "Zombie-Apocalypse-app":
        return ZombieApocalypseAppImg;
      default:
        return "https://source.unsplash.com/random/400x300";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Projects</h1>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={getProjectImage(project.name)} // Dynamically get the image based on project name
              alt={project.name}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2>{project.name}</h2>
              <p>{project.description || "No description available"}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
