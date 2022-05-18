import classes from './Posts.module.css';
import User from '../../images/user-red.png'
import Unavailable from '../../images/unavailable.png'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const postLiked = true;
const postDisliked = false;

function Posts() {

    const [commentSection, setCommentSection] = useState(false)
    const [comments, setComments] = useState([1, 2, 3])
    const [dummyData, setDummyData] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")

    return (
        <div className={classes.containerWrap}>
            <div className={classes.post}>
                <div className={classes.postHeader}>
                    <div className={classes.imageContainer}>
                        <img src={User} className={classes.image} alt="User" />
                    </div>
                    <div className={classes.user}>
                        <label className={classes.username}>Stefan Ljubovic</label>
                        <label className={classes.smallText}>Faculty of technical science</label>
                    </div>
                </div>

                <label className={classes.description}>{dummyData}</label>
                {false && <img src={Unavailable} className={classes.postImage} alt=""/>}

                <div className={classes.likeSection}>
                    <label className={classes.smallText1}><FontAwesomeIcon icon={faThumbsUp} className={classes.likeIcon} />Ana and 300 others</label>
                    <label className={classes.smallText1}><FontAwesomeIcon icon={faThumbsDown} className={classes.likeIcon} />Ana and 300 others</label>
                    <label className={classes.smallText1} onClick={() => setCommentSection(!commentSection)}>300 comments</label>
                </div>

                <div className={classes.footer}>
                    <div className={`${classes.footerPart} ${postLiked ? classes.footerPartReacted : null}`}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <label className={classes.lblMargin}>Like</label>
                    </div>
                    <div className={`${classes.footerPart} ${postDisliked ? classes.footerPartReacted : null}`}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                        <label className={classes.lblMargin}>Dislike</label>
                    </div>
                    <div className={classes.footerPart} onClick={() => setCommentSection(!commentSection)}>
                        <FontAwesomeIcon icon={faComment} />
                        <label className={classes.lblMargin}>Comment</label>
                    </div>
                </div>

                {commentSection &&
                    <div className={classes.commentSection}>
                        <div className={classes.comment}>
                            <div className={classes.imageContainer}>
                                <img src={User} className={classes.image} alt="User" />
                            </div>
                            <div className={classes.createComment} contenteditable="true" placeholder="Add a comment...">
                            </div>
                        </div>
                        <div className={classes.comments}>
                            {
                                comments.map((comment, i) =>
                                    <div className={classes.commentImageDiv}>
                                        <div className={classes.imageContainer}>
                                            <img src={User} className={classes.image} alt="User" />
                                        </div>
                                        <div className={classes.commentDiv}>
                                            <div className={classes.commentHeader}>
                                                <label>Stefan Ljubovic</label>
                                                <label className={classes.headerDate}>4d</label>
                                            </div>
                                            <label className={classes.commentConent}>{dummyData}</label>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Posts;