import classes from './Registration.module.css';

import RegisterModeSelect from '../RegisterModeSelect/RegisterModeSelect';
import RegisterUser from '../RegisterUser/RegisterUser';
import RegisterCompany from '../RegisterCompany/RegisterCompany';
import ConfirmationEmailSent from '../ConfirmationEmailSent/ConfirmationEmailSent';

import { useState } from 'react';


function Registration(props) {

    const [registerMode, setRegisterMode] = useState('select');

    return (
        <div className={classes.register}>
            <h1 className={classes.caption}>
                {registerMode === 'select' ? "Register now!" : ""}
                {registerMode === 'user' ? "New user!" : ""}
                {registerMode === 'company' ? "New company!" : ""}
                {registerMode === 'emailSent' ? "E-mail sent!" : ""}
            </h1>

            {registerMode === 'select' ? <RegisterModeSelect changeMode={setRegisterMode} /> : null}
            {registerMode === 'user' ? <RegisterUser changeMode={setRegisterMode}/> : null}
            {registerMode === 'company' ? <RegisterCompany  changeMode={setRegisterMode}/> : null}
            {registerMode === 'emailSent' ? <ConfirmationEmailSent /> : null}

            {registerMode !== 'select' ?
                <a href="/#" className={classes.registerLink} onClick={() => setRegisterMode('select')}>
                    Go back to register start page.
                </a> : null}
            <a href="/#" className={classes.registerLink} onClick={() => props.changePage(true)}>
                Already have an account? Log in here!
            </a>
        </div>
    );
}

export default Registration;