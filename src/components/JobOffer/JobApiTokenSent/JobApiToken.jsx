import classes from './JobApiToken.module.css';
import { useNavigate } from 'react-router';
function JobApiToken() {

    const isLoginPage =true;
    const navigate =useNavigate()
    
    function back(){
        navigate(`/jobs`)
    }

    return (
             <div className={classes.page}>
            <div className={classes.form}>
                <div className={classes.message}>
                <p>Succesfully sent token to joberty!</p>
                <p>You can send job request to dislinkt.</p>
                <button onClick={back} className={classes.button}>Back</button>
            </div>
            </div>
            <div className={`${classes.image} ${isLoginPage ? classes.loginBg : classes.registrationBg}`}></div>
        </div>
    );
}

export default JobApiToken;