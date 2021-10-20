import React, {useEffect} from 'react';
import Input from "../../components/input";
import "../../styles/speciality.css";
import {Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {specialities} from "../../store/specialities";
import {observer} from "mobx-react-lite";

const Specialities = observer(() => {

    return (
        <section>
            <div className="speciality-header">
                <h3 className="text-header">Специальность</h3>
                <Input
                    placeholder="123"
                />
            </div>

            <div className="speciality-body">

                <TableContainer
                    className="speciality-table"
                    component={Paper}
                    sx={{boxShadow: 0}}
                >
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f7f8fc' }}>
                                <TableCell align="center" sx={{width: '12%'}}>ID</TableCell>
                                <TableCell align="left" sx={{width: '67%'}}>Специальность</TableCell>
                                <TableCell align="right" sx={{width: '8%'}}>ФГОС</TableCell>
                                <TableCell align="right"  sx={{width: '13%'}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {specialities.specialities.map((spec) => (
                                <TableRow
                                    key={spec.id}
                                    sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
                                >
                                    <TableCell align="center">{spec.id}</TableCell>
                                    <TableCell align="left">{spec.name}</TableCell>
                                    <TableCell align="right">{spec.fgos_code}</TableCell>
                                    <TableCell align="center">
                                        <Switch
                                            checked={!!spec.is_active}
                                            color="secondary"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
});

export default Specialities;