import React, {useContext, useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import Loader from "../../components/Loader";
import ModalCreate from "../Users/ModalCreate";
import TableHeader from "./TableHeader";
import UsersHead from "./UsersHead";
import User from "./User";

const Users = observer(() => {
    const {store} = useContext(Context)
    const [active, setActive] = useState(false)
    const users = store.users
    const isLoading = store.subjects.isLoading

    useEffect(() => {
        const fetchData = async () => {
            await users.fetchUsers()
            store.subjects.isLoading = false
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <>
                <Loader/>
            </>
        )
    }

    return (
        <section>
            <UsersHead setActive={setActive}/>
            <ModalCreate active={active} setActive={setActive} />

            <div className="speciality-body">
                <TableContainer
                    className="speciality-table"
                    component={Paper}
                    sx={{boxShadow: 0}}
                >
                    <Table>
                        <TableHeader/>
                        <TableBody>
                            {users.list.map(user => (
                                <User user={user}  key={user.id} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
});

export default Users;