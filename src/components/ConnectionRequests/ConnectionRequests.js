import React, { useState } from 'react'
import classes from './ConnectionRequest.module.css';
import User from '../../images/user.png'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConnectionRequests = () => {


    const [connections,setConnections] =useState([1,2,3])

  return (
    <div className={classes.container}>
        {
            connections.length===0 ?(
            <div>No pending invitations</div>
            ) : (
                <div className={classes.conContainer}>
                    <label>Suggested</label>
                    {
                        connections.map((connection,index)=>
                           <div className={classes.conection}>
                               <img src={User} alt="" className={classes.img}/>
                               <div className={classes.content}>
                                <label>Marija Kljestan</label>
                                <label className={classes.content}>Faculty of technical science, Novi Sad</label>
                             </div>
                             <div className={classes.right}>
                                <label className={classes.date}>May 1</label>
                                <div className={classes.buttonDiv}>
                                    <FontAwesomeIcon icon={faCircleCheck} className={classes.icon}/>
                                    <FontAwesomeIcon icon={faCircleXmark} className={classes.icon}/>
                                </div>
                             </div>
                           </div>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default ConnectionRequests