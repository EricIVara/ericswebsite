import resumeImage from "../assets/images/resume.png";
import styles from "./Resume.module.css";

const experience = [
  {
    title: "Food & Consumables Team Lead | Walmart",
    location: "Celina, TX",
    dates: "Feb 2026 – Present",
    bullets: [
      "Helped open Walmart Store #1250 in Celina and build an effective Food & Consumables team, establishing systems and processes to support a productive food business.",
      "Align team priorities and daily execution with the store manager’s vision, objectives, and goals, coordinating across departments to support overall store success.",
    ],
  },
  {
    title: "Meat & Produce Team Lead | Walmart Store #2086",
    location: "Plano, TX",
    dates: "Jun 2024 – Feb 2026",
    bullets: [
      "Maintained clean, welcoming Meat & Produce displays and prepared the departments for store opening with fresh, high-quality products, setting a positive tone for customers’ shopping experience.",
      "Earned Shrink Buster awards by maintaining CVP standards, controlling waste, and implementing effective inventory management processes.",
    ],
  },
  {
    title: "Software Engineer – Back-End Development Intern | Tech Mahindra (AT&T Project)",
    dates: "May 2022 – Jun 2024",
    bullets: [
      "Supported AT&T back-end development, collaborating with engineers to resolve technical issues and improve system performance.",
      "Applied structured problem-solving, testing, documentation, and quality assurance to improve processes supporting business needs.",
    ],
  },
  {
    title: "Bachelor’s Degree, Information Technology",
    location: "University of Arizona",
    dates: "Aug 2022 – Dec 2024",
  },
  {
    title: "Associate Degree, Computer Science",
    location: "Mohave Community College",
    dates: "Jan 2018 – May 2022",
  },
  {
    title: "U.S. Army Soldier / Diesel Mechanic | United States Army",
    dates: "Nov 2014 – May 2018",
    bullets: [
      "Diagnosed, maintained, and repaired military vehicles and equipment to sustain operational readiness and mission execution.",
      "Qualified as an airborne parachutist and convoy gunner; performed in high-pressure environments with accountability, discipline, and safety.",
    ],
  },
];

const Resume = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>My Resume</h2>
    <div className={styles.actions}>
      <a href={`${import.meta.env.BASE_URL}Eric-Vara-Resume.pdf`} download="Eric-Vara-Resume.pdf">Download</a>
      <button onClick={() => window.print()}>Print</button>
    </div>
    <article className={styles.resume} aria-label="Eric Vara Resume">
      <aside className={styles.sidebar}>
        <div className={styles.portrait} style={{ backgroundImage: `url(${resumeImage})` }} role="img" aria-label="Eric Vara" />
        <section>
          <h3>Contact</h3>
          <h4>Phone</h4><p><a href="tel:9109778612">910-977-8612</a></p>
          <h4>Email</h4><p><a href="mailto:vara.ada91@gmail.com">vara.ada91@gmail.com</a></p>
          <h4>Location</h4><p>Frisco, TX</p>
        </section>
        <section>
          <h3>Websites</h3>
          <p><a href="https://linkedin.com/in/ericvara">linkedin.com/in/ericvara</a></p>
          <p><a href="https://ericivara.github.io/ericswebsite/">https://ericivara.github.io/ericswebsite/</a></p>
          <p><a href="https://github.com/EricIVara">https://github.com/EricIVara</a></p>
        </section>
        <section>
          <h3>Core Competencies</h3>
          <p>Store Priority Execution • Team Development &amp; Accountability • Sales &amp; In-Stock Performance • Shrink &amp; Waste Control • Freshness &amp; Food Safety • Customer Experience</p>
        </section>
        <section>
          <h3>Technical Skills</h3>
          <p>Power BI • Tableau • SQL • Python • Microsoft Office • Business Reporting • Systems Troubleshooting</p>
        </section>
      </aside>
      <div className={styles.main}>
        <header>
          <h1>Eric Vara</h1>
          <p className={styles.tagline}>Retail Operations • Team Leadership • Process Improvement</p>
          <p>Walmart Team Lead focused on translating the store manager’s vision, objectives, and goals into clear team priorities and consistent daily execution. Drives sales opportunities through inventory accuracy and in-stock availability while controlling waste to protect profitability. Maintains clean, welcoming store presentations and delivers friendly customer service to create positive shopping experiences. Develops accountable teams through structured routines, clear standards, and coaching aligned with store performance and customer interaction goals.</p>
        </header>
        <section>
          <h3>Experience &amp; Education</h3>
          <div className={styles.timeline}>
            {experience.map(({ title, location, dates, bullets }) => (
              <section className={styles.job} key={title}>
                <h4>{title}</h4>
                {location && <p>{location}</p>}
                <p className={styles.dates}>{dates}</p>
                {bullets && <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
          </div>
        </section>
      </div>
    </article>
  </div>
);

export default Resume;
