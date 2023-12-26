import styles from "./Hero.module.css";
import Techstack from "./Techstack";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.about}>
          <h1>
            Hi I'm <span>Melnard</span>
            <br />A Web Developer at <span>Heart</span>
          </h1>
          {/* <a href="#contact" className="btn">
            Let's Talk!
          </a> */}
          <a
            className="btn"
            href="https://drive.google.com/file/d/1L-h-4ATTCMBDc-Rg5yZEoUe48sYjuFj8/view?usp=sharing"
            download
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}>
            <img src="/mdj.png" alt="profile" />
          </div>
        </div>
      </div>
      <Techstack />
    </section>
  );
}

export default Hero;
