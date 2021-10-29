import React, {useContext, useState} from 'react';
import "../../styles/tables.css";
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import TableHeader from "./TableHeader";
import Speciality from "./Speciality";
import SpecialitiesHead from "./SpecialitiesHead";
import ModalAdd from "./ModalAdd";

const Specialities = observer(() => {
    const {store} = useContext(Context)
    const [active, setActive] = useState(false)

    return (
        <section>
            <SpecialitiesHead setActive={setActive}/>
            <ModalAdd active={active} setActive={setActive} />

            <div className="speciality-body">
                <TableContainer
                    className="speciality-table"
                    component={Paper}
                    sx={{boxShadow: 0}}
                >
                    <Table>
                        <TableHeader/>

                        <TableBody>
                            {store.specialities.map(spec => (
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