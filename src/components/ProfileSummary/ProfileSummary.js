import classes from './ProfileSummary.module.css'
import Background from '../../images/maroon-bg.jpg'
import User from '../../images/avatar.jfif'
import { useNavigate } from 'react-router-dom';

function ProfileSummary() {
    const navigate = useNavigate();

    function viewProfileHandler() {
        navigate(`/in`);
    }

    return (
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
    );
}

export default ProfileSummary;