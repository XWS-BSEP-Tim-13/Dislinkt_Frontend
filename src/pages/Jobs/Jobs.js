import classes from './Jobs.module.css';
import JobOffer from "../../components/JobOffer/JobOffer"

const Jobs = () => {
    const jobOffers=[1, 2, 3];

    return (
      <div className={classes.wrapper}>
          <h3>Explore job offers</h3><hr/>
          <div className={classes.jobOffers}>
                  {
                      jobOffers.map((message,i)=>
                          <div className={classes.jobOffer}>
                              <JobOffer></JobOffer>
                          </div>
                      )
                  }
            </div>
      </div>
    )
  }
  
  export default Jobs