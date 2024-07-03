import styles from "./Modal.module.css";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  console.log("open", open);

  return (
    <ModalContext.Provider value={{ openId, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, id }) {
  const { openId, close, open } = useContext(ModalContext);

  function handleClick(e) {
    openId === "" || openId !== id ? open(id) : close();
  }

  return <li onClick={handleClick}>{children}</li>;
}

function Window({ children, id }) {
  const { openId, close } = useContext(ModalContext);
  const ref = useOutsideClick(close, true);

  if (openId !== id) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} ref={ref}>
        <button className={styles.closeModalBtn} onClick={close}>
          <HiXMark />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
