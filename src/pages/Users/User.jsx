import React from 'react';
import {TableCell, TableRow} from "@mui/material";

const User = ({user}) => {

    return (
        <TableRow
            sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
        >
            <TableCell align="center">{user.id}</TableCell>
            <TableCell align="left">{user.firstName}{user.lastName}</TableCell>
            <TableCell align="center">{user.phone}</TableCell>
            <TableCell align="center">{user.position}</TableCell>
        </TableRow>
    );
};

export default User;