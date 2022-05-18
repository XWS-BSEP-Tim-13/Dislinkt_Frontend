import classes from './Network.module.css';
import React from 'react'
import ConnectionRequests from '../../components/ConnectionRequests/ConnectionRequests';
import SuggestedConnections from '../../components/SuggestedConnections/SuggestedConnections';
import ProfileSummary from '../../components/ProfileSummary/ProfileSummary';

const Network = () => {
    return (
        <div className={classes.container}>
            <div className={classes.profileSummary}>
                <ProfileSummary/>
            </div>
            <div className={classes.network}>
                <ConnectionRequests />
                <SuggestedConnections />
            </div>
        </div>
    )
}

export default Network