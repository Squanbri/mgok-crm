import React, { useContext } from "react";
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
  const { id } = useParams();
  const { store } = useContext(Context);
  const speciality = store.specialities.speciality;
  const name = speciality?.name || 'Квалификации'

  useFetch(async () => {
    await store.specialities.fetchSpeciality(id);
    await store.directions.fetchDirections(id);
  })

  return (
    <section>
      <Breadcrumbs links={[
        {name: 'Специальности', path: '/'},
        {name: name, path: '/', active: true},
      ]}/>

      <ModalCreate />
      <PageHead>
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
