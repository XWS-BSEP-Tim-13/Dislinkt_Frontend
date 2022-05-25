import React, { useState } from 'react'
import classes from "./ResendActivationLink.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../../../validationSchemas/GenerateCodeValidationSchema';
import { axiosInstance } from "../../../api/AxiosInstance"
import ConfirmationEmailSent from '../ConfirmationEmailSent/ConfirmationEmailSent';

const Passwordless = (props) => {
    const [state, setState] = useState('form');
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function sendActivationEmail(data) {
        console.log(data);

        axiosInstance.put("resendActivationLink", data.email)
            .then(() => {
                setState('sent');
            })
            .catch((error) => {
                setError(error.response.data);
            })
    }

    return (
        <div className={classes.login}>
            <h1 className={classes.caption}>Resend Activation Link</h1>
            {state == 'form' ?
                <form className={classes.form} onSubmit={handleSubmit(sendActivationEmail)}>
                    <div className={classes.formItem}>
                        <input type='text' placeholder='Email' {...register("email")} className={errors.email || error != "" ? classes.errorInput : null} />
                        <div className={classes.errorMessage}>{errors.email ? errors.email?.message : null} </div>
                        <div className={classes.errorMessage}> {error !== "" ? error : null} </div>
                    </div>
                    <input type="submit" className={classes.buttonLogIn} value="Request link" />
                </form> :
                <ConfirmationEmailSent />
            }
            <a href='/#' className={classes.backToLogin} onClick={() => props.navigateToLogin()}>
                Back to login?
            </a>
        </div>
    )
}

export default Passwordless