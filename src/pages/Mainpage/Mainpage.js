import Login from "../../components/Login/Login";
import Registration from "../../components/RegistrationComponents/Registration/Registration";

import classes from './Mainpage.module.css';

import { useState } from 'react';
import Passwordless from "../../components/Login/Passwordless/Passwordless";
import ResendActivationLink from "../../components/RegistrationComponents/ResendActivationLink/ResendActivationLink"
import CreateJobOffer from '../../components/CreateJobOffer/CreateJobOffer'
function Mainpage() {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [isRegisterPage, setisRegisterPage] = useState(false);
    const [isResendActivationPage, setisResendActivationPage] = useState(false);
    const [isPasswordlessPage, setIsPasswordlessPage] = useState(false);
    function navigateToLogin() {
        setIsLoginPage(true);
        setisRegisterPage(false);
        setisResendActivationPage(false);
        setIsPasswordlessPage(false);
    }

    function navigateToRegister() {
        setIsLoginPage(false);
        setisRegisterPage(true);
        setisResendActivationPage(false);
        setIsPasswordlessPage(false);
    }

    function navigateToResend() {
        setIsLoginPage(false);
        setisRegisterPage(false);
        setisResendActivationPage(true);
        setIsPasswordlessPage(false);
    }

    function navigateToPasswordless() {
        setIsLoginPage(false);
        setisRegisterPage(false);
        setisResendActivationPage(false);
        setIsPasswordlessPage(true);
    }

    return (
        <div className={classes.page}>
            <div className={classes.form}>
                {isLoginPage ? <Login navigateToRegister={navigateToRegister} navigateToPasswordless={navigateToPasswordless} navigateToResend={navigateToResend}/> : null}
                {isRegisterPage ? <Registration navigateToLogin={navigateToLogin} /> : null}
                {isResendActivationPage ? <ResendActivationLink navigateToLogin={navigateToLogin} /> : null}
                {isPasswordlessPage ? <Passwordless navigateToLogin={navigateToLogin} /> : null}
            </div>
            <div className={`${classes.image} ${isLoginPage || isPasswordlessPage || isResendActivationPage ? classes.loginBg : classes.registrationBg}`}></div>
        </div>
    );
}

export default Mainpage;