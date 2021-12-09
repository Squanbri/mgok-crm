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

const ModalCreate = observer(({show, setShow}) => {
  const { store } = useContext(Context);

  useFetch(async () => {
    await store.subjects.fetchSubjects();
  })
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      subjects: store.subjects.list.map(subject => ({
        id: subject.id, 
        name: subject.name
      }))
    },
    onSubmit: values => {
      console.log(values)
      // setShow(false);
    }
  })

  if (!show) return null;
 
  return (
    <Modal 
      active={show} 
      setActive={setShow} 
      header={'Добавить личностное качество'}
    > 
      <form onSubmit={formik.handleSubmit}>
        <span className="select__title">Выбор предмета</span><br/>
        <div className="qialities__subject-wrapper">
          {formik.values.subjects?.map(subject => 
            <div className="qialities__subject-item" key={subject.id}>
              <input 
                type="checkbox" 
                id={`subjects[${subject.id}].active`}
                name={`subjects[${subject.id}].active`}
                value={formik.values.independentWorkHours}
                onChange={formik.handleChange}
              />
              <label 
                htmlFor={`subjects[${subject.id}].active`}
              >
                {subject.name}
              </label>
            </div>
          )}
        </div>

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
