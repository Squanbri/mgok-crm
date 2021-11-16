import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';

const Subject = observer(({ subject }) => {
  const { modal } = useContext(Context);

  const showModal = (e) => {
    e.stopPropagation();

    modal.setId(subject.id);
    modal.setName(subject.name);
    modal.setCode(subject.code);
    modal.setActive(subject.active);
    modal.setActiveUpdate(true);
  };

  return (
    <>
      <ModalUpdate />

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
