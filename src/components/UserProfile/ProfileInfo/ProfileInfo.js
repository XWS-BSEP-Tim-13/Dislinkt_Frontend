import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

const ProfileInfo = () => {
  return (
    <div className={classes.flexRow}>
        <div className={classes.info}>
            <h2> Elon Musk </h2>
            <p> Entrepreneur, investor, and business magnate.</p>
            <p> Pretoria, South Africa </p>
        </div>
        <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon}/>
    </div>
  )
}

export default ProfileInfo