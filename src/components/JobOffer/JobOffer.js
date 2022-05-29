import classes from './JobOffer.module.css';
import Levi9 from '../../images/levi9.png'
import JobOfferModal from './JobOfferModal/JobOfferModal';
import { useState } from 'react';

const JobOffer = (props) => {

    const [displayModal,setDisplayModal]= useState(false)

    function getEmpType(job){
        if(job.employmentType == "FULL_TIME") return "Full time"
        else if(job.employmentType == "PART_TIME") return "Part time"
        else return "Internship"
    }

    function getDate(time){
        if(time === undefined) return "Today"
        const date = new Date((time.seconds+time.nanos/100000000)*1000)
        const now = new Date()
        let difference = dateDiffInDays(now, date);
        if(difference ===0) return "Today"
        return difference+' days ago'
    }

    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
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