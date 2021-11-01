import React, {useContext, useState} from 'react';
import Modal from "../../components/Modal";
import {TextField, Button, Typography} from "@mui/material";
import {Context} from "../../index";
import {useParams} from "react-router-dom";

const ModalCreate = ({active, setActive}) => {
    const {id} = useParams();
    const {store} = useContext(Context)
    const [name, setName] = useState('')
    const [code, setCode] = useState('')

    const addDirection = () => {
        setActive(false)
        store.directions.addDirection(name, code, id)
    }

    return (
        <Modal active={active} setActive={setActive}>
            <Typography
                variant="h4"
                component="span"
                sx={{mb: '30px'}}
            >
                Добавить квалификацию
            </Typography>

            <TextField
                label="Например: Токарь-универсал"
                variant="outlined"
                sx={{mb: '15px'}}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Например: 151902.04"
                variant="outlined"
                sx={{mb: '30px'}}
                onChange={(e) => setCode(e.target.value)}
            />

            <Button
                variant="contained"
                color="success"
                onClick={() => addDirection()}
                sx={{width: 'fit-content'}}
            >
                Добавить
            </Button>
        </Modal>
    );
};

export default ModalCreate;