import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import ModalCreate from "./ModalCreate";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import SubjectsList from "./SubjectsList";
import "../../styles/table.css";
import "../../styles/specialitiesTable.css";

const Subjects = observer(() => {
    const {store} = useContext(Context)
    const [modalActive, setModalActive] = useState(false);

    useFetch(async () => {
    await store.subjects.fetchSubjects()
    })

    return (
        <section>
          <ModalCreate show={modalActive} setShow={setModalActive} />

          <PageHead setModalActive={setModalActive}>
            <h3 className="text-header">Предметы</h3>
          </PageHead>
    
          <div className="table">
            <div className="table__head">
              <TableHeader />
            </div>
            <div className="table__body">
              <SubjectsList/>
            </div>
          </div>
        </section>
      );
});

export default Subjects;