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
import AddSkill from "../AddSkill/AddSkill"
import { useSelector } from 'react-redux';

const UserProfile = () => {

    const [user, setUser] = useState({});
    const [addExperienceVisible, setAddExperienceVisible] = useState(false);
    const [addEducationVisible, setAddEducationVisible] = useState(false);
    const [addSkillVisible, setAddSkillVisible] = useState(false);

    const auth = useSelector(state => state.loginReducer);

    async function reload() {
        const user = await getUserByUsername(auth.username);
        setUser(user);
    }

    useEffect(() => {
        async function getUser() {
            getUserByUsername(auth.username)
                .catch(function (error) {
                    if (error.response) {
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }

                })
                .then((data) => {
                    setUser(data);
                }
                );

        }

        getUser()
    }, [auth.username])

    function toggleAddExperienceModal() {
        setAddExperienceVisible(!addExperienceVisible);
    }

    function toggleAddEducationModal() {
        setAddEducationVisible(!addEducationVisible);
    }

    function toggleAddSkillModal() {
        setAddSkillVisible(!addSkillVisible);
    }

    return (
        <div className={classes.container}>
            <div className={classes.userProfile}>
                <div className={classes.header}>
                    <ProfileCover />
                    {user.username && <ProfileInfo user={user} />}
                </div>
                {user.biography && <AboutUser bio={user.biography} />}
                {user.experiences && <Experiences experiences={user.experiences} toggleAddExperience={toggleAddExperienceModal} userId={user.id} reload={reload} />}
                {user.educations && <Educations educations={user.educations} toggleAddEducation={toggleAddEducationModal} userId={user.id} reload={reload} />}
                {user.skills && <Skills skills={user.skills} toggleAddSkill={toggleAddSkillModal} userId={user.id} reload={reload} />}
                {user.interests && <Interests interests={user.interests} />}
                {addExperienceVisible && <AddExperience toggleAddExperience={toggleAddExperienceModal} user={user} reload={reload} />}
                {addEducationVisible && <AddEducation toggleAddEducation={toggleAddEducationModal} user={user} reload={reload} />}
            </div>
            <div className={classes.suggestions}>
                <SuggestionsHomepage />
            </div>

            {addSkillVisible && <AddSkill toggleAddSkill={toggleAddSkillModal} user={user} reload={reload} />}
        </div>

    )
}

export default UserProfile