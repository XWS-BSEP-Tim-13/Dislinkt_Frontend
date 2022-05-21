import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";

import classes from './Mainpage.module.css';

import { useState } from 'react';
import Passwordless from "../../components/Login/Passwordless/Passwordless";
import PasswordlessCode from "../../components/Login/PasswordlessCode/PasswordlessCode";

function Mainpage() {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [isPasswordlessPage, setIsPasswordlessPage] = useState(false);

    function navigateToLogin(){
        setIsLoginPage(true);
        setIsPasswordlessPage(false);
    }

    return (
        <div className={classes.page}>
            { (isLoginPage && !isPasswordlessPage) ? <Login changePage={setIsLoginPage} navigateToPasswordless={setIsPasswordlessPage}/> : null }
            { (!isLoginPage && !isPasswordlessPage) ? <Registration changePage={setIsLoginPage} /> : null}
            {(isPasswordlessPage) && <Passwordless navigateToLogin={navigateToLogin}/>}
            <div className={classes.image}></div>
        </div>
    );
}

export default Mainpage;