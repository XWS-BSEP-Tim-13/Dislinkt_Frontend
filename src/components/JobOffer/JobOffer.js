import classes from './JobOffer.module.css';
import Levi9 from '../../images/levi9.png'

const JobOffer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imageContainer}>
                <img src={Levi9} className={classes.image} alt="Profile" />
            </div>
            <div className={classes.jobDescription}>
                <div className={classes.job}>
                    <h2>DevOps Engineer</h2>
                    <h3>Levi9 Serbia</h3>
                    <label>Serbia (Remote)</label>
                </div>
                <div className={classes.offerStatus}>
                    <label>4 days ago</label>
                    <label className={classes.applicants}>15 applicants</label>
                </div>
            </div>
        </div>
    )
}

export default JobOffer