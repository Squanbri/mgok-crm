import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Professional from "./Professional";
import Loader from "../../UI/Loader";

const ProfessionalsList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.professionals
  
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
        ? <div className="not-found">Профессиональные качества не найдены</div>
        : 
          list.map(professional => (
            <Professional professional={professional}  key={professional.id} />
          ))
      }
    </>
  )
})

export default ProfessionalsList;