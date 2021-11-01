import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow sx={{ backgroundColor: '#f7f8fc' }}>
                <TableCell align="center" sx={{width: '10%'}}>ID</TableCell>
                <TableCell align="left" sx={{width: '30%'}}>Имя Фамилия</TableCell>
                <TableCell align="center" sx={{width: '30%'}}>Номер телефона</TableCell>
                <TableCell align="center"  sx={{width: '30%'}}>Должность</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;