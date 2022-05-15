import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faLocation } from '@fortawesome/free-solid-svg-icons'

const ProfileInfo = () => {
  return (
    <div className={classes.flexRow}>
        <div className={classes.info}>
            <h2> Elon Musk </h2>
            <p className={classes.subtitle}> Entrepreneur, investor, and business magnate.</p>
            <div className={classes.location}>
                <FontAwesomeIcon icon={faLocation}/> Pretoria, South Africa 
            </div>
        </div>
        <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon}/>
    </div>
  )
}

export default ProfileInfo