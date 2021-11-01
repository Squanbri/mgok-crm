import React, {useContext, useState} from 'react';
import {Switch, TableCell, TableRow} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ModalUpdate from "./ModalUpdate";

const Direction = observer(({direction}) => {
    const {store, modal} = useContext(Context)
    const [active, setActive] = useState(false)

    const changeSwitch = (e) => {
        e.stopPropagation()

        const id = direction.id
        const name = direction.name
        const code = direction.code
        const active = !direction.active
        store.directions.updateDirection(id, name, code, active)
    }

    const showModal = (e) => {
        e.stopPropagation()

        setActive(true)
        modal.setId(direction.id)
        modal.setName(direction.name)
        modal.setCode(direction.code)
        modal.setActive(direction.active)
    }

    const deleteDirection = (e) => {
        e.stopPropagation()

        store.directions.deleteDirection(direction.id)
    }

    return (
        <>
            {active &&
                <ModalUpdate active={active} setActive={setActive}/>
            }

            <TableRow
                sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
            >
                <TableCell align="center">{direction.id}</TableCell>
                <TableCell align="left">{direction.name}</TableCell>
                <TableCell align="right">{direction.code}</TableCell>
                <TableCell align="center">
                    <Switch
                        checked={!!direction.active}
                        onClick={changeSwitch}
                        color="secondary"
                    />
                </TableCell>
                <TableCell align="center">
                    <EditIcon
                        onClick={showModal}
                        className="edit-icon"
                    />
                </TableCell>
                <TableCell align="center">
                    <DeleteIcon
                        color="error"
                        className="delete-icon"
                        onClick={deleteDirection}
                    />
                </TableCell>
            </TableRow>
        </>
    );
});

export default Direction;