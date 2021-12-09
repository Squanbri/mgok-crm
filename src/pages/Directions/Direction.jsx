import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

const Direction = observer(({ direction }) => {
  const { store } = useContext(Context);
  const [ modalUpdate, setModalUpdate ] = useState(false);
  const navigate = useNavigate();

  const linkTo = () => {
    navigate(`/speciality/${store.specialities.speciality.id}/direction/${direction.id}`);
  };

  const changeSwitch = () => {
    store.directions.updateDirection(
      direction.id, 
      direction.name, 
      direction.code, 
      !direction.active
    );
  };

  const showModal = (e) => {
    e.stopPropagation();

    setModalUpdate(true);
  };

  const deleteDirection = (e) => {
    e.stopPropagation();

    store.directions.deleteDirection(direction.id);
  };

  return (
    <>
      <ModalUpdate
        direction={direction} 
        show={modalUpdate} 
        setShow={setModalUpdate} 
      />

      <div className="table__row" onClick={linkTo}>
        <div className="table__cell">{direction.id}</div>
        <div className="table__cell">{direction.name}</div>
        <div className="table__cell">{direction.code}</div>
        <div className="table__cell" >
          <Switch
            checked={!!direction.active}
            onChange={changeSwitch}
          />
        </div>
        <div className="table__cell">
          <div onClick={e => showModal(e)}>
            <UpdateIcon className="edit-icon" />
            <span className="update-text">Изменить</span>
          </div>
        </div>
        <div className="table__cell">
          <div onClick={e => deleteDirection(e)}>
            <DeleteIcon className="delete-icon"/>
            <span className="delete-text">Удалить</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Direction;
