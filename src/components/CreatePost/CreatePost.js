import classes from './CreatePost.module.css';
//import {useDispatch} from 'react-redux';
import NewPostModal from '../NewPostModal/NewPostModal';
import { useState } from 'react';
import Logo from '../../images/user-red.png'

const CreatePost = ({ user }) => {

    const [showModal,setShowModal] = useState(false);
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

    return (
        <div className={classes.containerWrap}>
            <div className={classes.row}>
                <div className={classes.imageContainer}>
                    <img src={Logo} className={classes.image} alt="User" />
                </div>
                <div className={classes.post} onClick={showModalFunc}>
                    <label>Start a post</label>
                </div>
            </div>
            {showModal && <NewPostModal user={user} changeState={() =>hideModal()}/>}
        </div>
    );
}

export default CreatePost;