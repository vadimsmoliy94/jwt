import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
        const response = await fetch('', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const content = await response.json();

        setName(content.name);
      }
    )();
  });


  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className="form-signin">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={() => <Login setName={setName} />} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
