import { HiXMark } from "react-icons/hi2";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeModalBtn}>
          <HiXMark />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
