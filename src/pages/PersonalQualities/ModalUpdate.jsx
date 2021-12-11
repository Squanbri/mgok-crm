import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import Modal from "../../UI/Modal";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';
import ModalTable from "./ModalTable";

const ModalCreate = observer(({quality, show, setShow}) => {
  const { store } = useContext(Context);

  const closeModal = () => {
    setShow(false);
    formik.resetForm()
  }

  useFetch(async () => {
    await store.subjects.fetchSubjects();
  })
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: quality.name,
      subjects: store.subjects.list.map(subject => ({
        id: subject.id, 
        name: subject.name,
        active: quality.subjectsList.find(qualitySubject => qualitySubject.id === subject.id) && true,
        hours: quality.subjectsList.find(qualitySubject => qualitySubject.id === subject.id)?.hours ?? 0,
      }))
    },
    onSubmit: values => {
      const name = values.name
      const subjects = values.subjects.filter(subject => subject.active)
          .map(subject => ({
            id: subject.id,
            number_of_hours: subject.hours
          }))

      store.personalsQualities.addQuality(name, subjects);
      setShow(false);
      formik.resetForm()
    }
  })

  const isSubjectsHasActive = formik.values.subjects.reduce((acc, subject) => acc + 0 || subject.active, 0) > 0
  
  return (
    <Modal 
      active={show} 
      setActive={closeModal} 
      header={'Изменить личностное качество'}
    > 
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Личностное качество"
          placeholder="Аналитическое мышление"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="formik-validation">{formik.errors.name}</div>
        ) : null}

        <span className="select__title personal-quality__title">Выбор предмета</span><br/>
        <div className="qialities__subject-wrapper">

          {formik.values.subjects?.map(subject => 
            <div className="qualities__subject-item" key={subject.id}>
              <input 
                type="checkbox" 
                id={`subjects[${subject.id - 1}].active`}
                name={`subjects[${subject.id - 1}].active`}
                onChange={formik.handleChange}
                defaultChecked={formik.values.subjects[subject.id - 1]?.active ?? false}
              />
              <label 
                htmlFor={`subjects[${subject.id - 1}].active`}
              >
                {subject.name}
              </label>
            </div>
          )}
        </div>
        {console.log()}

        {isSubjectsHasActive && <ModalTable formik={formik} />}

        <Button>
          Добавить
          <PlusIcon/>
        </Button>
      </form>
    </Modal>
  );
});

export default ModalCreate;
