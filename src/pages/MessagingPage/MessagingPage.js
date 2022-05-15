import classes from './MessagingPage.module.css';
import Messaging from "../../components/MessagingHomePage/Messaging";
import Chat from "../../components/Chat/Chat"

const MessagingPage = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.messages}>
            <Messaging></Messaging>
        </div>
        <div className={classes.chat}>
            <Chat></Chat>
        </div>
      </div>
    )
  }
  
  export default MessagingPage