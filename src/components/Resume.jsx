import React from "react";
import resumeImage from "../assets/images/resume.png"; // Assuming the image is in your assets folder
import styles from "./Resume.module.css";

const Resume = () => {
  const handlePrint = () => {
    const newWindow = window.open(resumeImage, "_blank");
    newWindow.print();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Resume</h2>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div>
          <a href={resumeImage} download="Eric-Vara-Resume.png">
            <button style={{ marginRight: "10px" }}>Download</button>
          </a>
          <button onClick={handlePrint}>Print</button>
        </div>
        <img
          src={resumeImage}
          alt="Eric Vara Resume"
          className={styles.resumeImage}
        />
      </div>
    </div>
  );
};

export default Resume;
