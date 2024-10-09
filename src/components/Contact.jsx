import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS with Vite environment variables
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
        setError(""); // Clear any previous errors
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setError("Failed to send the message. Please try again.");
      });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>

        {/* Display success or error message */}
        {isSubmitted && (
          <p className={styles.successMessage}>Message sent successfully!</p>
        )}
        {error && <p className={styles.errorMessage}>{error}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {/* New Contact Information Section */}
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>My Contact Information</h3>
          <ul className={styles.infoList}>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:vara.ada91@gmail.com" className={styles.link}>
                vara.ada91@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+19109778612" className={styles.link}>
                (910) 977-8612
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ericivara"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                www.linkedin.com/in/ericivara
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/EricIVara"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                github.com/EricIVara
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
