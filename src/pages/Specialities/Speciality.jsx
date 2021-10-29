import React, {useContext} from 'react';
import {Switch, TableCell, TableRow} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {Context} from "../../index";

const Speciality = observer(({spec}) => {
    const {store} = useContext(Context)
    const history = useHistory()

    const linkTo = () => {
        history.push(`/directions/${spec.id}`)
    }

    const changeSwitch = (e) => {
        e.stopPropagation()

        spec.setActive(!spec.isActive)
    }

    const deleteSpeciality = (e) => {
        e.stopPropagation()

        store.deleteSpeciality(spec.id)
    }

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
                    checked={!!spec.isActive}
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
                    onClick={deleteSpeciality}
                />
            </TableCell>
        </TableRow>
    );
});

export default Speciality;