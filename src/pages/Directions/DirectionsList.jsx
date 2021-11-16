import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Direction from "./Direction";
import Loader from "../../UI/Loader";

const DirectionsList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.directions

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
        ? <div className="not-found">Квалификации не найдены</div>
        : 
          list.map(direction => (
            <Direction direction={direction}  key={direction.id} />
          ))
      }
    </>
  )
})

export default DirectionsList;