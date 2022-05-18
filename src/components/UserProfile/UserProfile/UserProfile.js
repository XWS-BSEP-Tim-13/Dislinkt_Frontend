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
import AddEducation from "../AddEducation/AddEducation"
import AddSkill from "../AddSkill/AddSkill"

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [addExperienceVisible, setAddExperienceVisible] = useState(false);
    const [addEducationVisible, setAddEducationVisible] = useState(false);
    const [addSkillVisible, setAddSkillVisible] = useState(false);

    async function reload(){
        const user = await getUserByUsername("suki");
        setUser(user);
    }

    useEffect(() => {
        async function getUser(){
            const user = await getUserByUsername("suki");
            setUser(user);
        }

        getUser()
    }, [])

    function toggleAddExperienceModal(){
        setAddExperienceVisible(!addExperienceVisible);
    }

    function toggleAddEducationModal(){
        setAddEducationVisible(!addEducationVisible);
    }

    function toggleAddSkillModal(){
        setAddSkillVisible(!addSkillVisible);
    }

    return (
        <div className={classes.container}>
            <ProfileCover />
            {user.username && <ProfileInfo user={user}/>}
            {user.biography && <AboutUser bio={user.biography}/>}
            {user.experiences && <Experiences experiences={user.experiences} toggleAddExperience={toggleAddExperienceModal} userId={user.id} reload={reload}/>}
            {user.educations && <Educations educations={user.educations} toggleAddEducation={toggleAddEducationModal} userId={user.id} reload={reload}/>}
            {user.skills && <Skills skills={user.skills} toggleAddSkill={toggleAddSkillModal} userId={user.id} reload={reload}/>}
            {user.interests && <Interests interests={user.interests}/>}
            {addExperienceVisible && <AddExperience toggleAddExperience={toggleAddExperienceModal} user={user} reload={reload}/>}
            {addEducationVisible && <AddEducation toggleAddEducation={toggleAddEducationModal} user={user} reload={reload}/>}
            {addSkillVisible && <AddSkill toggleAddSkill={toggleAddSkillModal} user={user} reload={reload}/>}
        </div>

    )
}

export default UserProfile