import React from 'react';
import {useHistory} from "react-router-dom";
import {Switch, TableCell, TableRow} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {observer} from "mobx-react-lite";

const Direction = observer(({direction}) => {
    const changeSwitch = (e) => {
        e.stopPropagation()

        direction.setActive(!direction.is_active)
    }
    console.log(direction)
    return (
        <TableRow
            sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
            data-id={direction.id}
        >
            <TableCell align="center">{direction.id}</TableCell>
            <TableCell align="left">{direction.name}</TableCell>
            <TableCell align="right">{direction.code}</TableCell>
            <TableCell align="center">
                <Switch
                    checked={!!direction.is_active}
                    onClick={changeSwitch}
                    color="secondary"
                />
            </TableCell>
            <TableCell align="center">
                <EditIcon/>
            </TableCell>
            <TableCell align="center">
                <DeleteIcon color="error"/>
            </TableCell>
        </TableRow>
    );
});

export default Direction;