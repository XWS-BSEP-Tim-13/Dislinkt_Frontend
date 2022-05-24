import React, { useState } from 'react'
import { requestCode } from '../../../api/Passwordless/PasswordlessApi';
import PasswordlessCode from '../PasswordlessCode/PasswordlessCode'
import classes from "./Passwordless.module.css"

const Passwordless = ({ navigateToLogin }) => {
    const [isCodeInput, setisCodeInput] = useState(false);
    const [email, setEmail] = useState('');

    function onEmailChange(e) {
        setEmail(e.target.value);
    }

    function sendCodeRequest(e) {
        e.preventDefault();
        const request = {
            email: email
        }

        requestCode(request).then((res) => console.log(res.data));
        setisCodeInput(true);
    }

    if (isCodeInput) return <PasswordlessCode navigateToLogin={navigateToLogin} email={email} />

    return (
        <div className={classes.login}>
            <h1>Paswordless</h1>
            <form className={classes.form}>
                <div className={classes.formItem}>
                    <input type='text' required placeholder='Email' onChange={onEmailChange} />
                </div>
                <button className={classes.buttonLogIn} onClick={sendCodeRequest}>Request code</button>
                <a href='/#' className={classes.backToLogin} onClick={() => navigateToLogin()}>
                    Back to login?
                </a>
            </form>
        </div>
    )
}

export default Passwordless