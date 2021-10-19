import React, {useContext, useState} from 'react';
import {Alert, Button, TextField} from "@mui/material";

import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {auth} = useContext(Context)

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

            {auth.errors.map((error, index) =>
                <Alert
                    severity="error"
                    key={index}
                    sx={{ marginTop: '10px' }}
                >
                    {error}
                </Alert>
            )}
        </form>
    );
});

export default Auth;