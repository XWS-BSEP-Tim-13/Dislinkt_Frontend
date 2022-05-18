import React from 'react'
import harvard from '../../../images/harvard.png'
import classes from './Education.module.css'

const Education = ({education}) => {
  return (
    <div className={classes.card}> 
        <div >
            <img src={harvard} alt="school icon" className={classes.image}/>
        </div>
        <div className={classes.info}>
            <div className={classes.title}> {education.school} </div>
            <div> {education.description} </div>
            <div> <span className={classes.date}>{new Date(education.startDate).toLocaleDateString()} - {new Date(education.endDate).toLocaleDateString()}</span> </div>
        </div>

    </div>
  )
}

export default Education