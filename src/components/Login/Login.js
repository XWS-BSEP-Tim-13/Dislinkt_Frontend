import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import classes from './Login.module.css';
import AuthentificationService from '../../services/AuthentificationService';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions'
import { useState } from 'react';
import { useSelector } from 'react-redux';


function Login(props) {

    const auth = useSelector(state => state.loginReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState(false);

    function submitHandler(event) {
        event.preventDefault();
        const credentials = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        AuthentificationService.login(credentials).then(resp => {
            console.log(resp.data)
                if(resp.data.token == "") props.navigateToMFA(resp.data)
                else{
                    localStorage.setItem("token-ls", resp.data.token);
                    dispatch(login(resp.data));

                    if (auth.role !== 'ADMIN') navigate('/events');
                    else navigate('/home');
                    
                }
        }).catch(error => {
            if (error.response.data.message.includes("Bad credentials")) {
                setError(true);
            }
        })
    }

    return (
        <div className={classes.login}>
            <h1 className={classes.caption}>Log in</h1>
            <form onSubmit={submitHandler} className={classes.form}>

                <div className={classes.errorMessage}> {error ? "Bad credentials." : ""}</div>
                <div className={classes.formItem}>
                    <input type='text' required placeholder='Username' onChange={() => setError(false)}/>
                </div>
                <div className={classes.formItem}>
                    <input type='password' required placeholder='Password' onChange={() => setError(false)} />
                </div>

                <div className={classes.forgotPasswordDiv}>
                    <Link to={'forgot-password'} href='/#' className={classes.registerLink}>
                        Forgot password?
                    </Link>
                </div>

                <button className={classes.buttonLogIn}>Log in</button>
                <p className={classes.or}> or </p>
                <div className={classes.line}> </div>
                <button className={classes.buttonLogInViaEmail} onClick={() => props.navigateToPasswordless(true)}>Log in via email</button>
                <a href='/#' className={classes.registerLink} onClick={() => props.navigateToRegister()}>
                    Don't have an account? Register here.
                </a>
                <a href='/#' className={classes.resendLink} onClick={() => props.navigateToResend()}>
                    Resend link for account activation?
                </a>
            </form>
        </div>
    );
}

export default Login;