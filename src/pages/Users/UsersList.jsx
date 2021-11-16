import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import User from "./User";
import Loader from "../../UI/Loader";

const UsersList = observer(() => {
  const { store } = useContext(Context)
  const { list, isLoading, isEmpty} = store.users

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
        ? <div className="not-found">Пользователи не найдены</div>
        : 
          list.map(user => (
            <User user={user}  key={user.id} />
          ))
      }
    </>
  )
})

export default UsersList;