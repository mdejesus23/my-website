import styles from "./MobileNav.module.css";

function MobileNav({ toggleMenuHandler }) {
  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <a onClick={toggleMenuHandler} href="#home">
            Home
          </a>
        </li>
        <li>
          <a onClick={toggleMenuHandler} href="#project">
            Project
          </a>
        </li>
        <li>
          <a onClick={toggleMenuHandler} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
