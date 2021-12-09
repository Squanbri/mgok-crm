import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({show, setShow}) => {
  const { store } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      position: '',
      phone: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      store.users.addUser(
        values.firstName,
        values.lastName,
        values.position,
        values.phone,
        values.email,
        values.password,
      );
      setShow(false);
    }
  })

  if (!show) return null;

  return (
    <Modal
      active={show} 
      setActive={setShow} 
      header={"Добавить специальность"}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="Имя"
          placeholder="Иван"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Фамилия"
          placeholder="Иванов"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />

        <TextField
          id="position"
          name="position"
          label="Должность"
          placeholder="ГК Траст"
          value={formik.values.position}
          onChange={formik.handleChange}
        />
        
        <TextField
          id="phone"
          name="phone"
          label="Номер телефона"
          placeholder="+7 (999)-999-99-99"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />

        <TextField
          id="email"
          name="email"
          label="E-mail"
          placeholder="Имя ящика"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <TextField
          id="password"
          name="password"
          label="Пароль"
          type="password"
          placeholder=""
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <Button>
          Добавить
          <PlusIcon />
        </Button>
      </form>
    </Modal>
  );
});

export default ModalCreate;
