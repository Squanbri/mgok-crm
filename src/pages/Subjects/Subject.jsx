import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import ModalUpdate from "./ModalUpdate";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';

const Subject = observer(({ subject }) => {
  const [ modalUpdate, setModalUpdate ] = useState(false);

  const showModal = (e) => {
    e.stopPropagation();

    setModalUpdate(true);
  };

  return (
    <>
      <ModalUpdate 
        subject={subject} 
        show={modalUpdate} 
        setShow={setModalUpdate} 
      />

      <div className="table__row">
        <div className="table__cell">{subject.id}</div>
        <div className="table__cell">{subject.name}</div>
        <div className="table__cell">{subject.code}</div>
        <div className="table__cell">
          <div onClick={(e) => showModal(e)}>
            <UpdateIcon className="edit-icon" />
            <span className="update-text">Изменить</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Subject;
