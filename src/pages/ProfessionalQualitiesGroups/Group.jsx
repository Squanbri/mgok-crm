import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';

const Direction = observer(({ group }) => {
  const { store, modal } = useContext(Context);
  const history = useHistory();

  const linkTo = () => {
    history.push(`/speciality/${store.specialities.speciality.id}/direction/${store.directions.direction.id}/group/${group.id}`);
  };

  const changeSwitch = () => {
    const id = group.id;
    const name = group.name;
    const active = !group.active;
    store.groups.updateGroup(name, active, id);
  };

  const showModal = (e) => {
    e.stopPropagation();

    modal.setId(group.id);
    modal.setName(group.name);
    modal.setActive(group.active);
    modal.setActiveUpdate(true);
  };

  return (
    <>
      <ModalUpdate/>

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
