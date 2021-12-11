import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import ModalTable from "./ModalTable";

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
      independentWorkHours: subject.independentWorkHours,
      theoreticalLearningHours: subject.theoreticalLearningHours,
      laboratoryWorkHours: subject.laboratoryWorkHours,
      courseWorksHours: subject.courseWorksHours,
      minimalHours: subject.minimalHours,
      practiceHours: subject.practiceHours,
      certificationHours: subject.certificationHours,
      certificationType: subject.certificationType,
    },
    onSubmit: values => {
      store.professionalSubjects.addSubject(
        subject.id,
        parseInt(values.subject),
        parseInt(values.independentWorkHours),
        parseInt(values.theoreticalLearningHours),
        parseInt(values.laboratoryWorkHours),
        parseInt(values.courseWorksHours),
        parseInt(values.minimalHours),
        parseInt(values.practiceHours),
        parseInt(values.certificationHours),
        values.certificationType
      );
      setShow(false);
      formik.resetForm()
    }
  })

  if (!show) return null;

  return (
    <Modal
      active={show}
      setActive={closeModal}
      header={"Изменить квалификацию"}
    >
      <form onSubmit={formik.handleSubmit}>
        <span className="select__title">{subject.name}</span><br/>

        <ModalTable formik={formik} />

        <Button>
          Изменить
          <UpdateIcon className="modal-update__icon" />
        </Button>
      </form>
    </Modal>
  );
});

export default ModalUpdate;