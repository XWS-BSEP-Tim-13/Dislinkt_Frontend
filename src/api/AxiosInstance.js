import axios from 'axios';

const token = localStorage.getItem("token-ls");

let instance;

if (!token)
    instance = axios.create({ baseURL: 'https://localhost:8083/' });
else
    instance = axios.create({ baseURL: 'https://localhost:8083/', headers: { Authorization: 'Bearer ' + localStorage.getItem("token-ls") } });

export const axiosInstance = instance;