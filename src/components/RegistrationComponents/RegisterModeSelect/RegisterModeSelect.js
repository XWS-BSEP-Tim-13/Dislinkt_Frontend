import classes from './RegisterModeSelect.module.css';
import { faUserPlus, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function RegisterModeSelect(props) {
    return (
        <div className={classes.wrapper}>
            <button className={classes.choice} onClick={() => props.changeMode('user')}>
                <FontAwesomeIcon icon={faUserPlus} className={classes.icon}/>Register as user
            </button>
            <button className={classes.choice} onClick={() => props.changeMode('company')}>
                <FontAwesomeIcon icon={faBriefcase} className={classes.icon}/>Register as company
            </button>
        </div>
    );
}

export default RegisterModeSelect;