import Logo from '../../images/logo.png'
import classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
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
                <div className={classes.navigationDiv}>
                <FontAwesomeIcon icon={faHome}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Home</label>
                </div>
                <div className={classes.navigationDiv}>
                <FontAwesomeIcon icon={faPeopleGroup}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>My network</label>
                </div>
                <div className={classes.navigationDiv}>
                <FontAwesomeIcon icon={faBriefcase}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Jobs</label>
                </div>
                <div className={classes.navigationDiv}>
                <FontAwesomeIcon icon={faMessage}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Messaging</label>
                </div>
                <div className={classes.navigationDiv}>
                <FontAwesomeIcon icon={faUser}  className={classes.navigationIcon}/>
                    <label className={classes.navigationLabel}>Me<FontAwesomeIcon icon={faAngleDown}  className={classes.navigationIcon}/></label>
                </div>
            </div>
        </div>
    );
}

export default Navigation;