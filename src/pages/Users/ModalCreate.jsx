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

  const addUser = () => {
    const firstName = modal.firstName;
    const lastName = modal.lastName;
    const position = modal.position;
    const phone = modal.phone;
    const email = modal.email;
    const password = modal.password;
    store.users.addUser(firstName, lastName, position, phone, email, password);
    modal.setActiveCreate(false);
  };

  return (
    <Modal
      active={modal.isActiveCreate}
      setActive={modal.setActiveCreate}
      header={"Добавить специальность"}
    >
      <TextField
        label="Имя"
        placeholder="Иван"
        onChange={(e) => modal.setFirstName(e.target.value)}
      />
      <TextField
        label="Фамилия"
        placeholder="Иванов"
        onChange={(e) => modal.setLastName(e.target.value)}
      />
      <TextField
        label="Должность"
        placeholder="ГК Траст"
        onChange={(e) => modal.setPosition(e.target.value)}
      />
      <TextField
        label="Номер телефона"
        placeholder="+7 (999)-999-99-99"
        onChange={(e) => modal.setPhone(e.target.value)}
      />
      <TextField
        label="E-mail"
        placeholder="Имя ящика"
        onChange={(e) => modal.setEmail(e.target.value)}
      />
      <TextField
        label="Пароль"
        placeholder="*******"
        onChange={(e) => modal.setPassword(e.target.value)}
      />

      <Button onClick={addUser}>
        Добавить
        <PlusIcon />
      </Button>
    </Modal>
  );
});

export default ModalCreate;
