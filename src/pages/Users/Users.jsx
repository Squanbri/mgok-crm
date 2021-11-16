import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import useFetch from "../../hooks/useFetch";
import ModalCreate from "./ModalCreate";
import PageHead from "../../components/PageHead";
import TableHeader from "./TableHeader";
import UsersList from "./UsersList";
import "../../styles/table.css";

const Users = observer(() => {
  const { store } = useContext(Context);
  const users = store.users;

  useFetch(async () => {
    await users.fetchUsers();
  });

  return (
    <section>
      <ModalCreate/>
      <PageHead>
        <h3 className="text-header">Пользователи</h3>
      </PageHead>

      <div className="table">
        <div className="table__head">
          <TableHeader/>
        </div>
        <div className="table__body">
          <UsersList/>
        </div>
      </div>
    </section>
  );
});

export default Users;
