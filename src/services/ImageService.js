import axios from 'axios';
import store from '../store/store';

const ImageService = {

    baseURL : "https://localhost:8083/",

    uploadImage: function(image) {
        console.log('bbbbbb')
        let formData = new FormData();
	    formData.set('enctype', 'multipart/form-data');
	   // const filename = image.name;
	    formData.append('file', image);
	    formData.append('filename', "Image");
        console.log(formData)
        return axios.post(this.baseURL+`post/image`,formData, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })

    },


    getImage: function(imagePath) {
        return axios.get(this.baseURL+`post/image/`+imagePath, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                'Authorization': `${store.getState().loginReducer.token}`
            }
        })

    },
}

export default ImageService;