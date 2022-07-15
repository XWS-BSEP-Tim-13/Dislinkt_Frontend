import axios from 'axios'
import store from '../store/store'

const PostService = {

    baseURL : "https://localhost:8083/",

    save: function(data) {
        console.log(data)
        return axios.post(this.baseURL+`create-post`,data, {
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
    },
    getMessagesForUser: function(){
        return axios.get(this.baseURL+`message` ,{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },
    getMessagesForTwoUsers: function(username){
        return axios.get(this.baseURL+`message/`+username ,{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },

    sendMessage: function(data){
        console.log(data)
        return axios.post(this.baseURL+`message`,data ,{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },

    events: function() {
        return axios.get(this.baseURL+`events`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },
}

export default PostService;