import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Quality from "./Quality";
import Loader from "../../UI/Loader";

const SkillsList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.personalsQualities

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
          list.map(quality => 
            <Quality quality={quality}  key={quality.id} />
          )
      }
    </>
  )
})

export default SkillsList;