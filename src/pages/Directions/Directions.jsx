import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import TableHeader from "../Specialities/TableHeader";
import DirectionsHead from "./DirectionsHead";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Direction from "./Direction";

const Directions = observer(() => {
    const {id} = useParams();
    const {store} = useContext(Context)

    useEffect(() => {
        store.fetchDirections(id)
    }, [])

    return (
        <section>
            <DirectionsHead/>

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