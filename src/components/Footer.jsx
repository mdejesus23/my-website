import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <div className={styles.logo}>
          MD<span>Jesus</span>
        </div>
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
      <p>Copyrights &copy; melnerdz.com All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
