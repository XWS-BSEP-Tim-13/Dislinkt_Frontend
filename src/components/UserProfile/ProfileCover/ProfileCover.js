import classes from './ProfileCover.module.css'
import avatar from '../../../images/avatar.jfif'
import cover from '../../../images/cover.jpeg'

const ProfileCover = () => {
    return (
        <div>
            <div className={classes.cover}>
                <img src={cover} alt='cover' className={classes.imgCover} />
                <div className={classes.avatar}>
                    <img src={avatar} className={classes.image} alt="Profile" />
                </div>
            </div>
        </div>

    )
}

export default ProfileCover;