import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from "../../../validationSchemas/RegisterUserValidationSchema";

import classes from './RegisterUser.module.css';
import { useState, useRef, useEffect } from 'react';
import { axiosInstance } from "../../../api/AxiosInstance"


function RegisterUser(props) {

    const isPrivateCheckbox = useRef();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [serverError, setServerError] = useState({
        emailError: false,
        usernameError: false
    })

    useEffect(() => {
        isPrivateCheckbox.current.checked = true;
    }, []);

    function submitHandler(data) {

        const registrationRequest = {
            username: data.username,
            password: data.password,
            role: "USER",
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone_number: data.phoneNumber,
            gender: data.gender === 'MALE' ? 0 : 1,
            date_of_birth: new Date(data.dateOfBirth).toISOString(),
            biography: data.biography,
            is_private: isPrivateCheckbox.current.checked,
            is_company: false
        }

        axiosInstance.post("registration", registrationRequest)
            .then(() => {
                props.changeMode('emailSent');
            })
            .catch((error) => {
                if (error.response.data.includes("username already exists")) {
                    setServerError({ emailError: false, usernameError: true });
                } else if (error.response.data.includes("email already exists")) {
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
                            <input type='text' placeholder='First name'
                                className={errors.firstName ? classes.errorInput : ''}
                                {...register("firstName")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.firstName?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Last name'
                                className={errors.lastName ? classes.errorInput : ''}
                                {...register("lastName")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.lastName?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Email'
                                className={errors.email || serverError.emailError ? classes.errorInput : ''}
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
                            <select name="Gender" defaultValue=""
                                className={errors.gender ? classes.errorInput : ''}
                                {...register("gender")}
                                onChange={handleSelectGender} >
                                <option value="" disabled>Gender</option>
                                <option value="MALE" >Male</option>
                                <option value="FEMALE" >Female</option>
                            </select>
                        </div>
                        <div className={classes.errorMessage}>{errors.gender?.message}</div>
                    </div>

                    <div>
                        <div className={classes.formItem}>
                            <input type='text' placeholder='Date of birth' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}
                                className={errors.dateOfBirth ? classes.errorInput : ''}
                                {...register("dateOfBirth")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.dateOfBirth?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Short biography'
                                className={errors.biography ? classes.errorInput : ''}
                                {...register("biography")} />
                        </div>
                        <div className={classes.errorMessage}>{errors.biography?.message}</div>

                        <div className={classes.formItem}>
                            <input type='text' placeholder='Username'
                                className={errors.username || serverError.usernameError ? classes.errorInput : ''}
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

                <div className={classes.checkbox}>
                    <input type='checkbox' id="isPrivate" value="IsPrivate" ref={isPrivateCheckbox}/>
                    <label htmlFor="isPrivate">Private account</label>
                </div>

                <button className={classes.buttonLogIn}>Register</button>
            </form>
        </div>
    );
}

export default RegisterUser;