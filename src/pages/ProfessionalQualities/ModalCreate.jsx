import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({id, show, setShow}) => {
  const { store } = useContext(Context);

  const closeModal = () => {
    setShow();
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      hours: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required('Название специальности обязательно для заполнения'),
      hours: Yup.number().typeError('Количество часов должно быть числом')
        .required('Количество часов обязательно для заполнения'),
    }),
    onSubmit: values => {
      const groupId = id
      const name = values.name
      const hours = values.hours
      store.professionals.addProfessional(name, hours, groupId);
      setShow(false);
      formik.resetForm()
    }
  })

  if (!show) return null;

  return (
    <Modal 
      active={show} 
      setActive={closeModal}  
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
        {formik.touched.name && formik.errors.name ? (
          <div className="formik-validation">{formik.errors.name}</div>
        ) : null}

        <TextField
          id="hours"
          name="hours"
          label="Количество часов"
          placeholder="Например: 36 ч."
          value={formik.values.hours}
          onChange={formik.handleChange}
        />
        {formik.touched.hours && formik.errors.hours ? (
          <div className="formik-validation">{formik.errors.hours}</div>
        ) : null}

        <Button>
          Добавить
          <PlusIcon/>
        </Button>
      </form>
    </Modal>
  );
});

export default ModalCreate;
