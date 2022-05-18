import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import classes from './Skill.module.css'

const Skill = ({skill}) => {
  return (
    <div>
        <div className={classes.skill}>
            {skill}
            <FontAwesomeIcon icon={faRemove} className={classes.icon} />
        </div>
    </div>
  )
}

export default Skill