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
      code: ''
    },
    onSubmit: values => {
      const specialityId = id
      const name = values.name
      const code = values.code
      store.directions.addDirection(name, code, specialityId);
      setShow(false);
    }
  })

  if (!show) return null;

  return (
    <Modal 
      active={show} 
      setActive={setShow} 
      header={'Добавить направление'}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Направление"
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
