import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a className={styles.logo} href="#home">
          MDJ
        </a>
        <a
          href="https://github.com/mdejesus23"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/melnard-de-jesus-279132278/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; Copyrights || App created thru Vite+React</p>
    </footer>
  );
}

export default Footer;
