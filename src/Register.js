import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [femilyName, setFemilyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                femilyName,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <form onSubmit={submit}>
            <h1>зареєструйтеся</h1>
            <label htmlFor='name'>імя</label>
            <input type='text' id='name' placeholder="імя" required
                onChange={e => setName(e.target.value)}
            />
            <label htmlFor='family'> прізвище</label>
            <input type='text' id='family' placeholder="прізвище" required
                onChange={e => setFemilyName(e.target.value)}
            />
            <label htmlFor='email'>Email адрес</label>
            <input type="email" id='email' placeholder="Email адрес" required
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor='password'>пароль</label>
            <input type="password" id='password' placeholder="пароль" required
                onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">увійти</button>
        </form>
    );
};

export default Register;
