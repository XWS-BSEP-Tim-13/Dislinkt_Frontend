import classes from './Homepage.module.css';
import Messaging from "../../components/MessagingHomePage/Messaging";
import CreatePost from "../../components/CreatePost/CreatePost";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import SuggestionsHomepage from "../../components/SuggestionsHomepage/SuggestionsHomepage";
import Posts from "../../components/Posts/Posts";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Homepage() {

    const [messagesOpen, setMessagesOpen] = useState(false);

    const auth = useSelector(state => state.loginReducer);

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <div className={classes.containerWrap}>
            <div className={classes.content}>
                <div className={classes.profileSummary}>
                    <ProfileSummary />
                </div>
                <div className={classes.feed}>
                    <div className={classes.parts}>
                        <div className={classes.main}>
                            <div>
                                <CreatePost></CreatePost>
                                <Posts ></Posts>
                                <Posts ></Posts>
                                <Posts ></Posts>
                                <Posts ></Posts>
                            </div>
                        </div>
                        <div className={classes.connect}>

                        </div>
                    </div>
                </div>
                <div className={classes.suggestions}>
                    <SuggestionsHomepage></SuggestionsHomepage>
                </div>
                <div className={`${classes.messaging} ${classes.transform} ${messagesOpen ? classes.transformActive : null}`}>
                    <Messaging clickHandler={() => setMessagesOpen(!messagesOpen)} 
                        isMessagesOpen={messagesOpen}>
                    </Messaging>
                </div>
            </div>
        </div>
    );
}

export default Homepage;