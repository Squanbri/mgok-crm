import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import ModalCreate from "./ModalCreate";
import DirectionsList from "./DirectionsList";
import Breadcrumbs from "../../components/Breadcrumbs";

const Directions = observer(() => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const [modalActive, setModalActive] = useState(false);
  const speciality = store.specialities.speciality;
  const name = speciality?.name || 'Квалификации'

  useFetch(async () => {
    store.directions.setLoading(true);
    await store.specialities.fetchSpeciality(id);
    await store.directions.fetchDirections(id);
  })

  return (
    <section>
      <Breadcrumbs links={[
        {name: 'Специальности', path: '/'},
        {name: name, path: '/', active: true},
      ]}/>

      <ModalCreate id={id} show={modalActive} setShow={setModalActive} />

      <PageHead setModalActive={setModalActive}>
        <h3 className="text-header">{name}</h3>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader />
        </div>
        <div className="table__body">
          <DirectionsList />
        </div>
      </div>

    </section>
  );
});

export default Directions;
