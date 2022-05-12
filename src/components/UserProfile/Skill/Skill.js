import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import classes from './Skill.module.css'

const Skill = () => {
  return (
    <div>
        <div className={classes.skill}>
            AWS
            <FontAwesomeIcon icon={faRemove} className={classes.icon} />
        </div>
        <hr />
    </div>
  )
}

export default Skill