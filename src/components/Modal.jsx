import React from "react";

import Button from "../UI/Button";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import "../styles/modal.css";

const Modal = ({ setActive, header, children }) => {
  return (
    <div className="modal">
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
  );
};

export default Modal;
