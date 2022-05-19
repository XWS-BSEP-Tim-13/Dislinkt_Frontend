import { useNavigate } from 'react-router-dom';

import classes from './Registration.module.css';

function Registration(props) {
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        console.log('Submited');
        navigate('/home');
    }

    function handleSelectGender(event) {
        event.target.style.color = 'black';
    }

    return (
        <div className={classes.register}>
            <h1>Register now!</h1>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.formItems}>
                    <div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='First name' />
                        </div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='Last name' />
                        </div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='Email' />
                        </div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='Phone number' />
                        </div>
                        <div className={classes.formItem}>
                            <select name="Gender" defaultValue="" onChange={handleSelectGender}>
                                <option value="" disabled>Gender</option>
                                <option value="MALE" >Male</option>
                                <option value="FEMALe" >Female</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='Date of birth' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} />
                        </div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='Short biography' />
                        </div>
                        <div className={classes.formItem}>
                            <input type='text' required placeholder='Username' />
                        </div>
                        <div className={classes.formItem}>
                            <input type='password' required placeholder='Password' />
                        </div>
                        <div className={classes.formItem}>
                            <input type='password' required placeholder='Confirm password' />
                        </div>
                    </div>

                </div>

                <button className={classes.buttonLogIn}>Register</button>
                <a href="/#" className={classes.registerLink} onClick={() => props.changePage(true)}>
                    Already have an account? Log in here!
                </a>
            </form>
        </div>
    );
}

export default Registration;