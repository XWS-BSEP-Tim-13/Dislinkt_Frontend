import axios from 'axios';

const UserService = {

    baseURL : "http://localhost:8083/",

    feed: function(data) {
        return axios.post(this.baseURL+`user/feed`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })

    },

    getByFilter: function(filter) {
        return axios.get(this.baseURL+`user/filter/`+filter, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
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
            },
        })
    },

    getAll: function(){
        return axios.get(this.baseURL+`user`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
    },



}
export default UserService;