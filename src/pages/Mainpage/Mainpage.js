import Login from "../../components/Login/Login";
import Registration from "../../components/RegistrationComponents/Registration/Registration";

import classes from './Mainpage.module.css';

import { useState } from 'react';
import Passwordless from "../../components/Login/Passwordless/Passwordless";
import PasswordlessCode from "../../components/Login/PasswordlessCode/PasswordlessCode";

function Mainpage() {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [isPasswordlessPage, setIsPasswordlessPage] = useState(false);

    function navigateToLogin() {
        setIsLoginPage(true);
        setIsPasswordlessPage(false);
    }

    return (
        <div className={classes.page}>
            <div className={classes.form}>
                {(isLoginPage && !isPasswordlessPage) ? <Login changePage={setIsLoginPage} navigateToPasswordless={setIsPasswordlessPage} /> : null}
                {(!isLoginPage && !isPasswordlessPage) ? <Registration changePage={setIsLoginPage} /> : null}
                {(isPasswordlessPage) && <Passwordless navigateToLogin={navigateToLogin} />}
            </div>
            <div className={`${classes.image} ${isLoginPage ? classes.loginBg : classes.registrationBg}`}></div>
        </div>
    );
}

export default Mainpage;