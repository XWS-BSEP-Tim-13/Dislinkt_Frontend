import React from 'react'
import classes from './ForgotPassword.module.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    
    const navigate = useNavigate();
    const {register,handleSubmit, formState: { errors }} = useForm({})


    const onSubmit = handleSubmit((data) =>{
          
    })

    function back(){
        navigate(`/`);
    }

  return (
    <div className={classes.container}>
        <form onSubmit={onSubmit}>
        <div className={classes.main}>
            <h2 className={classes.headerText}>Forgot Password?</h2>
            <div className={classes.input}>
                <input
                {...register("email", {required: {value:true,message:'Email is required'},pattern:{value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Wrong email format'}})}
                type="text" 
                placeholder="Email"
                 />
                 {
                   errors.email && <div className={classes.error}>{errors.email.message}</div>
                }
            </div>
            <div className={classes.btnDiv}>
                <button className={classes.confirm}>Resset password</button>
                <button onClick={back}>Back</button>
            </div>
        </div>
        </form>

    </div>
  )
}

export default ForgotPassword