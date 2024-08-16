import styles from "./Hero.module.css";
import Techstack from "./Techstack";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.about}>
          <h1>
            Hi I'm <span>Melnard</span>
            <br />A Software Developer
          </h1>

          <p className={styles.professionalBackground}>
            A motivated developer with experience in AWS (Lambda with Node.js,
            Textract, CloudWatch), MySQL, and MongoDB. Skilled in building
            projects using Astro and React, with a solid foundation in HTML,
            CSS, and JavaScript. Passionate about creating scalable solutions
            and seamless user experiences.
          </p>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}>
            <img src="/mdj.png" alt="profile" />
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className={styles.mobileHeroGrid}>
        <div className={styles.mobileProfile}>
          <div className={styles.mobileProfileImg}>
            <img src="/mdj.png" alt="profile" />
          </div>
        </div>

        <div className={styles.mobileAbout}>
          <h1>
            Hi I'm <span>Melnard</span>
            <br />A Software Developer
          </h1>
          <p className={styles.professionalBackground}>
            A motivated developer with experience in AWS (Lambda with Node.js,
            Textract, CloudWatch), MySQL, and MongoDB. Skilled in building
            projects using Astro and React, with a solid foundation in HTML,
            CSS, and JavaScript. Passionate about creating scalable solutions
            and seamless user experiences.
          </p>
        </div>
      </div>

      <Techstack />
    </section>
  );
}

export default Hero;
