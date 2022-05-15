import React from 'react'
import Experience from '../Experience/Experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Experiences.module.css'

const Experiences = () => {

    const experience = {
        title: "Head of sales department",
        employmentType: "Full-time",
        companyName: "Microsoft",
        location: "Los Angeles",
        isCurrentlyWorking: false,
        startDate: new Date(),
        endDate: new Date(),
        industry: "Software",
        description: "In charge of the eastern branch of sales department in LA."
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Experience </h3>
                <div className={classes.titleIcons}>
                    <FontAwesomeIcon icon={faPencil} className={classes.icon}/>
                    <FontAwesomeIcon icon={faAdd} className={classes.icon}/>
                </div>
            </div>
            <Experience experience={experience}/>
        </div>
    )
}

export default Experiences