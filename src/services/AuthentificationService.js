
import axios from 'axios';
import store from '../store/store'
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
    },

    sendApiToken: function(){
        return axios.get(this.baseURL+`send-token`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    }


}

export default AuthentificationService;