import React, {useContext, useState} from 'react';
import {Switch, TableCell, TableRow} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {Context} from "../../index";
import ModalUpdate from "./ModalUpdate";

const Speciality = observer(({spec}) => {
    const {store, modal} = useContext(Context)
    const [active, setActive] = useState(false)
    const history = useHistory()

    const linkTo = () => {
        history.push(`/directions/${spec.id}`)
    }

    const changeSwitch = (e) => {
        e.stopPropagation()

        const id = spec.id
        const name = spec.name
        const code = spec.code
        const active = !spec.active
        store.specialities.updateSpeciality(id, name, code, active)
    }

    const showModal = (e) => {
        e.stopPropagation()

        setActive(true)
        modal.setId(spec.id)
        modal.setName(spec.name)
        modal.setCode(spec.code)
        modal.setActive(spec.active)
    }

    const deleteSpeciality = (e) => {
        e.stopPropagation()

        store.specialities.deleteSpeciality(spec.id)
    }

    return (
        <>
            {active &&
                <ModalUpdate active={active} setActive={setActive}/>
            }

            <TableRow
                sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
                onClick={linkTo}
            >
                <TableCell align="center">{spec.id}</TableCell>
                <TableCell align="left">{spec.name}</TableCell>
                <TableCell align="right">{spec.code}</TableCell>
                <TableCell align="center">
                    <Switch
                        checked={!!spec.active}
                        onClick={changeSwitch}
                        color="secondary"
                    />
                </TableCell>
                <TableCell align="center">
                    <EditIcon
                        className="edit-icon"
                        onClick={showModal}
                    />
                </TableCell>
                <TableCell align="center">
                    <DeleteIcon
                        color="error"
                        className="delete-icon"
                        onClick={deleteSpeciality}
                    />
                </TableCell>
            </TableRow>
        </>
    );
});

export default Speciality;