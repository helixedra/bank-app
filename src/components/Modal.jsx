import { useRef } from "react";
import classes from "./Modal.module.scss";
import { RiCloseLargeLine } from "@remixicon/react";

export default function Modal({ visibility, type = "primary", children, handler, header = true, title = "Modal" }) {
  const dialogRef = useRef(null);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      dialogRef.current?.close();
      handler();
    }
  }

  function handleCloseButton() {
    dialogRef.current?.close();
    handler();
  }

  if (visibility) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }

  return (
    <dialog ref={dialogRef} className={`${classes.modal} ${classes[type]}`} onClick={handleBackdropClick}>
      {header && (
        <div className={classes.header}>
          {title}
          <button className={classes.close} onClick={handleCloseButton}>
            <RiCloseLargeLine />
          </button>
        </div>
      )}
      {children}
    </dialog>
  );
}
