import classes from './MessagingPage.module.css';
import Messaging from "../../components/MessagingHomePage/Messaging";
import Chat from "../../components/Chat/Chat"
import { useEffect, useState } from 'react';
import PostService from '../../services/PostService'
import { useParams } from 'react-router';
const MessagingPage = () => {

    const [messages,setMessages] =useState([])
    const [chat,setChat] = useState(undefined)
    const {username} = useParams()
    useEffect(()=>{
        if (username != undefined){
            PostService.getMessagesForTwoUsers(username).then(resp=>{
                console.log(resp.data)
                setChat(resp.data.messages)
                PostService.getMessagesForUser().then(resp=>{
                    setMessages(resp.data.messages)
                    console.log(resp.data.messages)
                })
            })
        }else{
        PostService.getMessagesForUser().then(resp=>{
            setMessages(resp.data.messages)
            console.log(resp.data.messages)
        })
    }
    },[])

    function change(message){
        setChat(message)
    }

    return (
      <div className={classes.wrapper}>
        <div className={classes.messages}>
            <Messaging change={change}></Messaging>
        </div>
        <div className={classes.chat}>
            {chat !=undefined && <Chat chat={chat}></Chat>}
        </div>
      </div>
    )
  }
  
  export default MessagingPage