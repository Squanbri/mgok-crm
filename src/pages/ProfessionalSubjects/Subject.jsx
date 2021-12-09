import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import AccordionBody from "./AccordionBody";
import '../../styles/professionalSubjects.css';

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

const Subject = observer(({ subject }) => {
  const { store } = useContext(Context);
  const [ modalUpdate, setModalUpdate ] = useState(false);
  const { profId } = useParams();
  const [isOpen, setIsOpen] = useState(false)

  const showModal = (e) => {
    e.stopPropagation();

    setModalUpdate(true);
  };

  const deleteSubject = (e) => {
    e.stopPropagation();

    store.professionalSubjects.deleteSubject(profId, subject.id);
  };

  return (
    <>
      <ModalUpdate
        subject={subject} 
        show={modalUpdate} 
        setShow={setModalUpdate} 
      />

      <div className="accordion__wrapper" aria-expanded={isOpen}>
        <div 
          className="table__row prof-subject__row accordion__header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="table__cell">{subject.name}</div>
          <div className="table__cell">{subject.allHours}</div>
          <div className="table__cell">
            <div onClick={e => showModal(e)}>
              <UpdateIcon className="edit-icon" />
              <span className="update-text">Изменить</span>
            </div>
          </div>
          <div className="table__cell">
            <div onClick={e => deleteSubject(e)}>
              <DeleteIcon className="delete-icon"/>
              <span className="delete-text">Удалить</span>
            </div>
          </div>
        </div>

        <div className="accordion__body">
          <AccordionBody subject={subject} />
        </div>
        <hr className="accordion__bottom-line"/>
      </div>
    </>
  );
});

export default Subject;