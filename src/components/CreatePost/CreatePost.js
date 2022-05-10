import classes from './CreatePost.module.css';
import Logo from '../../images/user.png'
function CreatePost(){
    return(
        <div className={classes.containerWrap}>
            <div className={classes.row}>
                <img src={Logo} alt="" className={classes.img}/>
                <div className={classes.post}>
                    <label>Start a post</label>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;