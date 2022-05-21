

import axios from 'axios';


const AuthentificationService = {

    baseURL : "http://localhost:8083/",

    login: function(data) {
        return axios.post(this.baseURL+`login`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })

    },
}

export default AuthentificationService;