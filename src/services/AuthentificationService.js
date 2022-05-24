

import axios from 'axios';


const AuthentificationService = {

    baseURL : "https://localhost:8083/",

    login: function(data) {
        return axios.post(this.baseURL+`login`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })

    },

    forgotPassword: function(email) {
        return axios.post(this.baseURL+`forgot-password/`+email, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })

    },

    changePassword: function(data){
        return axios.put(this.baseURL+`change-password`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
    }


}

export default AuthentificationService;