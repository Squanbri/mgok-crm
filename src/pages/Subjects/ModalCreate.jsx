import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({ active, setActive }) => {
  const { store, modal } = useContext(Context);

  const addSubject = () => {
    const name = modal.name
    const code = modal.code
    store.subjects.addSubject(name, code);
    modal.setActiveCreate(false);
  };

  return (
    <Modal 
      active={modal.isActiveCreate} 
      setActive={modal.setActiveCreate} 
      header={'Добавить предмет'}
    >
      <TextField
        label="Предмет"
        placeholder="Химия"
        onChange={(e) => modal.setName(e.target.value)}
      />
      <TextField
        label="ФГОС"
        placeholder="52.02.01"
        onChange={(e) => modal.setCode(e.target.value)}
      />

      <Button
        onClick={addSubject}
      >
        Добавить
        <PlusIcon/>
      </Button>
    </Modal>
  );
});

export default ModalCreate;
