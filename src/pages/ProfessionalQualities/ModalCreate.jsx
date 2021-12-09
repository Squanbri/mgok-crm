import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({id, show, setShow}) => {
  const { store } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      name: '',
      hours: ''
    },
    onSubmit: values => {
      const groupId = id
      const name = values.name
      const hours = values.hours
      store.professionals.addProfessional(name, hours, groupId);
      setShow(false);
    }
  })

  if (!show) return null;

  return (
    <Modal 
      active={show} 
      setActive={setShow}  
      header={'Добавить профессиональное качество'}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Качество"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <TextField
          id="hours"
          name="hours"
          label="Количество часов"
          placeholder="Например: 36 ч."
          value={formik.values.hours}
          onChange={formik.handleChange}
        />

        <Button>
          Добавить
          <PlusIcon/>
        </Button>
      </form>
    </Modal>
  );
});

export default ModalCreate;
