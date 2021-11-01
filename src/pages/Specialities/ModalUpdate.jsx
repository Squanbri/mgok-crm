import React, {useContext} from 'react';
import Modal from "../../components/Modal";
import {Button, TextField, Typography} from "@mui/material";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const ModalUpdate = observer(({active, setActive}) => {
    const {store, modal} = useContext(Context)

    const updateSpeciality = () => {
        const id = modal.id
        const name = modal.name
        const code = modal.code
        const active = modal.active
        store.specialities.updateSpeciality(id, name, code, active)
        setActive(false)
    }

    return (
        <Modal active={active} setActive={setActive}>
            <Typography
                variant="h4"
                component="span"
                sx={{mb: '30px'}}
            >
                Изменить специальность
            </Typography>

            <TextField
                id="outlined-basic"
                label="Например: Искусство балета"
                variant="outlined"
                sx={{mb: '15px'}}
                value={modal.name}
                onChange={(e) => modal.setName(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Например: 52.02.01"
                variant="outlined"
                sx={{mb: '30px'}}
                value={modal.code}
                onChange={(e) => modal.setCode(e.target.value)}
            />

            <Button
                variant="contained"
                color="success"
                onClick={() => updateSpeciality()}
                sx={{width: 'fit-content'}}
            >
                Изменить
            </Button>
        </Modal>
    );
});

export default ModalUpdate;