import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../components/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import '../../styles/modalupdate.css'

const ModalUpdate = observer(() => {
  const { store, modal } = useContext(Context);

  const updateSpeciality = () => {
    const id = modal.id;
    const name = modal.name;
    const code = modal.code;
    const active = modal.active;
    store.specialities.updateSpeciality(id, name, code, active);
    modal.setActiveUpdate(false);
  };

  if (!modal.isActiveUpdate) return null;

  return (
    <Modal
      active={modal.isActiveUpdate}
      setActive={modal.setActiveUpdate}
      header={"Изменить специальность"}
    >
      <TextField
        label="Специальность"
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

      <Button
        onClick={updateSpeciality}
      >
        Изменить
        <UpdateIcon className='modal-update__icon'/>
      </Button>
    </Modal>
  );
});

export default ModalUpdate;
