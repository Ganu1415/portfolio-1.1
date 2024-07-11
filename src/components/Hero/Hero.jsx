import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import resume from "../../assets/resume/Ganesh Vhanmane.pdf";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ganesh</h1>
        <p className={styles.description}>
          A seasoned professional specializing in React.js and JavaScript
          projects. I excel in crafting robust web solutions for seamless
          integration in dynamic web applications. With proficiency in React.js
          and Umbraco, I bring expertise to enhance frontend experiences.
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:ganesh98vhanmane@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a href={resume} download className={styles.contactBtn}>
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/myPic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
