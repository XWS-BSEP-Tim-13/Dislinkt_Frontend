import classes from './Chat.module.css';
import User from '../../images/user.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faL, faLink } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {
    const messages=[1, 2, 3];
    const [messageContent, setMessageContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")

    return (
      <div className={classes.wrapper}>
          <div className={classes.header}>
              <label>Ana Gavrilovic</label>
          </div>
          <div className={classes.contact}>
              <img src={User}  className={classes.img}/>
              <h5>Ana Gavrilovic</h5>
              <h6> Faculty of tehnical sciences</h6>
          </div>
             <div className={classes.messages}>
                  {
                      messages.map((message,i)=>
                          <div className={classes.message}>
                               <div className={classes.dateWrap}>
                                   <hr></hr>
                                   <label className={classes.date}>May 1</label>
                                   <hr></hr>
                               </div>
                               <div className={classes.user}>
                                    <img src={User}  className={classes.img}/>
                                    <h6>Marija Kljestan</h6>
                                </div>
                               <div className={classes.content}>
                                  <label className={classes.content}>{messageContent}</label>
                               </div>
                          </div>
                      )
                  }
            </div><hr/>
            <div className={classes.newMessage}>
                 <textarea placeholder='Write a message'></textarea>
                 <div className={classes.messageMedia}>
                    <div className={classes.media}>
                        <FontAwesomeIcon icon={faImage} className={classes.icon}/>
                        <FontAwesomeIcon icon={faLink} className={classes.icon}/>
                    </div>
                    <button className={classes.sendBtn}>Send</button>
                 </div>
            </div>
      </div>
    )
  }
  
  export default Chat