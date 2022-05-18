import axios from 'axios'


const PostService = {

    baseURL : "http://localhost:8083/",

    save: function(data) {
        return axios.post(this.baseURL+`post`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })

    },
}

export default PostService;