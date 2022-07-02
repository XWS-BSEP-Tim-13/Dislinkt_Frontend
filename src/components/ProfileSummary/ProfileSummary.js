import classes from './ProfileSummary.module.css'
import Background from '../../images/maroon-bg.jpg'
import User from '../../images/avatar.jfif'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import AuthentificationService from '../../services/AuthentificationService';
import { useEffect } from 'react';

const ProfileSummary = ({ user }) => {
    const navigate = useNavigate();

    function viewProfileHandler() {
        navigate(`/in/me`);
    }
    const location = useLocation();

    function navigateToCreateJobs() {
        navigate(`/jobs/create-job-offer`);
    }

    function sendApiToken() {
        AuthentificationService.sendApiToken().then(resp => {
            navigate(`/jobs/token`)
        })
    }

    function getWorkTitle() {
        if (user.educations && user.experiences) {
            let position;
            let company;

            const positions = user.experiences.sort(
                (objA, objB) => Number(objB.startDate) - Number(objA.startDate),
            );

            if (positions.length > 0) {
                position = positions[0].title;
                company = positions[0].companyName;

                return `${position} at ${company}`;
            } 
            
            const educations = user.educations.sort(
                (objA, objB) => Number(objB.startDate) - Number(objA.startDate),
            );
            
            if (educations.length > 0) {
                position = 'Student';
                company = educations[0].school;

                return `${position} at ${company}`;
            }

            return `No information`;
        } else {
            return `Loading...`;
        }
    }

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <div>
            <div className={classes.profileSummaryWrapper}>
                <img src={Background} alt="" className={classes.background} />
                <div className={classes.imageContainer}>
                    <img src={User} className={classes.image} alt="User" />
                </div>
                <div className={classes.description}>
                    <label>{user.firstName} {user.lastName}</label>
                    <label className={classes.descriptionProffesion}> {getWorkTitle()} </label>
                </div>
                <div className={classes.connections}>
                    <label>Connections</label>
                    <label>{user.connections ? user.connections.length : null}</label>
                </div>
                <div className={classes.viewProfile}>
                    <button className={classes.btnViewProfile} onClick={viewProfileHandler}>View profile</button>
                </div>
            </div>
            {
                location.pathname == '/jobs' && <div>
                    <button className={classes.buttonJobs} onClick={() => navigateToCreateJobs()}>Post a free job</button>
                    <button className={classes.buttonJobs} onClick={() => sendApiToken()}>Post a job from joberty</button>
                </div>
            }
        </div>
    );
}

export default ProfileSummary;