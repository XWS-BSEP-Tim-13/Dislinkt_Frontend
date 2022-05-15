import ProfileCover from "../ProfileCover/ProfileCover"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import Experiences from "../Experiences/Experiences"
import classes from './UserProfile.module.css'
import AboutUser from "../AboutUser/AboutUser"
import Educations from "../Educations/Educations"
import Skills from "../Skills/Skills"
import Interests from "../Interests/Interests"

const UserProfile = () => {
  return (
      <div className={classes.container}>
        <ProfileCover />
        <ProfileInfo />
        <AboutUser />
        <Experiences />
        <Educations />
        <Skills />
        <Interests />
      </div>
    
  )
}

export default UserProfile