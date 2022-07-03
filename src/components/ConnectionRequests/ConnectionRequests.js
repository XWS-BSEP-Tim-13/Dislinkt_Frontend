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
            setConnections(resp.data.requests)
        })
    }, [])

    function getPosition(connection) {
        if (connection.from) {
            let position;
            let company;

            const positions = connection.from.experiences.sort(
                (objA, objB) => Number(objB.startDate) - Number(objA.startDate),
            );

            if (positions.length > 0) {
                position = positions[0].title;
                company = positions[0].companyName;

                return `${position} at ${company}`;
            }

            const educations = connection.from.educations.sort(
                (objA, objB) => Number(objB.startDate) - Number(objA.startDate),
            );

            if (educations.length > 0) {
                position = 'Student';
                company = educations[0].school;

                return `${position} at ${company}`;
            }

            return `No information`;
        } else {
            return `Loading...`;
        }
    }

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
                                            <label className={classes.contentProffesion}>{getPosition(connection)}</label>
                                        </div>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <FontAwesomeIcon icon={faCircleCheck} className={classes.icon} />
                                        <FontAwesomeIcon icon={faCircleXmark} className={classes.icon} />
                                        <label className={classes.date}>{connection.from ? new Date(connection.requestTime).toLocaleString() : null}</label>
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