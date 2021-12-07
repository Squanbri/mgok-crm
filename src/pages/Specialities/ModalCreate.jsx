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
      name: '',
      code: ''
    },
    onSubmit: values => {
      const name = values.name
      const code = values.code
      store.specialities.addSpeciality(name, code);
      setShow(false);
    }
  })
  return (
    <Modal 
      active={show} 
      setActive={setShow} 
      header={'Добавить специальность'}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Специальность"
          placeholder="Мастер слесарных работ"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <TextField
          id="code"
          name="code"
          label="ФГОС"
          placeholder="52.02.01"
          value={formik.values.code}
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
