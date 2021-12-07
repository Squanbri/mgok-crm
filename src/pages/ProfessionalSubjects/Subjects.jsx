import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import ModalCreate from "./ModalCreate";
import SubjectsList from "./SubjectsList";
import Breadcrumbs from "../../components/Breadcrumbs";

const ProfessionalSubjects = observer(() => {
  const { specId, dirId, groupId, profId } = useParams();
  const { store } = useContext(Context);

  const speciality = store.specialities.speciality;
  const direction = store.directions.direction;
  const group = store.groups.group;
  const professional = store.professionals.professional;
  const name = professional?.name || 'Предметы'

  useFetch(async () => {
    await store.specialities.fetchSpeciality(specId);
    await store.directions.fetchDirection(dirId);
    await store.groups.fetchGroup(groupId);
    await store.professionals.fetchProfessional(profId)
    await store.professionalSubjects.fetchSubjects(profId);
  })

  return (
    <section className="professional-subjects">
      <Breadcrumbs links={[
        {name: 'Специальности', path: '/'},
        {name: speciality?.name, path: `/speciality/${speciality?.id}`},
        {name: direction?.name, path: `/speciality/${speciality?.id}/direction/${direction?.id}`},
        {name: group?.name, path: `/speciality/${speciality?.id}/direction/${direction?.id}/group/${group?.id}`},
        {name: name, path: '/', active: true},
      ]}/>
      <ModalCreate id={profId}/>
      <PageHead>
        <h3 className="text-header">{name}</h3>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader />
        </div>
        <div className="table__body">
          <SubjectsList />
        </div>
      </div>

    </section>
  );
});

export default ProfessionalSubjects;
