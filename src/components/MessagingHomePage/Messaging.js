import classes from './Messaging.module.css';
import User from '../../images/user.png'
import { useState } from 'react';
function Messaging() {


    const messages=[1,2,3]
    const [dummyData,setDummyData] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")
    return (
        <div className={classes.containerWrap}>
            <div className={classes.header}>
                <img src={User}  className={classes.img}/>
                <label>Messaging</label>
            </div>
            <div className={classes.messages}>
                {
                    messages.map((message,i)=>
                        <div className={classes.message}>
                             <img src={User}  className={classes.img}/>
                             <div className={classes.content}>
                                <label>Marija Kljestan</label>
                                <label className={classes.content}>{dummyData}</label>
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