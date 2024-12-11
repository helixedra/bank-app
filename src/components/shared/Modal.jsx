import { useRef } from "react";
import "./Modal.scss";
import { RiCloseLargeLine } from "@remixicon/react";

export default function Modal({ visibility, children, handler, header = true, title = "Modal" }) {
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
    <dialog ref={dialogRef} className="modal" onClick={handleBackdropClick}>
      <div className="modal_container">
        {header && (
          <div className="modal_header">
            {title}
            <button className="modal_close" onClick={handleCloseButton}>
              <RiCloseLargeLine />
            </button>
          </div>
        )}
        {children}
      </div>
    </dialog>
  );
}
