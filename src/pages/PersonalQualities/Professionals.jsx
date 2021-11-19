import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import ModalCreate from "./ModalCreate";
import ProfessionalsList from "./ProfessionalsList";
import Breadcrumbs from "../../components/Breadcrumbs";

const Professionals = observer(() => {
  const { specId, dirId, groupId } = useParams();
  const { store } = useContext(Context);
  const speciality = store.specialities.speciality;
  const direction = store.directions.direction;
  const group = store.groups.group;
  const name = group?.name || 'Профессиональное качество'

  useFetch(async () => {
    await store.specialities.fetchSpeciality(specId);
    await store.directions.fetchDirection(dirId);
    await store.groups.fetchGroup(groupId);
    await store.professionals.fetchProfessionals(groupId)
  })

  return (
    <section>
      <Breadcrumbs links={[
        {name: 'Специальности', path: '/'},
        {name: speciality?.name, path: `/speciality/${speciality?.id}`},
        {name: direction?.name, path: `/speciality/${speciality?.id}/direction/${direction?.id}`},
        {name: name, path: '/', active: true},
      ]}/>
      <ModalCreate id={groupId}/>
      <PageHead>
        <h3 className="text-header">{name}</h3>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader />
        </div>
        <div className="table__body">
          <ProfessionalsList />
        </div>
      </div>

    </section>
  );
});

export default Professionals;
