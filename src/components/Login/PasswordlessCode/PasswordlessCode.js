import React from 'react'
import classes from "./PasswordlessCode.module.css"

const PasswordlessCode = ({navigateToLogin, email}) => {
  return (
    <div className={classes.login}>
            <h1>Verify your email</h1>
            <p className={classes.subtitle}>
                Six digit code has been sent to specified email address. 
            </p>
            <form className={classes.form}>
                <div className={classes.formItem}>
                    <input type='text' value={email} disabled/>
                </div>
                <div className={classes.formItem}>
                    <input type='password' required placeholder='6-digit code' />
                </div>
                <button className={classes.buttonLogIn}  onClick={() => navigateToLogin()}>Log In</button>
                <a href='/#' className={classes.backToLogin} onClick={() => navigateToLogin()}>
                    Back to login?
                </a>
            </form>
        </div>
  )
}

export default PasswordlessCode