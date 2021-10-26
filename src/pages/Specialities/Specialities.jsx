import React, {useContext} from 'react';
import "../../styles/tables.css";
import {Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import TableHeader from "./TableHeader";
import Speciality from "./Speciality";
import SpecialitiesHead from "./SpecialitiesHead";

const Specialities = observer(() => {
    const {store} = useContext(Context)

    return (
        <section>
            <SpecialitiesHead/>

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