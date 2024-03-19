import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate()

    const handlerSaveUser = () => {
        const data = {
            name, password, email
        }
        if (!(/^[a-z]+$/.test(name))) {
            alert("isim alani sadece küçük harflerden olsumalidir ")
            setName("");
        }
        else if (!(/^[^@]+@[^@]+\.[^@]+$/.test(email))) {
            alert("e-mail' inizi kontol ediniz")
            setEmail("");
        }
        else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/.test(password))) {
            alert("sifreniz en az bir kucuk ve buyuk harf ve ozel bir karakter içermelidir kontol ediniz")
            setPassword("");
        }
        else {
            axios.post("http://localhost:3001/register", data)
                .then((result) => {
                    //console.log(result);
                    navigation("/login");
                }).catch(err => {
                    console.log(err);
                })
        }
    }



    return (
        <div className='container'>
            <div className='label-div'>
                <label>Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='exp: saytec*'
                />
            </div>
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
            <button onClick={handlerSaveUser}>
                REGISTER
            </button>
        </div>
    )
}

export default Register
