import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";

// Replace with your GitHub username and optionally your personal access token
const GITHUB_USERNAME = "EricIVara";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_API_URL, {
          headers: {
            Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Projects</h1>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={`https://source.unsplash.com/random/400x300?${project.name}`}
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
