import Logo from '../../images/logo-red.png'
import classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions'
import SearchResults from './SearchResults/SearchResults'
import UserService from '../../services/UserService';
function Navigation() {

    const [route, setRoute] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [searchUsers,setSearchUsers] = useState([])
    const [displaySearchDiv,setDisplaySearchDiv] =useState(false)
    useEffect(() => {
        setRoute(location.pathname.split('/')[1]);
    }, [route, location.pathname])

    function changeRoute(route) {

        if (route === '') {
            dispatch(logout())
            localStorage.removeItem("token-ls");
        }
        navigate(`/${route}`);
        setRoute(route);
    }

    function filterUsers(){
        if (!displaySearchDiv)
        UserService.filter('').then(resp=>{
            console.log(resp.data.users)
            setSearchUsers(resp.data.users)
        })
        setDisplaySearchDiv(true)
    }

    const handleChange = (e) => {
        UserService.filter(e.target.value).then(resp=>{
            setSearchUsers(resp.data.users)
        })
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.search}>
                <img src={Logo} className={classes.logo} alt="Dislinkt logo" />
                <div className={classes.searchbar} onClick={() =>filterUsers()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon} />
                    <input type="text" placeholder="Search for people, jobs, companies..." className={classes.searchInput} onChange={handleChange} ></input>
                </div>
            </div>
            {
                displaySearchDiv &&
                <SearchResults changeState={() =>setDisplaySearchDiv(false)} users={searchUsers}/>

            }
            <div className={classes.navigation} onClick={() =>setDisplaySearchDiv(false)}>
                <div className={route !== 'home' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('home')}>
                    <FontAwesomeIcon icon={faHome} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>Home</label>
                </div>
                <div className={route !== 'network' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('network')}>
                    <FontAwesomeIcon icon={faPeopleGroup} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>My network</label>
                </div>
                <div className={route !== 'jobs' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('jobs')}>
                    <FontAwesomeIcon icon={faBriefcase} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>Jobs</label>
                </div>
                <div className={route !== 'messaging' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('messaging')}>
                    <FontAwesomeIcon icon={faMessage} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>Messaging</label>
                </div>
                <div className={route !== 'events' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('events')}>
                    <FontAwesomeIcon icon={faClock} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>Events</label>
                </div>
                <div className={route !== 'in' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('in/me')} >
                    <FontAwesomeIcon icon={faUser} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>Me</label>
                </div>
                <div className={route !== '' ? classes.navigationDiv : classes.navigationDivActive} onClick={() => changeRoute('')}>
                    <FontAwesomeIcon icon={faDoorOpen} className={classes.navigationIcon} />
                    <label className={classes.navigationLabel}>Sign out</label>
                </div>
            </div>
        </div>
    );
}

export default Navigation;