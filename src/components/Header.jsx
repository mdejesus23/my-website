import { useState } from "react";

import OpenMenu from "@mui/icons-material/Menu";
import CloseMenu from "@mui/icons-material/Close";

import styles from "./Header.module.css";
import MobileNav from "./MobileNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          MD<span>Jesus</span>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={styles.navController}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.menuBtn}
          >
            {!isOpen ? <OpenMenu /> : <CloseMenu />}
          </button>
        </div>
      </header>
      {isOpen && (
        <MobileNav toggleMenuHandler={() => setIsOpen((prev) => !prev)} />
      )}
    </>
  );
}

export default Header;
