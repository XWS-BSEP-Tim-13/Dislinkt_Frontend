import axios from 'axios';
// import store from '../store/store'

// const auth = store.getState().loginReducer

// console.log(auth);

export const axiosInstance = axios.create({ baseURL: 'https://localhost:8083/', headers: { Authorization: 'Bearer ' + '' } });