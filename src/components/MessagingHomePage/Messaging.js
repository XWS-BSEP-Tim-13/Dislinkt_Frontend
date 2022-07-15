import classes from './Messaging.module.css';
import User from '../../images/user-red.png'
import { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostService from '../../services/PostService';
import { useSelector } from 'react-redux';
function Messaging(props) {

    const [messages,setMessages] = useState([]);
    const auth = useSelector(state => state.loginReducer);

    useState(()=>{
        PostService.getMessagesForUser().then(resp=>{
            setMessages(resp.data.messages)
        })
    },[])

    function getUsername(message){
        if(auth.username != message.firstUser) return message.firstUser
        return message.secondUser
    }

    function getContent(message){
        return message.messages[0].content
    }

    function getDate(time){
        const now = new Date(time)
        console.log(now)
        return now.toLocaleDateString("en-US")
    }

    function openMessage(message){
        props.change(message)
    }

    return (
        <div className={`${props.page === 'app' ? classes.containerWrap : classes.containerWrapMessages}`}>
            <div className={classes.header}>
                <div className={classes.messaging}>
                    <div className={classes.imageContainer}>
                        <img src={User} className={classes.image} alt="Profile" />
                    </div>
                    <label>Messaging</label>
                </div>
                { props.page === 'app' ? 
                    <button className={classes.openCloseButton} onClick={props.clickHandler}>
                        { props.isMessagesOpen ? 
                            <FontAwesomeIcon icon={faAngleDown} className={classes.buttonIcon}/> :
                            <FontAwesomeIcon icon={faAngleUp} className={classes.buttonIcon}/>
                        }
                    </button> : null 
                }
            </div>
            <div className={classes.messages} >
                {
                    messages.map((message, i) =>
                        <div className={classes.message} key={message.id} onClick={() =>openMessage(message)}>
                            <div className={classes.imageContainer}>
                                <img src={User} className={classes.image} alt="Profile" />
                            </div>
                            <div className={classes.content}>
                                <label className={classes.name}>{getUsername(message)}</label>
                                <label>{getContent(message)}</label>
                            </div>
                            <label className={classes.date}>{getDate(message.messages[0].date)}</label>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Messaging;