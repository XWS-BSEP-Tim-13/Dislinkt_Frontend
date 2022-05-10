import ProfileCover from "../ProfileCover/ProfileCover"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import classes from './UserProfile.module.css'

const UserProfile = () => {
  return (
      <div className={classes.container}>
        <ProfileCover />
        <ProfileInfo />
      </div>
    
  )
}

export default UserProfile