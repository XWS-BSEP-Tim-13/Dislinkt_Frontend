import React from 'react'
import classes from './SuggestedConnections.module.css';
import { useState } from 'react';
import Background from '../../images/maroon-bg.jpg'
import User from '../../images/user-128.png'


const SuggestedConnections = () => {

    const [requsts, setRequests] = useState([1, 2, 3, 4, 5, 6, 7])

    return (
        <div className={classes.container}>
            <label className={classes.headerLabel}>Suggested connections</label>
            <div className={classes.connectionWrap}>
                {
                    requsts.map((connection, index) =>
                        <div className={classes.connection}>
                            <img src={Background} alt="" className={classes.background} />
                            <div className={classes.imageContainer}>
                                <img src={User} className={classes.image} alt="User" />
                            </div>
                            <div className={classes.description}>
                                <div>
                                    <label>Srdjan Sukovic</label>
                                    <label className={classes.descriptionProffesion}>Faculty of technical science, Novi Sad (student)</label>
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