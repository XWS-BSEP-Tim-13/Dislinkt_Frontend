import React from 'react'
import harvard from '../../../images/harvard.png'
import classes from './Education.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeEducation } from '../../../api/UserProfile/UserProfileApi'

const Education = ({ education, userId, reload,currentUser }) => {

    function onRemoveExperience(){
        const removalRequest = {
            userId: userId,
            educationId: education.id
        }
        removeEducation(removalRequest).then(() => reload());
    }

    return (
        <div className={classes.card}>
            <div >
                <img src={harvard} alt="school icon" className={classes.image} />
            </div>
            <div className={classes.info}>
                <div className={classes.title}> {education.school} </div>
                <div> {education.description} </div>
                <div> <span className={classes.date}>{new Date(education.startDate).toLocaleDateString()} - {new Date(education.endDate).toLocaleDateString()}</span> </div>
            </div>
            {currentUser &&<FontAwesomeIcon icon={faTrash} className={classes.icon} onClick={onRemoveExperience} />}
        </div>
    )
}

export default Education