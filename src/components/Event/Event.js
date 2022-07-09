import classes from './Event.module.css';
import Levi9 from '../../images/levi9.png'
import { useState,useEffect } from 'react';

const Event = (props) => {

    const [displayModal,setDisplayModal]= useState(false)

    useEffect(()=>{
        console.log(props.jobOffer)
    },[])


    function getDate(time){
        let date = new Date(time)
        if(time === undefined || time ==null) return "5 days ago"
        const now = new Date()
        let difference = Math.abs(now.getDay() - date.getDay())
        if(difference ===0) return "Today"
        return difference+' days ago'
    }


    return (
        <div>
        <div className={classes.wrapper}>
            <div className={classes.imageContainer}>
                <img src={Levi9} className={classes.image} alt="Event" />
            </div>
            <div className={classes.jobDescription}>
                <div className={classes.job}>
                    <h2>Blocked user marijakljestan</h2>
                    <h3>stefanljubovic</h3>
                </div>
                <div className={classes.offerStatus}>
                    {/*<label>{getDate(props.jobOffer.published)}</label>*/}
                    <label className={classes.applicants}>07/07/22</label>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Event