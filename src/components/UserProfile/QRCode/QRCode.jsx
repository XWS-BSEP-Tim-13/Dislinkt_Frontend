import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import AuthentificationService from '../../../services/AuthentificationService'
import classes from './QRCode.module.css'
import { useRef } from 'react'
const QRCode = () => {
    
    const [image,setImage] = useState(undefined)
    const isLoginPage =true
    const [next,setNext] = useState(false)
    const [code,setCode] = useState("")
    const [error,setError]=useState(false)
    const [success,setSuccess] =useState(false)
    const navigate =useNavigate()
    const successRef = useRef(null);
    successRef.current = success

    useEffect(()=>{
        AuthentificationService.getQRCode().then(resp=>{
            setImage("data:image/gif;base64,"+resp.data.image)
        })

    },[])

    useEffect(()=>{
        if(success) {
            navigate('/in/me')
    }
    },[success])


    useEffect(() => {
          return () => {
            if(!successRef.current){
                console.log(successRef.current)
                console.log('failllll')
                AuthentificationService.resetMFAAuth().then(resp=>{
                })
            }
          }
        },[]);


    function save(){
        if(code == ""){
            setError(true)
            return
        }
        AuthentificationService.checkMFACode(code).then(async resp=>{
            setSuccess(true)
        }).catch(err=>{
            setError(true)
        })
    }
    const handleChange = (e) => {
        if(e.target.value == "") setError(true)
        else setError(false)
        setCode(e.target.value)}
  return (
    <div className={classes.page}>
            <div className={classes.form}>
                <div className={classes.message}>
                {next ? 
                <div>
                     <p>Step2: </p>
                    <p>Confirm your device!</p>
                    {error &&<p className={classes.error}>Wrong code!</p>}
                    <div>
                    <div className={classes.formItem}>
                        <input type='text' required placeholder='Code' onChange={handleChange}  className={` ${error ? classes.error : classes.registrationBg}`}/>
                    </div>
                    </div>
                    <button  className={classes.button} onClick={save}>Save</button>
                    <button  className={classes.buttonBack} onClick={() =>setNext(false)}>Back</button>
                </div> 
                : 
                <div>
                <p>Register multifactor authentication!</p>
                <div>
                <p>Step1: </p>
                {  (image !== undefined) && <img src={image} className={classes.postImage} alt=""/>}
                </div>
                <button  className={classes.button} onClick={()=>setNext(true)}>Next</button>
                <button  className={classes.buttonBack}>Cancel</button>
                </div>
                }
            </div>
            </div>
            <div className={`${classes.image} ${isLoginPage ? classes.loginBg : classes.registrationBg}`}></div>
        </div>
  )
}

export default QRCode