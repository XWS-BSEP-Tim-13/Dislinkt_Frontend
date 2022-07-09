import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faEllipsisVertical, faUserSlash, faBan,faMessage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import AuthentificationService from '../../../services/AuthentificationService'
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../../services/UserService'
import { notifications} from '../../../store/actions'

const ProfileInfo = ({ user, userStatus, updateStatus, currentUser }) => {

    const [mfaActive, setMfaActive] = useState(false)
    const auth = useSelector(state => state.loginReducer);
    const [isLoggedUser, setIsLoggedUser] = useState(false)
    const [isPrivate, setIsPrivate] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(false)
    const [notificationsDisplay,setNotifications] = useState(false)
    const dispatch =useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(userStatus)
        console.log(user)
        setNotifications(user.notification)
        if (user.username == auth.username) {
            setIsLoggedUser(true)
            AuthentificationService.checkMFAActive().then(resp => {
                console.log(resp.data)
                setMfaActive(resp.data.isActive)
            })
        } else {
            setIsPrivate(user.isPrivate)
            setIsLoggedUser(false)
        }
    }, [user.username, userStatus])



    function mfaEnable() {
        navigate('/qr-code')
    }

    function disableMFA() {
        AuthentificationService.resetMFAAuth().then(resp => {
            setMfaActive(false)
        })
    }

    function changePrivacy(isPrivate) {
        UserService.changePrivacy(isPrivate).catch(err => {
            console.log(err)
        }).then(resp => {
            console.log(resp)
            setIsPrivate(isPrivate)
            user.isPrivate = isPrivate
        })
    }
    function renderOnStatus() {
        if (userStatus == "CONNECTED") return <button className={classes.leftBtn}>Connected</button>
        else if (userStatus == "NONEE") return <button className={classes.leftBtn}>Connect</button>
        else if (userStatus == "BLOCKED") return <button className={classes.leftBtn}>Blocked</button>
        else if (userStatus == "CONNECTION_REQUEST") return <button className={classes.leftBtn}>Requsted</button>
    }

    function optionsOnStatus() {
        if (userStatus == "CONNECTED") return <div><button onClick={removeConnection}><FontAwesomeIcon icon={faUserSlash} className={classes.dots} />Remove connection</button><button onClick={message}><FontAwesomeIcon icon={faMessage} className={classes.dots} />Message</button><button onClick={blockUser}><FontAwesomeIcon icon={faBan} className={classes.dots} />Block</button></div>
        else if (userStatus == "NONEE") return <div><button onClick={requestConnection}><FontAwesomeIcon icon={faUserSlash} className={classes.dots} />Connect</button><button onClick={blockUser}><FontAwesomeIcon icon={faBan} className={classes.dots} />Block</button></div>
        else if (userStatus == "BLOCKED") return <div><button onClick={unblockUser}><FontAwesomeIcon icon={faBan} className={classes.dots} />Unblock</button></div>
        else if (userStatus == "CONNECTION_REQUEST") return <div><button onClick={deleteConnectionRequest}><FontAwesomeIcon icon={faBan} className={classes.dots} />Cancel request</button></div>
    }

    function blockUser() {
        console.log("####################")
        UserService.blockUser(user.username).then(resp => {
            console.log(resp.data)
            updateStatus("BLOCKED")
        })
    }

    function message(){
        navigate('/messaging/'+user.username)
    }

    function unblockUser() {
        UserService.unblockUser(user.username).then(resp => {
            UserService.checkIfUsersConnected(user.username).then(resp => {
                //console.log(resp.data)
                updateStatus(resp.data.connectionStatus)
            })
        })
    }

    function requestConnection() {
        UserService.requestConnection(user.username).catch(err => {
            console.log(err)
        }).then(resp => {
            console.log(resp.data)
            updateStatus(resp.data.connectionStatus)
        })
    }

    function deleteConnectionRequest() {
        UserService.deleteConnectionRequest(user.username).catch(err => {
            console.log(err)
        }).then(resp => {
            console.log(resp)
            updateStatus("NONEE")
        })
    }

    function removeConnection() {
        UserService.removeConnection(user.username).catch(err => {
            console.log(err)
        }).then(resp => {
            console.log(resp)
            updateStatus("NONEE")
        })
    }

    function acceptConnectionRequest() {
        UserService.acceptConnectionRequest(user.username).catch(err => {
            console.log(err)
        }).then(resp => {
            console.log(resp)
        })
    }

    function changeNotifications(flag){
        console.log(flag)
        UserService.displayNotifications(flag).then(resp=>{
            setNotifications(flag)
            dispatch(notifications(flag));
        })
    }

    return (
        <div className={classes.flexRow}>
            <div className={classes.info}>
                <h2> {user.firstName} {user.lastName} <span className={classes.subtitle}>@{user.username}</span></h2>
                <p className={classes.subtitle}> Faculty of Technical Sciences, Novi Sad </p>
                <div className={classes.divMfa}>
                    <p className={`${classes.subtitle} ${classes.connections}`}> 152 connections </p>
                    {isLoggedUser ? <div>
                        {!mfaActive ?
                            <button onClick={mfaEnable}>Enable mfa</button>
                            :
                            <button onClick={disableMFA}>Disable mfa</button>
                        }
                        {user.isPrivate ?
                            <button onClick={() => changePrivacy(false)} >Set to public</button>
                            :
                            <button onClick={() => changePrivacy(true)}>Set to private</button>
                        }
                        {!notificationsDisplay ?
                            <button onClick={() => changeNotifications(!notificationsDisplay)} >Enable notifications</button>
                            :
                            <button onClick={() => changeNotifications(!notificationsDisplay)}>Disable notifications</button>
                        }
                    </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
            <div className={classes.left}>
                {currentUser && <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon} />}
                <div className={classes.userStatus}>
                    {!isLoggedUser &&
                        <div>{renderOnStatus()} <FontAwesomeIcon icon={faEllipsisVertical} className={classes.dots} onClick={() => setDisplayOptions(!displayOptions)} /></div>
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