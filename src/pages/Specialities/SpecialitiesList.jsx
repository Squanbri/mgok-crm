import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Speciality from "./Speciality";
import Loader from "../../UI/Loader";

const SpecialitiesList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.specialities

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
        ? <div className="not-found">Специальности не найдены</div>
        : 
          list.map(spec => (
            <Speciality spec={spec}  key={spec.id} />
          ))
      }
    </>
  )
})

export default SpecialitiesList;