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

    reactToPost: function(data){
        return axios.post(this.baseURL+`post/react`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
    },

    createCommentOnPost: function(data){
        console.log(data)
        return axios.post(this.baseURL+`post/`+data.postId+"/comment",data.comment, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
    }
}

export default PostService;