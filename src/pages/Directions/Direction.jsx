import React, {useContext} from 'react';
import {Switch, TableCell, TableRow} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Direction = observer(({direction}) => {
    const {store} = useContext(Context)

    const changeSwitch = (e) => {
        e.stopPropagation()

        direction.setActive(!direction.is_active)
    }

    const deleteDirection = (e) => {
        e.stopPropagation()

        store.deleteDirection(direction.id)
    }

    return (
        <TableRow
            sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
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
                <DeleteIcon
                    color="error"
                    onClick={deleteDirection}
                />
            </TableCell>
        </TableRow>
    );
});

export default Direction;