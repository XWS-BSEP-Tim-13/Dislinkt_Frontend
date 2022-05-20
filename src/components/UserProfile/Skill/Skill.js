import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './Skill.module.css'
import { removeSkill } from '../../../api/UserProfile/UserProfileApi'

const Skill = ({ skill, userId, reload }) => {

    function onRemoveSkill(){
        const removalRequest = {
            userId: userId,
            skill: skill
        };

        removeSkill(removalRequest).then(() => reload());
    }

    return (
        <div>
            <div className={classes.skill}>
                {skill}
                <FontAwesomeIcon icon={faTrash} className={classes.icon} onClick={onRemoveSkill}/>
            </div>
            <hr />
        </div>
  )
}

export default Skill