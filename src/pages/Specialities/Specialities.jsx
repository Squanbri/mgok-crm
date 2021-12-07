import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import ModalCreate from "./ModalCreate";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import SpecialitiesList from "./SpecialitiesList";
import TextField from "../../UI/TextField";
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import "../../styles/table.css";
import "../../styles/specialitiesTable.css";

const Specialities = observer(() => {
  const { store } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);

  useFetch(async () => {
    await store.specialities.fetchSpecialities()
  })

  return (
    <section>
      <ModalCreate show={modalActive} setShow={setModalActive} />

      <PageHead setModalActive={setModalActive}>
        <h3 className="text-header">Специальность</h3>
        <TextField 
          label="Наименование"
          placeholder="Поиск специальности"
        >
          <SearchIcon/>
        </TextField>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader />
        </div>
        <div className="table__body">
          <SpecialitiesList />
        </div>
      </div>
    </section>
  );
});

export default Specialities;
