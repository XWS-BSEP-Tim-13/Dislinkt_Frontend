import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import classes from './Login.module.css';
import AuthentificationService from '../../services/AuthentificationService';
import {useDispatch} from 'react-redux';
import { login } from '../../store/actions'

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function submitHandler(event) {
        event.preventDefault();
        const credentials ={
            username : event.target[0].value,
            password : event.target[1].value
        }
        AuthentificationService.login(credentials).then(resp=>{
            dispatch(login(resp.data))
            navigate('/home');
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className={classes.login}>
            <h1>Log in</h1>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.formItem}>
                    <input type='text' required placeholder='Username' />
                </div>
                <div className={classes.formItem}>
                    <input type='password' required placeholder='Password' />
                </div>
                <div className={classes.forgotPasswordDiv}>
                    <Link to={'forgot-password'} href='/#' className={classes.registerLink}>
                        Forgot password?
                    </Link>
                </div>
                <button className={classes.buttonLogIn}>Log in</button>
                <a href='/#' className={classes.registerLink} onClick={() => props.changePage(false)}>
                    Don't have an account? Register here.
                </a>
            </form>
        </div>
    );
}

export default Login;