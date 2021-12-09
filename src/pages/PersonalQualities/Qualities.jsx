import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import ModalCreate from "./ModalCreate";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import QualitiesList from "./QualitiesList";

import "../../styles/table.css";
import "../../styles/specialitiesTable.css";

const PersonalQualities = observer(() => {
  const { store } = useContext(Context);
  const [modalActive, setModalActive] = useState(true);

  useFetch(async () => {
    await store.personalsQualities.fetchQualities()
  })

  return (
    <section>
      <ModalCreate show={modalActive} setShow={setModalActive} />

      <PageHead setModalActive={setModalActive}>
        <h3 className="text-header">Личностные качества</h3>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader />
        </div>
        <div className="table__body">
          <QualitiesList />
        </div>
      </div>
    </section>
  );
});

export default PersonalQualities;