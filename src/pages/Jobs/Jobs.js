import classes from './Jobs.module.css';
import JobOffer from "../../components/JobOffer/JobOffer"
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary"
import { CheckUserPermission } from "../../components/Permissions/CheckUserPermission"

const Jobs = () => {

    const jobOffers = [1, 2, 3, 4];

    return (
        <div className={classes.pageWrapper}>
            <div className={classes.profileSummary}>
                <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <ProfileSummary/> </CheckUserPermission>
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