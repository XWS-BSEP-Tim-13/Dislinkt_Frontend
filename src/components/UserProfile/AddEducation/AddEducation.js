import React, { useState } from 'react'
import { addEducation } from '../../../api/UserProfile/UserProfileApi';
import classes from './AddEducation.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../../../validationSchemas/EducationValidationSchema';

const AddEducation = ({ toggleAddEducation, user, reload }) => {
    const [education, setEducation] = useState({ degree: 0 });
    const [dateError, setDateError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onEducationChange(e) {
        const element = e.target.id;
        const value = e.target.value;

        switch (element) {
            case "degree":
                setEducation(prev => ({ ...prev, degree: parseInt(value) }));
                break;
            case "description":
                setEducation(prev => ({ ...prev, description: value }));
                break;
            default:
                console.log("default")
        }

    }

    function onSaveEducation(data) {
        if(new Date(data.startDate) > new Date(data.endDate)){
            setDateError("Start date must be before end date.");
            return;
        }

        data.startDate = new Date(data.startDate).toISOString();
        data.endDate = new Date(data.endDate).toISOString();
        data.degree = education.degree;
        data.description = education.description;

        const newEducation = {
            userId: user.id,
            education: data
        }

        addEducation(newEducation).then(() => reload());
        toggleAddEducation();
    }


    return (
        <div className={classes.fallback} onClick={toggleAddEducation}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                <div className={classes.header}>
                    <span> Add education </span>
                    <span className={classes.close} onClick={toggleAddEducation}>&times;</span>

                </div>
                <form onSubmit={handleSubmit(onSaveEducation)}>
                    <div className={classes.body}>
                        <div className={classes.fieldTitle}>
                            <span> School </span>
                        </div>
                        <input type="text" className={classes.input} id="school" {...register("school")}></input>
                        <span className={classes.error}> {errors.school?.message} </span>

                        <label>Degree</label>
                        <select className={classes.input} id="degree" onChange={onEducationChange}>
                            <option value="0">Associate</option>
                            <option value="1">Bachelors</option>
                            <option value="2">Masters</option>
                            <option value="3">Doctoral</option>
                        </select>


                        <span className={classes.fieldOfStudy}> Field of study </span>

                        <input type="text" className={classes.input} id="fieldOfStudy" {...register("fieldOfStudy")}></input>
                        <span className={classes.error}> {errors.fieldOfStudy?.message} </span>

                        <div className={classes.fieldTitle}>
                            <label> Start date </label>
                        </div>

                        <input type="date" className={classes.input} id="startDate" {...register("startDate")}></input>
                        <span className={classes.error}> {errors.startDate?.message} </span>

                        <div className={classes.fieldTitle}>
                            <label> End date </label>
                        </div>
                        <input type="date" className={classes.input} id="endDate" {...register("endDate")}></input>
                        <span className={classes.error}> {errors.endDate?.message} {dateError}</span>

                        <label> Description </label>
                        <input type="text" className={classes.input} id="description" onChange={onEducationChange}></input>

                    </div>

                    <div className={classes.footer}>
                        <input type="submit" className={classes.saveButton} value="Save" />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddEducation