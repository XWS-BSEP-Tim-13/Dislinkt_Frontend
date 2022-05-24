import classes from './Chat.module.css';
import User from '../../images/user-128.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {

    const messages = [1, 2, 3, 4, 5];
    const [messageContent, setMessageContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <label>Ana Gavrilovic</label>
            </div>
            <div className={classes.messagesWindow}>
                <div className={classes.contact}>
                    <div className={classes.imageContainer}>
                        <img src={User} className={classes.image} alt="Profile" />
                    </div>
                    <div className={classes.contactInfo}>
                        <h5>Ana Gavrilovic</h5>
                        <h6> Faculty of tehnical sciences</h6>
                    </div>
                </div>
                <div className={classes.messages}>
                    {
                        messages.map((message, i) =>
                            <div className={classes.message} key={i}>
                                <div className={`${true ? classes.messageFrom : classes.messageTo}`}>
                                    <div className={`${true ? classes.messageHeaderFrom : classes.messageHeaderTo}`}>
                                        <label className={`${true ? classes.personFrom : classes.personTo}`}>Ana Gavrilovic</label>
                                        <label className={classes.date}>15:39, May 1</label>
                                    </div>
                                    <div className={`${true ? classes.contentFrom : classes.contentTo}`}>
                                        <label>{messageContent}</label>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={classes.newMessage}>
                <div className={classes.messageInput}>
                    <div className={classes.writeMessage} contentEditable="true" placeholder="Write a message..."></div>
                    <div className={classes.media}>
                        <FontAwesomeIcon icon={faImage} className={classes.icon} />
                        <FontAwesomeIcon icon={faLink} className={classes.icon} />
                    </div>
                </div>

                <div className={classes.send}>
                    <button className={classes.sendBtn}><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
    )
}

export default Chat;