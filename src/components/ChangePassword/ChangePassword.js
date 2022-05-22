import React from 'react'
import classes from './ChangePassword.module.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthentificationService from '../../services/AuthentificationService';

const ChangePassword = () => {
    
    const navigate = useNavigate();
    const {register,handleSubmit, formState: { errors },watch} = useForm({})
    const onSubmit = handleSubmit((data) =>{
        console.log(data.password)
    })

    function back(){
        navigate(`/`);
    }

  return (
<div className={classes.page}>
    <div className={classes.login}>
    <h1>Choose a new Password</h1>
    <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.formItem}>
        <input
                {...register("password", {required: {value:true,message:'Password is required'},pattern:{value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Wrong email format'}})}
                type="password" 
                placeholder="New password"
                 />
                 {
                   errors.password && <div className={classes.error}>{errors.password.message}</div>
                }
        </div>
        <div className={classes.formItem}>
        <input
                 {...register("confirmPassword", {
                    required: {value:true,message:'Password is required'},
                    validate: (val) => {
                      if (watch('password') != val) {
                        return "Your passwords do no match";
                      }
                    },
                   })}
                type="password" 
                placeholder="Retype new Password"
                 />
                 {
                   errors.confirmPassword && <div className={classes.error}>{errors.confirmPassword.message}</div>
                }
        </div>
        <button className={classes.buttonLogIn}>Reset password</button>
        <button onClick={back}  className={classes.buttonBack}>Back</button>
    </form>
</div>  
<div className={classes.image}></div>
</div>
  )
}

export default ChangePassword