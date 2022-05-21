import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from "../../../validationSchemas/RegisterCompanyValidationSchema";

import classes from './RegisterCompany.module.css';
import { useState } from 'react';
import { axiosInstance } from "../../../api/AxiosInstance"


function RegisterCompany(props) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [serverError, setServerError] = useState({
        emailError: false,
        usernameError: false
    })

    function submitHandler(data) {

        const registrationRequest = {
            username: data.username,
            password: data.password,
            role: "COMPANY",
            company_name: data.companyName,
            location: data.location,
            email: data.email,
            phone_number: data.phoneNumber,
            website: data.website,
            company_size: data.companySize,
            industry: data.industry,
            is_private: false,
            is_company: true
        }

        axiosInstance.post("registration", registrationRequest)
            .then(() => {
                props.changeMode('emailSent');
            })
            .catch((error) => {
                if (error.response.data.includes("Username already exists!")) {
                    setServerError({ emailError: false, usernameError: true });
                } else if (error.response.data.includes("Email already exists!")) {
                    setServerError({ emailError: true, usernameError: false });
                }
            })
    }

    function handleSelectGender(event) {
        event.target.style.color = 'black';
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
                <div className={classes.formItems}>
                    <div>
                        <div className={classes.formItem}>
                            <input type='text' placeholder='Company name'
                                className={errors.companyName ? classes.errorInput : ''}
                                {...register("companyName")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.companyName?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Location'
                                className={errors.location ? classes.errorInput : ''}
                                {...register("location")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.location?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Email'
                                className={errors.email ? classes.errorInput : ''}
                                {...register("email")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.email?.message}
                            {serverError.emailError ? "Account with this e-mail already exists." : ""}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Phone number'
                                className={errors.phoneNumber ? classes.errorInput : ''}
                                {...register("phoneNumber")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.phoneNumber?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Website'
                                className={errors.website ? classes.errorInput : ''}
                                {...register("website")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.website?.message}</div>
                    </div>

                    <div>
                        <div className={classes.formItem}>
                            <input type='text' placeholder='Company size'
                                className={errors.companySize ? classes.errorInput : ''}
                                {...register("companySize")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.companySize?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Industry'
                                className={errors.industry ? classes.errorInput : ''}
                                {...register("industry")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.industry?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Username'
                                className={errors.username ? classes.errorInput : ''}
                                {...register("username")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.username?.message}
                            {serverError.usernameError ? "Username already taken." : ""}</div>

                        <div className={`${classes.formItem} ${classes.password}`}>
                            <input type='password' placeholder='Password'
                                className={`${errors.password?.message === 'Password is too weak.' || errors.password?.message === 'Password is required.' ? classes.errorInput : ''}
                                ${errors.password?.message === 'Password has medium strength.' ? classes.mediumStrengthPassword : ''}
                                ${!errors?.password && false ? classes.passwordStrong : ''}`}
                                {...register("password")} />
                            <div className={classes.tooltip}>Strong password must be at least 10 characters long, including at least 1 uppercase letter, 1 lowercase letter, 1 numeric character and 1 special character.</div>
                        </div>
                        <div className={`${classes.errorMessage} 
                            ${errors.password?.message === 'Password has medium strength.' ? classes.errorMessagePasswordWeak : ''}`}>{errors.password?.message}</div>

                        <div className={classes.formItem}>
                            <input type='password' placeholder='Confirm password'
                                className={errors.confirmPassword ? classes.errorInput : ''}
                                {...register("confirmPassword")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.confirmPassword?.message}</div>
                    </div>

                </div>

                <button className={classes.buttonLogIn}>Register</button>
            </form>
        </div>
    );
}

export default RegisterCompany;