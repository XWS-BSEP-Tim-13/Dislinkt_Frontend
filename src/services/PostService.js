import axios from 'axios'
import store from '../store/store'

const PostService = {

    baseURL : "https://localhost:8083/",

    save: function(data) {
        return axios.post(this.baseURL+`post`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })

    },

    reactToPost: function(data){
        return axios.post(this.baseURL+`post/react`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },

    createCommentOnPost: function(data){
        console.log(data)
        return axios.post(this.baseURL+`post/`+data.postId+"/comment",data.comment, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    }
}

export default PostService;