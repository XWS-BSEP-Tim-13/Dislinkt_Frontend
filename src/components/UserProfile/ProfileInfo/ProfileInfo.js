import classes from './ProfileInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import AuthentificationService from '../../../services/AuthentificationService'

const ProfileInfo = ({ user }) => {

    const [mfaActive,setMfaActive]=useState(false)

    useEffect(()=>{
        AuthentificationService.checkMFAActive().then(resp=>{
            console.log(resp.data)
            setMfaActive(resp.data.isActive)
        })
    })


    const navigate =useNavigate()
    function mfaEnable(){
        navigate('/qr-code')
    }

    function disableMFA(){
        AuthentificationService.resetMFAAuth().then(resp=>{
             setMfaActive(false)
        })
    }

    return (
        <div className={classes.flexRow}>
            <div className={classes.info}>
                <h2> {user.firstName} {user.lastName} <span className={classes.subtitle}>@{user.username}</span></h2>
                <p className={classes.subtitle}> Faculty of Technical Sciences, Novi Sad </p>
                <div className={classes.divMfa}>
                <p className={`${classes.subtitle} ${classes.connections}`}> 152 connections </p> 
                {!mfaActive ?
                    <button onClick={mfaEnable}>Enable mfa</button>
                    :
                    <button onClick={disableMFA}>Disable mfa</button>
                }
                </div>
            </div>
            <FontAwesomeIcon icon={faUserEdit} className={classes.editIcon} />
        </div>
    )
}

export default ProfileInfo