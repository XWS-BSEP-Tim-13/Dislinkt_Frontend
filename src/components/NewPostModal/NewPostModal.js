import React from 'react'
import classes from './NewPostModal.module.css';
import { faX,faXmark } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import User from '../../images/user-red.png'
import TextareaAutosize from 'react-textarea-autosize';
import ImageService from '../../services/ImageService';
import { useState,useRef } from 'react';
import PostService from '../../services/PostService';

const NewPostModal = (props) => {
    const [imageFile, setImageFile] = useState(null)
    const [content, setContent] = useState();
    const [imagePath, setImagePath] = useState('')
    const fileInput = useRef(document.createElement("input"));

    function uploadPhoto(event) {
        const files = event.target.files;
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => setImagePath(fileReader.result));
        fileReader.readAsDataURL(files[0]);
        setImageFile(event.target.files[0]);
    }
    function savePost(){
        console.log('Content'+content)
        if (imagePath == '') {
            savePostWithImage('')
        }
        else{
            ImageService.uploadImage(imageFile)
            .then((response) => {
                savePostWithImage(response.data)
            })
        }
    }
    function savePostWithImage(imagePath){
        const post={
            content : content,
            image : imagePath,
        }
        PostService.save(post).then(res=>{
            console.log(res.data)
        })
    }

    const onPickFile = () => {
        fileInput.current.click();
    }

    function getImage() {
        return imagePath;
    }
    function removeImage() {
        setImageFile(null)
        setImagePath('')
    }

    const handleChange = (e) => setContent(e.target.value);
  return (
    <div id={classes.app}>
        <div className={classes.modalOverlay} onClick={() => props.changeState()}></div>
        <div className={classes.modalInner}>
            <div className={classes.space}>
            <div className={classes.header}>
                <h3 className={classes.headerH3}>Create post</h3>
                <FontAwesomeIcon icon={faX} className={classes.icon} onClick={() => props.changeState()}/>
            </div>
            <div className={classes.user}>
                <div className={classes.imageContainer}>
                    <img src={User} className={classes.image} alt="Profile" />
                </div>
                <h6 className={classes.headerH3}>Stefan Ljubovic</h6>
            </div>
            <TextareaAutosize className={classes.textarea} placeholder="What do you want to talk about?" value={content} onChange={handleChange}/>
            <input type="file" onChange={uploadPhoto} accept="image/*" style={{ display: 'none' }} ref={fileInput} />
            {
            imagePath != '' && 
            <div className={classes.imgDiv}>
                <img src={getImage()} alt="#" className={classes.imgDiv}/>
                <button onClick={removeImage} className={classes.buttonImage}><FontAwesomeIcon icon={faXmark} className={classes.deleteImage}/></button>
             </div>
            }
            </div>
            <div className={classes.footer}>
                <FontAwesomeIcon icon={faImage} className={classes.pictureIcon} onClick={onPickFile}/>
                <button className={classes.postBtn} onClick={savePost}>Post</button>
            </div>
        </div>
    </div>
  )
}

export default NewPostModal