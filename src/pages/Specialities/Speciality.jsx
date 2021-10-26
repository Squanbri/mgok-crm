import React from 'react';
import {Switch, TableCell, TableRow} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const Speciality = observer(({spec}) => {

    const history = useHistory()

    const linkTo = (e) => {
        const tr = e.target.closest('tr')
        const id = tr.dataset.id
        history.push(`/directions/${id}`)
    }

    const changeSwitch = (e) => {
        e.stopPropagation()

        spec.setActive(!spec.is_active)
    }

    console.log(spec)

    return (
        <TableRow
            sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
            onClick={linkTo}
            data-id={spec.id}
        >
            <TableCell align="center">{spec.id}</TableCell>
            <TableCell align="left">{spec.name}</TableCell>
            <TableCell align="right">{spec.code}</TableCell>
            <TableCell align="center">
                <Switch
                    checked={!!spec.is_active}
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

export default Speciality;