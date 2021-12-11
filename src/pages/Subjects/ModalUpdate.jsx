import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import '../../styles/modalupdate.css'

const ModalUpdate = observer(({ subject, show, setShow }) => {
  const { store } = useContext(Context);

  const closeModal = () => {
    setShow();
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: subject.name,
      code: subject.code,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required('Название предмета обязательно для заполнения'),
      code: Yup.string()
        .trim()
        .required('ФГОС код обязателен для заполнения'),
    }),
    onSubmit: values => {
      const id = subject.id
      const name = values.name
      const code = values.code
      const active = subject.active
      store.subjects.updateSubject(id, name, code, active)
      setShow(false);
      formik.resetForm()
    }
  })

  return (
    <Modal 
      active={show} 
      setActive={closeModal} 
      header={"Изменить предмет"}
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
        {formik.touched.name && formik.errors.name ? (
          <div className="formik-validation">{formik.errors.name}</div>
        ) : null}

        <TextField
          id="code"
          name="code"
          label="ФГОС"
          placeholder="52.02.01"
          value={formik.values.code}
          onChange={formik.handleChange}
        />
        {formik.touched.code && formik.errors.code ? (
          <div className="formik-validation">{formik.errors.code}</div>
        ) : null}

        <Button>
          Изменить
          <UpdateIcon className='modal-update__icon'/>
        </Button>
      </form>
    </Modal>
  );
});

export default ModalUpdate;
