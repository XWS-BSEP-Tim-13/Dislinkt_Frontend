import Login from "../../components/Login/Login";
import Registration from "../../components/RegistrationComponents/Registration/Registration";

import classes from './Mainpage.module.css';

import { useState } from 'react';

function Mainpage() {
    const [isLoginPage, setIsLoginPage] = useState(true);

    return (
        <div className={classes.page}>
            <div className={classes.form}>
                {isLoginPage ? <Login changePage={setIsLoginPage} /> : null}
                {!isLoginPage ? <Registration changePage={setIsLoginPage} /> : null}
            </div>
            <div className={`${classes.image} ${isLoginPage ? classes.loginBg : classes.registrationBg}`}></div>
        </div>
    );
}

export default Mainpage;