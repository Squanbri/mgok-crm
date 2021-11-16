import React, {useContext} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import Modal from "../../UI/Modal";

const ModalUpdate = observer(({active, setActive}) => {
    const {store, modal} = useContext(Context)

    const updateSubject = () => {
        const id = modal.id
        const name = modal.name
        const code = modal.code
        const active = modal.active
        store.subjects.updateSubject(id, name, code, active)
        setActive(false)
    }

    return (
        <Modal active={active} setActive={setActive}>
            <Typography
                variant="h4"
                component="span"
                sx={{mb: '30px'}}
            >
                Изменить предмет
            </Typography>

            <TextField
                id="outlined-basic"
                label="Название предмета"
                variant="outlined"
                sx={{mb: '15px'}}
                value={modal.name}
                onChange={(e) => modal.setName(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Код предмета"
                variant="outlined"
                sx={{mb: '30px'}}
                value={modal.code}
                onChange={(e) => modal.setCode(e.target.value)}
            />

            <Button
                variant="contained"
                color="success"
                onClick={() => updateSubject()}
                sx={{width: 'fit-content'}}
            >
                Изменить
            </Button>
        </Modal>
    );
});

export default ModalUpdate;