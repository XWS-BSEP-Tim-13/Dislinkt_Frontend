import React, { useState } from 'react'
import { requestCode } from '../../../api/Passwordless/PasswordlessApi';
import PasswordlessCode from '../PasswordlessCode/PasswordlessCode'
import classes from "./Passwordless.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../../../validationSchemas/GenerateCodeValidationSchema';

const Passwordless = ({ navigateToLogin }) => {
    const [isCodeInput, setisCodeInput] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function sendCodeRequest(data) {
        setError("");
        
        requestCode(data)
            .then((res) => {
                setEmail(data.email)
                setisCodeInput(true);
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.data.message === 'user does not exist')
                    setError("User does not exist.");
                else {
                    setError("Error requesting code. Please try again later.")
                }

            })
    }

    if (isCodeInput) return <PasswordlessCode navigateToLogin={navigateToLogin} email={email} />

    return (
        <div className={classes.login}>
            <h1>Paswordless</h1>
            <form className={classes.form} onSubmit={handleSubmit(sendCodeRequest)}>
                <div className={classes.formItem}>
                    <input type='text' required placeholder='Email' {...register("email")}/>
                </div>
                <div className={classes.errorMessage}>{errors.email?.message} </div>
                <div className={classes.serverError}> {error} </div>
                <input type="submit" className={classes.buttonLogIn} value="Request code"/>
                <a href='/#' className={classes.backToLogin} onClick={() => navigateToLogin()}>
                    Back to login?
                </a>
            </form>
        </div>
    )
}

export default Passwordless