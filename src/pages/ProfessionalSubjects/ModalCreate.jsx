import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';
import ModalTable from "./ModalTable";

const ModalCreate = observer(({id, show, setShow}) => {
  const { store } = useContext(Context);

  useFetch(async () => {
    await store.subjects.fetchSubjects();
  })

  const formik = useFormik({
    initialValues: {
      subject: 0,
      independentWorkHours: '',
      theoreticalLearningHours: '',
      laboratoryWorkHours: '',
      courseWorksHours: '',
      minimalHours: '',
      practiceHours: '',
      certificationHours: '',
      certificationType: 'Зачет',
    },
    onSubmit: values => {
      store.professionalSubjects.addSubject(
        id,
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
    }
  })

  if (!show) return null;

  return (
    <Modal 
      active={show} 
      setActive={setShow} 
      header={'Добавить предмет'}
    > 
      <form onSubmit={formik.handleSubmit}>
        <span className="select__title">Предмет</span><br/>
        <select 
          id="subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
        >
          {store.subjects.list.map(subject => 
            <option value={subject.id} key={subject.id}>
              {subject.name}
            </option>
          )}
        </select>

        <ModalTable formik={formik} />

        <Button>
          Добавить
          <PlusIcon/>
        </Button>
      </form>
    </Modal>
  );
});

export default ModalCreate;
