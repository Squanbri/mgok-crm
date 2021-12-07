import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({id}) => {
  const { store, modal } = useContext(Context);

  const addProfessional = () => {
    const groupId = id
    const name = modal.name
    const hours = modal.hours
    store.professionals.addProfessional(name, hours, groupId);
    modal.setActiveCreate(false);
  };

  if (!modal.isActiveCreate) return null;

  return (
    <Modal 
      active={modal.isActiveCreate} 
      setActive={modal.setActiveCreate} 
      header={'Добавить профессиональное качество'}
    >
      <TextField
        label="Качество"
        placeholder="Например: Система допусков и посадок"
        onChange={(e) => modal.setName(e.target.value)}
      />

      <TextField
        label="Количество часов"
        placeholder="Например: 36 ч."
        onChange={(e) => modal.setHours(e.target.value)}
      />

      <Button
        onClick={addProfessional}
      >
        Добавить
        <PlusIcon/>
      </Button>
    </Modal>
  );
});

export default ModalCreate;
