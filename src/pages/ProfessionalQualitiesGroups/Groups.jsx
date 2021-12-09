import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import ModalCreate from "./ModalCreate";
import GroupsList from "./GroupsList";
import Breadcrumbs from "../../components/Breadcrumbs";

const Groups = observer(() => {
  const { specId, dirId } = useParams();
  const { store } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const speciality = store.specialities.speciality;
  const direction = store.directions.direction;
  const name = direction?.name || 'Профессиональные группы'

  useFetch(async () => {
    store.groups.setLoading(true)
    await store.specialities.fetchSpeciality(specId);
    await store.directions.fetchDirection(dirId);
    await store.groups.fetchGroups(dirId);
  })

  return (
    <section>
      <Breadcrumbs links={[
        {name: 'Специальности', path: '/'},
        {name: speciality?.name, path: `/speciality/${speciality?.id}`},
        {name: name, path: '/', active: true},
      ]}/>

      <ModalCreate id={dirId} show={modalActive} setShow={setModalActive}/>

      <PageHead setModalActive={setModalActive}>
        <h3 className="text-header">{name}</h3>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader />
        </div>
        <div className="table__body">
          <GroupsList />
        </div>
      </div>

    </section>
  );
});

export default Groups;
