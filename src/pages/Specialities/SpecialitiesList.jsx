import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Speciality from "./Speciality";
import Loader from "../../components/Loader";

const SpecialitiesList = observer(() => {
  const { store } = useContext(Context)
  const isLoading = store.specialities.isLoading
  const isEmpty = store.specialities.isEmpty
  const list = store.specialities.list

  if (isLoading) {
    return (
        <>
            <Loader/>
        </>
    )
  }

  return (
    <>
      {isEmpty 
        ? <div>Нет специальностей</div>
        : 
          list.map(spec => (
            <Speciality spec={spec}  key={spec.id} />
          ))
      }
    </>
  )
})

export default SpecialitiesList;