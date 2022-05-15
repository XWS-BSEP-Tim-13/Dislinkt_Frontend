import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Educations.module.css'
import Education from '../Education/Education'

const Educations = () => {

    const education = {
        school: "Faculty of technical sciences, Novi Sad",
        degree: "Masters",
        fieldOfStudy: "Computer science",
        startDate: new Date(),
        endDate: new Date(),
        description: "Masters studies with major in data engeneering"
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Education </h3>
                <div className={classes.titleIcons}>
                    <FontAwesomeIcon icon={faPencil} className={classes.icon}/>
                    <FontAwesomeIcon icon={faAdd} className={classes.icon}/>
                </div>
            </div>
            <Education education={education}/>
        </div>

    )
}

export default Educations