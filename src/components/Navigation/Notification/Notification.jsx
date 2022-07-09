
import React from 'react'
import classes from './Notification.module.css';

const Notification = ({notification}) => {

    function getContent(){
        if(notification.type == "MESSAGED") return "User messaged you."
        else return "User created post."
    }

    function getDate(time){
        if(time === undefined) return "Today"
        const date = new Date((time.seconds+time.nanos/100000000)*1000)
        const now = new Date()
        let difference = dateDiffInDays(now, date);
        if(difference ===0) return "Today"
        return difference+'d'
    }

    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }

  return (
    <div className={classes.wrap}>
        <span><b>{notification.username}</b></span>
        <span>{getContent()}</span>
        <span>{getDate()}</span>
    </div>
  )
}

export default Notification