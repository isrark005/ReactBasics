import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from "../context/UserContext";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const attemptLogin = (e)=> {
        e.preventDefault();
        setUser({username, password})
    }

   
    return (
        <>
            <div>
                <input type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                placeholder='Username' />
                <br />
                <input type="text"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Password' />
                <br />
                <button onClick={attemptLogin}>Submit</button>
            </div>
        </>
    )
}
