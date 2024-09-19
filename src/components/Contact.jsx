import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
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
      </div>
    </section>
  );
}

export default Contact;
