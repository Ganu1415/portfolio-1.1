import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutbg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a Frontend Developer specializing in React.js, with
                expertise in JavaScript, HTML5, CSS, SCSS, React Native, API
                Integration, and Umbraco. I am proficient in crafting robust
                solutions for dynamic web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>React Js Developer</h3>
              <p>
                Specializing in React.Js. I develop fast, optimized front-end
                systems, while creating and seamlessly integrating dynamic
                websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have comprehensive knowledge of backend technologies and
                extensive hands-on experience, enabling me to craft intuitive
                and visually appealing user interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
