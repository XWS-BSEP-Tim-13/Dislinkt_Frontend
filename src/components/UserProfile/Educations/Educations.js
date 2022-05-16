import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Educations.module.css'
import Education from '../Education/Education'

const Educations = ({educations}) => {

    const educationItems = educations.map(item => {
        return(
            <Education education={item} key={item.id}/>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Education </h3>
                <div className={classes.titleIcons}>
                    <FontAwesomeIcon icon={faPencil} className={classes.icon}/>
                    <FontAwesomeIcon icon={faAdd} className={classes.icon}/>
                </div>
            </div>
            {educationItems}
        </div>

    )
}

export default Educations