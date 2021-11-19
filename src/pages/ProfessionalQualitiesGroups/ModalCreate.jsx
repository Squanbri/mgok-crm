import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextArea from "../../UI/TextArea";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg';

const ModalCreate = observer(({id}) => {
  const { store, modal } = useContext(Context);

  const addGroup = () => {
    const directionId = id
    const name = modal.name
    store.groups.addGroup(name, directionId);
    modal.setActiveCreate(false);
  };

  if (!modal.isActiveCreate) return null;

  return (
    <Modal 
      active={modal.isActiveCreate} 
      setActive={modal.setActiveCreate} 
      header={'Добавить наименование профессиональной группы'}
    >
      <TextArea
        placeholder="Изготовление деталей средней сложности типа тел вращения с точностью размеров до 10, 11 квалитета на токарно-карусельных станках с диаметром планшайбы до 4000 мм..."
        onChange={(e) => modal.setName(e.target.value)}
      />

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
