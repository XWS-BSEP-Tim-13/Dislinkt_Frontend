import classes from './Homepage.module.css';
import CreatePost from "../../components/CreatePost/CreatePost";
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary";
import SuggestionsHomepage from "../../components/SuggestionsHomepage/SuggestionsHomepage";
import Posts from "../../components/Posts/Posts";
import { getUserByUsername } from "../../api/UserProfile/UserProfileApi"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CheckUserPermission } from "../../components/Permissions/CheckUserPermission"

function Homepage() {

    const [user, setUser] = useState({});
    const auth = useSelector(state => state.loginReducer);

    useEffect(() => {
        async function getUser() {
            const userr = await getUserByUsername(auth.username);
            setUser(userr);
        }
        getUser()
    }, [auth.username])

    return (
        <div className={classes.containerWrap}>
            <div className={classes.content}>
                <div className={classes.profileSummary}>
                    <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <ProfileSummary user={user}/> </CheckUserPermission>
                </div>
                <div className={classes.feed}>
                    <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <CreatePost></CreatePost> </CheckUserPermission>
                    <Posts ></Posts>
                </div>
                <div className={classes.suggestions}>
                    <CheckUserPermission role="['ADMIN', 'USER']"> <SuggestionsHomepage></SuggestionsHomepage></CheckUserPermission>
                </div>
            </div>
        </div>
    );
}

export default Homepage;