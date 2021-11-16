import React from "react";

import Button from "./Button";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import "../styles/modal.css";

const Modal = ({ active, setActive, header, children }) => {

  if (active) {
    document.body.classList.add('modal-active');
  }
  else {
    document.body.classList.remove('modal-active');
    return null
  }

  return (
    <div 
      className="modal__wrapper" 
      onClick={() => setActive(false)}
    >
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
          <h3 className="modal__header">{header}</h3>

          {children}
        </div>

        <div className="modal__close">
          <Button onClick={() => setActive(false)}>
            Закрыть
            <CloseIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
