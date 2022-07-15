import axios from 'axios';
import store from '../store/store';

const ConnectionService = {

    baseURL : "https://localhost:8083/conn/",

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

export default ConnectionService;