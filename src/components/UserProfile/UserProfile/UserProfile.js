import ProfileCover from "../ProfileCover/ProfileCover"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import Experiences from "../Experiences/Experiences"
import classes from './UserProfile.module.css'
import AboutUser from "../AboutUser/AboutUser"

const UserProfile = () => {
  return (
      <div className={classes.container}>
        <ProfileCover />
        <ProfileInfo />
        <AboutUser />
        <Experiences />
      </div>
    
  )
}

export default UserProfile