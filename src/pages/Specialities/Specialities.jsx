import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import ModalCreate from "./ModalCreate";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import SpecialitiesList from "./SpecialitiesList";
import TextField2 from "../../UI/TextField";
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import "../../styles/table.css";
import "../../styles/specialitiesTable.css";

const Specialities = observer(() => {
  const { store } = useContext(Context);

  useFetch(async () => {
    await store.specialities.fetchSpecialities()
  })
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await store.specialities.fetchSpecialities();
  //   };
  //   fetchData();
    
  // }, []);

  return (
    <section>
      <ModalCreate />
      <PageHead>
        <h3 className="text-header">Специальность</h3>
        <TextField2 
          label="Наименование"
          placeholder="Поиск специальности"
        >
          <SearchIcon/>
        </TextField2>
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
