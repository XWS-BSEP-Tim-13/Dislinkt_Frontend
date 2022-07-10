import React from 'react'
import classes from './SuggestedConnections.module.css';
import { useEffect, useState } from 'react';
import Background from '../../images/maroon-bg.jpg'
import User from '../../images/user-128.png'
import UserService from '../../services/UserService';
import { useSelector } from 'react-redux';

const SuggestedConnections = () => {

    const [suggestions, setSuggestions] = useState([1, 2, 3])
    const auth = useSelector(state => state.loginReducer);

    useEffect(()=>{
        UserService.getConnectionSuggestionsForUser(auth.username).then(resp=>{
            setSuggestions(resp.data.usernames)      
        })
    },[])

    function sendRequest(usernameTo){
        UserService.requestConnection(usernameTo).then(() =>  console.log(usernameTo));
    }

    return (
        <div className={classes.container}>
            <label className={classes.headerLabel}>Suggested connections</label>
            <div className={classes.connectionWrap}>
                {
                    suggestions.map((connection, index) =>
                        <div className={classes.connection} key={index}>
                            <img src={Background} alt="" className={classes.background} />
                            <div className={classes.imageContainer}>
                                <img src={User} className={classes.image} alt="User" />
                            </div>
                            <div className={classes.description}>
                                <div>
                                    <label>{connection}</label>
                                    <label className={classes.descriptionProffesion}>Faculty of technical science, Novi Sad (student)</label>
                                </div>
                                <div>
                                    <button className={classes.button} onClick={() => sendRequest(connection)}>Connect</button>
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