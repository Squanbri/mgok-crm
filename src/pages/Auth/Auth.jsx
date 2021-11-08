import React, {useContext, useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";

import "../../styles/auth.css";

import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {auth} = useContext(Context)

    return (
        <form className="form-auth">
            <Typography
                color="text.primary"
                className="breadcrumbs__item"
                sx={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '4px'
                }}
            >
                Авторизация
            </Typography>
            <TextField
                label="Email"
                type="text"
                autoComplete="current-password"
                fullWidth
                onChange={e => setEmail(e.target.value)}
            />

            <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
                margin="normal"
                onChange={e => setPassword(e.target.value)}
            />

            <Button
                variant="contained"
                sx={{ width: '50%' }}
                onClick={() => auth.login(email, password)}
            >
                Войти
            </Button>
        </form>
    );
});

export default Auth;