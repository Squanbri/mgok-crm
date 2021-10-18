import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {auth} from "../../store/auth";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="form-auth">
            <TextField
                id="outlined-password-input"
                label="Email"
                type="text"
                autoComplete="current-password"
                fullWidth
                onChange={e => setEmail(e.target.value)}
            />

            <TextField
                id="outlined-password-input"
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
};

export default Auth;