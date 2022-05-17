import React from 'react'
import Experience from '../Experience/Experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Experiences.module.css'

const Experiences = ({experiences, toggleAddExperience}) => {

    const experienceItems = experiences.map(item => {
        return(
            <Experience experience={item} key={item.id}/>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Experience </h3>
                <div className={classes.titleIcons}>
                    <FontAwesomeIcon icon={faPencil} className={classes.icon}/>
                    <FontAwesomeIcon icon={faAdd} className={classes.icon} onClick={toggleAddExperience}/>
                </div>
            </div>
            {experienceItems}
        </div>
    )
}

export default Experiences