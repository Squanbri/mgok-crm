import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

const Speciality = observer(({ spec }) => {
  const { store } = useContext(Context);
  const [ modalUpdate, setModalUpdate ] = useState(false);
  const navigate = useNavigate();

  const changeSwitch = () => {
    store.specialities.updateSpeciality(
      spec.id, 
      spec.name, 
      spec.code, 
      !spec.active
    );
  };

  const showModal = (e) => {
    e.stopPropagation();

    setModalUpdate(true);
  };

  const deleteSpeciality = (e) => {
    e.stopPropagation();

    store.specialities.deleteSpeciality(spec.id);
  };

  return (
    <>
      <ModalUpdate 
        speciality={spec} 
        show={modalUpdate} 
        setShow={setModalUpdate} 
      />

      <div 
        className="table__row" 
        onClick={() => navigate(`/speciality/${spec.id}`)}
      >
        <div className="table__cell">{spec.id}</div>
        <div className="table__cell">{spec.name}</div>
        <div className="table__cell">{spec.code}</div>
        <div className="table__cell" >
          <Switch
            checked={!!spec.active}
            onChange={changeSwitch}
          />
        </div>
        <div className="table__cell">
          <div onClick={showModal}>
            <UpdateIcon className="edit-icon" />
            <span className="update-text">Изменить</span>
          </div>
        </div>
        <div className="table__cell">
          <div onClick={e => deleteSpeciality(e)}>
            <DeleteIcon className="delete-icon"/>
            <span className="delete-text">Удалить</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Speciality;
