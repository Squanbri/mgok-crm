import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextArea from "../../UI/TextArea";
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
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required('Наименование профессиональной группы обязательно для заполнения')
    }),
    onSubmit: values => {
      const directionId = id
      const name = values.name
      store.groups.addGroup(name, directionId);
      setShow(false);
      formik.resetForm()
    }
  })
  return (
    <Modal 
      active={show} 
      setActive={closeModal} 
      header={'Добавить наименование профессиональной группы'}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextArea
          id="name"
          name="name"
          label="Наименование профессиональной группы"
          placeholder="Изготовление деталей средней сложности типа тел вращения с точностью размеров до 10, 11 квалитета на токарно-карусельных станках с диаметром планшайбы до 4000 мм..."
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="formik-validation">{formik.errors.name}</div>
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
