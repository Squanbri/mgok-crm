import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Modal from "../../UI/Modal";
import TextArea from "../../UI/TextArea";
import Button from "../../UI/Button";

/* assets */
import { ReactComponent as UpdateIcon } from '../../assets/icons/update.svg';
import '../../styles/modalupdate.css'

const ModalUpdate = observer(() => {
  const { store, modal } = useContext(Context);

  const updateGroup = () => {
    const id = modal.id;
    const name = modal.name;
    const active = modal.active;
    store.groups.updateGroup(name, active, id);
    modal.setActiveUpdate(false);
  };

  if (!modal.isActiveUpdate) return null;

  return (
    <Modal
      active={modal.isActiveUpdate}
      setActive={modal.setActiveUpdate}
      header={"Изменить наименование профессиональной группы"}
    >
      <TextArea
        placeholder="Изготовление деталей средней сложности типа тел вращения с точностью размеров до 10, 11 квалитета на токарно-карусельных станках с диаметром планшайбы до 4000 мм..."
        value={modal.name}
        onChange={(e) => modal.setName(e.target.value)}
      />

      <Button onClick={updateGroup}>
        Изменить
        <UpdateIcon className="modal-update__icon" />
      </Button>
    </Modal>
  );
});

export default ModalUpdate;
