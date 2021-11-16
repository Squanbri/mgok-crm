import React, { useContext } from "react";
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
    const subjects = store.subjects

    useFetch(async () => {
    await subjects.fetchSubjects()
    })

    return (
        <section>
          <ModalCreate/>
          <PageHead>
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