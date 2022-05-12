import React from 'react'
import company from '../../../images/company.png'
import classes from './Interest.module.css'

const Interest = ({companyName}) => {
  return (
    <div className={classes.card}> 
        <div >
            <img src={company} alt="company icon" className={classes.image}/>
        </div>
        <div className={classes.info}>
            {companyName}
        </div>

    </div>
  )
}

export default Interest