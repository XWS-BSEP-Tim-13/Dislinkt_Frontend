import React, { useEffect } from 'react'
import classes from './JobOfferModal.module.css';
import { faX, faBuilding,faPen,faComputer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
const JobOfferModal = (props) => {


    useEffect(()=>{
        console.log(props.jobOffer)
    },[])

    function getEmpType(job){
        if(job.employmentType == "FULL_TIME") return "Full time"
        else if(job.employmentType == "PART_TIME") return "Part time"
        else return "Internship"
    }

    function getDate(time){
        if(time === undefined) return "Published today"
        const date = new Date((time.seconds+time.nanos/100000000)*1000)
        const now = new Date()
        let difference = dateDiffInDays(now, date);
        if(difference ===0) return "Published today"
        return difference+' days ago'
    }

    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }

  return (
    <div id={classes.app}>
    <div className={classes.modalOverlay} onClick={() => props.changeState()}></div>
    <div className={classes.modalInner}>
        <div className={classes.header}>
            <label className={classes.position}><b>{props.jobOffer.position}</b></label>
            <FontAwesomeIcon icon={faX} className={classes.icon} onClick={() => props.changeState()} />
        </div>
        <div className={classes.postHeader}>
        <label>{props.jobOffer.company.username} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>{props.jobOffer.company.website} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>{props.jobOffer.company.location}&nbsp;&nbsp;({getEmpType(props.jobOffer)})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label className={classes.postHeaderLabel}>{getDate(props.jobOffer.published)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label className={classes.applicants}>15 applicants</label>
        </div>
        <div className={classes.basicDescription}>
        <label><FontAwesomeIcon icon={faBriefcase} className={classes.icon} />{getEmpType(props.jobOffer)}&nbsp;-&nbsp;Entry level</label>
        <label><FontAwesomeIcon icon={faBuilding} className={classes.icon} />&nbsp;{props.jobOffer.company.companySize}&nbsp;-&nbsp;Employees&nbsp;&nbsp;{props.jobOffer.company.industry}</label>
        <label><FontAwesomeIcon icon={faPen} className={classes.icon} />Prerequisites:&nbsp; {props.jobOffer.prerequisites}</label>
        <label><FontAwesomeIcon icon={faComputer} className={classes.icon} />Job description:&nbsp; {props.jobOffer.jobDescription}</label>
        </div>
    </div>
</div>
  )
}

export default JobOfferModal