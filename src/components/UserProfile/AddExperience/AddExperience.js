import React, { useState } from 'react'
import classes from "./AddExperience.module.css"
import { addExperience } from '../../../api/UserProfile/UserProfileApi';

const AddExperience = ({ toggleAddExperience, user, reload }) => {
    const [experience, setExperience] = useState({ employmentType: 0, isCurrentlyWorking: false });
    const [titleError, setTitleError] = useState('');
    const [companyNameError, setCompanyNameError] = useState('');

    function onExperienceChange(e) {
        const element = e.target.id;
        const value = e.target.value;

        switch (element) {
            case "title":
                setExperience(prev => ({ ...prev, title: value }));
                setTitleError('');
                break;
            case "employmentType":
                setExperience(prev => ({ ...prev, employmentType: parseInt(value) }));
                break;
            case "companyName":
                setExperience(prev => ({ ...prev, companyName: value }));
                setCompanyNameError('')
                break;
            case "location":
                setExperience(prev => ({ ...prev, location: value }));
                break;
            case "isCurrentlyWorking":
                setExperience(prev => ({ ...prev, isCurrentlyWorking: e.target.checked }));
                break;
            case "startDate":
                const startDate = new Date(value).toISOString();
                setExperience(prev => ({ ...prev, startDate: startDate }));
                break;
            case "endDate":
                const endDate = new Date(value).toISOString();
                setExperience(prev => ({ ...prev, endDate: endDate }));
                break;
            case "industry":
                setExperience(prev => ({ ...prev, industry: value }));
                break;
            case "description":
                setExperience(prev => ({ ...prev, description: value }));
                break;
            default:
                console.log("default")
        }

    }

    function onSaveExperience() {
        const valid = validateExperience();

        if (!valid) return;

        const newExperience = {
            userId: user.id,
            experience: experience
        };

        addExperience(newExperience).then(() => reload());
        toggleAddExperience();
    }

    function validateExperience() {
        let valid = true;

        if (!experience.title) {
            setTitleError("Title is required field.");
            valid = false;
        }

        if (!experience.companyName) {
            setCompanyNameError("Company name is required field.");
            valid = false;
        }

        return valid;
    }


    return (
        <div className={classes.fallback} onClick={toggleAddExperience}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                <div className={classes.header}>
                    <span> Add experience </span>
                    <span className={classes.close} onClick={toggleAddExperience}>&times;</span>

                </div>
                <div className={classes.body}>
                    <div className={classes.fieldTitle}>
                        <span> Title </span>
                        <span className={classes.error}> {titleError} </span>
                    </div>
                    <input type="text" className={classes.input} id="title" onChange={onExperienceChange}></input>

                    <label>Employment type</label>
                    <select className={classes.input} id="employmentType" onChange={onExperienceChange}>
                        <option value="0">Full time</option>
                        <option value="1">Part time</option>
                        <option value="2">Internship</option>
                    </select>

                    <div className={classes.fieldTitle}>
                        <span> Company name </span>
                        <span className={classes.error}> {companyNameError} </span>
                    </div>
                    <input type="text" className={classes.input} id="companyName" onChange={onExperienceChange}></input>

                    <label> Location </label>
                    <input type="text" className={classes.input} id="location" onChange={onExperienceChange}></input>

                    <div className={classes.row}>
                        <input type="checkbox" className={classes.checkbox} id="isCurrentlyWorking" onChange={onExperienceChange}></input>
                        <label> I am currently working in this role </label>
                    </div>

                    <label> Start date </label>
                    <input type="date" className={classes.input} id="startDate" onChange={onExperienceChange}></input>

                    <label> End date </label>
                    <input type="date" className={classes.input} id="endDate" onChange={onExperienceChange}></input>

                    <label> Industry </label>
                    <input type="text" className={classes.input} id="industry" onChange={onExperienceChange}></input>

                    <label> Description </label>
                    <input type="text" className={classes.input} id="description" onChange={onExperienceChange}></input>

                </div>

                <div className={classes.footer}>
                    <input type="submit" className={classes.saveButton} onClick={onSaveExperience} value="Save" />
                </div>
            </div>

        </div>
    )
}

export default AddExperience