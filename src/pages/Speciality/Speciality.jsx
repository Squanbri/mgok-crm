import React from 'react';
import Input from "../../components/input";
import "../../styles/Speciality.css";
import {Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Speciality = () => {

    const rows = [
        {id: 1, speciality: 'Сварщик (ручной и частично механизированной сварки (наплавки)', code: '15.01.05', isActive: false},
        {id: 2, speciality: 'Оператор станков с программным управлением', code: '15.01.05', isActive: true},
        {id: 3, speciality: 'Токарь на станках с числовым программным управлением', code: '15.01.05', isActive: false},
        {id: 4, speciality: 'Оператор станков с программным управлением', code: '15.01.05', isActive: false},
        {id: 5, speciality: 'Фрезеровщик на станках с числовым программным управлением', code: '15.01.05', isActive: false},
    ];

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
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
                                >
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell align="left">{row.speciality}</TableCell>
                                    <TableCell align="right">{row.code}</TableCell>
                                    <TableCell align="center">
                                        <Switch
                                            checked={row.isActive}
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
};

export default Speciality;