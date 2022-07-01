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
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import UserService from "../../../services/UserService"
const UserProfile = () => {

    const [user, setUser] = useState({});
    const [addExperienceVisible, setAddExperienceVisible] = useState(false);
    const [addEducationVisible, setAddEducationVisible] = useState(false);
    const [addSkillVisible, setAddSkillVisible] = useState(false);
    const {username} = useParams()
    const auth = useSelector(state => state.loginReducer);
    const navigate = useNavigate()
    const [currentUser,setCurrentUser] =useState(true)
    const [userStatus,setUserStatus] =useState("NONEE")
    async function reload() {
        const user = await getUserByUsername(auth.username);
        setUser(user);
    }

    useEffect(() => {
        async function getUser() {
            let userName = auth.username
            if(username != 'me' && auth.username !=username) {
                userName = username
                setCurrentUser(false)
            }
            getUserByUsername(userName)
                .catch(function (error) {
                    if (error.response) {
                        // Request made and server responded
                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                        //navigate('/in/me')
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
                    if(username != 'me') {
                        //console.log(data)
                        UserService.checkIfUsersConnected(userName).then(resp=>{
                            //console.log(resp.data)
                            setUserStatus(resp.data.connectionStatus)
                        })
                    }
                }
                );

        }

        getUser()
    }, [auth.username,username])

    function toggleAddExperienceModal() {
        setAddExperienceVisible(!addExperienceVisible);
    }

    function toggleAddEducationModal() {
        setAddEducationVisible(!addEducationVisible);
    }

    function toggleAddSkillModal() {
        setAddSkillVisible(!addSkillVisible);
    }

    function checkIfVisible(){
        if(currentUser) return true
        if((userStatus == "NONEE" && !user.isPrivate) || userStatus=="CONNECTED") return true
        return false
    }

    function updateStatus(status){
        console.log("$$$$$$$$$$$$$$$$$$$$$$")
        setUserStatus(status)
    }

    return (
        <div className={classes.container}>
            <div className={classes.userProfile}>
                <div className={classes.header}>
                    <ProfileCover />
                    {user.username && <ProfileInfo currentUser={currentUser} user={user} userStatus={userStatus} updateStatus={updateStatus}/>}
                </div>
                { checkIfVisible() &&
                <div>
                    {user.biography && <AboutUser bio={user.biography} currentUser={currentUser}/>}
                    {user.experiences && <Experiences experiences={user.experiences} currentUser={currentUser} toggleAddExperience={toggleAddExperienceModal} userId={user.id} reload={reload} />}
                    {user.educations && <Educations currentUser={currentUser} educations={user.educations} toggleAddEducation={toggleAddEducationModal} userId={user.id} reload={reload} />}
                    {user.skills && <Skills currentUser={currentUser} skills={user.skills} toggleAddSkill={toggleAddSkillModal} userId={user.id} reload={reload} />}
                    {user.interests && <Interests interests={user.interests} />}
                    {addExperienceVisible && <AddExperience toggleAddExperience={toggleAddExperienceModal} user={user} reload={reload} />}
                    {addEducationVisible && <AddEducation toggleAddEducation={toggleAddEducationModal} user={user} reload={reload} />}
                </div>
                }
            </div>
            <div className={classes.suggestions}>
                <SuggestionsHomepage />
            </div>

            {addSkillVisible && <AddSkill toggleAddSkill={toggleAddSkillModal} user={user} reload={reload} />}
        </div>

    )
}

export default UserProfile