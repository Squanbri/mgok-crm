import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(() => {
  const { store, modal } = useContext(Context);

  const addDirection = () => {
    const specialityId = modal.id
    const name = modal.name
    const code = modal.code
    store.directions.addDirection(name, code, specialityId)
    modal.setActiveCreate(false);
}

  if (!modal.isActiveCreate) return null;

  return (
    <Modal 
      active={modal.isActiveCreate} 
      setActive={modal.setActiveCreate} 
      header={'Добавить направление'}
    >
      <TextField
        label="Направление"
        placeholder="Мастер слесарных работ"
        onChange={(e) => modal.setName(e.target.value)}
      />
      <TextField
        label="ФГОС"
        placeholder="52.02.01"
        onChange={(e) => modal.setCode(e.target.value)}
      />

      <Button
        onClick={addDirection}
      >
        Добавить
        <PlusIcon/>
      </Button>
    </Modal>
  );
});

export default ModalCreate;
