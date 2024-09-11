import React from "react";
import resumePDF from "../assets/images/resume.pdf"; // Assuming you store the PDF in your assets folder
import styles from "./Resume.module.css";

const Resume = () => {
  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.src = resumePDF;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div>
        <a href={resumePDF} download="Eric-Vara-Resume.pdf">
          <button style={{ marginRight: "10px" }}>Download</button>
        </a>
        <button onClick={handlePrint}>Print</button>
      </div>
      <iframe
        src={resumePDF}
        title="Resume PDF"
        width="100%"
        height="1000px"
        style={{ border: "none", marginTop: "20px" }}
      />
    </div>
  );
};

export default Resume;
