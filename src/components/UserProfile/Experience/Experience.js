import React from 'react'
//import google from '../../../images/google.jpg'
import facebook from '../../../images/facebook.png'
import classes from './Experience.module.css'

const Experience = ({ experience }) => {

    function formatEmploymentType(type) {
        if (type === "FULL_TIME")
            return "full time"
        else if (type === "PART_TIME")
            return "part time"
        else if (type === "INTERNSHIP")
            return "internship"
        return ""
    }

    return (
        <div className={classes.card}>
            <div >
                <img src={facebook} alt="company icon" className={classes.image}/>
            </div>
            <div className={classes.info}>
                <div className={classes.title}> {experience.title} </div>
                <div> {experience.companyName} - {formatEmploymentType(experience.employmentType)} </div>
                <div className={classes.workingDate}> Since <span className={classes.date}>{new Date(experience.startDate).toLocaleDateString()}</span> </div>
                <div className={classes.description}> {experience.description} </div>
            </div>
        </div>
    )
}

export default Experience