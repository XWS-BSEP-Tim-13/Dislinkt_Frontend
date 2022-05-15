import classes from './Network.module.css';
import React from 'react'
import ConnectionRequests from '../../components/ConnectionRequests/ConnectionRequests';
import SuggestedConnections from '../../components/SuggestedConnections/SuggestedConnections';
const Network = () => {
  return (
    <div className={classes.container}>
        <ConnectionRequests/>
        <SuggestedConnections/>
    </div>
  )
}

export default Network