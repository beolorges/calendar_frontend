import React, { useState } from "react";
import api from '../../../services/api';
import { login } from "../../../services/auth";


function handleLogin(email, password) {
    api.post('/login', {
        email,
        password
    }).then((e) => {
        login(e.data);
        alert('Logado com sucesso');
        window.location.href = "/";
    }).catch((err) => {
        alert('Credenciais inválidas');
        console.warn(err);
    });
}

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="signInBase">
            <div className="signInContent">
                <h1> Faça seu login! </h1>
                <div className="signInInputGroup">
                    <input className="signInIndividualInputs" type="email" placeholder="Insira seu email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="signInIndividualInputs" type="password" placeholder="Insira sua senha" onChange={(e) => { setPassword(e.target.value) }} />

                </div>
                <div className="signInButtonGroup">
                    {/* <button>Limpar</button> */}
                    <button onClick={
                        () => {
                            handleLogin(email, password);
                        }
                    } >Logar</button>
                </div>
                <p>Ainda não é cadastrado? Faça o seu  <a href="/signin">cadastro</a></p>
            </div>
        </div>
    )
}

export default SignIn;