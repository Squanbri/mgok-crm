import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextArea from "../../UI/TextArea";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({id, show, setShow}) => {
  const { store } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: values => {
      const directionId = id
      const name = values.name
      store.groups.addGroup(name, directionId);
      setShow(false);
    }
  })

  if (!show) return null;

  return (
    <Modal 
      active={show} 
      setActive={setShow} 
      header={'Добавить наименование профессиональной группы'}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextArea
          id="name"
          name="name"
          placeholder="Изготовление деталей средней сложности типа тел вращения с точностью размеров до 10, 11 квалитета на токарно-карусельных станках с диаметром планшайбы до 4000 мм..."
          value={formik.values.name}
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
