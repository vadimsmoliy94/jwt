import React, { useEffect, useState } from 'react';
import './App.css';

function Home() {
    const [sortUser, setSortUser] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                });

                const users = await response.json();
                let sort = users.map(item => item.name).sort();
                setSortUser(sort);
            }
        )();
    }, []);

    return (
        <div className="users">
            <h1>Список юзерів</h1>
            <ul>
                {sortUser.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default Home;
