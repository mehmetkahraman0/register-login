import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate()

    const handlerLoginControl = () => {
        axios.post("http://localhost:3001/login", { email, password })
            .then((result) => {
                //console.log(result)
                if (result.data === "success") {
                    navigation("/")
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='container'>

            <div className='label-div'>
                <label>E-mail</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='exp: s4@gmail.com*'
                />
            </div>

            <div className='label-div'>
                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='exp: Ss4*'
                />
            </div>

            <button onClick={handlerLoginControl}>
                LOGIN
            </button>
        </div>
    )
}

export default Login
