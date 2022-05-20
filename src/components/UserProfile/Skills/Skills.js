import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import classes from './Skills.module.css'
import Skill from '../Skill/Skill'

const Skills = ({skills, toggleAddSkill, userId, reload}) => {

    const skillItems = skills.map(item => {
        return(
            <Skill skill={item} key={item} userId={userId} reload={reload}/>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Skills </h3>
                <div className={classes.titleIcons}>
                    <FontAwesomeIcon icon={faAdd} className={classes.icon} onClick={toggleAddSkill}/>
                </div>
            </div>
            {skillItems}
        </div>
    )
}

export default Skills