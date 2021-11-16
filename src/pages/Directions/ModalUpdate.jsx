import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import '../../styles/modalupdate.css'

const ModalUpdate = observer(({ active, setActive }) => {
  const { store, modal } = useContext(Context);

  const updateDirection = () => {
    const id = modal.id;
    const name = modal.name;
    const code = modal.code;
    const active = modal.active;
    store.directions.updateDirection(id, name, code, active);
    modal.setActiveUpdate(false);
  };

  if (!modal.isActiveUpdate) return null;

  return (
    <Modal
      active={modal.isActiveUpdate}
      setActive={modal.setActiveUpdate}
      header={"Изменить квалификацию"}
    >
      <TextField
        label="Квалификация"
        placeholder="Мастер слесарных работ"
        value={modal.name}
        onChange={(e) => modal.setName(e.target.value)}
      />
      <TextField
        label="ФГОС"
        placeholder="52.02.01"
        value={modal.code}
        onChange={(e) => modal.setCode(e.target.value)}
      />

      <Button onClick={updateDirection}>
        Изменить
        <UpdateIcon className="modal-update__icon" />
      </Button>
    </Modal>
  );
});

export default ModalUpdate;
