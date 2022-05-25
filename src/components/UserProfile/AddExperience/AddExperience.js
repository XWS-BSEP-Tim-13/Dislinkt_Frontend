import React, { useState } from 'react'
import classes from "./AddExperience.module.css"
import { addExperience } from '../../../api/UserProfile/UserProfileApi';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../../../validationSchemas/ExperienceValidationSchema';

const AddExperience = ({ toggleAddExperience, user, reload }) => {
    const [experience, setExperience] = useState({ employmentType: 0, isCurrentlyWorking: false });
    const [dateError, setDateError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onExperienceChange(e) {
        const element = e.target.id;
        const value = e.target.value;

        switch (element) {
            case "employmentType":
                setExperience(prev => ({ ...prev, employmentType: parseInt(value) }));
                break;
            case "isCurrentlyWorking":
                setExperience(prev => ({ ...prev, isCurrentlyWorking: e.target.checked }));
                break;
            case "description":
                setExperience(prev => ({ ...prev, description: value }));
                break;
            default:
                console.log("default")
        }

    }

    function onSaveExperience(data) {
        
        if(new Date(data.startDate) > new Date(data.endDate)){
            setDateError("Start date must be before end date.");
            return;
        }

        data.startDate = new Date(data.startDate).toISOString();
        data.endDate = new Date(data.endDate).toISOString();
        data.isCurrentlyWorking = experience.isCurrentlyWorking;
        data.description = experience.description;
        data.employmentType = experience.employmentType;

        const newExperience = {
            userId: user.id,
            experience: data
        };

        console.log(newExperience)

        addExperience(newExperience).then(() => reload());
        toggleAddExperience();
    }


    return (
        <div className={classes.fallback} onClick={toggleAddExperience}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit(onSaveExperience)}>
                    <div className={classes.header}>
                        <span> Add experience </span>
                        <span className={classes.close} onClick={toggleAddExperience}>&times;</span>

                    </div>
                    <div className={classes.body}>

                        <div className={classes.fieldTitle}>
                            <span> Title </span>
                        </div>
                        <input type="text" className={classes.input} id="title" {...register("title")}></input>
                        <span className={classes.error}> {errors.title?.message} </span>

                        <label>Employment type</label>
                        <select className={classes.input} id="employmentType" onChange={onExperienceChange}>
                            <option value="0">Full time</option>
                            <option value="1">Part time</option>
                            <option value="2">Internship</option>
                        </select>

                        <div className={classes.fieldTitle}>
                            <span> Company name </span>
                        </div>
                        <input type="text" className={classes.input} id="companyName" {...register("companyName")}></input>
                        <span className={classes.error}> {errors.companyName?.message} </span>

                        <label> Location </label>
                        <input type="text" className={classes.input} id="location" {...register("location")}></input>
                        <span className={classes.error}> {errors.location?.message} </span>

                        <div className={classes.row}>
                            <input type="checkbox" className={classes.checkbox} id="isCurrentlyWorking" onChange={onExperienceChange}></input>
                            <label> I am currently working in this role </label>
                        </div>

                        <label> Start date </label>
                        <input type="date" className={classes.input} id="startDate" {...register("startDate")}></input>
                        <span className={classes.error}> {errors.startDate?.message} </span>

                        <label> End date </label>
                        <input type="date" className={classes.input} id="endDate" {...register("endDate")}></input>
                        <span className={classes.error}> {errors.endDate?.message} {dateError}</span>

                        <label> Industry </label>
                        <input type="text" className={classes.input} id="industry" {...register("industry")}></input>
                        <span className={classes.error}> {errors.industry?.message} </span>

                        <label> Description </label>
                        <input type="text" className={classes.input} id="description" onChange={onExperienceChange}></input>


                    </div>

                    <div className={classes.footer}>
                        <input type="submit" className={classes.saveButton} value="Save" />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddExperience