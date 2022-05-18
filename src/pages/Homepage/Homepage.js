import classes from './Homepage.module.css';
import CreatePost from "../../components/CreatePost/CreatePost";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import SuggestionsHomepage from "../../components/SuggestionsHomepage/SuggestionsHomepage";
import Posts from "../../components/Posts/Posts";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Homepage() {

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
                            </div>
                        </div>
                        <div className={classes.connect}>

                        </div>
                    </div>
                </div>
                <div className={classes.suggestions}>
                    <SuggestionsHomepage></SuggestionsHomepage>
                </div>
            </div>
        </div>
    );
}

export default Homepage;