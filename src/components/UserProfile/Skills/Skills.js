import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Skills.module.css'
import Skill from '../Skill/Skill'

const Experiences = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Skills </h3>
                <div className={classes.titleIcons}>
                    <FontAwesomeIcon icon={faAdd} className={classes.icon}/>
                </div>
            </div>
            <Skill />
        </div>
    )
}

export default Experiences