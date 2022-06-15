import React, { useState, useEffect } from "react";
import "./signIn.css";
import api from '../../../services/api';
import { login } from "../../../services/auth";


function isPasswordMin8Char(password) {
    return password.length >= 8;
}

function hasSpecialCharacter(password) {
    return /[^0-9A-Za-z[ ]]*/.test(password);
}

function hasNumber(password) {
    return /\d/.test(password);
}

function hasUpperCase(password) {
    return /[A-Z]/.test(password);
}

function checkPassword(password) {
    return hasUpperCase(password) && hasNumber(password) && hasSpecialCharacter(password) && isPasswordMin8Char(password);
}

function checkEmail(email) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email);
}

function handleRegistration(name, email, password) {
    api.post('/user', {
        name,
        email,
        password
    }).then((e) => {
        login(e.data);
        alert('Cadastro realizado com sucesso');
        window.location.href = "/";
    }).catch((err) => {
        alert('Usuário já cadastrado');
        console.warn(err);
    })
}

function SignIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [eightChar, setEightChar] = useState('red');
    const [specialChar, setSpecialChar] = useState('red');
    const [number, setNumber] = useState('red');
    const [upperCase, setUpperCase] = useState('red');

    useEffect(() => {
        isPasswordMin8Char(password) ?
            setEightChar('green') : setEightChar('red');

        hasSpecialCharacter(password) ?
            setSpecialChar('green') : setSpecialChar('red');

        hasNumber(password) ?
            setNumber('green') : setNumber('red');

        hasUpperCase(password) ?
            setUpperCase('green') : setUpperCase('red');

    }, [password])

    return (
        <div className="signInBase">
            <div className="signInContent">
                <h1> Cadastre-se já! </h1>
                <div className="signInInputGroup">
                    <input className="signInIndividualInputs" type="text" placeholder="Insira seu nome" onChange={(e) => { setName(e.target.value) }} />
                    <input className="signInIndividualInputs" type="email" placeholder="Insira seu email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="signInIndividualInputs" type="password" placeholder="Insira sua senha" onChange={(e) => { setPassword(e.target.value) }} />
                    <div className="signInCheckPasswordGroup">
                        <ul>
                            <li style={{ 'color': `${eightChar}` }}> Sua senha deve possuir 8 caracteres </li>
                            <li style={{ 'color': `${specialChar}` }}> Sua senha deve possuir caracter especial </li>
                            <li style={{ 'color': `${number}` }}> Sua senha deve possuir ao menos 1 número</li>
                            <li style={{ 'color': `${upperCase}` }}> Sua senha deve possuir caracter maiúsculo </li>
                        </ul>
                    </div>
                </div>
                <div className="signInButtonGroup">
                    {/* <button>Limpar</button> */}
                    <button onClick={
                        () => {
                            !name.length > 0
                                ? alert('Digite seu nome') : !checkEmail(email) ? alert('Digite um email válido') : !checkPassword(password) ? alert('Digite uma senha válida') : handleRegistration(name, email, password);
                        }
                    } >Cadastrar</button>
                </div>
                <p>Já é cadastrado? Faça o seu <a href="/login">login</a></p>
            </div>
        </div>
    )
}

export default SignIn;
