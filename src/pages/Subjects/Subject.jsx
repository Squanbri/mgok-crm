import EditIcon from "@mui/icons-material/Edit";
import React, {useContext, useState} from 'react';
import {TableCell, TableRow} from "@mui/material";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import ModalUpdate from "./ModalUpdate";

const Subject = observer(({subject}) => {
    const {modal} = useContext(Context)
    const [active, setActive] = useState(false)

    const showModal = (e) => {
        e.stopPropagation()

        setActive(true)
        modal.setId(subject.id)
        modal.setName(subject.name)
        modal.setCode(subject.code)
        modal.setActive(subject.active)
    }

    return (
        <>
            {active &&
                <ModalUpdate active={active} setActive={setActive}/>
            }

            <TableRow
                sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7f8fc' } }}
            >
                <TableCell align="center">{subject.id}</TableCell>
                <TableCell align="left">{subject.name}</TableCell>
                <TableCell align="right">{subject.code}</TableCell>
                <TableCell align="center">
                    <EditIcon
                        className="edit-icon"
                        onClick={showModal}
                    />
                </TableCell>
            </TableRow>
        </>
    );
});

export default Subject;