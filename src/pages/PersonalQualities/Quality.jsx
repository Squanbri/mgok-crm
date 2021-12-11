import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import ModalUpdate from "./ModalUpdate";
import Switch from "../../UI/Switch";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';

const Quality = observer(({ quality }) => {
  const { store } = useContext(Context);
  const [ modalUpdate, setModalUpdate ] = useState(false);
  const navigate = useNavigate();

  const changeSwitch = () => {
    store.personalQualities.updateQuality(
      quality.id, 
      quality.name, 
      quality.hours, 
      !quality.active
    );
  };

  const showModal = (e) => {
    e.stopPropagation();

    setModalUpdate(true);
  };

  return (
    <>
      {modalUpdate &&
        <ModalUpdate 
          quality={quality} 
          show={modalUpdate} 
          setShow={setModalUpdate} 
        />
      }

      <div 
        className="table__row personal-qualities__row" 
        onClick={() => navigate(`/speciality/${quality.id}`)}
      >
        <div className="table__cell">{quality.id}</div>
        <div className="table__cell">{quality.name}</div>
        <div className="table__cell">{quality.hours}</div>
        <div className="table__cell" >
          <Switch
            checked={!!quality.active}
            onChange={changeSwitch}
          />
        </div>
        <div className="table__cell">
          <div onClick={showModal}>
            <UpdateIcon className="edit-icon" />
            <span className="update-text">Изменить</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Quality;
