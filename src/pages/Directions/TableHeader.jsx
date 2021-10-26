import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow sx={{ backgroundColor: '#f7f8fc' }}>
                <TableCell align="center" sx={{width: '12%'}}>ID</TableCell>
                <TableCell align="left" sx={{width: '60%'}}>Наименование квалификаций</TableCell>
                <TableCell align="right" sx={{width: '10%'}}>ФГОС</TableCell>
                <TableCell align="right"  sx={{width: '8%'}}></TableCell>
                <TableCell align="right"  sx={{width: '5%'}}></TableCell>
                <TableCell align="right"  sx={{width: '5%'}}></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;