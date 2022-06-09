
import classes from './MFA.module.css';
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
import AuthentificationService from '../../../services/AuthentificationService';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions'
const MFA = (props) => {

    
    const [code,setCode] = useState("")
    const [error,setError]=useState(false)
    const navigate =useNavigate()
    const dispatch = useDispatch();

    function save(){
        if(code == ""){
            setError(true)
            return
        }
        AuthentificationService.checkMFACodeUnauthorized(code,props.token.token).then(resp=>{
            localStorage.setItem("token-ls", props.token.token);
                    dispatch(login(props.token));
                    navigate('/home');
        }).catch(err=>{
            setError(true)
        })
    }

    const handleChange = (e) => {
        if(e.target.value == "") setError(true)
        else setError(false)
        setCode(e.target.value)}

  return (
    <div className={classes.message}>
                <div>
                    <p>Confirm your device!</p>
                    {error &&<p className={classes.error}>Wrong code!</p>}
                    <div>
                    <div className={classes.formItem}>
                        <input type='text' required placeholder='Code' onChange={handleChange}/>
                    </div>
                    </div>
                    <button  className={classes.button} onClick={save}>Save</button>
                    <button  className={classes.buttonBack}>Back</button>
                </div>
            </div>
  )
}

export default MFA