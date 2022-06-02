import classes from './JobOffer.module.css';
import Levi9 from '../../images/levi9.png'
import JobOfferModal from './JobOfferModal/JobOfferModal';
import { useState,useEffect } from 'react';

const JobOffer = (props) => {

    const [displayModal,setDisplayModal]= useState(false)

    useEffect(()=>{
        console.log(props.jobOffer)
    },[])

    function getEmpType(job){
        if(job.employmentType == "FULL_TIME") return "Full time"
        else if(job.employmentType == "PART_TIME") return "Part time"
        else return "Internship"
    }

    function getDate(time){
        let date = new Date(time)
        if(time === undefined || time ==null) return "Today"
        const now = new Date()
        let difference = Math.abs(now.getDay() - date.getDay())
        if(difference ===0) return "Today"
        return difference+' days ago'
    }


    return (
        <div>
        <div className={classes.wrapper} onClick={()=>setDisplayModal(true)}>
            <div className={classes.imageContainer}>
                <img src={Levi9} className={classes.image} alt="Profile" />
            </div>
            <div className={classes.jobDescription}>
                <div className={classes.job}>
                    <h2>{props.jobOffer.position}</h2>
                    <h3>{props.jobOffer.company.companyName}</h3>
                    <label>{getEmpType(props.jobOffer)}</label>
                </div>
                <div className={classes.offerStatus}>
                    <label>{getDate(props.jobOffer.published)}</label>
                    <label className={classes.applicants}>15 applicants()</label>
                </div>
            </div>
        </div>
        { displayModal &&
                <JobOfferModal jobOffer={props.jobOffer} changeState={() =>setDisplayModal(false)}/>
            }
        </div>
    )
}

export default JobOffer