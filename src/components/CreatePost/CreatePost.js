import classes from './CreatePost.module.css';
import Logo from '../../images/user.png'
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/actions'
import NewPostModal from '../NewPostModal/NewPostModal';
import { useState } from 'react';
function CreatePost(){

    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch();
    function test(){
        const auth ={
            token : 'aaa',
            role : 'bbb',
            expire : 'ccc'
        }
        dispatch(login(auth))
    }
    function showModalFunc(){
        setShowModal(true)
        document.getElementById('appContainer').style.overflow = 'hidden';
	    document.getElementById('appContainer').style.height = '100vh';
    }

    function hideModal(){
        setShowModal(false)
        document.getElementById('appContainer').style.overflow = 'unset';
	    document.getElementById('appContainer').style.height = 'unset';
    }

    return(
        <div className={classes.containerWrap}>
            <div className={classes.row} onClick={test}>
                <img src={Logo} alt="" className={classes.img}/>
                <div className={classes.post} onClick={showModalFunc}>
                    <label>Start a post</label>
                </div>
            </div>
            {showModal && <NewPostModal changeState={() =>hideModal()}/>}
        </div>
    );
}

export default CreatePost;