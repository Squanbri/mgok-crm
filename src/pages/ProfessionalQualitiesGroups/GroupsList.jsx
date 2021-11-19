import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Group from "./Group";
import Loader from "../../UI/Loader";

const GroupsList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.groups
  
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
          list.map(group => (
            <Group group={group}  key={group.id} />
          ))
      }
    </>
  )
})

export default GroupsList;