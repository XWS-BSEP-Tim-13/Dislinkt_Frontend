import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit,faEllipsisVertical ,faUserSlash,faBan} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import AuthentificationService from '../../../services/AuthentificationService'
import { useSelector } from 'react-redux';
import UserService from '../../../services/UserService'
const ProfileInfo = ({ user,userStatus }) => {

    const [mfaActive,setMfaActive]=useState(false)
    const auth = useSelector(state => state.loginReducer);
    const [isLoggedUser,setIsLoggedUser] = useState(false)
    const [isPrivate,setIsPrivate] =useState(false)
    const [displayOptions,setDisplayOptions] =useState(false)
    useEffect(()=>{
        console.log(userStatus)
        console.log(user)
        if (user.username == auth.username) setIsLoggedUser(true)
        setIsPrivate(user.isPrivate)
        AuthentificationService.checkMFAActive().then(resp=>{
            console.log(resp.data)
            setMfaActive(resp.data.isActive)
        })
    },[])


    const navigate =useNavigate()
    function mfaEnable(){
        navigate('/qr-code')
    }

    function disableMFA(){
        AuthentificationService.resetMFAAuth().then(resp=>{
             setMfaActive(false)
        })
    }

    function changePrivacy(isPrivate){
        UserService.changePrivacy(isPrivate).catch(err=>{
            console.log(err)
        }).then(resp=>{
            console.log(resp)
            setIsPrivate(isPrivate)
            user.isPrivate=isPrivate
        })
    }
    function renderOnStatus(){
        if(userStatus == "CONNECTED") return <button className={classes.leftBtn}>Connected</button>
        else if(userStatus == "NONEE") return <button className={classes.leftBtn}>Connect</button>
        else if(userStatus == "BLOCKED") return <button className={classes.leftBtn}>Blocked</button>
        else if(userStatus == "CONNECTION_REQUEST") return  <button className={classes.leftBtn}>Requsted</button>
     }

     function optionsOnStatus(){
        if(userStatus == "CONNECTED") return <div><button><FontAwesomeIcon icon={faUserSlash} className={classes.dots} />Remove connection</button><button><FontAwesomeIcon icon={faBan} className={classes.dots} />Block</button></div>
        else if(userStatus == "NONEE") return <div><button><FontAwesomeIcon icon={faUserSlash} className={classes.dots} />Connect</button><button><FontAwesomeIcon icon={faBan} className={classes.dots} />Block</button></div>
        else if(userStatus == "BLOCKED") return <div><button><FontAwesomeIcon icon={faBan} className={classes.dots} />Unblock</button></div>
        else if(userStatus == "CONNECTION_REQUEST")  return <div><button><FontAwesomeIcon icon={faBan} className={classes.dots} />Cancel request</button></div>
     }

    return (
        <div className={classes.flexRow}>
            <div className={classes.info}>
                <h2> {user.firstName} {user.lastName} <span className={classes.subtitle}>@{user.username}</span></h2>
                <p className={classes.subtitle}> Faculty of Technical Sciences, Novi Sad </p>
                <div className={classes.divMfa}>
                <p className={`${classes.subtitle} ${classes.connections}`}> 152 connections </p> 
                { isLoggedUser ? <div>
                {!mfaActive ?
                    <button onClick={mfaEnable}>Enable mfa</button>
                    :
                    <button onClick={disableMFA}>Disable mfa</button>
                }
                { isPrivate ?
                <button onClick={()=>changePrivacy(false)} >Set to public</button>
                :
                 <button onClick={()=>changePrivacy(true)}>Set to private</button>
                }
                </div>
                :
                <div></div>
                }
                </div>
            </div>
            <div className={classes.left}>
                <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon} />
                <div className={classes.userStatus}>
                    { !isLoggedUser &&
                    <div>{renderOnStatus()} <FontAwesomeIcon icon={faEllipsisVertical} className={classes.dots} onClick={() =>setDisplayOptions(!displayOptions)}/></div>
                    }
                </div>
                {
                    displayOptions &&
                <div className={classes.options}>
                    {optionsOnStatus()}
                </div>
                }
            </div>
        </div>
    )
}

export default ProfileInfo