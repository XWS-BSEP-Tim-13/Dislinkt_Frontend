import React, { useState } from 'react'
import { passwordlessLogin } from '../../../api/Passwordless/PasswordlessApi'
import {useDispatch} from 'react-redux';
import { login } from '../../../store/actions'
import { useNavigate } from 'react-router-dom';
import classes from "./PasswordlessCode.module.css"

const PasswordlessCode = ({ navigateToLogin, email }) => {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onLogin(e) {
        e.preventDefault();
        const loginRequest = {
            email: email,
            code: code
        }
        passwordlessLogin(loginRequest).then((res) => {
            console.log(res.data);
            dispatch(login(res.data))
            navigate('/home');
        }).catch((err) => {
            console.log(err.response.data);
            if(err.response.data.message === 'bad code')
                setError("Incorrect code.");
            if(err.response.data.message === 'expired code')
                setError("Code expired.");
        })
    }

    function onCodeChange(e) {
        setCode(e.target.value);
    }

    return (
        <div className={classes.login}>
            <h1>Verify your email</h1>
            <p className={classes.subtitle}>
                Six digit code has been sent to specified email address.
            </p>
            <form className={classes.form}>
                <div className={classes.formItem}>
                    <input type='text' value={email} disabled />
                </div>
                <div className={classes.formItem}>
                    <input type='password' required placeholder='6-digit code' onChange={onCodeChange} />
                </div>
                <div className={classes.error}>
                    {error}
                </div>
                <button className={classes.buttonLogIn} onClick={onLogin}>Log In</button>
                <a href='/#' className={classes.backToLogin} onClick={() => navigateToLogin()}>
                    Back to login?
                </a>
            </form>
        </div>
    )
}

export default PasswordlessCode