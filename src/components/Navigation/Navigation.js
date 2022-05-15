import Logo from '../../images/logo.png'
import classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {

    const [state,setState] = useState(0)
    const navigate = useNavigate();
    function changeState(state){
        setState(state)
        if(state ===1)  navigate('/network');
        else if(state===0) navigate('/home');
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.search}>
               <img src={Logo} className={classes.logo}/>
               <div className={classes.searchbar}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}  className={classes.searchIcon}/>
                   <input type="text" placeholder="Search for jobs,companies..." className={classes.searchInput}></input>
               </div>
            </div>
            <div className={classes.gap}></div>
            <div className={classes.navigation}>
                <div className={state !== 0 ? classes.navigationDiv : classes.navigationDivActive} onClick={()=> changeState(0)}>
                <FontAwesomeIcon icon={faHome}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Home</label>
                </div>
                <div className={state !== 1 ? classes.navigationDiv : classes.navigationDivActive} onClick={()=> changeState(1)}>
                <FontAwesomeIcon icon={faPeopleGroup}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>My network</label>
                </div>
                <div className={state !== 2 ? classes.navigationDiv : classes.navigationDivActive} onClick={()=> changeState(2)}>
                <FontAwesomeIcon icon={faBriefcase}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Jobs</label>
                </div>
                <div className={state !== 3 ? classes.navigationDiv : classes.navigationDivActive} onClick={()=> changeState(3)}>
                <FontAwesomeIcon icon={faMessage}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Messaging</label>
                </div>
                <div className={state !== 4 ? classes.navigationDiv : classes.navigationDivActive} onClick={()=> changeState(4)} >
                <FontAwesomeIcon icon={faUser}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Me</label>
                </div>
                <div className={state !== 5 ? classes.navigationDiv : classes.navigationDivActive} onClick={()=> changeState(5)}>
                <FontAwesomeIcon icon={faDoorOpen}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Sign out</label>
                </div>
            </div>
        </div>
    );
}

export default Navigation;