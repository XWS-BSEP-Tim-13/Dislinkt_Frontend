import React from 'react'
import school from '../../../images/school.png'
import classes from './Education.module.css'

const Education = ({education}) => {
  return (
    <div className={classes.card}> 
        <div >
            <img src={school} alt="school icon" className={classes.image}/>
        </div>
        <div className={classes.info}>
            <div className={classes.title}> {education.school} </div>
            <div> {education.description} </div>
            <div> <span className={classes.date}>{education.startDate.toLocaleDateString()} - {education.endDate.toLocaleDateString()}</span> </div>
        </div>

    </div>
  )
}

export default Education