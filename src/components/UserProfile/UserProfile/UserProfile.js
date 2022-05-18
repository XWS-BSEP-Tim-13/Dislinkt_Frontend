import ProfileCover from "../ProfileCover/ProfileCover"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import Experiences from "../Experiences/Experiences"
import classes from './UserProfile.module.css'
import AboutUser from "../AboutUser/AboutUser"
import Educations from "../Educations/Educations"
import Skills from "../Skills/Skills"
import Interests from "../Interests/Interests"
import { useEffect, useState } from "react"
import { getUserByUsername } from "../../../api/UserProfile/UserProfileApi"
import AddExperience from "../AddExperience/AddExperience"
import SuggestionsHomepage from "../../SuggestionsHomepage/SuggestionsHomepage"
import AddEducation from "../AddEducation/AddEducation"

const UserProfile = () => {

    const [user, setUser] = useState({});
    const [addExperienceVisible, setAddExperienceVisible] = useState(false);
    const [addEducationVisible, setAddEducationVisible] = useState(false);

    async function reload() {
        const user = await getUserByUsername("suki");
        setUser(user);
    }

    useEffect(() => {
        async function getUser() {
            const user = await getUserByUsername("suki");
            setUser(user);
        }

        getUser()
    }, [])

    function toggleAddExperienceModal() {
        setAddExperienceVisible(!addExperienceVisible);
    }

    function toggleAddEducationModal(){
        setAddEducationVisible(!addEducationVisible);
    }

    return (
        <div className={classes.container}>
            <div className={classes.userProfile}>
                <div className={classes.header}>
                    <ProfileCover />
                    {user.username && <ProfileInfo user={user}/>}
                </div>
                {user.biography && <AboutUser bio={user.biography}/>}
            {user.experiences && <Experiences experiences={user.experiences} toggleAddExperience={toggleAddExperienceModal} userId={user.id} reload={reload}/>}
            {user.educations && <Educations educations={user.educations} toggleAddEducation={toggleAddEducationModal} userId={user.id} reload={reload}/>}
            {user.skills && <Skills skills={user.skills}/>}
            {user.interests && <Interests interests={user.interests}/>}
            {addExperienceVisible && <AddExperience toggleAddExperience={toggleAddExperienceModal} user={user} reload={reload}/>}
            {addEducationVisible && <AddEducation toggleAddEducation={toggleAddEducationModal} user={user} reload={reload}/>}
            </div>
            <div className={classes.suggestions}>
                <SuggestionsHomepage />
            </div>

        </div>

    )
}

export default UserProfile