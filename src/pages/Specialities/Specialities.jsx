import React, {useContext, useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {observer} from "mobx-react-lite";

import "../../styles/tables.css";
import {Context} from "../../index";
import Speciality from "./Speciality";
import SpecialitiesHead from "./SpecialitiesHead";
import ModalCreate from "./ModalCreate";
import Loader from "../../components/Loader";
import TableHeader from "./TableHeader";

const Specialities = observer(() => {
    const {store} = useContext(Context)
    const [active, setActive] = useState(false)
    const specialities = store.specialities
    const isLoading = store.specialities.isLoading

    useEffect(async () => {
        await specialities.fetchSpecialities()
        store.specialities.isLoading = false
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
            <SpecialitiesHead setActive={setActive}/>
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
                            {specialities.list.map(spec => (
                                <Speciality spec={spec}  key={spec.id} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
});

export default Specialities;