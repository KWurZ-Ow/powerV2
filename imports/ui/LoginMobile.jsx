import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import "../styles/login.module.css";

export const LoginMobile = ({ setColor, color }) => {
    const [username, setUsername] = useState('');
    const [fail, setFail] = useState(false);

    const submit = e => {
        e.preventDefault();
        Meteor.loginWithPassword(username, username, reset);
    };

    function reset() {
        console.log("nope");
        setFail(true);
        setTimeout(() => {
            setFail(false);
            setUsername("")
        }, 1000);
    }
    return (
        <form onSubmit={submit} className="login-form">
            <h1>⚡ Power</h1>
            <input
                type="text"
                placeholder="Code de la partie"
                name="username"
                required
                value={username}
                autoComplete="off"
                className={fail ? "failed" : ""}
                onChange={e => setUsername(e.target.value.toUpperCase())}
            />
            <div className="radios">
                <input type="radio" name='color' id='red' onClick={() => setColor("red")} />
                <label htmlFor="red"></label>
                <input type="radio" name='color' id='blue' onClick={() => setColor("blue")} />
                <label htmlFor="blue"></label>
                <input type="radio" name='color' id='yellow' onClick={() => setColor("yellow")} />
                <label htmlFor="yellow"></label>
                <input type="radio" name='color' id='green' onClick={() => setColor("green")} />
                <label htmlFor="green"></label>
            </div>
            <button type="submit" disabled={!username || !color}>Entrer 🚪</button>
        </form>
    );
};