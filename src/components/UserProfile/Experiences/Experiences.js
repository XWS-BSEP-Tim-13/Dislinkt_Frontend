import React from 'react'
import Experience from '../Experience/Experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Experiences.module.css'

const Experiences = ({experiences, toggleAddExperience, userId, reload,currentUser}) => {

    const experienceItems = experiences.map(item => {
        return(
            <Experience currentUser={currentUser} experience={item} userId={userId} reload={reload} key={item.id}/>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Experience </h3>
                <div className={classes.titleIcons}>
                    {currentUser &&<FontAwesomeIcon icon={faPencil} className={classes.icon}/>}
                    {currentUser &&<FontAwesomeIcon icon={faAdd} className={classes.icon} onClick={toggleAddExperience}/>}
                </div>
            </div>
            {experienceItems}
        </div>
    )
}

export default Experiences