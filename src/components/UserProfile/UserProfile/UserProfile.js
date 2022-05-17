import ProfileCover from "../ProfileCover/ProfileCover"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import Experiences from "../Experiences/Experiences"
import classes from './UserProfile.module.css'
import AboutUser from "../AboutUser/AboutUser"
import Educations from "../Educations/Educations"
import Skills from "../Skills/Skills"
import Interests from "../Interests/Interests"
import { useEffect, useState } from "react"
import {getUserByUsername} from "../../../api/UserProfile/UserProfileApi"
import AddExperience from "../AddExperience/AddExperience"

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [addExperienceVisible, setAddExperienceVisible] = useState(false);

    useEffect(() => {
        async function getUser(){
            const user = await getUserByUsername("suki");
            setUser(user);
        }

        getUser()
        console.log('inside use effect')
    }, [])

    function toggleAddExperienceModal(){
        setAddExperienceVisible(!addExperienceVisible);
    }

    return (
        <div className={classes.container}>
            <ProfileCover />
            <ProfileInfo user={user}/>
            <AboutUser bio={user.biography}/>
            {user.experiences && <Experiences experiences={user.experiences} toggleAddExperience={toggleAddExperienceModal}/>}
            {user.educations && <Educations educations={user.educations}/>}
            {user.skills && <Skills skills={user.skills}/>}
            {user.interests && <Interests interests={user.interests}/>}
            {addExperienceVisible && <AddExperience toggleAddExperience={toggleAddExperienceModal}/>}
        </div>

    )
}

export default UserProfile