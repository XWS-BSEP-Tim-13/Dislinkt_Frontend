import axios from 'axios';
import store from '../store/store';

const UserService = {

    baseURL : "https://localhost:8083/",

    feed: function(data) {
        return axios.post(this.baseURL+`user/feed`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `${store.getState().loginReducer.token}`
            }
        })

    },

    getByFilter: function(filter) {
        return axios.get(this.baseURL+`user/filter/`+filter, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    checkIfUserCanReadPosts: function(){
        const data ={
            "idFrom": "723b0cc3a34d25d8567f9f82",
            "idTo" : "723b0cc3a34d25d8567f9f83",
            "username" : "ljubo"
        }
        return axios.post(this.baseURL+`user/get-posts`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    deleteConnection: function(){
        const data ={
            "idFrom": "723b0cc3a34d25d8567f9f83",
            "idTo" : "723b0cc3a34d25d8567f9f82"
        }
        return axios.put(this.baseURL+`user/delete-connection`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    getAll: function(){
        return axios.get(this.baseURL+`user`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    filter: function(filter){
        return axios.get(this.baseURL+`user/filter/`+filter, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    getConnectionRequestsForUser(username){
        return axios.get(this.baseURL+`connection-request/by-user/`+username, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    checkIfUsersConnected(usernameFrom){
        return axios.get(this.baseURL+`conn/user/users-connected/`+usernameFrom, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    },

    changePrivacy(isPrivate){
        return axios.put(this.baseURL+`user/account-privacy/`+isPrivate,{}, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            },
        })
    }



}
export default UserService;