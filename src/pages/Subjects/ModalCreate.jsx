import React, {useContext, useState} from 'react';
import Modal from "../../components/Modal";
import {TextField, Button, Typography} from "@mui/material";
import {Context} from "../../index";

const ModalCreate = ({active, setActive}) => {
    const {store} = useContext(Context)
    const [name, setName] = useState('')
    const [code, setCode] = useState('')

    const addSpeciality = () => {
        setActive(false)
        store.subjects.addSubject(name, code)
    }

    return (
        <Modal active={active} setActive={setActive}>
            <Typography
                variant="h4"
                component="span"
                sx={{mb: '30px'}}
            >
                Добавить специальность
            </Typography>

            <TextField
                id="outlined-basic"
                label="Название предмета"
                variant="outlined"
                sx={{mb: '15px'}}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Код предмета"
                variant="outlined"
                sx={{mb: '30px'}}
                onChange={(e) => setCode(e.target.value)}
            />

            <Button
                variant="contained"
                color="success"
                onClick={() => addSpeciality()}
                sx={{width: 'fit-content'}}
            >
                Добавить
            </Button>
        </Modal>
    );
};

export default ModalCreate;