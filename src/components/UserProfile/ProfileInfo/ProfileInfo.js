import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

const ProfileInfo = ({ user }) => {

    return (
        <div className={classes.flexRow}>
            <div className={classes.info}>
                <h2> {user.firstName} {user.lastName} <span className={classes.subtitle}>@{user.username}</span></h2>
                <p className={classes.subtitle}> Faculty of Technical Sciences, Novi Sad </p>
                <p className={`${classes.subtitle} ${classes.connections}`}> 152 connections </p>
            </div>
            <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon} />
        </div>
    )
}

export default ProfileInfo