import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Educations.module.css'
import Education from '../Education/Education'

const Educations = ({educations, toggleAddEducation, userId, reload,currentUser}) => {

    const educationItems = educations.map(item => {
        return(
            <Education currentUser={currentUser} education={item} key={item.id} userId={userId} reload={reload}/>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Education </h3>
                <div className={classes.titleIcons}>
                    {currentUser &&<FontAwesomeIcon icon={faPencil} className={classes.icon}/>}
                    {currentUser &&<FontAwesomeIcon icon={faAdd} className={classes.icon} onClick={toggleAddEducation}/>}
                </div>
            </div>
            {educationItems}
        </div>

    )
}

export default Educations