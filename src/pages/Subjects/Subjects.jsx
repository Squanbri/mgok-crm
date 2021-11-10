import React, {useContext, useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import Loader from "../../components/Loader";
import ModalCreate from "../Subjects/ModalCreate";
import TableHeader from "./TableHeader";
import Subject from "./Subject";
import SubjectsHead from "./SubjectsHead";
import "../../styles/subjects.css";

const Subjects = observer(() => {
    const {store} = useContext(Context)
    const [active, setActive] = useState(false)
    const subjects = store.subjects
    const isLoading = store.subjects.isLoading

    useEffect(() => {
        const fetchData = async () => {
            await subjects.fetchSubjects()
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
            <SubjectsHead setActive={setActive}/>
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
                            {subjects.list.map(subject => (
                                <Subject subject={subject}  key={subject.id} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
});

export default Subjects;