import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';

const Direction = observer(({ group }) => {
  const { store } = useContext(Context);
  const [ modalUpdate, setModalUpdate ] = useState(false);
  const navigate = useNavigate();

  const linkTo = () => {
    navigate(`/speciality/${store.specialities.speciality.id}/direction/${store.directions.direction.id}/group/${group.id}`);
  };

  const changeSwitch = () => {
    store.groups.updateGroup(
      group.name, 
      !group.active, 
      group.id
    );
  };

  const showModal = (e) => {
    e.stopPropagation();

    setModalUpdate(true);
  };

  return (
    <>
      <ModalUpdate
        group={group} 
        show={modalUpdate} 
        setShow={setModalUpdate} 
      />

      <div className="table__row" onClick={linkTo}>
        <div className="table__cell">{group.id}</div>
        <div className="table__cell">{group.name}</div>
        <div className="table__cell">{group.qualities}</div>
        <div className="table__cell">{group.hours}</div>
        <div className="table__cell" >
          <Switch
            checked={!!group.active}
            onChange={changeSwitch}
          />
        </div>
        <div className="table__cell">
          <div onClick={e => showModal(e)}>
            <UpdateIcon className="edit-icon" />
            <span className="update-text">Изменить</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Direction;
