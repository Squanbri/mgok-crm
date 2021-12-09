import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import '../../styles/modalupdate.css'

const ModalUpdate = observer(({ direction, show, setShow }) => {
  const { store } = useContext(Context);

  
  const formik = useFormik({
    initialValues: {
      name: direction.name,
      code: direction.code,
    },
    onSubmit: values => {
      const id = direction.id
      const name = values.name
      const code = values.code
      const active = direction.active
      store.directions.updateDirection(id, name, code, active);
      setShow(false);
    }
  })

  if (!show) return null;

  return (
    <Modal
      active={show}
      setActive={setShow}
      header={"Изменить квалификацию"}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Квалификация"
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
          Изменить
          <UpdateIcon className="modal-update__icon" />
        </Button>
      </form>
    </Modal>
  );
});

export default ModalUpdate;
