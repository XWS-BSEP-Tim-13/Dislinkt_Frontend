import classes from './Homepage.module.css';
import Messaging from "../../components/MessagingHomePage/Messaging";
import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/Posts/Posts";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
function Homepage() {

    const auth=useSelector(state =>state.loginReducer);
    useEffect(()=>{
        console.log(auth)
    },[auth])

    return (
        <div className={classes.containerWrap}>
            <div className={classes.content}>
                <div className={classes.gap}></div>
                <div className={classes.feed}>
                    <div className={classes.parts}>
                        <div className={classes.main}>
                            <div>
                                <CreatePost></CreatePost>
                                <Posts className={classes.margin}></Posts>
                            </div>
                        </div>
                        <div className={classes.connect}>

                        </div>
                    </div>

                </div>
                <div className={classes.messaging}>
                    <Messaging></Messaging>
                </div>
            </div>
        </div>
    );
}

export default Homepage;