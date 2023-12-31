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
          <a href="#contact" className={styles.heroButton}>
            Let's Talk!
          </a>
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
            <br />A Web Developer at <span>Heart</span>
          </h1>
          <a href="#contact" className={styles.heroButton}>
            Let's Talk!
          </a>
        </div>
      </div>

      <Techstack />
    </section>
  );
}

export default Hero;
