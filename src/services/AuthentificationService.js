
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
    },
    getQRCode: function() {
        return axios.get(this.baseURL+`generate-qrcode`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },

    checkMFACode: function(code) {
        return axios.get(this.baseURL+`mfa/`+code, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },

    checkMFACodeUnauthorized: function(code,username) {
        return axios.get(this.baseURL+`mfa-login/`+code+'/'+username, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
    },

    checkMFAActive: function() {
        return axios.get(this.baseURL+`mfa/check`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },

    checkMFAActiveUnauthorized: function(token) {
        return axios.get(this.baseURL+`mfa/check`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    },

    resetMFAAuth: function() {
        const body={}
        return axios.put(this.baseURL+`mfa/reset`,body, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },
}

export default AuthentificationService;