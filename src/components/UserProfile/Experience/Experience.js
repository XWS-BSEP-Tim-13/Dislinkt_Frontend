import React from 'react'
import company from '../../../images/company.png'
import classes from './Experience.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeExperience } from '../../../api/UserProfile/UserProfileApi'

const Experience = ({ experience, userId, reload }) => {

    function formatEmploymentType(type){
        if(type === "FULL_TIME")
            return "full time"
        else if(type === "PART_TIME")
            return "part time"
        else if(type === "INTERNSHIP")
            return "internship"
        return ""
    }

    function onRemoveExperience(){
        const removalRequest = {
            userId: userId,
            experienceId: experience.id
        }
        console.log(removalRequest);
        removeExperience(removalRequest).then(() => reload());
    }

    return (
        <div className={classes.card}>
            <div >
                <img src={company} alt="company icon" className={classes.image}/>
            </div>
            <div className={classes.info}>
                <div className={classes.title}> {experience.title} </div>
                <div> {experience.companyName} - {formatEmploymentType(experience.employmentType)} </div>
                <div> Since <span className={classes.date}>{new Date(experience.startDate).toLocaleDateString()}</span> </div>
                <div className={classes.description}> {experience.description} </div>
            </div>

            <FontAwesomeIcon icon={faTrash} className={classes.icon}  onClick={onRemoveExperience} />

            
        </div>
    )
}

export default Experience