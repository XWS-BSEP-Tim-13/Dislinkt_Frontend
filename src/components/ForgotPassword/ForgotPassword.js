import React from 'react'
import classes from './ForgotPassword.module.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthentificationService from '../../services/AuthentificationService';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const ForgotPassword = () => {
    
    const navigate = useNavigate();
    const {register,handleSubmit, formState: { errors },setValue} = useForm({})
    const MySwal = withReactContent(Swal)

    const onSubmit = handleSubmit((data) =>{
        console.log(data.email)
          AuthentificationService.forgotPassword(data.email).then(resp=>{
            MySwal.fire(
                'Success!',
                'Email has been sent.',
                'success'
              )
              setValue('email', '', { shouldValidate: false })
          })
    })

    function back(){
        navigate(`/`);
    }

  return (
<div className={classes.page}>
    <div className={classes.login}>
    <h1>Forgot password?</h1>
    <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.formItem}>
        <input
                {...register("email", {required: {value:true,message:'Email is required'},pattern:{value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Wrong email format'}})}
                type="text" 
                placeholder="Email"
                 />
                 {
                   errors.email && <div className={classes.error}>{errors.email.message}</div>
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

export default ForgotPassword