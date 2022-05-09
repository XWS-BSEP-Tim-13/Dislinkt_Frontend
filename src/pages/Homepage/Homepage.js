import Navigation from "../../components/Navigation/Navigation";
import classes from './Homepage.module.css';
import Messaging from "../../components/MessagingHomePage/Messaging";
import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/Posts/Posts";
function Homepage() {
    return (
        <div className={classes.containerWrap}>
            <Navigation></Navigation>
            <div className={classes.content}>
                <div className={classes.gap}></div>
                <div className={classes.feed}>
                    <div className={classes.parts}>
                        <div className={classes.main}>
                            <div>
                                <CreatePost></CreatePost>
                                <Posts></Posts>
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