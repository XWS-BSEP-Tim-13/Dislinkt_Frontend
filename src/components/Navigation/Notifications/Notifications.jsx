
import React from 'react'
import classes from './Notifications.module.css';
import Notification from '../Notification/Notification';
import UserService from '../../../services/UserService';
import { useEffect,useState } from 'react';
const Notifications = () => {

    const [notifications,setNotifications] = useState([])


    useEffect(()=>{
        UserService.getNotificationsForUser().then(resp=>{
            console.log(resp.data)
            setNotifications(resp.data.notification)
        })
    },[])

  return (
    <div className={classes.wrap}>
        {   
                notifications.map((notification,i) => 
                        <Notification key={i} notification={notification}/>
        )}
    </div>
  )
}

export default Notifications