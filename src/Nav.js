import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    const logout = async () => {
        await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        props.setName('');
    }

    let menu;

    if (props.name === '') {
        menu = (
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li >
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul>
                <li>
                    <Link to="/login" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav >
            <div >
                <Link to="/" >Home</Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
