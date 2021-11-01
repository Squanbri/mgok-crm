import React, {useContext, useState} from 'react';
import Modal from "../../components/Modal";
import {TextField, Button, Typography} from "@mui/material";
import {Context} from "../../index";

const ModalCreate = ({active, setActive}) => {
    const {store} = useContext(Context)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [position, setPosition] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addSpeciality = () => {
        setActive(false)
        store.users.addUser(firstName, lastName, position, phone, email, password)
    }

    return (
        <Modal active={active} setActive={setActive}>
            <Typography
                variant="h4"
                component="span"
                sx={{mb: '30px'}}
            >
                Добавить пользователя
            </Typography>

            <TextField
                label="Имя"
                variant="outlined"
                sx={{mb: '15px'}}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                label="Фамилия"
                variant="outlined"
                sx={{mb: '30px'}}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                label="Должность"
                variant="outlined"
                sx={{mb: '30px'}}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            <TextField
                label="Телефон"
                variant="outlined"
                sx={{mb: '30px'}}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
                label="Email"
                variant="outlined"
                sx={{mb: '30px'}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Пароль"
                variant="outlined"
                type="password"
                sx={{mb: '30px'}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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