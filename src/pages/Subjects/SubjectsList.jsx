import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Subject from "./Subject";
import Loader from "../../UI/Loader";

const SpecialitiesList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.subjects

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
        ? <div className="not-found">Предметы не найдены</div>
        : 
          list.map(subject => (
            <Subject subject={subject}  key={subject.id} />
          ))
      }
    </>
  )
})

export default SpecialitiesList;