import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import classes from './AboutUser.module.css'

const AboutUser = ({bio}) => {
  return (
    <div className={classes.container}>
        <div className={classes.title}>
            <h3> About </h3>
            <FontAwesomeIcon icon={faPencil} className={classes.icon}/>
        </div>
        <div className={classes.about}>
            {bio}
        </div>
    </div>
  )
}

export default AboutUser