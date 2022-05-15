import classes from './JobOffer.module.css';
import Levi9 from '../../images/levi9.png'

const JobOffer = () => {
    return (
      <div className={classes.wrapper}>
          <div className={classes.imgWrapper}>
              <img src={Levi9}  className={classes.img}/>
          </div>
          <div className={classes.jobDescription}>
              <h5>DevOps Engineer</h5>
              <h6>Levi9 Serbia</h6>
              <label>Serbia (Remote)</label>
              <div className={classes.offerStatus}>
                  <label>4 days ago</label>
                  <label className={classes.applicants}>15 applicants</label>
              </div>
          </div>    
      </div>
    )
  }
  
  export default JobOffer