import React from 'react'
import classes from "./AddExperience.module.css"

const AddExperience = ({ toggleAddExperience }) => {
    return (
        <div className={classes.fallback} onClick={toggleAddExperience}>
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                <div className={classes.header}>
                    <span> Add experience </span>
                    <span className={classes.close} onClick={toggleAddExperience}>&times;</span>

                </div>
                <div className={classes.body}>
                    <label> Title </label>
                    <input type="text" className={classes.input}></input>

                    <label>Employment type</label>
                    <select className={classes.input}>
                        <option value="0">Full time</option>
                        <option value="1">Part time</option>
                        <option value="2">Internship</option>
                    </select>

                    <label> Company name </label>
                    <input type="text" className={classes.input}></input>

                    <label> Location </label>
                    <input type="text" className={classes.input}></input>

                    <div className={classes.row}>
                        <input type="checkbox" className={classes.checkbox}></input>
                        <label> I am currently working in this role </label>
                    </div>

                    <label> Start date </label>
                    <input type="date" className={classes.input}></input>

                    <label> End date </label>
                    <input type="date" className={classes.input}></input>

                    <label> Industry </label>
                    <input type="text" className={classes.input}></input>

                    <label> Description </label>
                    <input type="text" className={classes.input}></input>

                </div>

                <div className={classes.footer}>
                    <button className={classes.saveButton}> Save </button>
                </div>
            </div>

        </div>
    )
}

export default AddExperience