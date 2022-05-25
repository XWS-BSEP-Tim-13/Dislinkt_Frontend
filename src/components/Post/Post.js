import classes from './Post.module.css';
import User from '../../images/user-red.png'
//import Unavailable from '../../images/unavailable.png'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ImageService from '../../services/ImageService'
import PostService from '../../services/PostService';
import TextareaAutosize from 'react-textarea-autosize';
import Linkify from 'react-linkify';
import { CheckUserPermission } from '../Permissions/CheckUserPermission';
const Post = (props) => {

    const [postLiked,setPostLiked] =useState(false)
    const [postDisliked,setPostDisliked] = useState(false);
    const [commentSection,setCommentSection] = useState(false) 
    const [image,setImage] = useState(undefined)
    const [post,setPost] = useState({})
    const auth = useSelector(state => state.loginReducer);
    const [content,setContent] = useState('')
    useEffect(() => {
        setPost(props.post)
        if(props.post.likes !== undefined)
        props.post.likes.map(like =>{
            if(like === auth.username){
                setPostLiked(true)
                return 
            }
        })
        if(props.post.dislikes !== undefined)
        props.post.dislikes.map(dislike =>{
            if(dislike === auth.username){
                setPostDisliked(true)
                return 
            }
        })
        if (props.post.image !== undefined){
            setImage('loading')
            ImageService.getImage(props.post.image).then(resp=>{
                console.log(resp.data)
                setImage("data:image/gif;base64,"+resp.data.image)
            })
        }
    }, [auth.username, props.post])

    function getLikes(){
        if(post.likes === undefined || post.likes.length===0) return "None"
        let likes = post.likes?.length -1
        if (post.likes.length -1 < 1) return post.likes[0]
        return post?.likes[0] +' and '+likes+' others'
    }

    function getDislikes(){
        if(post.dislikes === undefined || post.dislikes.length===0 ) return "None"
        let likes = post.dislikes.length -1
        if (post.dislikes.length -1 <1) return post.dislikes[0]
        return post.dislikes[0] +' and '+likes+' others'
    }

    function getComments(){
        if(post.comments === undefined || post.comments.length===0 ) return "None"
        return post.comments.length+ ' comments'
    }

    function likePost(){
        setPostDisliked(false)
        setPostLiked(true)
        let dislikes = post.dislikes
        let likes = post.likes
        if(post.likes !== undefined && post.likes.indexOf(auth.username) >-1){
            likes = post.likes.filter(like => like !== auth.username)
            setPostLiked(false)
        }else{
            if(post.dislikes !== undefined) dislikes=dislikes.filter(dislike => dislike !== auth.username)
            if(likes === undefined) likes = [auth.username]
            else likes.push(auth.username)
        }
        setPost({...post , dislikes : dislikes, likes : likes})
        const reaction ={
            username : auth.username,
            postId : post.id,
            reactionType : 0
        }
        PostService.reactToPost(reaction).then(resp=>[
            console.log(resp.data)
        ])
    }

    function dislikePost(){
        console.log(content)
        setPostDisliked(true)
        setPostLiked(false)
        let likes = post.likes
        let dislikes = post.dislikes
        if(post.dislikes !== undefined && post.dislikes.indexOf(auth.username) >-1){
            dislikes = post.dislikes.filter(dislikes => dislikes !== auth.username)
            setPostDisliked(false)
        }else{
            if(post.likes !== undefined) likes=likes.filter(like => like !== auth.username)
            if(dislikes === undefined) dislikes = [auth.username]
            else dislikes.push(auth.username)
        }
        setPost({...post , dislikes : dislikes, likes : likes})
        const reaction ={
            username : auth.username,
            postId : post.id,
            reactionType : 1
        }
        PostService.reactToPost(reaction).then(resp=>[
            console.log(resp.data)
        ])
    }

    const handleChange = (e) => setContent(e.target.value);

    function addComment(){
        let comments = post.comments
        let commentRequest ={
            postId : post.id,
            comment: {
                content : content,
                username : auth.username
            }
        }
        PostService.createCommentOnPost(commentRequest).then(resp=>{
            commentRequest.comment.id = resp.data
            if(post.comments === undefined)  comments = []
            comments.push(commentRequest.comment)
            console.log(comments)
            setPost({...post , comments : comments})
            setContent('')
        })
    }

    function getDate(time){
        if(time === undefined) return "Today"
        const date = new Date((time.seconds+time.nanos/100000000)*1000)
        const now = new Date()
        let difference = dateDiffInDays(now, date);
        if(difference ===0) return "Today"
        return difference+'d'
    }

    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }

  return (
    <div className={classes.post}>
                <div className={classes.postHeader}>
                    <div className={classes.imageContainer}>
                        <img src={User} className={classes.image} alt="User" />
                    </div>
                    <div className={classes.user}>
                        <label className={classes.username}>{post.username}</label>
                        <label className={classes.smallText}>Faculty of technical science</label>
                    </div>
                </div>
                <div className={classes.description}>
                    <Linkify>{post.content}</Linkify>
                </div>
                {  (image !== undefined && image !=='loading') && <img src={image} className={classes.postImage} alt=""/>}
                {image === 'loading' && <p>Loading image....</p>}

                <div className={classes.likeSection}>
                    <label className={classes.smallText1}><FontAwesomeIcon icon={faThumbsUp} className={classes.likeIcon} />{getLikes()}</label>
                    <label className={classes.smallText1}><FontAwesomeIcon icon={faThumbsDown} className={classes.likeIcon} />{getDislikes()}</label>
                    <label className={classes.smallText1} onClick={() => setCommentSection(!commentSection)}>{getComments()}</label>
                </div>

                <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <div className={classes.footer}>
                    <div className={`${classes.footerPart} ${postLiked ? classes.footerPartReacted : null}`} onClick={likePost}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <label className={classes.lblMargin}>Like</label>
                    </div>
                    <div className={`${classes.footerPart} ${postDisliked ? classes.footerPartReacted : null}`} onClick={dislikePost}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                        <label className={classes.lblMargin}>Dislike</label>
                    </div>
                    <div className={classes.footerPart} onClick={() => setCommentSection(!commentSection)}>
                        <FontAwesomeIcon icon={faComment} />
                        <label className={classes.lblMargin}>Comment</label>
                    </div>
                </div>
                </CheckUserPermission>
                {commentSection &&
                    <div className={classes.commentSection}>
                         <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <div className={classes.comment}>
                            <div className={classes.imageContainer}>
                                <img src={User} className={classes.image} alt="User" />
                            </div>
                            <TextareaAutosize className={classes.textarea} placeholder="What do you want to talk about?" value={content} onChange={handleChange}/>
                        </div>
                        </CheckUserPermission>
                        <div className={classes.postDiv}>
                        {
                                content !== '' && <button className={classes.postBtn} onClick={addComment}>Post</button>
                        }
                        </div>
                        <div className={classes.comments}>
                            {
                                post.comments !==undefined &&  post.comments.map((comment, i) =>
                                    <div className={classes.commentImageDiv} key={i}>
                                        <div className={classes.imageContainer}>
                                            <img src={User} className={classes.image} alt="User" />
                                        </div>
                                        <div className={classes.commentDiv}>
                                            <div className={classes.commentHeader}>
                                                <label>{comment.username}</label>
                                                <label className={classes.headerDate}>{getDate(comment.date)}</label>
                                            </div>
                                            <div className={classes.commentConent}>
                                            <Linkify >{comment.content}</Linkify>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
  )
}

export default Post