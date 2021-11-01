import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow sx={{ backgroundColor: '#f7f8fc' }}>
                <TableCell align="center" sx={{width: '10%'}}>ID</TableCell>
                <TableCell align="left" sx={{width: '60%'}}>Предметы</TableCell>
                <TableCell align="right" sx={{width: '15%'}}>Код предмета</TableCell>
                <TableCell align="right"  sx={{width: '15%'}}></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;