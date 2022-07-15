import classes from './Network.module.css';
import React from 'react'
import ConnectionRequests from '../../components/ConnectionRequests/ConnectionRequests';
import SuggestedConnections from '../../components/SuggestedConnections/SuggestedConnections';
import ProfileSummary from '../../components/ProfileSummary/ProfileSummary';
import { getUserByUsername } from "../../api/UserProfile/UserProfileApi"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Network = () => {

    const [user, setUser] = useState({});
    const auth = useSelector(state => state.loginReducer);

    useEffect(() => {
        async function getUser() {
            const userr = await getUserByUsername(auth.username);
            setUser(userr);
        }
        getUser()
    }, [auth.username])

    return (
        <div className={classes.container}>
            <div className={classes.profileSummary}>
                <ProfileSummary user={user}/>
            </div>
            <div className={classes.network}>
                <ConnectionRequests />
                <SuggestedConnections />
            </div>
        </div>
    )
}

export default Network