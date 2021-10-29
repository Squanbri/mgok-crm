import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

import DirectionsHead from "./DirectionsHead";
import TableHeader from "../Specialities/TableHeader";
import ModalAdd from "./ModalAdd";
import Direction from "./Direction";

const Directions = observer(() => {
    const {id} = useParams();
    const {store} = useContext(Context)
    const [active, setActive] = useState(false)

    useEffect(() => {
        store.fetchDirections(id)
        store.fetchSpeciality(id)
    }, [])

    return (
        <section>
            <DirectionsHead setActive={setActive}/>
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
                            {store.directions.map(direction => (
                                <Direction direction={direction}  key={direction.id} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
});

export default Directions;