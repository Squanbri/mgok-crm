import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

const Direction = observer(({ direction }) => {
  const { store, modal } = useContext(Context);

  const changeSwitch = () => {
    const id = direction.id;
    const name = direction.name;
    const code = direction.code;
    const active = !direction.active;
    store.directions.updateDirection(id, name, code, active);
  };

  const showModal = (e) => {
    e.stopPropagation();

    modal.setId(direction.id);
    modal.setName(direction.name);
    modal.setCode(direction.code);
    modal.setActive(direction.active);
    modal.setActiveUpdate(true);
  };

  const deleteDirection = (e) => {
    e.stopPropagation();

    store.directions.deleteDirection(direction.id);
  };

  return (
    <>
      <ModalUpdate/>

      <div className="table__row">
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
