import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';
import ModalTable from "./ModalTable";

const ModalCreate = observer(({id}) => {
  const { store, modal } = useContext(Context);
  const { subjects } = store

  const addGroup = () => {
    const profId = id
    const subjectId = modal.id
    const independentWorkHours = modal.independentWorkHours
    const theoreticalLearningHours = modal.theoreticalLearningHours
    const laboratoryWorkHours = modal.laboratoryWorkHours
    const courseWorksHours = modal.courseWorksHours
    const minimalHours = modal.minimalHours
    const practiceHours = modal.practiceHours
    const certificationHours = modal.certificationHours
    const certificationType = modal.certificationType
    store.professionalSubjects.addSubject(
      profId,
      subjectId,
      independentWorkHours,
      theoreticalLearningHours,
      laboratoryWorkHours,
      courseWorksHours,
      minimalHours,
      practiceHours,
      certificationHours,
      certificationType
    );
    modal.setActiveCreate(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await store.subjects.fetchSubjects();
      modal.setId(subjects.list[0]?.id)
      modal.setCertificationType('Зачет')
    }
    fetchData()
  }, [])

  if (!modal.isActiveCreate) return null;

  return (
    <Modal 
      active={modal.isActiveCreate} 
      setActive={modal.setActiveCreate} 
      header={'Добавить предмет'}
    >
      <span className="select__title">Предмет</span>
      <select 
        onChange={e => modal.setId(e.target.value)}
      >
        {subjects.list.map(subject => 
          <option value={subject.id} key={subject.id}>
            {subject.name}
          </option>
        )}
      </select>

      <ModalTable/>

      <Button
        onClick={addGroup}
      >
        Добавить
        <PlusIcon/>
      </Button>
    </Modal>
  );
});

export default ModalCreate;
