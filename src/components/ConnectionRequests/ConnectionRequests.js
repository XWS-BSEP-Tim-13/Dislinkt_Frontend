import React, { useEffect, useState } from 'react'
import classes from './ConnectionRequest.module.css';
import User from '../../images/user-red.png'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserService from '../../services/UserService';
import { useSelector } from 'react-redux';
const ConnectionRequests = () => {

    const [connections, setConnections] = useState([1, 2, 3])
    const auth = useSelector(state => state.loginReducer);

    useEffect(() => {
        UserService.getConnectionRequestsForUser(auth.username).then(resp => {
            setConnections(resp.data.requests);

            console.log(resp.data.requests);
        })
    }, [])

    return (
        <div className={classes.container}>
            {
                connections.length === 0 ? (
                    <div>No pending invitations</div>
                ) : (
                    <div className={classes.conContainer}>
                        <label>Connection requests</label>
                        {
                            connections.map((connection, index) =>
                                <div className={classes.conection} key={index}>
                                        <div className={classes.connectionDetails}>
                                            <div className={classes.imageContainer}>
                                                <img src={User} className={classes.image} alt="User" />
                                            </div>
                                            <div className={classes.content}>
                                                {<label> {connection.from != undefined ? connection.from.firstName : null}  {connection.from != undefined ? connection.from.lastName : null} </label>}
                                                <label className={classes.contentProffesion}>{connection.from != undefined ? connection.from.experiences[-1] != '' ? connection.from.experiences[-1] : '' : null}</label>
                                            </div>
                                        </div>
                                    <div className={classes.buttonDiv}>
                                        <FontAwesomeIcon icon={faCircleCheck} className={classes.icon} />
                                        <FontAwesomeIcon icon={faCircleXmark} className={classes.icon} />
                                        <label className={classes.date}>May 1</label>
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