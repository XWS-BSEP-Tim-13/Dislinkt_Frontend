import axios from 'axios'
import store from '../store/store'

const CompanyService = {

    baseURL : "https://localhost:8083/",

    getAll: function() {
        return axios.get(this.baseURL+`company`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },
    getAllJobs: function() {
        return axios.get(this.baseURL+`company/job-offer`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })
    },
    saveJob: function(data){
        return axios.post(this.baseURL+`company/job-offer`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })

    },
    filterJobs: function(data){
        return axios.post(this.baseURL+`company/job-offer/filter`,data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${store.getState().loginReducer.token}`
            }
        })

    }
}

export default CompanyService