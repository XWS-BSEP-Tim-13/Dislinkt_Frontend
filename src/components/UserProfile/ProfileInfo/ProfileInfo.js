import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

const ProfileInfo = ({ user }) => {
    return (
        <div className={classes.flexRow}>
            <div className={classes.info}>
                <h2> {user.firstName} {user.lastName} </h2>
                <p className={classes.subtitle}> @{user.username} </p>
            </div>
            <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon} />
        </div>
    )
}

export default ProfileInfo