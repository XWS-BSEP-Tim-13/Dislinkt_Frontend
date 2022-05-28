import classes from './Jobs.module.css';
import JobOffer from "../../components/JobOffer/JobOffer"
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary"
import { getUserByUsername } from "../../api/UserProfile/UserProfileApi"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CheckUserPermission } from "../../components/Permissions/CheckUserPermission"

const Jobs = () => {

    const jobOffers = [1, 2, 3, 4];

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
                <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <ProfileSummary user={user}/> </CheckUserPermission>
            </div>
            <div className={classes.wrapper}>
                <label className={classes.header}>Explore job offers</label>
                <div className={classes.jobOffers}>
                    {
                        jobOffers.map((message, i) =>
                            <div className={classes.jobOffer} key={i}>
                                <JobOffer></JobOffer>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs