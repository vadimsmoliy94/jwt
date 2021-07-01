import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setName(content.name);
    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={submit}>
            <h1>Авторизуйтеся</h1>
            <label htmlFor='email'>Email адрес</label>
            <input type="email" id='email' placeholder="Email адрес" required
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor='password'>пароль</label>
            <input type="password" id='password' placeholder="пароль" required
                onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Sign in</button>
        </form>
    );
};

export default Login;
