import classes from './Events.module.css';
import Event from "../../components/Event/Event"
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary"
import { getUserByUsername } from "../../api/UserProfile/UserProfileApi"
import { useSelector } from 'react-redux';
import { CheckUserPermission } from "../../components/Permissions/CheckUserPermission"
import ConnectionService from '../../services/ConnectionService';
import PostService from '../../services/PostService';
import { useEffect, useState } from 'react';

const Events = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        PostService.events().then(resp => {
            setEvents(resp.data.events)
            console.log(resp.data.events)
            /*ConnectionService.events().then(resp => {
                setEvents(events => [...events, resp.data.events])
                console.log(resp.data.events)
                
            })*/
        })
    }, [])

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
        <div className={classes.pageWrapper}>
            <div className={classes.profileSummary}>
                <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <ProfileSummary user={user} /> </CheckUserPermission>
            </div>
            <div className={classes.wrapper}>
                

                <label className={classes.header}>Application events</label>
                <div className={classes.jobOffers}>
                    {
                        events.map((event, i) =>
                            <div className={classes.jobOffer} key={i}>
                                <Event event={event}></Event>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Events