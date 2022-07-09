import classes from './Chat.module.css';
import User from '../../images/user-128.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';
import PostService from '../../services/PostService';
const Chat = ({chat}) => {

    const [messageContent, setMessageContent] = useState("")
    const auth = useSelector(state => state.loginReducer);
    const [messages,setMessages] = useState([])
    const domInputRef = useRef(null);
    useEffect(() => {
      setMessages(chat.messages)
    }, [chat])

    useEffect(()=>{
        var objDiv = document.getElementById("message-div");
        objDiv.scrollTop = objDiv.scrollHeight;
        console.log(objDiv)
    },[messages])

    function getUsername(){
            if(auth.username != chat.firstUser) return chat.firstUser
            return chat.secondUser
    }
    
    function checkWhichMessage(message){
        if(auth.username == message.messageFrom) return true
        return false
    }

    function getDate(time){
        var options = { hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric' };
        const now = new Date(time)
        return now.toLocaleDateString("en-US",options)
    }

    function sendMessage(){
        let username =""
        if(auth.username != chat.firstUser) username=chat.firstUser
        else username= chat.secondUser

        const message ={
            "messageFrom" : auth.username,
            "messageTo" : username,
            "content" : messageContent
        }
        PostService.sendMessage(message).then(resp=>{
            setMessages([...messages,resp.data])
            domInputRef.current.innerText = ""
            setMessageContent("")
        })
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <label>{getUsername()}</label>
            </div>
            <div className={classes.messagesWindow} id="message-div">
                <div className={classes.contact}>
                    <div className={classes.imageContainer}>
                        <img src={User} className={classes.image} alt="Profile" />
                    </div>
                    <div className={classes.contactInfo}>
                        <h5>{getUsername()}</h5>
                        <h6> Faculty of tehnical sciences</h6>
                    </div>
                </div>
                <div className={classes.messages}>
                    {
                        messages.map((message, i) =>
                            <div className={classes.message} key={i}>
                                <div className={`${checkWhichMessage(message) ? classes.messageFrom : classes.messageTo}`}>
                                    <div className={`${checkWhichMessage(message) ? classes.messageHeaderFrom : classes.messageHeaderTo}`}>
                                        <label className={`${checkWhichMessage(message) ? classes.personFrom : classes.personTo}`}>{message.messageFrom}</label>
                                        <label className={classes.date}>{getDate(message.date)}</label>
                                    </div>
                                    <div className={`${checkWhichMessage(message) ? classes.contentFrom : classes.contentTo}`}>
                                        <label>{message.content}</label>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={classes.newMessage}>
                <div className={classes.messageInput}>
                    <div className={classes.writeMessage} contentEditable="true" placeholder="Write a message..." ref={domInputRef} onInput={e => setMessageContent(e.currentTarget.textContent)} ></div>
                    <div className={classes.media}>
                        <FontAwesomeIcon icon={faImage} className={classes.icon} />
                        <FontAwesomeIcon icon={faLink} className={classes.icon} />
                    </div>
                </div>

                <div className={classes.send}>
                    <button className={classes.sendBtn}><FontAwesomeIcon icon={faPaperPlane} onClick={sendMessage}/></button>
                </div>
            </div>
        </div>
    )
}

export default Chat;