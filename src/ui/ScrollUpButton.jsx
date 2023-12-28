import styles from "./ScrollUpButton.module.css";

function ScrollUpButton({ children, onClick, showButton }) {
  const buttonShowClass = showButton ? styles.show : styles.hide;

  return (
    <button
      className={`${styles.scrollUpBtn} ${buttonShowClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ScrollUpButton;
