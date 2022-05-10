import classes from './CreatePost.module.css';
import Logo from '../../images/user.png'
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/actions'
function CreatePost(){

    const dispatch = useDispatch();
    function test(){
        const auth ={
            token : 'aaa',
            role : 'bbb',
            expire : 'ccc'
        }
        dispatch(login(auth))
    }

    return(
        <div className={classes.containerWrap}>
            <div className={classes.row} onClick={test}>
                <img src={Logo} alt="" className={classes.img}/>
                <div className={classes.post}>
                    <label>Start a post</label>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;