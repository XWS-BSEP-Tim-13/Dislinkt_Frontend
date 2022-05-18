import React, { useEffect, useState } from 'react'
import Interest from '../Interest/Interest'
import {getCompanyById} from "../../../api/UserProfile/UserProfileApi"
import classes from './Interests.module.css'

const Interests = ({interests}) => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies(ids){
            for(const id of ids){
                const interest = await getCompanyById(id);
                setCompanies((c) => [...new Set([...c, interest.companyName])])
            }
        }
        getCompanies(interests)
    }, [interests])

    const interestItems = companies.map(item => {
        return(
            <div className={classes.interest}>
                <Interest companyName={item} key={item}/>
            </div>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h3> Interests </h3>
            </div>
            {interestItems}
        </div>
        
    )
}

export default Interests