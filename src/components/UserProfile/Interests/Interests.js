import React from 'react'
import Interest from '../Interest/Interest'
import classes from './Interests.module.css'

const Interests = () => {
    const microsoft = "Mocrosoft"
    const google = "Google"

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Interests </h3>
            </div>
            <Interest companyName={microsoft} />
            <Interest companyName={google} />
        </div>
        
    )
}

export default Interests