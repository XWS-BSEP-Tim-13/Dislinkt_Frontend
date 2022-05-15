import React from 'react'
import classes from './SuggestedConnections.module.css';
import { useState } from 'react';
import Background from '../../images/network-background.jpg'
import User from '../../images/user.png'
const SuggestedConnections = () => {

 const [requsts,setRequests] = useState([1,2,3,4,5])

  return (
    <div className={classes.container}>
        <label className={classes.headedLabel}>Suggested connections</label>
        <div className={classes.connectionWrap}>
            {
                requsts.map((connection,index)=>
                    <div>
                        <img src={Background} alt="" className={classes.background}/> 
                        <img src={User} alt="" className={classes.user}/>   
                        <div className={classes.description}>
                            <div>
                                <label>Srdjan Sukovic</label>
                                <label className={classes.descriptionLab}>Faculty of technical science, Novi Sad (student)</label>
                            </div>
                            <div>
                                <button className={classes.button}>Connect</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        </div>
  )
}

export default SuggestedConnections