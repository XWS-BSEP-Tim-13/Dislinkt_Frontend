import axios from 'axios';


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
            }
        })

    },


    getImage: function(imagePath) {
        return axios.get(this.baseURL+`post/image/`+imagePath, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
            }
        })

    },
}

export default ImageService;