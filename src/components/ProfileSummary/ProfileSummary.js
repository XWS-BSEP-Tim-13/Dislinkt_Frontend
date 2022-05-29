import classes from './ProfileSummary.module.css'
import Background from '../../images/maroon-bg.jpg'
import User from '../../images/avatar.jfif'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
function ProfileSummary() {
    const navigate = useNavigate();

    function viewProfileHandler() {
        navigate(`/in`);
    }
    const location = useLocation();

    function navigateToCreateJobs(){
        navigate(`/jobs/create-job-offer`);
    }

    return (
        <div>
        <div className={classes.profileSummaryWrapper}>
            <img src={Background} alt="" className={classes.background} />
            <div className={classes.imageContainer}>
                <img src={User} className={classes.image} alt="User" />
            </div>
            <div className={classes.description}>
                <label>Srdjan Sukovic</label>
                <label className={classes.descriptionProffesion}>Faculty of technical science, Novi Sad (student)</label>
            </div>
            <div className={classes.connections}>
                <label>Connections</label>
                <label>152</label>
            </div>
            <div className={classes.companies}>
                <label>Companies</label>
                <label>35</label>
            </div>
            <div className={classes.viewProfile}>
                <button className={classes.btnViewProfile} onClick={viewProfileHandler}>View profile</button>
            </div>
        </div>
        {
        location.pathname == '/jobs' && <button className={classes.buttonJobs} onClick={()=> navigateToCreateJobs()}> <FontAwesomeIcon icon={faPen} className={classes.searchIcon} /> &nbsp;Post a free job</button>
        }
        </div>
    );
}

export default ProfileSummary;