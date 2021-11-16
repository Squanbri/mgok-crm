import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

const Speciality = observer(({ spec }) => {
  const { store, modal } = useContext(Context);
  const history = useHistory();

  const linkTo = () => {
    history.push(`/directions/${spec.id}`);
  };

  const changeSwitch = () => {
    const id = spec.id;
    const name = spec.name;
    const code = spec.code;
    const active = !spec.active;
    store.specialities.updateSpeciality(id, name, code, active);
  };

  const showModal = (e) => {
    e.stopPropagation();

    modal.setId(spec.id);
    modal.setName(spec.name);
    modal.setCode(spec.code);
    modal.setActive(spec.active);
    modal.setActiveUpdate(true);
  };

  const deleteSpeciality = (e) => {
    e.stopPropagation();

    store.specialities.deleteSpeciality(spec.id);
  };

  return (
    <>
      <ModalUpdate/>

      <div className="table__row" onClick={linkTo}>
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
          <div onClick={e => showModal(e)}>
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
