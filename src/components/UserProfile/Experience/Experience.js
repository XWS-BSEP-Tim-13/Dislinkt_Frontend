import React from 'react'
import company from '../../../images/company.png'
import classes from './Experience.module.css'

const Experience = ({experience}) => {
  return (
    <div className={classes.card}> 
        <div >
            <img src={company} alt="company icon" className={classes.image}/>
        </div>
        <div className={classes.info}>
            <div className={classes.title}> {experience.title} </div>
            <div> {experience.companyName} - {experience.employmentType} </div>
            <div> Since <span className={classes.date}>{experience.startDate.toLocaleDateString()}</span> </div>
            <div className={classes.description}> {experience.description} </div>
        </div>

    </div>
  )
}

export default Experience