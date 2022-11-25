import React from 'react';
import {useContext } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { LoginContext } from './Context/LoginContext';

export default function Login() {
    const { username, setUserName, showProfile, setShowProfile } = useContext(LoginContext);

    console.log(username);
    console.log(showProfile);

    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="UserName" onChange={(event) => { setUserName(event.target.value) }} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="password" />
            <Button variant="contained" onClick={() => { setShowProfile(true) }}>Login</Button>

        </>
    );
}