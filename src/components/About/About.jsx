import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Tester</h3>
              <p>
              I’m a Software Tester with UI/UX design experience, focused on 
              improving user experiences and software quality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Full-Stack Developer</h3>
              <p>
              Currently expanding my skills in front-end (React.js) and back-end (.NET) development,
               along with automation testing using Selenium JS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>User-Centered Approach</h3>
              <p>
              I’ve designed user-friendly interfaces, conducted UAT sessions, and continuously seek to bridge 
              the gap between design, functionality, and user needs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
