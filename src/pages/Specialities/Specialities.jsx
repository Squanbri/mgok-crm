import React, {useContext, useEffect} from 'react';
import {Paper, Table, TableBody, TableContainer, TextField} from "@mui/material";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import ModalCreate from "./ModalCreate";
import TableHeader from "./TableHeader";
import Speciality from "./Speciality";
import Loader from "../../components/Loader";
import PageHead from "../../components/PageHead";
import "../../styles/tables.css";

const Specialities = observer(() => {
    const {store} = useContext(Context)
    const specialities = store.specialities
    const isLoading = store.specialities.isLoading

    useEffect(() => {
        const fetchData = async () => {
            await specialities.fetchSpecialities()
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
            <PageHead>
                <h3 className="text-header">Специальность</h3>
                <TextField
                    className="header-content__input"
                    label="Наименование специальности"
                    variant="outlined"
                />
            </PageHead>
            <ModalCreate/>

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