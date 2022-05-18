import React, { useState } from 'react'
import { addSkill } from '../../../api/UserProfile/UserProfileApi';
import classes from "./AddSkill.module.css"

const AddSkill = ({ toggleAddSkill, user, reload }) => {
    const [skill, setSkill] = useState('');
    const [skillError, setSkillError] = useState('');


    function onSkillChange(e) {
        setSkill(e.target.value);
        setSkillError('');
    }

    function onSaveSkill() {
        if(!skill){
            setSkillError("Skill is a required field.")
            return;
        }

        const newSkill = {
            userId: user.id,
            skill: skill
        };

        console.log(newSkill);

        addSkill(newSkill).then(() => reload());
        toggleAddSkill();
    }

    return (
        <div className={classes.fallback} onClick={toggleAddSkill}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                <div className={classes.header}>
                    <span> Add skill </span>
                    <span className={classes.close} onClick={toggleAddSkill}>&times;</span>

                </div>
                <div className={classes.body}>
                    <div className={classes.fieldTitle}>
                        <span> Skill </span>
                        <span className={classes.error}> {skillError} </span>
                    </div>
                    <input type="text" className={classes.input} id="skill" onChange={onSkillChange}></input>

                </div>

                <div className={classes.footer}>
                    <input type="submit" className={classes.saveButton} value="Save" onClick={onSaveSkill} />
                </div>
            </div>

        </div>
    )
}

export default AddSkill