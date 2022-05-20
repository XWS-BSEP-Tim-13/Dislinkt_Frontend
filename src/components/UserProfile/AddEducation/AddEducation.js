import React, {useState} from 'react'
import { addEducation } from '../../../api/UserProfile/UserProfileApi';
import classes from './AddEducation.module.css'

const AddEducation = ({ toggleAddEducation, user, reload }) => {
    const [education, setEducation] = useState({ degree: 0});
    const [schoolError, setSchoolError] = useState('');

    function onEducationChange(e) {
        const element = e.target.id;
        const value = e.target.value;

        switch (element) {
            case "school":
                setEducation(prev => ({ ...prev, school: value }));
                setSchoolError('');
                break;
            case "degree":
                setEducation(prev => ({ ...prev, degree: parseInt(value) }));
                break;
            case "fieldOfStudy":
                setEducation(prev => ({ ...prev, fieldOfStudy: value }));
                break;
            case "startDate":
                const startDate = new Date(value).toISOString();
                setEducation(prev => ({ ...prev, startDate: startDate }));
                break;
            case "endDate":
                const endDate = new Date(value).toISOString();
                setEducation(prev => ({ ...prev, endDate: endDate }));
                break;
            case "description":
                setEducation(prev => ({ ...prev, description: value }));
                break;
            default:
                console.log("default")
        }

    }

    function onSaveEducation(){
        const valid = validateEducation();
        if(!valid) return;

        const newEducation = {
            userId: user.id,
            education: education
        }

        addEducation(newEducation).then(() => reload());
        toggleAddEducation();
    }

    function validateEducation() {
        let valid = true;

        if(!education.school){
            valid = false;
            setSchoolError('School is a required field.');
        }

        return valid;
    }

    return (
        <div className={classes.fallback} onClick={toggleAddEducation}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                <div className={classes.header}>
                    <span> Add education </span>
                    <span className={classes.close} onClick={toggleAddEducation}>&times;</span>

                </div>
                <div className={classes.body}>
                    <div className={classes.fieldTitle}>
                        <span> School </span>
                        <span className={classes.error}> {schoolError} </span>
                    </div>
                    <input type="text" className={classes.input} id="school" onChange={onEducationChange}></input>

                    <label>Degree</label>
                    <select className={classes.input} id="degree" onChange={onEducationChange}>
                        <option value="0">Associate</option>
                        <option value="1">Bachelors</option>
                        <option value="2">Masters</option>
                        <option value="3">Doctoral</option>
                    </select>

                    <div className={classes.fieldTitle}>
                        <span> Field of study </span>
                    </div>
                    <input type="text" className={classes.input} id="fieldOfStudy" onChange={onEducationChange}></input>

                    <label> Start date </label>
                    <input type="date" className={classes.input} id="startDate" onChange={onEducationChange}></input>

                    <label> End date </label>
                    <input type="date" className={classes.input} id="endDate" onChange={onEducationChange}></input>

                    <label> Description </label>
                    <input type="text" className={classes.input} id="description" onChange={onEducationChange}></input>

                </div>

                <div className={classes.footer}>
                    <input type="submit" className={classes.saveButton} value="Save" onClick={onSaveEducation}/>
                </div>
            </div>

        </div>
    )
}

export default AddEducation