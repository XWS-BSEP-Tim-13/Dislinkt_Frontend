import classes from './Posts.module.css';
import User from '../../images/user.png'
import Unavailable from '../../images/unavailable.png'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
function Posts(){

    const [commentSection,setCommentSection] = useState(false) 

    return(
        <div className={classes.containerWrap}>
            <div className={classes.post}>
                <div className={classes.postHeader}>
                    <img src={User}  className={classes.img}/>
                    <div className={classes.user}>
                        <label className={classes.username}>Stefan Ljubovic</label>
                        <label className={classes.smallText}>Faculty of technical science</label>
                    </div>
                </div>
                <label className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                <img src={Unavailable} className={classes.postImage}/>
                <div className={classes.likeSection}>
                <label  className={classes.smallText}><FontAwesomeIcon icon={faThumbsUp}  className={classes.likeIcon}/>Ana and 300 others</label>
                <label  className={classes.smallText1}>300 comments</label>
                </div>
                <div className={classes.footer}>
                    <div className={classes.footerPart}>
                    <FontAwesomeIcon icon={faThumbsUp}/>
                    <label className={classes.lblMargin}>Like</label>
                    </div>
                    <div className={classes.footerPart} onClick={() => setCommentSection(!commentSection)}>
                    <FontAwesomeIcon icon={faComment}/>
                    <label className={classes.lblMargin}>Comment</label>
                    </div>
                </div>
                { commentSection &&
                <div className={classes.commentSection}>
                    <div className={classes.comment}>
                        <img src={User}  className={classes.img}/>
                        <div className={classes.createComment}>
                            Add a comment...
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Posts;