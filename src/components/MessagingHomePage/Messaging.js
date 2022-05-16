import classes from './Messaging.module.css';
import User from '../../images/user-red.png'
import { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Messaging(props) {

    const messages = [1, 2, 3];
    const [dummyData, setDummyData] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");

    return (
        <div className={classes.containerWrap}>
            <div className={classes.header}>
                <div>
                    <div className={classes.imageContainer}>
                        <img src={User} className={classes.image} alt="Profile" />
                    </div>
                    <label>Messaging</label>
                </div>
                <button className={classes.openCloseButton} onClick={props.clickHandler}>
                    { props.isMessagesOpen ? 
                        <FontAwesomeIcon icon={faAngleDown} className={classes.buttonIcon}/> :
                        <FontAwesomeIcon icon={faAngleUp} className={classes.buttonIcon}/>
                    }
                </button>
            </div>
            <div className={classes.messages}>
                {
                    messages.map((message, i) =>
                        <div className={classes.message}>
                            <div className={classes.imageContainer}>
                                <img src={User} className={classes.image} alt="Profile" />
                            </div>
                            <div className={classes.content}>
                                <label className={classes.name}>Marija Kljestan</label>
                                <label>{dummyData}</label>
                            </div>
                            <label className={classes.date}>May 1</label>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Messaging;