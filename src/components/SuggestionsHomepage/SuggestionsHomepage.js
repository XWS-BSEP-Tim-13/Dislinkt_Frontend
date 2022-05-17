import classes from './SuggestionsHomepage.module.css'
import React, { useState } from 'react'
import User from '../../images/user-red.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function SuggestionsHomepage() {

    const [connections, setConnections] = useState([1, 2, 3, 4])

    return (
        <div className={classes.suggestionsWrapper}>
            <label className={classes.suggestionsCaption}>Add to your feed</label>
            {
                connections.map((connection, index) =>
                    <div className={classes.conection}>
                        <div className={classes.imageContainer}>
                            <img src={User} className={classes.image} alt="User" />
                        </div>
                        <div className={classes.content}>
                            <label>Marija Kljestan</label>
                            <label className={classes.contentProffesion}>Faculty of technical science, Novi Sad</label>
                        </div>
                        <button className={classes.followButtonDiv}>
                            <FontAwesomeIcon icon={faPlus} className={classes.icon} />Follow
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default SuggestionsHomepage;