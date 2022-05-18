import axios from 'axios';


const ImageService = {

    baseURL : "http://localhost:8083/",

    uploadImage: function(image) {
        console.log('bbbbbb')
        let formData = new FormData();
	    formData.set('enctype', 'multipart/form-data');
	   // const filename = image.name;
	    formData.append('file', image);
	    formData.append('filename', "Image");
        console.log(formData)
        return axios.post(this.baseURL+`post/uploadImage`,formData, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
            }
        })

    },
}

export default ImageService;